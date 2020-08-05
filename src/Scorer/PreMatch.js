import React , { Component } from 'react';
import '../App.css';
import ReactDOM from 'react-dom';


class PreMatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            mob: 0,
            order: "Milk Rs.10",
            qty: 0,
            msg: '',
            total: 0
                    
       };
        
    }
   
   
    
   
       render () {
           return (
               <div style={{marginLeft:220}}>
                        <div className="matchDetails">
                            <p>South Africa Vs New Zealand</p><p>National Stadium, Brazil</p><p>12 July 2020 @ 13:30</p>

                        </div>
               
               <div className="order_form">
                  
                    <form onSubmit={this.handleSubmit}>
                    <p>Toss :</p>
                         <input type="radio" id="SA" name="toss" value="South Africa" />
                         <label for="SA">South Africa</label>
                         <input type="radio" id="NZ" name="toss" value="New Zealand" />
                         <label for="NZ">New Zealand</label><br></br><br></br>
                       <label>Toss Decision : </label>
                       <select value={this.state.order} onChange={this.handleChangeOrder}>
                            <option value="Batting">Batting</option>
                            <option value="Bowling">Bowling</option>
                       </select><br></br>
                       <p>Match Officials : </p>
                       <label>On-Field Umpire 1 : </label>
                       <select value={this.state.order} onChange={this.handleChangeOrder}>
                            <option value="Daniel">Daniel</option>
                            <option value="Murali">Murali</option>
                       </select><br></br><br></br>
                       <label>On-Field Umpire 2 : </label>
                       <select value={this.state.order} onChange={this.handleChangeOrder}>
                            <option value="Sanjay">Sanjay</option>
                            <option value="Manoj">Manoj</option>
                       </select><br></br><br></br>
                       <label>Third Umpire : </label>
                       <select value={this.state.order} onChange={this.handleChangeOrder}>
                            <option value="Vinod">Vinod</option>
                            <option value="Baskar">Baskar</option>
                       </select><br></br><br></br>
                       <label>Match Refree : </label>
                       <select value={this.state.order} onChange={this.handleChangeOrder}>
                            <option value="Ratnam">Ratnam</option>
                            <option value="Dinesh">Dinesh</option>
                       </select><br></br><br></br>
                        <input type="checkbox" id="commentary" name="commentary" value="commentary" />
                         <label for="commentary">Default Commentary</label><br></br><br></br>
                         <input type="checkbox" id="udrs" name="udrs" value="udrs" />
                         <label for="udrs">UDRS</label><br></br><br></br>
                      
                       <input type="submit" value="Submit"></input> 
                 </form>
               </div>
               </div>
           )
       }
     }

  export default PreMatch;  