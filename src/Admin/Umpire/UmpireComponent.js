import React, { Component } from 'react'
import UmpireDataService from './Service/UmpireDataService';



class UmpireComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            umpires: [],
            message: null
        }
       // this.deleteUmpireClicked = this.deleteUmpireClicked.bind(this)
        this.refreshUmpires = this.refreshUmpires.bind(this)
        this.updateUmpireClicked = this.updateUmpireClicked.bind(this)
        this.addUmpireClicked = this.addUmpireClicked.bind(this)
    }

    componentDidMount() {
        this.refreshUmpires();
    }

    refreshUmpires() {
        UmpireDataService.retrieveAllUmpires()
            .then(
                response => {
                    console.log(response);
                    this.setState({ umpires: response.data })
                }
            )
    }

   /* deleteUmpireClicked(id,firstname) {
        UmpireDataService.deleteUmpire(id)
            .then(
                response => {
                    this.setState({ message: `Delete of umpire  ${firstname} is Successful` })
                    this.refreshUmpires()
                }
            )
    
    }*/

    updateUmpireClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Umpire/${id}`)
    }

    addUmpireClicked() {
        this.props.history.push(`/admin/dashboard/UmpireAddForm`)
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
                <a href="/admin/dashboard/UmpireDisplay"><div className="Selected_color">Umpire Master</div></a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.addUmpireClicked}>New</button>
                     </div>
                    <table id="playerTable">
                        <thead>
                        <tr>
                            
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>Nationality</th>
                            <th>Matches Umpired</th>
                            <th>Accuracy % </th>
                            <th>Update</th>
                    
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.umpires.map(
                                    umpire =>
                                        <tr key={umpire.umpire_id}>
                                            <td>{umpire.first_name}</td>
                                            <td>{umpire.middle_name}</td>
                                            <td>{umpire.last_name}</td>
                                            <td>{umpire.city}</td>
                                            <td>{umpire.nationality}</td>
                                            <td>{umpire.matches_umpired}</td>
                                            <td>{umpire.accuracy_percentage}</td>                  
                                            <td><button className="btn updateBtn" onClick={() => this.updateUmpireClicked(umpire.umpire_id)}>Update</button></td>
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

export default UmpireComponent