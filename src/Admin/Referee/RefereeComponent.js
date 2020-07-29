import React, { Component } from 'react'
import RefereeDataService from './Service/RefereeDataService';



class RefereeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            referees: [],
            message: null
        }
      
        this.refreshReferees = this.refreshReferees.bind(this)
        this.updateRefereeClicked = this.updateRefereeClicked.bind(this)
        this.addRefereeClicked = this.addRefereeClicked.bind(this)
    }

    componentDidMount() {
        this.refreshReferees();
    }

    refreshReferees() {
        RefereeDataService.retrieveAllReferees()
            .then(
                response => {
                    console.log(response);
                    this.setState({ referees: response.data })
                }
            )
    }

   
    updateRefereeClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Referee/${id}`)
    }

    addRefereeClicked() {
        this.props.history.push(`/admin/dashboard/RefereeAddForm`)
    }

    render() {
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay"><div className="Selected_color">Match Referee</div></a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.addRefereeClicked}>New</button>
                     </div>
                    <table id="playerTable">
                        <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>Nationality</th>
                            <th>Matches Refereed</th>
                            <th>Experience</th>
                            <th>Update</th>
                    
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.referees.map(
                                    referee =>
                                        <tr key={referee.referee_id}>
                                            <td>{referee.first_name}</td>
                                            <td>{referee.middle_name}</td>
                                            <td>{referee.last_name}</td>
                                            <td>{referee.city}</td>
                                            <td>{referee.nationality}</td>
                                            <td>{referee.matches_refereed}</td>
                                            <td>{referee.experience}</td>                  
                                            <td><button className="btn updateBtn" onClick={() => this.updateRefereeClicked(referee.referee_id)}>Update</button></td>
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

export default RefereeComponent