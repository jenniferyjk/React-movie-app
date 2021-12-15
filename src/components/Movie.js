import { Link } from 'react-router-dom';
import './Movie.css';

function Movie ({title,year,summary,poster,genres}) {
    return ( //react에서는 class대신 className을 사용한다
      <div className="movie">
          <Link to={ {pathname:'/movie-detail', state:{title,year,summary,poster,genres} } } > 
            <img src={poster} />
          </Link>
            <div className="movie__data">
          <Link to='/a'>
            <h3 className="movie__title" style={{backgroundColor:'red'}}>{title}</h3>
          </Link>  
            <h5 className="movie__year"> {year} </h5>
            <ul className="movie__genres"> 
              {/* 3항 연산자로 표현하기 */}
              {
                genres ?
                  genres.map((item,index) => {
                    return <li key = {index} > {item} </li>
                  })
                  :
                  "..."

              } 
              
              
            </ul>
            <p className="movie__summary"> {summary.slice(0,180)}... </p>
        </div>
      
      </div>
      
    
    );
}

export default Movie;