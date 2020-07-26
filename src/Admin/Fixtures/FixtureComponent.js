import React, { Component } from 'react'




class FixtureComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            Fixture: [],
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
                <a href="/admin/dashboard/FixtureDisplay"><div className="Selected_color">Fixtures</div></a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
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
                            
                            <th>TEAM A</th>
                            <th>TEAM B</th>
                            <th>HOME TOWN</th>
                            <th>SERIES</th>
                            <th>MATCH TYPE</th>
                            <th>DESCRIPTION</th>
                            <th>MATCH DATE/TIME</th>
                            <th>VENUE</th>
                            
                            <th>LIVE COVERAGE</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        
                        </tr>
                        <tbody>
                           
                                        <tr>
                                            
                                            
                                            <td>West Indies </td>
                                            <td>Pakistan</td>
                                            <td>Pakistan</td>
                                            <td>West Indies tour of Pakistan T20I series 2020</td>
                                            <td>T20I</td>
                                            <td>3rd T20I</td>
                                            <td>2020-04-03 20:00</td>
                                            <td>NationalStadium(Karachi)</td>
                                            <td>Y</td>
                                            
                                           
                                           
                                            <td><button className="btn warning" >Update</button></td>
                                            <td><button className="btn warning" >Delete</button></td>
                                        </tr>
                                
                            
                        </tbody>
                    </table>
           
 
                </div>
   
           
            </div>
        )
    }
    
}
 
export default FixtureComponent
