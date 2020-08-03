import React from "react";
import DialogContentText from "@material-ui/core/DialogContentText";
import PropTypes from "prop-types";
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css'; 
import EditIcon from "@material-ui/icons/Search";
import Dialog from "@material-ui/core/Dialog";
import SearchIcon from "@material-ui/icons/Search";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import DeleteIcon from  "@material-ui/icons/Add";
import DownloadLogo from "@material-ui/icons/ArrowDownward";
import AddIcon from "@material-ui/icons/AddCircle";
import SortingIcon from "@material-ui/icons/Sort";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import axios from "axios";
import Loader from "react-loader";
const drawerWidth = 240;
const CONST=""



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};


var ButtonStyleAdd = {
  width: "140px",
  backgroundColor: "white",
  padding: "14px 0",
  textAlign: "center",
  color: "black",
  float: "right",
  fontSize: "13px",
  borderRadius: "3px",
  cursor: "pointer",
  border: "none",
  margin: "0% 0% 1% 0",
  position: "relative",
  bottom: "35px"
};
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openalert: false,
   
      data: [{name:"ram"},{name:"shaym"}],
      role: null,
      lanid: null,
      tableMessage: "",
      open2: false,
      eventloaded:true,
      openUpdatealert: false,
      openUpdateCancel: false,
      openAddalert: false,
      openAddCancel: false
    };
  }
  resetFields = () => {
    
  };
  exportUserRoles = () => {
   
  };
  openEventBox = () => {
    this.setState({
      open: true,
     
    });
  };
  handleAlertClose = () => {
    //alert("no");
    this.setState({
      openalert: false
    });
  };
  handleAlertRevoke = () => {
    this.revokeUserAccess(this.state.revokelanid);
  };
  openAlertBox = lanId => {
    this.setState({
      openalert: true,
      revokelanid: lanId
    });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };


  componentDidMount() {
    
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, open2: false, });
  };
 
  handleAssign = e => {
 
  };
  handleEventTypeChange = evt => {
    this.setState({
      eventTypeSelected: evt.target.value
    });
  };

  revokeUserAccess = lanId => {
    
  };

  handleMessage = () => {
    this.setState({
      errormessage: false,
      successmessage: false
    });
  };

  
  openEditBox = e => {
    this.setState({
      open2: true,
      
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <br />
       
        <Loader
          top="60%"
          left="50%"
          color="#cc0000"
          radius={35}
          loaded={this.state.eventloaded}
        />
        <Dialog
          open={this.state.openAddCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder",
                paddingRight: "200px"
              }}
            >
              Are you sure?
            </span>
          </DialogTitle>
          <DialogContent />
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ openAddCancel: false });
              }}
              variant="outlined"
            >
              No
            </Button>
            <Button
              onClick={() => {
                this.setState({ openAddCancel: false, open: false });
                // this.handleAssign("User updated");
              }}
              variant="outlined"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openAddalert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder",
                paddingRight: "230px"
              }}
            >
              Confirm role?
            </span>
          </DialogTitle>
          <DialogContent />
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ openAddalert: false });
              }}
              variant="outlined"
            >
              No
            </Button>
            <Button
              onClick={() => {
                this.setState({ openAddalert: false });
                this.handleAssign("User created");
              }}
              variant="outlined"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openUpdatealert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder",
                paddingRight: "150px"
              }}
            >
              Update ?
            </span>
          </DialogTitle>
          <DialogContent />
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ openUpdatealert: false });
              }}
              variant="outlined"
            >
              No
            </Button>
            <Button
              onClick={() => {
                this.setState({ openUpdatealert: false });
                this.handleAssign("User updated");
              }}
              variant="outlined"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openUpdateCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder",
                paddingRight: "200px"
              }}
            >
              Are you sure?
            </span>
          </DialogTitle>
          <DialogContent />
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ openUpdateCancel: false });
              }}
              variant="outlined"
            >
              No
            </Button>
            <Button
              onClick={() => {
                this.setState({ open2: false, openUpdateCancel: false });
              }}
              variant="outlined"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openalert}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <span
              style={{
                fontFamily: "HelveticaforTargetBold,Arial",
                color: "#646566",
                fontWeight: "bolder"
              }}
            >
              Delete ?
            </span>
            <br />
            <span
              style={{
             
                color: "#646566",
                fontWeight: "lighter",
                fontSize: "small",
                paddingRight: "100px"
              }}
            >
              You won’t be able to undo the action.
            </span>
          </DialogTitle>
          <DialogContent />
          <DialogActions>
            <Button onClick={this.handleAlertClose} variant="outlined">
              No
            </Button>
            <Button onClick={this.handleAlertRevoke} variant="outlined">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
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
            Someting
            </span>
          </DialogTitle>

          <DialogContent>
            <Paper
              style={{
                padding: "0px 10px 30px 10px ",
                boxShadow: "0px 0px 0px 0px"
              }}
            >
              <FormControl className={this.props.formControl}>
                <TextField
                  style={{ width: "400px" }}
                  id="standard-dense"
                  label="Name"
                  onChange={this.handleChange("lanid")}
                  value={this.state.lanid}
                  className={classNames(this.props.textField, this.props.dense)}
                  margin="dense"
                  on
                />
              </FormControl>
              
            
             
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ openAddCancel: true });
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                
              }}
              variant="outlined"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>




        <ReactTable
          noDataText={this.state.tableMessage}
          style={{ paddingLeft: "2%", paddingRight: "2%" }}
          data={this.state.data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={[
            {
              columns: [
                {
                  Header: (
                    <div>
                      <span>
                        <p style={{ display: "inline" }}>Name</p>
                      </span>
                    </div>
                  ),
                  accessor: "name",
                  filterable: true,
                  width: 400,
                  filterMethod: (filter, row) => {
                    var v = row[filter.id]
                      .toString()
                      .toUpperCase()
                      .search(filter.value.toUpperCase());

                    if (v >= 0) {
                      return true;
                    } else return false;
                  }
                }
                ,

                {
                  Header: (
                    <div
                     
                    >
                      Any header
                    </div>
                  ),
                  sortable: false,
                  filterable: false,
                  width: 200,
                  resizable: false,
                  Cell: row => (
                    <div>
                      <div style={{ float: "left", marginLeft: "0px" }}>
                        {" "}
                        <button
                          style={{
                            cursor: "pointer",
                           
                         
                          }}
                          onClick={() => {
                            this.openEditBox(row.original);
                          }}
                        >
                         Edit
                        </button>
                      </div>
                      <div style={{ float: "right" }}>
                        {" "}
                        <button
                          style={{
                            cursor: "pointer",
                          
                          
                          }}
                          onClick={() => {
                            this.openAlertBox(row.original.user_id);
                          }}
                        >
                         Delete
                        </button>
                      </div>
                    </div>
                  )
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br></br> <br></br>
        <button
          style={ButtonStyleAdd}
          onClick={() => {
            this.openEventBox();
          }}
        >
        
          <AddIcon style={{ color: "#646566" }} />{" "}
          <span
            style={{
              color: "#646566",
           
            }}
          >
            Add New
          </span>
        </button>
        
        <Dialog
          open={this.state.open2}
          TransitionComponent={Transition}
          keepMounted
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
              Edit 
            </span>
          </DialogTitle>

          <br />

          <DialogContent>
            <Paper
              style={{
                padding: "0px 10px 30px 10px ",
                boxShadow: "0px 0px 0px 0px"
              }}
            >
              <FormControl className={this.props.formControl}>
                <TextField
                  readonly
                  style={{ width: "400px" }}
                  id="standard-dense"
                  defaultValue={this.state.lanid}
                  value={this.state.lanid}
                  className={classNames(this.props.textField, this.props.dense)}
                  margin="dense"
                  on
                />
              </FormControl>
              <br />
            
              
              <FormControl
                className={this.props.formControl}
                style={{ marginTop: "16px" }}
              >
                
              </FormControl>
            
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.setState({ openUpdateCancel: true });
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => this.setState({ openUpdatealert: true })}
              variant="outlined"
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>
   
      </div>
    );
  }
}
Test.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Test;

 


