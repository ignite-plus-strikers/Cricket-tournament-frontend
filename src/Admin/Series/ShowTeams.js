import React, { Component } from 'react'




class ShowTeams extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            Series: [],
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
                <a href="/admin/dashboard/SeriesDisplay"><div className="Selected_color">Series Master</div></a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button class="btn newBtn">New</button>
                     </div>
                    <table id="playerTable">
                        <tr>
                            
                            <th>TEAM NAME</th>
                            <th>DELETE</th>
                        </tr>
                        <tbody>
                           
                                        <tr>
                                            
                                            
                                            <td>West Indies</td>
                                            
                                            <td><button className="btn warning" >Delete</button></td>
                                        </tr>
                                        <tr>
                                            
                                            
                                            <td>Pakistan</td>
                                            
                                            <td><button className="btn warning" >Delete</button></td>
                                        </tr>
                                
                            
                        </tbody>
                    </table>
           
 
                </div>
   
           
            </div>
        )
    }
    
}
 
export default ShowTeams