import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"
import {Cookies} from 'react-cookie';

class Navigation extends React.Component {

  cookies = new Cookies();

  state= {
    login:this.cookies.get("id"),
  }

  loginBtnClick=()=>{
    window.open("login.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

  }

  logoutBtnClick=()=>{
    this.cookies.remove("id");
    window.location.reload();
  }

  render () { //render는 클래스 안에서 작동
    return (

      <div className="nav">
        <div>
          {this.state.login ? 
            <div>{this.state.login}님 환영합니다!<button onClick={this.logoutBtnClick}>Logout</button> </div>
            : <button onClick={this.loginBtnClick}>Login</button>} 
        </div>
        <br/>

        <Link to="/">Home</Link>
        <Link to={ {pathname:'/about', state:{fromNavigation:true} } }>About</Link>
        
      </div>
    );
  };

}

export default Navigation;