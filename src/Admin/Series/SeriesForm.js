import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
 import 'react-datepicker/dist/react-datepicker-cssmodules.css';



class SeriesForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
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
                <a href="#clients"><div className="Selected_color">Series Mastar</div></a><hr></hr>
                <a href="#contact">Team Master</a><hr></hr>
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
                                    
                                    <label>Series Name</label>
                                    <Field className="form-control" type="text" name="seriesName" /><br></br><br></br>

                                    <label>Series Short Name</label>
                                    <Field className="form-control" type="text" name="seriesShort" /><br></br><br></br>

                                    <label>Series Start Date</label>
                                    <Field className="form-control" type="text" name="seriesStart" /><br></br><br></br>

                                    <label>Series End Date</label>
                                    <Field className="form-control" type="text" name="seriesEnd" /><br></br><br></br>


                                    <label>Tournament</label>
                                    <Field as="select" name="tournament">
                                        <option value="A-Limited Overs International">A-Limited Overs International</option>
                                        <option value="National">National</option>
                                    </Field><br></br><br></br>

                                    <label>Series Type</label>
                                    <Field as="select" name="seriesType">
                                        <option value="First class">First Class</option>
                                        <option value="Second class">Second Class</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 1</label>
                                    <Field as="select" name="country1">
                                        <option value="India">India</option>
                                        <option value="Austria">Austria</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 2</label>
                                    <Field as="select" name="country2">
                                        <option value="Argentina">Argentina</option>
                                        <option value="Spain">Spain</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 3</label>
                                    <Field as="select" name="country3">
                                        <option value="Mexico">Mexico</option>
                                        <option value="South Africa">South Africa</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 4</label>
                                    <Field as="select" name="country4">
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Brazil">Brazil</option>
                                    </Field><br></br><br></br>

                                    
                                    <label>Points Table</label>
                                    <Field type="checkbox" name="pointsTable"></Field>
                                    <br></br><br></br>
                            
                                    <label>Series Points</label>
                                    <Field className="form-control" type="text" name="seriesPoints" /><br></br><br></br>

                                   
                                    <label>Series Description</label>
                                    <Field className="form-control" type="text" name="seriesDesc" /><br></br><br></br>

                                   
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

export default SeriesForm