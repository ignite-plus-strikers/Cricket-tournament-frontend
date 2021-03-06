import React, { Component } from 'react'

import './Team.css';
import TeamDataService from './Service/TeamDataService';
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

class ShowPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            team_id: this.props.match.params.id,
            teamplayers: [],
            teams:[],
            message: null,
            tname:""
        }
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.refreshTeamPlayers = this.refreshTeamPlayers.bind(this)
        this.getTeamName=this.getTeamName.bind(this)
       
    }

    componentDidMount() {
        this.refreshTeamPlayers();
        this.getTeamName();
    }
    getTeamName(){
        TeamDataService.retrieveAllTeams()
        .then(
            response => {
                console.log(response);
                this.setState({ teams : response.data })
            }
        )
        

    }

    refreshTeamPlayers() {
        TeamDataService.retrieveAllTeamPlayers(this.state.team_id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ teamplayers: response.data })
                }
            )
    }

    deletePlayerClicked(teamid,playerid,firstname) {
        TeamDataService.deletePlayer(teamid,playerid)
            .then(
                response => {
                    console.log(response);
                    this.setState({ message: `Delete of player  ${firstname} is Successful` })
                    this.refreshTeamPlayers()
                }
            )
    
    }



    render() {
        let teamID=this.state.team_id
        let teamname=this.state.tname

        const columns = [{  
            Header: 'Player first name',
            accessor: 'player_first_name',
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
            },{  
            Header: 'Last name',  
            accessor: 'player_last_name',
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
            },{  
            Header: 'Initials',  
            accessor: 'player_initials',
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
                       
                        onClick={() => this.deletePlayerClicked(props.original.team_id,props.original.player_id,props.original.player_first_name)}>Delete</Button>
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
          <div className = "alignment" style={{marginLeft:"400px",marginTop:"100px",width:"54%",marginBottom:"20px"}}>
            <Header />
                <AdminSidenav style={{position:"fixed"}} /><br/>
                {this.state.teams.map(team =>{
                    if(team.team_id===teamID){
                        teamname=team.tname
                        }
                }
                   
                )
                }
                <center>
                    <h2>{teamname}</h2>
                    <br/>
                    {this.state.message && <div class="alert success">{this.state.message}</div>}
                </center>
                <div >
                    
                
                <ReactTable
                className="MyReactTableClass"
                     columns={columns}
                     data={this.state.teamplayers}
                     filterable
                     defaultPageSize={10}
                     ></ReactTable>

                </div>
   
           
            </div>
        )
    }
    
}

export default withStyles(styles)(ShowPlayer)