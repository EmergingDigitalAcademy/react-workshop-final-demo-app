import axios from 'axios';
import { useState, useEffect } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import BeerListItem from './BeerListItem';

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [beerError, setBeerError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function callApi() {
      try {
        let beersFromTheApi = []
        const response = await axios.get('https://rotatoripa.co/api/beers?per_page=10&page=1');
        beersFromTheApi = response.data;

        const total = Number(response.headers.total);
        const perPage = Number(response.headers['per-page']);

        const pages = Math.ceil(total/perPage);

        console.log(pages);

        for (let page = 2; page <= pages; page++) {
          const nextResponse = await axios.get(`https://rotatoripa.co/api/beers?per_page=10&page=${page}`);
          beersFromTheApi = [...beersFromTheApi, ...nextResponse.data];
        }

        setBeers(beersFromTheApi);
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
