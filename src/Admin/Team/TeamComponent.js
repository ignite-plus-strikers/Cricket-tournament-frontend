import React, { Component } from 'react'




class TeamComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            Team: [],
            message: null
        }
      /*  this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.refreshPlayers = this.refreshPlayers.bind(this)
        this.updatePlayerClicked = this.updatePlayerClicked.bind(this)
        this.addPlayerClicked = this.addPlayerClicked.bind(this)   */
    }
 
   /* componentDidMount() {
        this.refreshPlayers();   
    }
    */
 
   /* refreshPlayers() {
        PlayerDataService.retrieveAllPlayers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ players: response.data })
                }
            )
    }
 
    deletePlayerClicked(id) {
        PlayerDataService.deletePlayer(id)
            .then(
                response => {
                    this.setState({ message: `Delete of player with player ID ${id} Successful` })
                    this.refreshPlayers()
                }
            )
    
    } */
 
  /*  updatePlayerClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Team/${id}`)
    }
 
    addPlayerClicked() {
        this.props.history.push(`/admin/dashboard/Team/-1`)
    }
*/
    render() {
        return (
            <div>
                <div class="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Mastar</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button class="btn newBtn">New</button>
                     </div>
                    <table id="playerTable">
                        <tr>
                            
                            <th>Team Name</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Add Player </th>
                            <th>Show Player</th>
                            <th>Delete</th>
                            <th>Update</th>
                    
                        </tr>
                        <tbody>
                           
                                        <tr>
                                            
                                            <td>INDIA</td>
                                            <td>KARNATAKA</td>
                                            <td>INDIA</td>
                                           
                                            <td><button className="btn warning" >Add Player</button></td>
                                            <td><button className="btn updateBtn" >Show Player</button></td>
                                            <td><button className="btn warning" >Delete</button></td>
                                            <td><button className="btn updateBtn" >Update</button></td>
                                        </tr>
                                
                            
                        </tbody>
                    </table>
           
 
                </div>
   
           
            </div>
        )
    }
    
}
 
export default TeamComponent
