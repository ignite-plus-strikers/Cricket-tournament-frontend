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




class PlayerAddnUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player_id: this.props.match.params.id,
            first_name:'',
            last_name:'',
            player_initials:'',
            gender:'',
            player_dob:'',
            category:'',
            nationality:'',
            player_batting_style:'',
            player_bowling_style:'',
            player_role:'',
            player_status:'',
            properDate:"",
            startDate:new Date("2000-07-05")

            
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }
    componentDidMount() {
        PlayerDataService.retrievePlayer(this.state.player_id)
            .then(response => this.setState({
                first_name: response.data.first_name,
                last_name:response.data.last_name,
                player_initials:response.data.player_initials,
                gender:response.data.gender,
                player_dob :response.data.player_dob,
                category:response.data.category,
                nationality:response.data.nationality,
                player_batting_style:response.data.player_batting_style,
                player_bowling_style :response.data.player_bowling_style,
                player_role :response.data.player_role,
                player_status :response.data.player_status,
                startDate:new Date(response.data.player_dob)

            }))
    }
    handleChange = date => {
        var p=convertDateFormat(date)
         this.setState({
           startDate: date,
           properDate:p,
           player_dob:p
         });
       };
    validate(values) {
        let errors = {};
        if (!values.first_name) {
            errors.first_name = 'Enter FirstName'
        } else if(!(values.first_name).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.first_name = 'Invalid FirstName'
        }
        else if (values.first_name.length < 3) {
            errors.first_name = 'Enter atleast 3 Characters in FirstName'
        }else if(!values.last_name){
            errors.first_name='Enter LastName'
        } else if(!(values.last_name).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.first_name = 'Invalid LastName'
        }else if(!values.player_initials){
            errors.first_name='Enter Player Initials'
        } else if(!values.nationality){
            errors.first_name='Enter Nationality'
        } else if(!(values.nationality).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.first_name= 'Invalid Nationality'
        }else if(!values.player_role){
            errors.first_name='Enter player role'
        }else if(!(values.player_role).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.first_name= 'Invalid player role'
        }

        return errors

    }


    onSubmit(values) {
        

        var player = {
            player_id:this.state.player_id,
            first_name: values.first_name,
            last_name: values.last_name,
            player_initials:values.player_initials,
            gender:values.gender,
            player_dob: this.state.player_dob,
            category:values.category,
            nationality:values.nationality,
            player_batting_style:values.player_batting_style,
            player_bowling_style:values.player_bowling_style,
            player_role:values.player_role,
            player_status:values.player_status
        }
       
        console.log(player);
       
            PlayerDataService.updatePlayer(this.state.player_id, player)
                .then(() => this.props.history.push('/admin/dashboard/PlayerDisplay'))
        

        
        
    }
    render() {

        let first_name = this.state.first_name
        let last_name = this.state.last_name
        let player_initials = this.state.player_initials
        let gender = this.state.gender
        let player_dob= this.state.player_dob
        let category = this.state.category
        let nationality= this.state.nationality
        let player_batting_style = this.state.player_batting_style
        let player_bowling_style = this.state.player_bowling_style
        let player_status = this.state.player_status
        let player_role = this.state.player_role
        
        return (
            <div>
                <div className="playerform">
            <Formik
                    initialValues={{first_name,last_name,player_initials,gender,player_dob,category,nationality,player_batting_style,player_bowling_style,player_role ,player_status}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>   
                                <br/>
                                    <ErrorMessage name="first_name" component="div"
                                        className=" errormsg alert warning" />  
                                   
                                                      
                                    <label>First Name</label>
                                    <Field className="form-control width_inc" type="text" name="first_name" /><br></br><br></br>
                                       

                                    <label>Last Name</label>
                                    <Field className="form-control width_inc" type="text" name="last_name" /><br></br><br></br>

                                    <label>Player Initials</label>
                                    <Field className="form-control width_inc" type="text" name="player_initials" /><br></br><br></br>
                                    

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
                                        name="player_dob"
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
                                    <Field as="select" name="player_batting_style">
                                        <option value="Right-handed-batsman">Right-handed-batsman</option>
                                        <option value="Left-handed-batsman">Left-handed-batsman</option>
                                    </Field><br></br><br></br>

                                    <label>Bowling style</label>
                                    <Field as="select" name="player_bowling_style">
                                        <option value="Left-handed-bowler">Left-handed-bowler</option>
                                        <option value="Right-handed-bowler">Right-handed-bowler</option>
                                    </Field><br></br><br></br>

                                    <label>Player role</label>
                                    <Field className="form-control width_inc" type="text" name="player_role" /><br></br><br></br>

                                    <label>Retired or Playing</label>
                                    <Field as="select" name="player_status">
                                        <option value="Retired">Retired</option>
                                        <option value="Playing">Playing</option>
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

export default PlayerAddnUpdate