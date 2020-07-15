import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


class HeaderComponent extends Component{
 
   render(){  
    return (
     <div className="headerStyle">
        <div className="container">
            <button type="button" className="headerButton">STRIKERS</button> 
        </div>
     </div>
    );
  }
}
  export default HeaderComponent;