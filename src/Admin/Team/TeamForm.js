import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Team.css';




class TeamForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teamname:'',
            State:'',
            country:''
       
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    
    validate(values) {
        let errors = {};
        if (!values.teamname) {
            errors.teamname = 'Enter Team Name'
        } else if(!(values.teamname).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.teamname = 'Invalid Team Name'
        }else if (!values.State) {
            errors.teamname = 'Enter State'
        } else if(!(values.State).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.teamname = 'Invalid State'
        }else if (!values.country) {
            errors.teamname = 'Enter Country'
        } else if(!(values.country).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.teamname = 'Invalid Country'
        }

        return errors

    }
    
    onSubmit(values) {
     this.setState({teamname:values.teamname,State:values.State,country:values.country});
     console.log(values);   
    }
    render() {
        let teamname = this.state.teamname
        let State = this.state.State
        let country = this.state.country
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Mastar</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                <div className="teamform">
                <Formik
                    initialValues={{ teamname,State,country}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form> 
                                <br/>
                                    <ErrorMessage name="teamname" component="div"
                                        className=" errormsg alert warning" />  
                                         
                                    <br/>
                                    <label>Team Name</label>
                                    <Field className="form-control" type="text" name="teamname" /><br></br><br></br>

                                    <label>State</label>
                                    <Field className="form-control" type="text" name="State" /><br></br><br></br>

                                    <label>Country</label>
                                    <Field className="form-control" type="text" name="country" /><br></br><br></br>

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

export default TeamForm