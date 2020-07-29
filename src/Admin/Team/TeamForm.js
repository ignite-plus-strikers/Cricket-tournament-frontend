import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Team.css';

import TeamDataService from './Service/TeamDataService';


class TeamForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tname:'',
            tstate:'',
            tcountry:''
       
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    
    validate(values) {
        let errors = {};
        if (!values.tname) {
            errors.tname = 'Enter Team Name'
        } else if(!(values.tname).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.tname = 'Invalid Team Name'
        }else if (!values.tcountry) {
            errors.tname = 'Enter Country'
        } else if(!(values.tcountry).match(/^[a-zA-Z][a-zA-Z ]+$/)){ 
            errors.tname = 'Invalid Country'
        }

        return errors

    }
    
    onSubmit(values) {
     var team={tname:values.tname,tstate:values.tstate,tcountry:values.tcountry};
     console.log(values); 
     TeamDataService.createTeam(team)
     .then(() => this.props.history.push('/admin/dashboard/TeamDisplay'))  
    }
    render() {
        let tname = this.state.tname
        let tstate = this.state.tstate
        let tcountry = this.state.tcountry
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                <div className="teamform">
                <Formik
                    initialValues={{ tname,tstate,tcountry}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form> 
                                <br/>
                                    <ErrorMessage name="tname" component="div"
                                        className=" errormsg alert warning" />  
                                         
                                    <br/>
                                    <label>Team Name</label>
                                    <Field className="form-control" type="text" name="tname" /><br></br><br></br>

                                    <label>State</label>
                                    <Field className="form-control" type="text" name="tstate" /><br></br><br></br>

                                    <label>Country</label>
                                    <Field className="form-control" type="text" name="tcountry" /><br></br><br></br>

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