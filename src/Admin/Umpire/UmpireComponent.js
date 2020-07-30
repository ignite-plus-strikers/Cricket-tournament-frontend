import React, { Component } from 'react'
import UmpireDataService from './Service/UmpireDataService';

import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css'




class UmpireComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            umpires: [],
            message: null
        }
     
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

   

    updateUmpireClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Umpire/${id}`)
    }

    addUmpireClicked() {
        this.props.history.push(`/admin/dashboard/UmpireAddForm`)
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
          }, Filter: ({filter, onChange}) => (
            <input
            placeholder="Search"
              onChange={event => onChange(event.target.value)}
              value={filter ? filter.value : ''}
              style={{
                width: '100%',
                backgroundColor: '#DCDCDC',
                color: 'black',
              }}
            />
          )    
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
          } , Filter: ({filter, onChange}) => (
            <input
            placeholder="Search"
              onChange={event => onChange(event.target.value)}
              value={filter ? filter.value : ''}
              style={{
                width: '100%',
                backgroundColor: '#DCDCDC',
                color: 'black',
              }}
            />
          )     
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
          }, Filter: ({filter, onChange}) => (
            <input
            placeholder="Search"
              onChange={event => onChange(event.target.value)}
              value={filter ? filter.value : ''}
              style={{
                width: '100%',
                backgroundColor: '#DCDCDC',
                color: 'black',
              }}
            />
          )    
        },{  
        Header: 'City',  
        accessor: 'city',
        filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        }, Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
            }}
          />
        )      
        },{  
        Header: 'Nationality',  
        accessor: 'nationality',filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        }, Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
            }}
          />
        )      
        },{  
        Header: 'Matches Umpired',  
        accessor: 'matches_umpired',filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        }, Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
            }}
          />
        )    
     
        },{  
        Header: 'Accuracy %',  
        accessor: 'accuracy_percentage',filterMethod: (filter, row) => {
          var v = row[filter.id]
            .toString()
            .toUpperCase()
            .search(filter.value.toUpperCase());
          // row[filter.id].toString().startsWith(filter.value)
          if (v >= 0) {
            return true;
          } else return false;
        }, Filter: ({filter, onChange}) => (
          <input
          placeholder="Search"
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
            style={{
              width: '100%',
              backgroundColor: '#DCDCDC',
              color: 'black',
            }}
          />
        )    
    
        },{  
        Header: 'Update',  
        Cell:props=>{
            return(
                <button  onClick={() => this.updateUmpireClicked(props.original.umpire_id)} >Update</button>
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
                <a href="/admin/dashboard/UmpireDisplay"><div className="Selected_color">Umpire Master</div></a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.addUmpireClicked}>New</button>
                     </div>
                    <ReactTable
                    className="MyReactTableClass"
                     columns={columns}
                     data={this.state.umpires}
                     filterable
                     defaultPageSize={10}
                     >

                     </ReactTable>
           

                </div>
   
           
            </div>
        )
    }
    
}

export default UmpireComponent