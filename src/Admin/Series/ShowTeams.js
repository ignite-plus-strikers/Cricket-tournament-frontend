import React, { Component } from 'react'
import SeriesDataService from './Service/SeriesDataService';
import './Series.css';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class ShowTeams extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            series_id: this.props.match.params.id,
            series_teams: [],
            series:[],
            message: null,
            series_name:"",
            s_id:"",
            t_id:"",
            desc:"",
            open1:false
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
    openAlertBox =(e,p,d) => {
        this.setState({
          open1: true,
          s_id:e,
          t_id:p,
          desc:d
        });
      };

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
                Cell:props=>{
                    return(
                        <button onClick={() => this.openAlertBox(props.original.series_id,props.original.team_id,props.original.team_name)}>Delete</button>
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
                className="MyReactTableClass"
                     columns={columns}
                     data={this.state.series_teams}
                     filterable
                     defaultPageSize={10}
                     ></ReactTable>

           
 
                </div>
   
                <Dialog
          open={this.state.open1}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder"
              }}
            >
            Delete the team {this.state.desc}?
            </span>
          </DialogTitle>

          <DialogContent>
          You won’t be able to undo the action.
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open1:false });
                this.deleteTeamClicked(this.state.s_id,this.state.t_id,this.state.desc);
              }}
              variant="outlined"
            >
            Yes
            </Button>
            <Button
             onClick={() => {
                this.setState({ open1: false});
              }}
              variant="outlined"
            >
            No
            </Button>
          </DialogActions>
        </Dialog>
            </div>
        )
    }
    
}
 
export default ShowTeams