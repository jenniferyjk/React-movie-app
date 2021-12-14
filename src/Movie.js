import './Movie.css';

function Movie ({title,year,summary,poster,genres}) {
    return ( //react에서는 class대신 className을 사용한다
      <div className="movie"> 
          <img src={poster} />
          <div className="movie__data">
          <h3 className="movie__title" style={{backgroundColor:'red'}}>{title}</h3>
          <h5 className="movie__year"> {year} </h5>
          <ul className="movie__genres">
            
            
          </ul>
          <h5 className="movie__summary"> {summary} </h5>
      </div>
      </div>
      
    
    );
}

export default Movie;