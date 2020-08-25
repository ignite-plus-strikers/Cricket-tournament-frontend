import React, { Component } from 'react'
import './Team.css';

import '../../App.css';
import PlayerDataService from '../../Admin/Player/Service/PlayerDataService';
import TeamDataService from './Service/TeamDataService';

import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';
import AdminSidenav from '../AdminSidenav';
import Header from '../../Scorer/Header'


class AddPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            team_id: this.props.match.params.id,
            players: [],
            teams:[],
            message: null,
            selected:'',
            player_id:'',
            tname:"",
            teamplayers:[],
            players_count:0
            
        }
        this.refreshPlayers = this.refreshPlayers.bind(this)
        this.getTeamName=this.getTeamName.bind(this)
        this.getTeamPlayers=this.getTeamPlayers.bind(this)
        
    }
    componentDidMount() {
        this.refreshPlayers();
        this.getTeamName();
        this.getTeamPlayers();
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
    getTeamPlayers() {
        TeamDataService.retrieveAllTeamPlayers(this.state.team_id)
            .then(
                response => {
                    console.log(response);
                    this.setState({ teamplayers: response.data })
                }
            )
        
    }

    refreshPlayers() {
        PlayerDataService.retrieveAllPlayers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ players: response.data })
                }
            )
            
    }
    handleSelect = (e,category) => {
        this.setState({
            player_id:e
             
           });
        let player_first_name
        let player_last_name
        let player_initials
       
        this.state.players.map(p =>{
            if(p.player_id=== e){
                player_first_name=p.first_name;
                player_last_name=p.last_name;
                player_initials=p.player_initials;
                }
        }
           
        )
        
        
        var teamplayer = {
            team_id:this.state.team_id,
            player_id: e,
            player_first_name: player_first_name,
            player_last_name:player_last_name,
            player_initials: player_initials,
            category : category
        }
       
        let teamid=this.state.team_id
            TeamDataService.createPlayer(teamid,teamplayer)
                .then(() => this.props.history.push(`/admin/dashboard/TeamShowPlayer/${teamid}`))
        console.log(teamplayer);
    }
   

    render() {
        let selected=this.state.selected
        let teamID=this.state.team_id
        let teamname=this.state.tname


        const columns = [{  
            Header: 'First name',
            accessor: 'first_name',
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
              },Filter: ({filter, onChange}) => (
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
            accessor: 'last_name',
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
            Header: 'Player initials',  
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
            },{  
            Header: 'Select',  
            headerClassName :'header-class',
            Cell:props=>{
                return(
                    <button  onClick={() => this.handleSelect(props.original.player_id,props.original.category)} >Select</button>
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
               <AdminSidenav style={{position:"fixed"}} />
               <br/>
                
                {this.state.teams.map(team =>{
                    if(team.team_id===teamID){
                        teamname=team.tname
                        }
                }
                   
                )
                }
                <center>
                    <h2>{teamname}</h2>
                </center><br/>
                <div >
                <ReactTable
                    className="MyReactTableClass"
                     columns={columns}
                     data={this.state.players}
                     filterable
                     defaultPageSize={10}
                     ></ReactTable>
 
                </div>
           
            </div>
        )
    }
    
}

export default AddPlayer