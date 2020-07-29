import React, { Component } from 'react'
import SeriesDataService from './Service/SeriesDataService';
import './Series.css';


class ShowTeams extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            series_id: this.props.match.params.id,
            series_teams: [],
            series:[],
            message: null,
            series_name:""
        }
        this.deleteTeamClicked = this.deleteTeamClicked.bind(this)
        this.refreshSeriesTeams = this.refreshSeriesTeams.bind(this)
        this.getSeriesName=this.getSeriesName.bind(this)
    }
 
    componentDidMount() {
        this.refreshSeriesTeams();
        this.getSeriesName();
    }
    getSeriesName(){
        SeriesDataService.retrieveAllSeries()
        .then(
            response => {
                console.log(response);
                this.setState({ series : response.data })
            }
        )
        

    }

    refreshSeriesTeams() {
        SeriesDataService.retrieveAllTeamsInASeries(this.state.series_id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ series_teams: response.data })
                }
            )
    }

    deleteTeamClicked(seriesid,teamid,teamname) {
        SeriesDataService.deleteTeam(seriesid,teamid)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Delete of team  ${teamname} is Successful` })
                    this.refreshSeriesTeams()
                }
            )
    
    }


    render() {
        let seriesID=this.state.series_id
        let seriesname=this.state.series_name
        return (
            <div>
                <div class="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay"><div className="Selected_color">Series Master</div></a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                {this.state.series.map(s =>{
                    if(s.series_id==seriesID){
                        seriesname=s.series_name
                        }
                }
                   
                )
                }
                <center>
                    <h2>{seriesname}</h2>
                    <br/><br/>
                    {this.state.message && <div class="alert success delTeam">{this.state.message}</div>}
                </center>
                <div className = "seriesdetails">
               
                    <table id="seriesTable">
                        <thead>
                        <tr>
                            
                            <th>TEAM NAME</th>
                            <th>DELETE</th>
                        </tr>
                        </thead>
                        <tbody>
                          
                          {this.state.series_teams.map(st=>
                      
                      <tr>
                          <td>{st.team_name}</td>
                          <td><button className="btn warning" onClick={() => {if(window.confirm('Delete the team '+st.team_name+'?'))this.deleteTeamClicked(st.series_id,st.team_id,st.team_name)}}>Delete</button></td>
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
 
export default ShowTeams