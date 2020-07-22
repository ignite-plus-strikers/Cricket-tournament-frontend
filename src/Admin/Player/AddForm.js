import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PlayerDataService from './Service/PlayerDataService';
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
 import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import convertDateFormat from './ConvertDateFormat';


class AddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName:'',
            lastName:'',
            nickName:'',
            gender:'Male',
            playerDOB:'',
            category:'B1',
            nationality:'',
            playerBattingStyle:'right-handed-batsman',
            playerBowlingStyle:'left-handed-bowler',
            playerRole:'',
            playerStatus:'retired',
            properDate:"2000-01-01",
            startDate:new Date("2000-01-01")
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    /*componentDidMount() {
    }*/
    validate(values) {
        let errors = {};
        if (!values.firstName) {
            errors.firstName = 'Enter FirstName'
        } else if(!(values.firstName).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.firstName = 'Invalid FirstName'
        }
        else if (values.firstName.length < 3) {
            errors.firstName = 'Enter atleast 3 Characters in FirstName'
        }else if(!values.lastName){
            errors.firstName='Enter LastName'
        } else if(!(values.lastName).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.firstName = 'Invalid LastName'
        }else if(!values.nickName){
            errors.firstName='Enter NickName'
        } else if(!(values.nickName).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.firstName = 'Invalid NickName'
        }else if(!values.nationality){
            errors.firstName='Enter Nationality'
        } else if(!(values.nationality).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.firstName= 'Invalid Nationality'
        }else if(!values.playerRole){
            errors.firstName='Enter player role'
        }else if(!(values.playerRole).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.firstName= 'Invalid player role'
        }

        return errors

    }
    handleChange = date => {
        var p=convertDateFormat(date)
         this.setState({
           startDate: date,
           properDate:p
         });
       };
    onSubmit(values) {
        

        var player = {
            firstName: values.firstName,
            lastName: values.lastName,
            nickName:values.nickName,
            gender:values.gender,
            playerDOB: this.state.properDate,
            category:values.category,
            nationality:values.nationality,
            playerBattingStyle:values.playerBattingStyle,
            playerBowlingStyle:values.playerBowlingStyle,
            playerRole:values.playerRole,
            playerStatus:values.playerStatus
        }
       
        console.log(player);
            PlayerDataService.createPlayer(player)
                .then(() => this.props.history.push('/admin/dashboard/PlayerDisplay'))
                  

        

        console.log(values);
        
    }
    render() {
        let firstName = this.state.firstName
        let lastName = this.state.lastName
        let nickName = this.state.nickName
        let gender = this.state.gender
        let playerDOB= this.state.playerDOB
        let category = this.state.category
        let nationality= this.state.nationality
        let playerBattingStyle = this.state.playerBattingStyle
        let playerBowlingStyle = this.state.playerBowlingStyle
        let playerStatus = this.state.playerStatus
        let playerRole = this.state.playerRole
    
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Mastar</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay"><div className="Selected_color">Player Master</div></a><hr></hr>
                </div>
                <div className="playerform">
            <Formik
                    initialValues={{firstName,lastName,nickName,gender,playerDOB,category,nationality,playerBattingStyle,playerBowlingStyle,playerRole ,playerStatus}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>     
                                <br/> 
                                     <ErrorMessage name="firstName" component="div"
                                        className=" errormsg alert warning" />  
                                      

                                    <label>First Name</label>
                                    <Field className="form-control width_inc" type="text" name="firstName" /><br></br><br></br>

                                    <label>Last Name</label>
                                    <Field className="form-control width_inc" type="text" name="lastName" /><br></br><br></br>

                                    <label>Nick Name</label>
                                    <Field className="form-control width_inc" type="text" name="nickName" /><br></br><br></br>

                                    <label>Gender</label>
                                    <Field as="select" name="gender">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Field><br></br><br></br>

                                    <label>Date of Birth</label>
                                    <label className="bordering">
                                    <DatePicker 
                                        selected={this.state.startDate}
                                        showMonthDropdown
                                        showYearDropdown
                                        name="playerDOB"
                                        minDate={new Date("1940-01-01")}
                                        maxDate={(new Date("2009-12-31"))}
                                        dropdownMode="select"
                                        onChange={this.handleChange}
                                    ></DatePicker><FontAwesomeIcon icon={faCalendarAlt} className="bordering" /></label>
                                    <br></br><br></br>

                                    <label>Visual Classification</label>
                                    <Field as="select" name="category">
                                        <option value="B1">B1</option>
                                        <option value="B2">B2</option>
                                        <option value="B3">B3</option>
                                    </Field><br></br><br></br>

                                    <label>Nationality</label>
                                    <Field className="form-control width_inc" type="text" name="nationality" /><br></br><br></br>

                                    <label>Batting style</label>
                                    <Field as="select" name="playerBattingStyle">
                                        <option value="right-handed-batsman">right-handed-batsman</option>
                                        <option value="left-handed-batsman">left-handed-batsman</option>
                                    </Field><br></br><br></br>

                                    <label>Bowling style</label>
                                    <Field as="select" name="playerBowlingStyle">
                                        <option value="left-handed-bowler">left-handed-bowler</option>
                                        <option value="right-handed-bowler">right-handed-bowler</option>
                                    </Field><br></br><br></br>

                                    <label>Player role</label>
                                    <Field className="form-control width_inc" type="text" name="playerRole" /><br></br><br></br>

                                    <label>Retired or Playing</label>
                                    <Field as="select"  name="playerStatus">
                                        <option value="retired">retired</option>
                                        <option value="playing">playing</option>
                                    </Field><br></br><br></br>
                                <button className="btn warning marginsave" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
                </div>
            </div>
        )
    }

}

export default AddForm