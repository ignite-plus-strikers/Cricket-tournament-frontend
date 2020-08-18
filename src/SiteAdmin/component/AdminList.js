import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "./AdminList.css";
import AdminCredDataService from "../service/AdmiCredDataService";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar"
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core"
const formStyle = { width: "100%" };

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AdminList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      open_form: false,
      open_error_form: false,
      admin_firstname: null,
      admin_lastname: null,
      admin_email: null,
    };
    this.retrieveAllAdmin = this.retrieveAllAdmin.bind(this);
  }

  componentDidMount() {
    this.retrieveAllAdmin();
  }

  retrieveAllAdmin() {
    AdminCredDataService.retrieveAllAdmin().then((response) => {
      console.log(response);
      this.setState({ admins: response.data });
    });
  }

  openAddForm = (e) => {
    this.setState({
      open_form: true,
    });
  };

  openErrorForm = (e) => {
    this.setState({
      open_error_form: true,
    });
  };

  handleClose = () => {
    this.setState({ open_form: false, open_error_form: false });
  };
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    if (
      this.state.admin_firstname === null ||
      this.state.admin_lastname === null ||
      this.state.admin_email === null
    ) {
      this.openErrorForm();
    } else {
      var admin = {
        adminFirstname: this.state.admin_firstname,
        adminLastname: this.state.admin_lastname,
        adminEmail: this.state.admin_email,
      };
      //console.log(admin);
      AdminCredDataService.createAdmin(admin).then((response) => {
        this.setState({ open_form: false });
        this.retrieveAllAdmin();
      });

      var userbyrole = {
        userEmailId: this.state.admin_email,
        userRole: "CABI_APPL_ADMIN",
      };
      AdminCredDataService.userRoleByEmail(userbyrole).then((response) => {
        console.log(userbyrole);
      });
    }
  };

  render() {
    const columns = [
      {
        Header: "First name",
        accessor: "adminFirstname",
        headerClassName: "hdrCls",
        className: "cellCls",
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
        Filter: ({ filter, onChange }) => (
          <input
            placeholder="Search"
            onChange={(event) => onChange(event.target.value)}
            value={filter ? filter.value : ""}
            style={{
              width: "100%",
              backgroundColor: "#DCDCDC",
              color: "black",
            }}
          />
        ),
      },
      {
        Header: "Last name",
        accessor: "adminLastname",
        headerClassName: "hdrCls",
        className: "cellCls",
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
        Filter: ({ filter, onChange }) => (
          <input
            placeholder="Search"
            onChange={(event) => onChange(event.target.value)}
            value={filter ? filter.value : ""}
            style={{
              width: "100%",
              backgroundColor: "#DCDCDC",
              color: "black",
            }}
          />
        ),
      },
      {
        Header: "Email",
        accessor: "adminEmail",
        headerClassName: "hdrCls",
        className: "cellCls",
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
        Filter: ({ filter, onChange }) => (
          <input
            placeholder="Search"
            onChange={(event) => onChange(event.target.value)}
            value={filter ? filter.value : ""}
            style={{
              width: "100%",
              backgroundColor: "#DCDCDC",
              color: "black",
              fontSize: 20,
            }}
          />
        ),
      },
    ];
    return (
      <div>
      <Navbar/>
       
        <h1 style={{ fontWeight: 80, textAlign: "center" }}>Existing Admins</h1>
        <div>
          {/* {this.state.message && <div class="alert success">{this.state.message}</div>} */}
          <Container>
          <div>
          
            <Button
              variant="contained"
              style={{
                border: "none",
                color: "white",
                padding: "08px 20px",
                fontSize: "medium",
                cursor: "pointer",
                marginTop: "20px",
                backgroundColor: "#0D5C75",
                marginBottom: "30px",
                marginLeft: 30,
              }}
              onClick={this.openAddForm}
            >
              New
            </Button>
          </div>
         
          <ReactTable
            className="MyReactTableClass"
            columns={columns}
            data={this.state.admins}
            filterable
            defaultPageSize={5}
          ></ReactTable>
          <Dialog
            open={this.state.open_form}
            TransitionComponent={Transition}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <Paper
                style={{
                  width: "500px",
                  height: "570px",
                  paddingLeft: "2%",
                  paddingRight: "0%",
                  paddingTop: "1%",
                }}
              >
                <center>
                  <h3>Add New Admin</h3>
                </center>
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-simple-start-adornment"
                  variant="outlined"
                  label="First Name"
                  onChange={this.handleChange("admin_firstname")}
                />
                <br />
                <br />
                <br />
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-simple-start-adornment"
                  variant="outlined"
                  label="Last Name"
                  onChange={this.handleChange("admin_lastname")}
                />
                <br />
                <br />
                <br />
                <TextField
                  style={{ width: "45%" }}
                  id="outlined-simple-start-adornment"
                  variant="outlined"
                  onChange={this.handleChange("admin_email")}
                  label="Admin Email"
                />
                <br></br>
                <br></br>
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "150px" }}
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </center>
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_form: false });
                }}
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.open_error_form}
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
                  fontWeight: "bolder",
                }}
              >
                All fields are required!
              </span>
            </DialogTitle>
            <DialogActions>
              <Button
                onClick={() => {
                  this.setState({ open_error_form: false });
                }}
                variant="outlined"
              >
                Okay
              </Button>
            </DialogActions>
          </Dialog>
          </Container>
        </div>
      </div>
    );
  }
}

export default AdminList;