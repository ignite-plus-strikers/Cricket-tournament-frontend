import React, { Component } from 'react'
import TeamDataService from './Service/TeamDataService';



class TeamComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            teams: [],
            message: null
        }
        this.deleteTeamClicked = this.deleteTeamClicked.bind(this)
        this.refreshTeams = this.refreshTeams.bind(this)
        this.updateTeamClicked = this.updateTeamClicked.bind(this)
        this.addTeamClicked = this.addTeamClicked.bind(this)  
        this.addPlayerClicked=this.addPlayerClicked.bind(this)
        this.showPlayerClicked=this.showPlayerClicked.bind(this)
    }
 
    componentDidMount() {
        this.refreshTeams();   
    }
    
 
    refreshTeams() {
        TeamDataService.retrieveAllTeams()
            .then(
                response => {
                    console.log(response);
                    this.setState({ teams: response.data })
                }
            )
    }
 
    deleteTeamClicked(id,teamname) {
        TeamDataService.deleteTeam(id)
            .then(
                response => {
                    this.setState({ message: `Delete of team ${teamname} is Successful` })
                    this.refreshTeams()
                }
            )
    
    } 
 
    updateTeamClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Team/${id}`)
    }
 
    addTeamClicked() {
        this.props.history.push(`/admin/dashboard/TeamAddForm`)
    }
    addPlayerClicked(id) {
        this.props.history.push(`/admin/dashboard/TeamAddPlayer/${id}`)
    }
    showPlayerClicked(id) {
        this.props.history.push(`/admin/dashboard/TeamShowPlayer/${id}`)
    }
    

    render() {
        return (
            <div>
                <div class="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.addTeamClicked}>New</button>
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
                        {
                                this.state.teams.map(
                                    team =>
                                        <tr key={team.teamId}>
                                            <td>{team.tname}</td>
                                            <td>{team.tstate}</td>
                                            <td>{team.tcountry}</td>
                                            <td><button className="btn warning"onClick={() => this.addPlayerClicked(team.teamId)}>Add Player</button></td>
                                            <td><button className="btn updateBtn"onClick={() => this.showPlayerClicked(team.teamId)} >Show Player</button></td>
                                            <td><button className="btn warning" onClick={() => {if(window.confirm('Delete the team '+team.tname+'?'))this.deleteTeamClicked(team.teamId,team.tname)}}>Delete</button></td>
                                            <td><button className="btn updateBtn" onClick={() => this.updateTeamClicked(team.teamId)}>Update</button></td>
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
 
export default TeamComponent
