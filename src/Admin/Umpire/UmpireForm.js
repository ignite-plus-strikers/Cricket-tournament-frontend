import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UmpireDataService from './Service/UmpireDataService';

class UmpireForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name:'',
            middle_name:'',
            last_name:'',
            city:'',
            nationality:'',
            matches_umpired:'',
            accuracy_percentage:''
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
        }else if(!values.matches_umpired){
            errors.first_name='Enter Matches Umpired'
        }else if(!values.accuracy_percentage){
            errors.first_name='Enter Accuracy Percentage'
        }

        return errors

    }
   
    onSubmit(values) {
        

        var umpire = {
            first_name: values.first_name,
            middle_name: values.middle_name,
            last_name: values.last_name,
            city:values.city,
            nationality:values.nationality,
            matches_umpired:values.matches_umpired,
            accuracy_percentage:values.accuracy_percentage
        }
       
        console.log(umpire);
            UmpireDataService.createUmpire(umpire)
                .then(() => this.props.history.push('/admin/dashboard/UmpireDisplay'))
                  

        

        console.log(values);
        
    }
    render() {
        let first_name = this.state.first_name
        let middle_name = this.state.middle_name
        let last_name = this.state.last_name
        let city=this.state.city
        let nationality= this.state.nationality
        let matches_umpired=this.state.matches_umpired
        let accuracy_percentage=this.state.accuracy_percentage
    
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay"><div className="Selected_color">Umpire Master</div></a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                <div className="playerform">
            <Formik
                    initialValues={{first_name,middle_name,last_name,city,nationality,matches_umpired,accuracy_percentage}}
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

                                    <label>Matches Umpired</label>
                                    <Field className="form-control width_inc" type="number" name="matches_umpired" /><br></br><br></br>

                                    <label>Accuracy Percentage</label>
                                    <Field className="form-control width_inc" type="text" name="accuracy_percentage" /><br></br><br></br>
                                    
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

export default UmpireForm