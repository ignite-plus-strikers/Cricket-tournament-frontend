import React, { Component } from 'react'
import SeriesDataService from './Service/SeriesDataService';

import './Series.css';

class SeriesComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            Series: [],
            message: null
        }
        this.deleteSeriesClicked = this.deleteSeriesClicked.bind(this)
        this.refreshSeries = this.refreshSeries.bind(this)
        this.updateSeriesClicked = this.updateSeriesClicked.bind(this)
        this.addSeriesClicked = this.addSeriesClicked.bind(this)  
        this.addTeamClicked=this.addTeamClicked.bind(this)
        this.showTeamClicked=this.showTeamClicked.bind(this)
    }
 
    componentDidMount() {
        this.refreshSeries();   
    }
    
    refreshSeries() {
        SeriesDataService.retrieveAllSeries()
            .then(
                response => {
                    console.log(response);
                    this.setState({ Series: response.data })
                }
            )
    }
 
    deleteSeriesClicked(id,series_short_name) {
        SeriesDataService.deleteSeries(id)
            .then(
                response => {
                    this.setState({ message: `Delete of series ${series_short_name} is Successful` })
                    this.refreshSeries()
                }
            )
    
    } 
 
    updateSeriesClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Series/${id}`)
    }
 
    addSeriesClicked() {
        this.props.history.push(`/admin/dashboard/SeriesAddForm`)
    }
    addTeamClicked(id) {
        this.props.history.push(`/admin/dashboard/SeriesAddTeam/${id}`)
    }
    showTeamClicked(id) {
        this.props.history.push(`/admin/dashboard/SeriesShowTeam/${id}`)
    }
    
    render() {
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
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button class="btn newBtn" onClick={this.addSeriesClicked}>New</button>
                     </div>
                    <table id="playerTable">
                        <tr>
                            
                            <th>SERIES NAME</th>
                            <th>SERIES SHORT NAME</th>
                            <th>SERIES TYPE</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>TOURNAMENT</th>
                            <th>HOST1</th>
                            <th>HOST2</th>
                            <th>HOST3</th>
                            <th>HOST4</th>
                            <th>POINTS TABLE</th>
                            <th>SERIES POINTS</th>
                            
                            <th>ADD TEAM</th>
                            <th>SHOW TEAM</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                        <tbody>
                        {
                                this.state.Series.map(
                                    series =>
                                        <tr key={series.series_id}>
                                            <td>{series.series_name}</td>
                                            <td>{series.series_short_name}</td>
                                            <td>{series.series_type}</td>
                                            <td>{series.series_start_date}</td>
                                            <td>{series.series_end_date}</td>
                                            <td>{series.tournament}</td>
                                            <td>{series.host_country[0]}</td>
                                            <td>{series.host_country[1]}</td>
                                            <td>{series.host_country[2]}</td>
                                            <td>{series.host_country[3]}</td>
                                            <td>{series.points_table_active.toString()}</td>
                                            <td>{series.series_points}</td>
                                            <td><button className="btn warning"onClick={() => this.addTeamClicked(series.series_id)}>Add</button></td>
                                            <td><button className="btn updateBtn"onClick={() => this.showTeamClicked(series.series_id)} >Show</button></td>
                                            <td><button className="btn warning" onClick={() => {if(window.confirm('Delete the series '+series.series_short_name+'?'))this.deleteSeriesClicked(series.series_id,series.series_short_name)}}>Delete</button></td>
                                            <td><button className="btn updateBtn" onClick={() => this.updateSeriesClicked(series.series_id)}>Update</button></td>
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
 
export default SeriesComponent
