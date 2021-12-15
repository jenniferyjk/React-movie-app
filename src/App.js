
import React from "react";
// import axios from "axios";
// import Movie from "./Movie"; // ./ 는 현재 디렉토리라는 뜻
import Home from "./routes/Home";
import {HashRouter, Route} from 'react-router-dom';
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css"
import Detail from './routes/Detail'
import A from "./components/A";


class App extends React.Component {
    render(){

      return (
        <HashRouter>
          <Navigation />
          <br/>
          <br/>
          <Route path="/" exact={true} component={Home} />
          <Route path="/About" component={About}/>
          <Route path="/movie-detail" component={Detail} />
          <Route path="/a" component={A} />
        </HashRouter>
      )
      
      
    }
  }
  

export default App;
