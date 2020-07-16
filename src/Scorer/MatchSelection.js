import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {Link} from 'react-router-dom';

import PreMatch from './PreMatch';

class MatchSelection extends Component {
   
       render () {
           return (
              <div>
               <div className="box">   
                    <div className="box_head">
                       345634 - South Africa Vs New Zealand (10 July 2020 @ 13:30)
                    </div><div className="box_body">
                       Match Id : 345634<br></br>
                       Series Id : 2323<br></br>
                       Series name : New Zealand tour of South Africa T20I Series 2020<br></br>
                       Description : 2nd T20I<br></br> 
                       Teams : South Africa Vs New Zealand<br></br>
                       Venue : National Stadium, Brazil<br></br>
                       Date & Time : 10 July 2020 @ 13:30
                   </div>
                   <div className="box_button">
                   <button type="button" className="Prematch_button"><Link to="/scorer/matchSelection/prematch" className="option">Pre-match Screen</Link></button>
                        <button type="button" className="Scoring_button">Scoring Screen</button>
                   </div> 
               </div>
              
                </div> 

               
               
           )
       }
     }
   
   
     export default MatchSelection;  