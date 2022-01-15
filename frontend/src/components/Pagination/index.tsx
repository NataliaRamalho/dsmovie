import { MoviePage } from 'types/Movie';
import {ReactComponent as Arrow} from '../../assets/img/arrow.svg'
import './styles.css'

type Params = {
  page: MoviePage;
  onChange: Function;
}

function Pagination({page, onChange}: Params) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={page.first}>
          <Arrow className="dsmovie-flip-horizontal" onClick={()=> onChange(page.number-1)}/>
        </button>
        <p>{`${page.number+1} de ${page.totalPages}`}</p>
        <button className="dsmovie-pagination-button" disabled={page.last} onClick={()=> onChange(page.number+1)}>
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
