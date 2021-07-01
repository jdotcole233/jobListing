import './paginate.css';

const Paginate = ({ data, pagesize }) => {

    const numberOfTiles = data.length / pagesize;
    const tiles = [];
    const mult = 0;
    for (let i = 0; i < Math.ceil(numberOfTiles); i++) {
        tiles.push(mult + pagesize);
    }


    return (
      <div className="paginateTiles">
        <ul>
          {tiles.map((tile, key) => (
            <li id="">{key + 1}</li>
          ))}
        </ul>
      </div>
    );
}


export default Paginate;