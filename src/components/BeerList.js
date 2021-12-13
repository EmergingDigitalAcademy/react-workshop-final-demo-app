import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PacmanLoader from 'react-spinners/PacmanLoader';
import BeerListItem from './BeerListItem';

function BeerList() {
  const [beerError, setBeerError] = useState(false);
  const [loading, setLoading] = useState(true);

  // const [beers, setBeers] = useState([]);
  const beers = useSelector(state => state.beers);
  const dispatch = useDispatch();

  useEffect(() => {
    async function callApi() {
      try {
        // let beersFromTheApi = []
        const response = await axios.get('https://rotatoripa.co/api/beers?per_page=10&page=1');
        dispatch({ type: 'SET_BEERS', payload: response.data });

        const total = Number(response.headers.total);
        const perPage = Number(response.headers['per-page']);

        const pages = Math.ceil(total/perPage);

        for (let page = 2; page <= pages; page++) {
          const nextResponse = await axios.get(`https://rotatoripa.co/api/beers?per_page=10&page=${page}`);
          dispatch({ type: 'ADD_BEERS', payload: nextResponse.data });
        }

        // DISPATCH ALL THE BEERS
        // setBeers(beersFromTheApi);
        // dispatch({ type: 'SET_BEERS', payload: beersFromTheApi });
      } catch (error) {
        setBeerError(true);
      } finally {
        setLoading(false)
      }
    }

    callApi();

    // axios.get('https://some-bogus-thing-with-no-api.stuff/api/beers').then(
    //   (response) => {
    //     setBeers(response.data);
    //   }
    // ).catch((error) => {
    //   setBeerError(true);
    // }).finally(() => {
    //   setLoading(false);
    // })
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Beer List Loading</h1>
        <p>Please wait while the gremlin is getting s-faced.</p>
        <PacmanLoader color="cyan" loading={true} />
      </div>
    )
  }

  if (beerError) {
    return (
      <div>
        <h1>Beer List</h1>
        <p>You a big dummy. There an error thing. The Russians drank everything</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Beer List</h1>
      <ul>
        {beers.map(beer => (
          <BeerListItem key={beer.id} beer={beer}/>
        ))}
      </ul>
    </div>
  )
}

export default BeerList;
