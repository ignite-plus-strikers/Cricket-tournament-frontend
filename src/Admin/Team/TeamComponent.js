import React, { Component } from 'react'
import TeamDataService from './Service/TeamDataService';

import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';

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
        const columns = [{  
            Header: 'Team name',
            accessor: 'tname',
            filterMethod: (filter, row) => {
                var v = row[filter.id]
                  .toString()
                  .toUpperCase()
                  .search(filter.value.toUpperCase());
                // row[filter.id].toString().startsWith(filter.value)
                if (v >= 0) {
                  return true;
                } else return false;
              }
            },{  
            Header: 'State',  
            accessor: 'tstate',
            filterMethod: (filter, row) => {
                var v = row[filter.id]
                  .toString()
                  .toUpperCase()
                  .search(filter.value.toUpperCase());
                // row[filter.id].toString().startsWith(filter.value)
                if (v >= 0) {
                  return true;
                } else return false;
              } 
            },{  
            Header: 'Country',  
            accessor: 'tcountry',
            filterMethod: (filter, row) => {
                var v = row[filter.id]
                  .toString()
                  .toUpperCase()
                  .search(filter.value.toUpperCase());
                // row[filter.id].toString().startsWith(filter.value)
                if (v >= 0) {
                  return true;
                } else return false;
              }  
            },
                
           {  
                Header: 'Add player',  
                Cell:props=>{
                    return(
                        <button onClick={() =>  this.addPlayerClicked(props.original.team_id)}>Add</button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                width:100,
                minWidth:100,
                maxWidth:100
            },{  
            Header: 'Show player',  
            Cell:props=>{
                return(
                    <button  onClick={() =>  this.showPlayerClicked(props.original.team_id)} >Show</button>
            )
    
            } ,
            sortable:false,
            filterable:false,
            width:100,
            minWidth:100,
            maxWidth:100
            },{  
                Header: 'Delete',  
                Cell:props=>{
                    return(
                        <button onClick={() => this.deleteTeamClicked(props.original.team_id,props.original.tname)}>Delete</button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                width:100,
                minWidth:100,
                maxWidth:100
            },{  
                Header: 'Update',  
                Cell:props=>{
                    return(
                        <button  onClick={() => this.updateTeamClicked(props.original.team_id)} >Update</button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                width:100,
                minWidth:100,
                maxWidth:100
                }
        ]  
        return (
            <div>
                <div class="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.addTeamClicked}>New</button>
                     </div>
                     <ReactTable
                     columns={columns}
                     data={this.state.teams}
                     filterable
                     defaultPageSize={5}
                     ></ReactTable>
                </div>
   
           
            </div>
        )
    }
    
}
 
export default TeamComponent
