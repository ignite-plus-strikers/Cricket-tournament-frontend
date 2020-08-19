import React, { Component } from 'react'
import './Series.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../App.css';
import TeamDataService from '../Team/Service/TeamDataService';
import SeriesDataService from './Service/SeriesDataService';

import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';
import AdminSidenav from '../AdminSidenav';
import Header from '../../Scorer/Header'

class AddTeams extends Component {

    constructor(props) {
        super(props)
        this.state = {
            series_id: this.props.match.params.id,
            teams: [],
            series:[],
            message: null,
            selected:'',
            team_id:'',
            series_name:""
            
        }
        this.refreshTeams = this.refreshTeams.bind(this)
        this.getSeriesName=this.getSeriesName.bind(this)
        
       
    }
    componentDidMount() {
        this.refreshTeams();
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

    refreshTeams() {
        TeamDataService.retrieveAllTeams()
            .then(
                response => {
                    console.log(response);
                    this.setState({ teams: response.data })
                }
            )
    }
    handleSelect = e => {

        this.setState({
            team_id:e
             
           });
        let team_name
        
        this.state.teams.map(t =>{
            if(t.team_id=== e){
                team_name=t.tname;
               
                }
        }
           
        )
        
        
        var series_teams = {
            series_id:this.state.series_id,
            team_id: e,
            team_name:team_name
        }
       
        let seriesid=this.state.series_id
            SeriesDataService.createTeam(seriesid,series_teams)
                .then(() => this.props.history.push(`/admin/dashboard/SeriesShowTeam/${seriesid}`))
        console.log(series_teams);
    }

    
  /*  validate(values) {
        let errors = {};
        if (!values.selected) {
            errors.selected = 'Select Team'
        } 

        return errors

    }*/




    render() {
        let selected=this.state.selected
        let seriesID=this.state.series_id
        let seriesname=this.state.series_name

        const columns = [{  
            Header: 'Team name',
            accessor: 'tname',
            headerClassName :'header-class',
            filterMethod: (filter, row) => {
                var v = row[filter.id]
                  .toString()
                  .toUpperCase()
                  .search(filter.value.toUpperCase());
                // row[filter.id].toString().startsWith(filter.value)
                if (v >= 0) {
                  return true;
                } else return false;
              },
              Filter: ({filter, onChange}) => (
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
                Header: 'Select',  
                headerClassName :'header-class',
                Cell:props=>{
                    return(
                        <button  onClick={() => this.handleSelect(props.original.team_id)} >Select</button>
                )
        
                } ,
                sortable:false,
                filterable:false,
                
                }
        ]  

        return (
            <div className = "alignment" style={{marginLeft:"400px",marginTop:"100px",width:"54%",marginBottom:"20px"}}>
                <Header />
                <AdminSidenav style={{position:"fixed"}} /><br/>
                {this.state.series.map(s =>{
                    if(s.series_id===seriesID){
                        seriesname=s.series_name
                        }
                }
                   
                )
                }
                <center>
                    <h2>{seriesname}</h2>
                </center><br/>
                <div>
                <ReactTable
                    className="MyReactTableClass"
                     columns={columns}
                     data={this.state.teams}
                     filterable
                     defaultPageSize={10}
                     ></ReactTable>
 
                </div>
   
           
            </div>
        )
    }
    
}

export default AddTeams