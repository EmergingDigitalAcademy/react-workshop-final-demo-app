import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PacmanLoader from 'react-spinners/PacmanLoader';
import BeerListItem from './BeerListItem';

import {
  FETCH_BEERS
} from '../redux/constants/beers';
import {
  START_DRINKING
} from '../redux/constants/drinking';

function BeerList() {
  // eslint-disable-next-line no-unused-vars
  const [beerError, setBeerError] = useState(false);

  const beers = useSelector(state => state.beers);
  const loading = useSelector(state => state.loading);
  const drinking = useSelector(state => state.drinking);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_BEERS });
  }, [dispatch]);

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
      <ul className={drinking ? 'drinking' : ''}>
        {beers.map(beer => (
          <BeerListItem key={beer.id} beer={beer}/>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: START_DRINKING })}>Start Drinking</button>
    </div>
  )
}

export default BeerList;
