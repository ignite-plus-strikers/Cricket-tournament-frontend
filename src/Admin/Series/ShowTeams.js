import React, { Component } from 'react'
import SeriesDataService from './Service/SeriesDataService';
import './Series.css';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';
import AdminSidenav from '../AdminSidenav';
import Header from '../../Scorer/Header'
import {green,yellow,blue,pink} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
 secondary: {
   main: 
     pink[500]
   
 }
});

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
            },
           {  
                Header: 'Delete',
                headerClassName :'header-class',  
                Cell:props=>{
                    return(
                        <Button 
                        variant="contained"
                        color="secondary"
                        onClick={() => this.deleteTeamClicked(props.original.series_id,props.original.team_id,props.original.team_name)}>Delete</Button>
                )
        
                } ,
                sortable:false,
                filterable:false
                
            }
        ]  
        return (
            <div className = "alignment" style={{marginLeft:"400px",marginTop:"100px",width:"54%",marginBottom:"20px"}}>
                <Header />
                <AdminSidenav style={{position:"fixed"}} /><br/>
                {this.state.series.map(s =>{
                    if(s.series_id==seriesID){
                        seriesname=s.series_name
                        }
                }
                   
                )
                }
                <center>
                    <h2>{seriesname}</h2>
                    <br/>
                    {this.state.message && <div class="alert success delTeam">{this.state.message}</div>}
                </center>
                <div>
               
                <ReactTable
                className="MyReactTableClass"
                     columns={columns}
                     data={this.state.series_teams}
                     filterable
                     defaultPageSize={10}
                     ></ReactTable>

           
 
                </div>
   
           
            </div>
        )
    }
    
}
 
export default withStyles(styles)(ShowTeams)