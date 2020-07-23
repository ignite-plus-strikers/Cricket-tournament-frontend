import React, { Component } from 'react'




class SeriesComponent extends Component {
 
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
                            
                            <th>NAME</th>
                            <th>SERIES SHORT NAME</th>
                            <th>SERIES TYPE</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>HOST1</th>
                            <th>HOST2</th>
                            <th>HOST3</th>
                            <th>HOST4</th>
                            <th>POINT TABLE</th>
                            <th>SERIES POINT</th>
                            
                            <th>ADD TEAM</th>
                            <th>SHOW TEAM</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                        <tbody>
                           
                                        <tr>
                                            
                                            
                                            <td>West Indies tour of Pakistan T20I series 2020</td>
                                            <td>PakWIT20ls18</td>
                                            <td>T20I</td>
                                            <td>2020-04-01</td>
                                            <td>2020-04-03</td>
                                            
                                            <td>PK</td>
                                            
                                            <td>UNKWN</td>
                                            <td>UNKWN</td>
                                            <td>UNKWN</td>
                                            <td>check box</td>
                                            <td>0</td>
                                           
                                            <td><button className="btn warning" >Add Team</button></td>
                                            <td><button className="btn warning" >Show Team</button></td>
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
 
export default SeriesComponent
