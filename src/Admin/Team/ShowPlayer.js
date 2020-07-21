import React, { Component } from 'react'
import PlayerDataService from '../Player/Service/PlayerDataService';
import './Team.css';


class ShowPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null
        }
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.refreshPlayers = this.refreshPlayers.bind(this)
       
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

    deletePlayerClicked(id,firstname) {
        PlayerDataService.deletePlayer(id)
            .then(
                response => {
                    this.setState({ message: `Delete of player  ${firstname} is Successful` })
                    this.refreshPlayers()
                }
            )
    
    }



    render() {
        return (
            <div>
                <div className="sidenav">
                <a href="#about">Dashboard</a><hr></hr>
                <a href="#services">Fixtures</a><hr></hr>
                <a href="#clients">Series Mastar</a><hr></hr>
                <a href="#contact"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="#contact">Player Master</a><hr></hr>
                </div>
                <div className = "teamdetails">
                    <center>
                    <h2>Team Name</h2>
                    </center>
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                    <table id="teamTable">
                        <thead>
                        <tr> 
                            <th>Player Name</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                          
                                        <tr>
                                            <td>Arun Vignesh</td>
                                            <td><button className="btn warning">Delete</button></td> 
                                        </tr>
                                
                            
                        </tbody>
                    </table>
           

                </div>
   
           
            </div>
        )
    }
    
}

export default ShowPlayer