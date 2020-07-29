import React, { Component } from 'react'
import FixtureDataService from './Service/FixtureDataService';



class FixtureComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            fixtures: [],
            message: null
        }
        this.deleteFixtureClicked = this.deleteFixtureClicked.bind(this)
        this.refreshFixtures = this.refreshFixtures.bind(this)
        this.updateFixtureClicked = this.updateFixtureClicked.bind(this)
        this.addFixtureClicked = this.addFixtureClicked.bind(this)   
    }
 
    componentDidMount() {
        this.refreshFixtures();   
    }
    
 
    refreshFixtures() {
        FixtureDataService.retrieveAllFixtures()
            .then(
                response => {
                    console.log(response);
                    this.setState({ fixtures: response.data })
                }
            )
    }
 
    deleteFixtureClicked(id) {
        FixtureDataService.deleteFixture(id)
            .then(
                response => {
                    this.setState({ message: `Delete of fixture Successful` })
                    this.refreshFixtures()
                }
            )
    
    } 
 
    updateFixtureClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Fixture/${id}`)
    }
 
    addFixtureClicked() {
        this.props.history.push(`/admin/dashboard/FixtureAddForm`)
    }
    render() {
        return (
            <div>
                <div class="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay"><div className="Selected_color">Fixtures</div></a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button class="btn newBtn" onClick={this.addFixtureClicked}>New</button>
                     </div>
                    <table id="playerTable">
                        <tr>
                            
                            <th>TEAM 1</th>
                            <th>TEAM 2</th>
                            <th>HOME TOWN</th>
                            <th>SERIES</th>
                            <th>MATCH TYPE</th>
                            <th>DESCRIPTION</th>
                            <th>MATCH DATE/TIME</th>
                            <th>GMT OFFSET</th>
                            <th>VENUE</th>
                            <th>LIVE COVERAGE</th>
                            <th>SCORER</th>
                            <th>DELETE</th>
                            <th>UPDATE</th>
                        
                        </tr>
                        <tbody>
                        {
                                this.state.fixtures.map(
                                    fixture =>
                                        <tr key={fixture.fixture_id}>
                                            <td>{fixture.team1}</td>
                                            <td>{fixture.team2}</td>
                                            <td>{fixture.home_team}</td>
                                            <td>{fixture.series_name}</td>
                                            <td>{fixture.match_type}</td>
                                            <td>{fixture.description}</td>
                                            <td>{fixture.fixture_date_time}</td>
                                            <td>{fixture.gmt_offset}</td>
                                            <td>{fixture.venue}</td>
                                            <td>{fixture.live_coverage}</td>
                                            <td>{fixture.scorer_name}</td>
                                            <td><button className="btn warning" onClick={() => {if(window.confirm('Delete the fixture?'))this.deleteFixtureClicked(fixture.fixture_id)}}>Delete</button></td>
                                            <td><button className="btn updateBtn" onClick={() => this.updateFixtureClicked(fixture.fixture_id)}>Update</button></td>
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
 
export default FixtureComponent
