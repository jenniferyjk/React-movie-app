
import React from 'react';
import './Home.css'
import './About.css'

class Detail extends React.Component{
  
  componentDidMount(){
    console.log(this.props);
    const {location,history} = this.props;
    if (location.state===undefined) { //===는 완전히 동일하다 완전히 동일한 값을 갖는다는 의미
      history.push('/');
    }
  }

  render(){
    //console.log(props);

    const {location} = this.props; //먼저 location을 상수로 받고 return안쪽에서 받기

    if(location.state) {
    return (
      <div className="about__container">
        <h2> {location.state.title} </h2> 
      </div>
    );} else {
      return null;
    }
    //return은 데이터영역
    //return 안에서 if~else를 사용할 땐 3항 연산자 이용
    //혹은 return 바깥에서 감싸는 방법도 있다
  };
  
}

export default Detail;