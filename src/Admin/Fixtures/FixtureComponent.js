import React, { Component } from 'react'
import FixtureDataService from './Service/FixtureDataService';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';


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
        const columns = [{  
            Header: 'Team 1',
            accessor: 'team1',
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
            Header: 'Team 2',  
            accessor: 'team2',
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
            Header: 'Home town',  
            accessor: 'home_team',
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
            Header: 'Series',  
            accessor: 'series_name'  
            },{  
            Header: 'Match type',  
            accessor: 'match_type'  
            },{  
            Header: 'Description',  
            accessor: 'description'
         
            },{  
            Header: 'Match date & time',  
            accessor: 'fixture_date_time'
        
            },{  
            Header: 'GMT offset',  
            accessor: 'gmt_offset'
            
            },{  
            Header: 'Venue',  
            accessor: 'venue'
                
            },{  
            Header: 'Live coverage',  
            accessor: 'live_coverage'
                    
            },{  
            Header: 'Scorer',  
            accessor: 'scorer_name'
                        
            },{  
                Header: 'Delete',  
                Cell:props=>{
                    return(
                        <button onClick={() => this.deleteFixtureClicked(props.original.fixture_id)}>Delete</button>
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
                    <button  onClick={() => this.updateFixtureClicked(props.original.fixture_id)} >Update</button>
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
                    
                     <ReactTable
                     columns={columns}
                     data={this.state.fixtures}
                     filterable
                     defaultPageSize={5}
                     ></ReactTable>
 
                </div>
   
           
            </div>
        )
    }
    
}
 
export default FixtureComponent
