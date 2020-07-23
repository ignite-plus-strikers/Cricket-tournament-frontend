import React, { Component } from 'react'
import './Team.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../App.css';
import PlayerDataService from '../../Admin/Player/Service/PlayerDataService';



class AddPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null,
            selected:'',
            playerid:''
        }
        this.refreshPlayers = this.refreshPlayers.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {
        this.refreshPlayers();
    }

    refreshPlayers() {
        PlayerDataService.retrieveAllPlayers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ players: response.data })
                }
            )
    }
    onSubmit(values){
        this.setState({playerid:values.selected})
        console.log(values);
    }

    
  handleChange = inputvalue=> {
    
    this.setState({
      selected:inputvalue
    });
  };



    render() {
        let selected=this.state.selected
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                <center>
                    <h2>Team Name</h2>
                </center>
               <div className="addPlayerForm">
                   <Formik
                   initialValues={{selected}}
                   onSubmit={this.onSubmit}
                    >
                       <Form>
                           <br/><br/>
                                <label>Select Player : </label>
                                <Field as="select" name="selected">
                                {
                                this.state.players.map(
                                    player =>
                                    <option value={player.playerId}>{player.firstName} {player.lastName}</option>
                                            
                                )
                            }
                                    
                                </Field><br/><br/><br/>  
                                <button className="btn warning marginsave" type="submit">Add</button>
                                <div>{this.state.playerid}</div>
                            
                       </Form>
                   </Formik>
               </div>
   
           
            </div>
        )
    }
    
}

export default AddPlayer