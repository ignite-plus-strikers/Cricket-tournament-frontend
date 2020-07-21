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
            p_firstname:'',
            p_lastname:'',
            p_gender:'M',
            p_dob:'',
            p_category:'B1',
            p_nationality:'',
            p_batting_style:'right-handed-batsman',
            p_bowling_style:'left-handed-bowler',
            player_role:'',
            retired_or_playing:'retired',
            properDate:"2000-07-05",
            startDate:new Date("2000-07-05")
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    /*componentDidMount() {


    }*/
    validate(values) {
        let errors = {};
        if (!values.p_firstname) {
            errors.p_firstname = 'Enter FirstName'
        } else if(!(values.p_firstname).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.p_firstname = 'Invalid FirstName'
        }
        else if (values.p_firstname.length < 3) {
            errors.p_firstname = 'Enter atleast 3 Characters in FirstName'
        }else if(!values.p_lastname){
            errors.p_lastname='Enter LastName'
        } else if(!(values.p_lastname).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.p_lastname = 'Invalid LastName'
        }else if(!values.p_nationality){
            errors.p_nationality='Enter Nationality'
        } else if(!(values.p_nationality).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.p_nationality = 'Invalid Nationality'
        }else if(!values.player_role){
            errors.player_role='Enter player role'
        }else if(!(values.player_role).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.player_role = 'Invalid player role'
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
        

        var player = {p_firstname: values.p_firstname,
            p_lastname: values.p_lastname,
            p_gender:values.p_gender,
            p_dob: this.state.properDate,
            p_category:values.p_category,
            p_nationality:values.p_nationality,
            p_batting_style:values.p_batting_style,
            p_bowling_style:values.p_bowling_style,
            player_role:values.player_role,
            retired_or_playing:values.retired_or_playing
        }
       
        console.log(player);
            PlayerDataService.createPlayer(player)
                .then(() => this.props.history.push('/admin/dashboard/PlayerDisplay'))
                  

        

        console.log(values);
        
    }
    render() {
        let p_firstname = this.state.p_firstname
        let p_lastname = this.state.p_lastname
        let p_gender = this.state.p_gender
        let p_dob= this.state.p_dob
        let p_category = this.state.p_category
        let p_nationality= this.state.p_nationality
        let p_batting_style = this.state.p_batting_style
        let p_bowling_style= this.state.p_bowling_style
        let player_role = this.state.player_role
        let retired_or_playing = this.state.retired_or_playing
    
        return (
            <div>
                 <div className="sidenav">
                <a href="#about">Dashboard</a><hr></hr>
                <a href="#services">Fixtures</a><hr></hr>
                <a href="#clients">Series Mastar</a><hr></hr>
                <a href="#contact">Team Master</a><hr></hr>
                <a href="#contact"><div className="Selected_color">Player Master</div></a><hr></hr>
                </div>
                <div className="playerform">
            <Formik
                    initialValues={{ p_firstname,p_lastname,p_gender,p_dob, p_category,p_nationality, p_batting_style,p_bowling_style,player_role ,retired_or_playing}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>     
                                     <ErrorMessage name="p_firstname" component="div"
                                        className=" errormsg alert warning" />  
                                    <ErrorMessage name="p_lastname" component="div"
                                        className=" errormsg alert warning" /> 
                                    <ErrorMessage name="p_nationality" component="div"
                                        className=" errormsg alert warning" /> 
                                    <ErrorMessage name="player_role" component="div"
                                        className=" errormsg alert warning" />   

                                    <label>First Name</label>
                                    <Field className="form-control width_inc" type="text" name="p_firstname" /><br></br><br></br>

                                    <label>Last Name</label>
                                    <Field className="form-control width_inc" type="text" name="p_lastname" /><br></br><br></br>

                                    <label>Gender</label>
                                    <Field as="select" name="p_gender">
                                        <option value="M">M</option>
                                        <option value="F">F</option>
                                    </Field><br></br><br></br>

                                    <label>Date of Birth</label>
                                    <label className="bordering">
                                    <DatePicker 
                                        selected={this.state.startDate}
                                        showMonthDropdown
                                        showYearDropdown
                                        name="p_dob"
                                        minDate={new Date("1940-01-01")}
                                        maxDate={(new Date("2009-12-31"))}
                                        dropdownMode="select"
                                        onChange={this.handleChange}
                                    ></DatePicker><FontAwesomeIcon icon={faCalendarAlt} className="bordering" /></label>
                                    <br></br><br></br>

                                    <label>Visual Classification</label>
                                    <Field as="select" name="p_category">
                                        <option value="B1">B1</option>
                                        <option value="B2">B2</option>
                                        <option value="B3">B3</option>
                                    </Field><br></br><br></br>

                                    <label>Nationality</label>
                                    <Field className="form-control width_inc" type="text" name="p_nationality" /><br></br><br></br>

                                    <label>Batting style</label>
                                    <Field as="select" name="p_batting_style">
                                        <option value="right-handed-batsman">right-handed-batsman</option>
                                        <option value="left-handed-batsman">left-handed-batsman</option>
                                    </Field><br></br><br></br>

                                    <label>Bowling style</label>
                                    <Field as="select" name="p_bowling_style">
                                        <option value="left-handed-bowler">left-handed-bowler</option>
                                        <option value="right-handed-bowler">right-handed-bowler</option>
                                    </Field><br></br><br></br>

                                    <label>Player role</label>
                                    <Field className="form-control width_inc" type="text" name="player_role" /><br></br><br></br>

                                    <label>Retired or Playing</label>
                                    <Field as="select"  name="retired_or_playing">
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