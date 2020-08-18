import React, { Component } from 'react'
import UmpireDataService from './Service/UmpireDataService';

import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css'

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
 
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 950
  },
  list: {
    width: "100%",
    maxWidth: "300px",
    position: "fixed"
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: "50%",
    drawerWidth: "50%"
  }
});
 
const formStyle = { width: "100%" };

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class UmpireComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            umpires: [],
            message: null,
            open:false,
            open_u:false,
            first_name:'',
            middle_name:'',
            last_name:'',
            city:'',
            nationality:'',
            matches_umpired:'',
            accuracy_percentage:'',
            umpire_id:''
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


    openAddForm = e => {
      this.setState({
        open: true
      
      });
    };
    openUpdateForm = e => {
    this.setState({
       umpire_id:e
        
      });
      UmpireDataService.retrieveUmpire(e)
            .then(response => this.setState({
                first_name: response.data.first_name,
                middle_name: response.data.middle_name,
                last_name:response.data.last_name,
                city:response.data.city,
                nationality:response.data.nationality,
                matches_umpired:response.data.matches_umpired,
                accuracy_percentage :response.data.accuracy_percentage
                

            }))
     
      this.setState({
        open_u:true
        
      });
    };
  handleClose = () => {
      this.setState({ open: false,open_u:false });
    };
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };
    handleSubmit=() => {
     
      var umpire = {
        first_name: this.state.first_name,
        middle_name: this.state.middle_name,
        last_name: this.state.last_name,
        city:this.state.city,
        nationality:this.state.nationality,
        matches_umpired:this.state.matches_umpired,
        accuracy_percentage:this.state.accuracy_percentage
    }
   
    console.log(umpire);
        UmpireDataService.createUmpire(umpire)
      .then(
        response => {
            this.setState({open:false })
            this.refreshUmpires()
        }
    )  
     
    
     }
     handleUpdate=() => {
     
      var umpire = {
        first_name: this.state.first_name,
        middle_name: this.state.middle_name,
        last_name:this.state.last_name,
        city:this.state.city,
        nationality:this.state.nationality,
        matches_umpired:this.state.matches_umpired,
        accuracy_percentage:this.state.accuracy_percentage
    }
    
      console.log(umpire);
       
      UmpireDataService.updateUmpire(this.state.umpire_id,umpire)
      .then(
        response => {
            this.setState({open_u:false })
            this.refreshUmpires()
        }
    )  
    
     }
     
    

    render() {
      const { classes } = this.props;  

    const columns = [{  
        Header: 'First Name',
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
        Header: 'Last Name',  
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
        Header: 'Nationality',  
        accessor: 'nationality',
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
        Header: 'Matches Umpired',  
        accessor: 'matches_umpired',
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
        Header: 'Accuracy %',  
        accessor: 'accuracy_percentage',
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
        Header: 'Update',  
        headerClassName :'header-class',
        Cell:props=>{
            return(
                <button  onClick={() => this.openUpdateForm(props.original.umpire_id)} >Update</button>
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
               
                <div className = "details">
                {this.state.message && <div class="alert success">{this.state.message}</div>}
                     <div>
                        <button className="btn newBtn" onClick={this.openAddForm}>New</button>
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
   
                <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
         

          <DialogContent>
          <Paper
            style={{
              width: "500px",
              paddingLeft: "2%",
              paddingRight: "0%",
              paddingTop: "1%"
            }}
          >
            <center>
              <h3>Umpire</h3>
            </center>
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              label="First Name"
              onChange={this.handleChange("first_name")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">First Name</InputAdornment>
                )
              }}
            />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              onChange={this.handleChange("last_name")}
              label="Last Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Last Name</InputAdornment>
                )
              }}
            />
            <br />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              onChange={this.handleChange("middle_name")}
              label="Middle Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Middle Name</InputAdornment>
                )
              }}
            />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              onChange={this.handleChange("city")}
              label="City"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">City</InputAdornment>
                )
              }}
            />
            <br />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              onChange={this.handleChange("nationality")}
              label="Nationality"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Nationality</InputAdornment>
                )
              }}
            />
            <TextField
              label="No of Matches Umpired"
              type="number"
              style={{ width: "45%" }}
              variant="outlined"
              id="outlined-simple-start-adornment"
              onChange={this.handleChange("matches_umpired")}
              className={classNames(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Matches Umpired
                  </InputAdornment>
                )
              }}
            />
            <br />
            <TextField
              style={{ width: "93%" }}
              label="Accuracy Percentage"
              type="number"
              variant="outlined"
              id="outlined-simple-start-adornment"
              onChange={this.handleChange("accuracy_percentage")}
              className={classNames(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Accuracy Percentage
                  </InputAdornment>
                )
              }}
            />
            <br />
            <br />
            <center>
              <Button
                variant="contained"
                style={{ width: "150px" }}
                className={classes.button}
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </center>
            <br />
            <br /> <br />
            <br />
          </Paper>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open:false });
              }}
              variant="outlined"
            >
              Cancel
            </Button>
           
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.open_u}
          TransitionComponent={Transition}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
         

          <DialogContent>
          <Paper
            style={{
              width: "500px",
              paddingLeft: "2%",
              paddingRight: "0%",
              paddingTop: "1%"
            }}
          >
            <center>
              <h3>Umpire</h3>
            </center>
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              value={this.state.first_name}
              label="First Name"
              onChange={this.handleChange("first_name")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">First Name</InputAdornment>
                )
              }}
            />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              value={this.state.last_name}
              onChange={this.handleChange("last_name")}
              label="Last Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Last Name</InputAdornment>
                )
              }}
            />
            <br />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              value={this.state.middle_name}
              onChange={this.handleChange("middle_name")}
              label="Middle Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Middle Name</InputAdornment>
                )
              }}
            />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              value={this.state.city}
              onChange={this.handleChange("city")}
              label="City"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">City</InputAdornment>
                )
              }}
            />
            <br />
            <TextField
              style={{ width: "45%" }}
              id="outlined-simple-start-adornment"
              className={classNames(classes.margin, classes.textField)}
              variant="outlined"
              onChange={this.handleChange("nationality")}
              value={this.state.nationality}
              label="Nationality"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Nationality</InputAdornment>
                )
              }}
            />
            <TextField
              label="No of Matches Umpired"
              type="number"
              style={{ width: "45%" }}
              variant="outlined"
              value={this.state.matches_umpired}
              id="outlined-simple-start-adornment"
              onChange={this.handleChange("matches_umpired")}
              className={classNames(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Matches Umpired
                  </InputAdornment>
                )
              }}
            />
            <br />
            <TextField
              style={{ width: "93%" }}
              label="Accuracy Percentage"
              type="number"
              variant="outlined"
              value={this.state.accuracy_percentage}
              id="outlined-simple-start-adornment"
              onChange={this.handleChange("accuracy_percentage")}
              className={classNames(classes.margin, classes.textField)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Accuracy Percentage
                  </InputAdornment>
                )
              }}
            />
            <br />
            <br />
            <center>
              <Button
                variant="contained"
                style={{ width: "150px" }}
                className={classes.button}
                onClick={this.handleUpdate}
              >
                Update
              </Button>
            </center>
            <br />
            <br /> <br />
            <br />
          </Paper>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ open_u:false });
              }}
              variant="outlined"
            >
              Cancel
            </Button>
           
          </DialogActions>
        </Dialog>

            </div>
        )
    }
    
}
UmpireComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UmpireComponent)