import React, { Component } from 'react'
import PlayerDataService from './Service/PlayerDataService';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';


class ListPlayersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null
        }
        this.deletePlayerClicked = this.deletePlayerClicked.bind(this)
        this.refreshPlayers = this.refreshPlayers.bind(this)
        this.updatePlayerClicked = this.updatePlayerClicked.bind(this)
        this.addPlayerClicked = this.addPlayerClicked.bind(this)
    }

    componentDidMount() {
        this.refreshPlayers();
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

    deletePlayerClicked(id,firstname) {
        PlayerDataService.deletePlayer(id)
            .then(
                response => {
                    this.setState({ message: `Delete of player  ${firstname} is Successful` })
                    this.refreshPlayers()
                }
            )
    
    }

    updatePlayerClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/admin/dashboard/Player/${id}`)
    }

    addPlayerClicked() {
        this.props.history.push(`/admin/dashboard/PlayerAddForm`)
    }

    render() {
        const columns = [{  
            Header: 'First name',
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
            Header: 'Last name',  
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
            Header: 'Player initials',  
            accessor: 'player_initials',
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
            Header: 'Gender',  
            accessor: 'gender'  
            },{  
            Header: 'Date of birth',  
            accessor: 'player_dob'  
            },{  
            Header: 'Category',  
            accessor: 'category'
         
            },{  
            Header: 'Nationality',  
            accessor: 'nationality'
        
            },{  
            Header: 'Batting style',  
            accessor: 'player_batting_style'
            
            },{  
            Header: 'Bowling style',  
            accessor: 'player_bowling_style'
                
            },{  
            Header: 'Player role',  
            accessor: 'player_role'
                    
            },{  
            Header: 'Player status',  
            accessor: 'player_status'
                        
            },{  
                Header: 'Delete',  
                Cell:props=>{
                    return(
                        <button onClick={() => this.deletePlayerClicked(props.original.player_id,props.original.first_name)}>Delete</button>
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
                    <button  onClick={() => this.updatePlayerClicked(props.original.player_id)} >Update</button>
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
                <a href="/admin/dashboard/PlayerDisplay"><div className="Selected_color">Player Master</div></a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                <div className = "playerdetails">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.addPlayerClicked}>New</button>
                     </div>
                    
                    <ReactTable
                     columns={columns}
                     data={this.state.players}
                     filterable
                     defaultPageSize={5}
                     ></ReactTable>
 

                </div>
   
           
            </div>
        )
    }
    
}

export default ListPlayersComponent