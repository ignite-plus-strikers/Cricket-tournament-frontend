import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RefereeDataService from './Service/RefereeDataService';

class RefereeForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name:'',
            middle_name:'',
            last_name:'',
            city:'',
            nationality:'',
            matches_refereed:'',
            experience:''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    
    validate(values) {
        let errors = {};
        if (!values.first_name) {
            errors.first_name = 'Enter FirstName'
        } else if(!(values.first_name).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.first_name = 'Invalid FirstName'
        }
        else if (values.first_name.length < 3) {
            errors.first_name = 'Enter atleast 3 Characters in FirstName'
        }else if(!values.middle_name){
            errors.first_name='Enter Middle Name'
        }else if(!values.last_name){
            errors.first_name='Enter LastName'
        } else if(!(values.last_name).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.first_name = 'Invalid LastName'
        } else if(!values.city){
            errors.first_name='Enter City'
        } else if(!(values.city).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.first_name= 'Invalid City'
        }else if(!values.nationality){
            errors.first_name='Enter Nationality'
        } else if(!(values.nationality).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.first_name= 'Invalid Nationality'
        }else if(!values.matches_refereed){
            errors.first_name='Enter Matches Refereed'
        }else if(!values.experience){
            errors.first_name='Enter Experience'
        }

        return errors

    }
   
    onSubmit(values) {
        

        var referee = {
            first_name: values.first_name,
            middle_name: values.middle_name,
            last_name: values.last_name,
            city:values.city,
            nationality:values.nationality,
            matches_refereed:values.matches_refereed,
            experience:values.experience
        }
       
        console.log(referee);
            RefereeDataService.createReferee(referee)
                .then(() => this.props.history.push('/admin/dashboard/RefereeDisplay'))
                  

        

        console.log(values);
        
    }
    render() {
        let first_name = this.state.first_name
        let middle_name = this.state.middle_name
        let last_name = this.state.last_name
        let city=this.state.city
        let nationality= this.state.nationality
        let matches_refereed=this.state.matches_refereed
        let experience=this.state.experience
    
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay"><div className="Selected_color">Match Referee</div></a><hr></hr>
                </div>
                <div className="playerform">
            <Formik
                    initialValues={{first_name,middle_name,last_name,city,nationality,matches_refereed,experience}}
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

                                    <label>Middle Name</label>
                                    <Field className="form-control width_inc" type="text" name="middle_name" /><br></br><br></br>

                                    <label>Last Name</label>
                                    <Field className="form-control width_inc" type="text" name="last_name" /><br></br><br></br>

                                    <label>City</label>
                                    <Field className="form-control width_inc" type="text" name="city" /><br></br><br></br>

                                    <label>Nationality</label>
                                    <Field className="form-control width_inc" type="text" name="nationality" /><br></br><br></br>

                                    <label>Matches Refereed</label>
                                    <Field className="form-control width_inc" type="number" name="matches_refereed" /><br></br><br></br>

                                    <label>Experience</label>
                                    <Field className="form-control width_inc" type="text" name="experience" /><br></br><br></br>
                                    
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

export default RefereeForm