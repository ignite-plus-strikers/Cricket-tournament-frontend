import React, { Component } from 'react'
import FixtureDataService from './Service/FixtureDataService';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import AddIcon from "@material-ui/icons/AddCircle";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Loader from "react-loader";
import PropTypes from "prop-types";

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }


class FixtureComponent extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
            fixtures: [],
            message: null,
            open1:false,
            open2:false,
            update_id:"",
            delete_id:"",
            desc:"",
            update_desc:""
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
 
    deleteFixtureClicked(id,description) {
        FixtureDataService.deleteFixture(id)
            .then(
                response => {
                    this.setState({ message: `Delete of fixture ${description} is successful` })
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




    openEditBox = (e,d) => {
        this.setState({
          open2: true,
          update_id:e,
          update_desc:d
        });
      };
    handleClose = () => {
        this.setState({ open1: false, open2: false, });
      };
      openAlertBox =(e,d) => {
        this.setState({
          open1: true,
          delete_id:e,
          desc:d
        });
      };
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
            Header: 'Series',  
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
            Header: 'Match type',  
            accessor: 'match_type',
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
            Header: 'Description',  
            accessor: 'description',
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
            Header: 'Match date & time',  
            accessor: 'fixture_date_time',
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
            Header: 'GMT offset',  
            accessor: 'gmt_offset',
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
            Header: 'Venue',  
            accessor: 'venue',
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
            Header: 'Live coverage',  
            accessor: 'live_coverage',
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
            Header: 'Scorer',  
            accessor: 'scorer_name',
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
                Header: 'Delete',  
                Cell:props=>{
                    return(
                        <div>
                       <button onClick={() => this.openAlertBox(props.original.fixture_id,props.original.description)}>Delete</button>
                        </div>
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
                    <button  onClick={() => this.openEditBox(props.original.fixture_id,props.original.description)} >Update</button>
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
                <div className = "details">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button class="btn newBtn" onClick={this.addFixtureClicked}>New</button>
                     </div>
                    
                     <ReactTable
                     className="MyReactTableClass"
                     columns={columns}
                     data={this.state.fixtures}
                     filterable
                     defaultPageSize={10}
                     ></ReactTable>
 
                </div>
        <Dialog
          open={this.state.open2}
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
            Update the fixture {this.state.update_desc}?
            </span>
          </DialogTitle>

          <br />

          <DialogContent>
            
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open2:false });
                this.updateFixtureClicked(this.state.update_id);
              }}
              variant="outlined"
            >
            Yes
            </Button>
            <Button
             onClick={() => {
                this.setState({ open2: false});
              }}
              variant="outlined"
            >
            No
            </Button>
          </DialogActions>
        </Dialog>



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
            Delete the fixture {this.state.desc}?
            </span>
          </DialogTitle>

          <DialogContent>
          You won’t be able to undo the action.
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open1:false });
                this.deleteFixtureClicked(this.state.delete_id,this.state.desc);
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
 
export default FixtureComponent
