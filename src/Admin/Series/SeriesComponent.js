import React, { Component } from 'react'
import SeriesDataService from './Service/SeriesDataService';

import './Series.css';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';

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
        const columns = [{  
            Header: 'Series name',
            accessor: 'series_name',
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
            Header: 'Series short name',  
            accessor: 'series_short_name',
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
            Header: 'Series type',  
            accessor: 'series_type',
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
            Header: 'Start date',  
            accessor: 'series_start_date'  
            },{  
            Header: 'End date',  
            accessor: 'series_end_date'  
            },{  
            Header: 'Tournament',  
            accessor: 'tournament'
         
            },{  
            Header: 'Host 1',  
            accessor: 'host_country[0]'
        
            },{  
            Header: 'Host 2 ',  
            accessor: 'host_country[1]'
            
            },{  
            Header: 'Host 3',  
            accessor: 'host_country[2]'
                
            },{  
            Header: 'Host 4',  
            accessor: 'host_country[3]'
                    
            },{  
            Header: 'Points table',  
            accessor: 'points_table_active'.toString()
                        
            },
            {  
            Header: 'Series points',  
            accessor: 'series_points'
                            
            },{  
                Header: 'Add team',  
                Cell:props=>{
                    return(
                        <button onClick={() =>  this.addTeamClicked(props.original.series_id)}>Add</button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                width:100,
                minWidth:100,
                maxWidth:100
            },{  
            Header: 'Show team',  
            Cell:props=>{
                return(
                    <button  onClick={() =>  this.showTeamClicked(props.original.series_id)} >Show</button>
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
                        <button onClick={() => this.deleteSeriesClicked(props.original.series_id,props.original.series_short_name)}>Delete</button>
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
                        <button  onClick={() => this.updateSeriesClicked(props.original.series_id)} >Update</button>
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
                   
                     <ReactTable
                     columns={columns}
                     data={this.state.Series}
                     filterable
                     defaultPageSize={5}
                     ></ReactTable>
 
 
                </div>
   
           
            </div>
        )
    }
    
}
 
export default SeriesComponent
