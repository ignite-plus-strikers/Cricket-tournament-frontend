import React, { Component } from 'react'
import PlayerDataService from './Service/PlayerDataService';



class ListPlayersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null
        }
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.refreshPlayers = this.refreshPlayers.bind(this)
        this.updatePlayerClicked = this.updatePlayerClicked.bind(this)
        this.addPlayerClicked = this.addPlayerClicked.bind(this)
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

    updatePlayerClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Player/${id}`)
    }

    addPlayerClicked() {
        this.props.history.push(`/admin/dashboard/PlayerAddForm`)
    }

    render() {
        return (
            <div>
                <div className="sidenav">
                <a href="#about">Dashboard</a><hr></hr>
                <a href="#services">Fixtures</a><hr></hr>
                <a href="#clients">Series Mastar</a><hr></hr>
                <a href="#contact">Team Master</a><hr></hr>
                <a href="#contact"><div className="Selected_color">Player Master</div></a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.addPlayerClicked}>New</button>
                     </div>
                    <table id="playerTable">
                        <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Date of Birth </th>
                            <th>Visual Classification</th>
                            <th>Nationality</th>
                            <th>Batting Style</th>
                            <th>Bowling Style </th>
                            <th>Player Role </th>
                            <th>Retired or Playing</th>
                            <th>Delete</th>
                            <th>Update</th>
                    
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.players.map(
                                    player =>
                                        <tr key={player.player_id}>
                                            <td>{player.p_firstname}</td>
                                            <td>{player.p_lastname}</td>
                                            <td>{player.p_gender}</td>
                                            <td>{player.p_dob}</td>
                                            <td>{player.p_category}</td>
                                            <td>{player.p_nationality}</td>
                                            <td>{player.p_batting_style}</td>
                                            <td>{player.p_bowling_style}</td>
                                            <td>{player.player_role}</td>
                                            <td>{player.retired_or_playing}</td>
                                            <td><button className="btn warning" onClick={() => {if(window.confirm('Delete the player '+player.p_firstname+'?'))this.deletePlayerClicked(player.player_id,player.p_firstname)}}>Delete</button></td>
                                            <td><button className="btn updateBtn" onClick={() => this.updatePlayerClicked(player.player_id)}>Update</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
           

                </div>
   
           
            </div>
        )
    }
    
}

export default ListPlayersComponent