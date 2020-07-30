import React, { Component } from 'react'
import SeriesDataService from './Service/SeriesDataService';
import './Series.css';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';

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

        const columns = [{  
            Header: 'Team name',
            accessor: 'team_name',
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
                Header: 'Delete',  
                Cell:props=>{
                    return(
                        <button onClick={() => this.deletePlayerClicked(props.original.series_id,props.original.team_id,props.original.team_name)}>Delete</button>
                )
        
                } ,
                sortable:false,
                filterable:false
                
            }
        ]  
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
               
                <ReactTable
                     columns={columns}
                     data={this.state.series_teams}
                     filterable
                     defaultPageSize={5}
                     ></ReactTable>

           
 
                </div>
   
           
            </div>
        )
    }
    
}
 
export default ShowTeams