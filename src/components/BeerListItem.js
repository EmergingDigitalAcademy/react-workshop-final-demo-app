import { useState } from 'react';

function BeerListItem({ beer }) {
  const [highlighted, setHighlighted] = useState(false);
  return (
    <li onClick={() => setHighlighted(!highlighted)} style={{ color: highlighted ? 'red' : 'black' }}>
      {beer.name}
      {' '}
      <a href={`https://rotatoripa.co/beers/${beer.slug}`} target="_blank" rel="noreferrer">
        Go to beer
      </a>
    </li>
  )
}

export default BeerListItem;
