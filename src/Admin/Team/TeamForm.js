import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';





class TeamForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teamname:'',
            state:'',
            country:'',
       
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    /*componentDidMount() {


    }*/
    validate(values) {
        

    }
    
    onSubmit(values) {
        console.log(values);
        
    }
    render() {
        
        return (
            <div>
                 <div className="sidenav">
                <a href="#about">Dashboard</a><hr></hr>
                <a href="#services">Fixtures</a><hr></hr>
                <a href="#clients">Series Mastar</a><hr></hr>
                <a href="#contact"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="#contact">Player Master</a><hr></hr>
                </div>
                <div className="playerform">
            <Formik
                    
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>     
                                    <br/><br/><br/><br/><br/><br/><br/><br/>  
                                    <label>Team Name</label>
                                    <Field className="form-control" type="text" name="teamname" /><br></br><br></br>

                                    <label>State</label>
                                    <Field className="form-control" type="text" name="state" /><br></br><br></br>

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