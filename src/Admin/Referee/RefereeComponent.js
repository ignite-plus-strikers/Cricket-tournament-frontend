import React, { Component } from 'react'
import RefereeDataService from './Service/RefereeDataService';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';



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
        const columns = [{  
            Header: 'First Name',
            accessor: 'first_name',
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
            Header: 'Middle Name',  
            accessor: 'middle_name',
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
            Header: 'Last Name',  
            accessor: 'last_name',
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
            Header: 'City',  
            accessor: 'city'  
            },{  
            Header: 'Nationality',  
            accessor: 'nationality'  
            },{  
            Header: 'Matches Refereed',  
            accessor: 'matches_refereed'
         
            },{  
            Header: 'Experience',  
            accessor: 'experience'
        
            },{  
            Header: 'Update',  
            Cell:props=>{
                return(
                    <button  onClick={() => this.updateRefereeClicked(props.original.referee_id)} >Update</button>
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
                     <ReactTable
                     columns={columns}
                     data={this.state.referees}
                     filterable
                     defaultPageSize={5}
                     ></ReactTable>

                </div>
   
           
            </div>
        )
    }
    
}

export default RefereeComponent