import React, { Component } from 'react'
import PlayerDataService from '../Player/Service/PlayerDataService';
import './Team.css';
import TeamDataService from './Service/TeamDataService';


class ShowPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            team_id: this.props.match.params.id,
            teamplayers: [],
            teams:[],
            message: null,
            tname:""
        }
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.refreshTeamPlayers = this.refreshTeamPlayers.bind(this)
        this.getTeamName=this.getTeamName.bind(this)
       
    }

    componentDidMount() {
        this.refreshTeamPlayers();
        this.getTeamName();
    }
    getTeamName(){
        TeamDataService.retrieveAllTeams()
        .then(
            response => {
                console.log(response);
                this.setState({ teams : response.data })
            }
        )
        

    }

    refreshTeamPlayers() {
        TeamDataService.retrieveAllTeamPlayers(this.state.team_id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ teamplayers: response.data })
                }
            )
    }

    deletePlayerClicked(teamid,playerid,firstname) {
        TeamDataService.deletePlayer(teamid,playerid)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Delete of player  ${firstname} is Successful` })
                    this.refreshTeamPlayers()
                }
            )
    
    }



    render() {
        let teamID=this.state.team_id
        let teamname=this.state.tname
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                {this.state.teams.map(team =>{
                    if(team.team_id==teamID){
                        teamname=team.tname
                        }
                }
                   
                )
                }
                <center>
                    <h2>{teamname}</h2>
                    <br/><br/>
                    {this.state.message && <div class="alert success">{this.state.message}</div>}
                </center>
                <div className = "teamdetails">
                    
                
                    <table id="teamTable">
                        <thead>
                        <tr> 
                            <th>Player Name</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                          
                        {this.state.teamplayers.map(tp =>
                    
                    <tr>
                        <td>{tp.player_first_name} {tp.player_last_name} {tp.player_initials}</td>
                        <td><button className="btn warning" onClick={() => {if(window.confirm('Delete the player '+tp.player_first_name+'?'))this.deletePlayerClicked(tp.team_id,tp.player_id,tp.player_first_name)}}>Delete</button></td>
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

export default ShowPlayer