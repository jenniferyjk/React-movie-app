import React from 'react';
import axios from 'axios';
import './Home.css';
import Movie from '../components/Movie'



class Home extends React.Component{

  state={
    isLoading:true,
    movies:[],
  };

  //화살표 함수로 상태(state)값에 접근 가능
  //새로운 메서드 만들기
  getMovies= async ()=>{
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
    console.log(movies.data.data.movies);
    this.setState({
      movies:movies.data.data.movies,
      isLoading:false,
    });
  }


 componentDidMount() {
   /* setTimeout(()=>{
     this.setState({
       isLoading:false,
     });
   },6000); */

   // axios로 getmovies 메서드 호출
   this.getMovies();
 }


  render(){
    
    return (
        <section className="container"> 
          {this.state.isLoading ? 
          <div className="loader">
            <span className="loader__text">
              'Loading...'
            </span>
          </div> 
          : (
            <div className="movies">
              {this.state.movies.map((item,index)=>{
            //console.log(item);
            return < Movie key={index} 
            genres={item.genres} year={item.year} summary={item.summary} 
            title={item.title} poster={item.medium_cover_image}/>
          })}
            </div>
          )
            
             }
        </section>
      );
    }

}

export default Home;