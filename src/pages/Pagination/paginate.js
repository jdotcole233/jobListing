import { useState } from 'react';
import './paginate.css'; 

const Paginate = ({ data, pagesize }) => {

    const [tilePosition, setTilePosition] = useState(pagesize)

    const numberOfTiles = data.length / pagesize;
    const tiles = [];
    let mult = 0;
    for (let i = 0; i < Math.ceil(numberOfTiles); i++) {
        mult += pagesize;
        tiles.push(mult);
    }

    return (
      <div className="paginateTiles">
        <ul>
          {tiles.map((tile, key) => (
            <li key={key} onClick={() => setTilePosition(tile)}>
              {key + 1}
            </li>
          ))}
        </ul>
      </div>
    );
}


export default Paginate;