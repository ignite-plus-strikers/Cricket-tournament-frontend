import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker";
import './Series.css';




class SeriesForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
           seriesName:"",
           seriesShort:"",
           seriesStart:"",
           seriesEnd:"",
           tournament:"A-Limited Overs International",
           seriesType:"First Class",
           host1:"India",
           host2:"Argentina",
           host3:"Mexico",
           host4:"New Zealand",
           pointsTable:"",
           seriesPoints:"",
           seriesDesc:""

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    
    validate(values) {
        let errors = {};
        if (!values.seriesName) {
            errors.seriesName = 'Enter Series Name'
        } else if (!values.seriesShort) {
            errors.seriesName = 'Enter Series Short Name'
        }else if (!values.seriesPoints) {
            errors.seriesName = 'Enter Series Points'
        }else if (!values.seriesDesc) {
            errors.seriesName = 'Enter Series Description'
        } 

        return errors

    }
   
    onSubmit(values) {
        console.log(values);
        
    }
    render() {
        let seriesName = this.state.seriesName
        let seriesShort= this.state.seriesShort
        let seriesStart= this.state.seriesStart
        let seriesEnd= this.state.seriesEnd
        let tournament = this.state.tournament
        let seriesType= this.state.seriesType
        let host1= this.state.host1
        let host2= this.state.host2
        let host3= this.state.host3
        let host4= this.state.host4
        let pointsTable= this.state.pointsTable
        let seriesPoints= this.state.seriesPoints
        let seriesDesc= this.state.seriesDesc
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay"><div className="Selected_color">Series Master</div></a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                <div className="seriesform">
            <Formik  
                    initialValues={{seriesName, seriesShort,seriesStart,seriesEnd,tournament,seriesType,host1,host2,host3,host4,pointsTable,seriesPoints,seriesDesc }}               
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>     
                                    <br/>
                                    <ErrorMessage name="seriesName" component="div"
                                        className=" errormsg alert warning" />  
                                         
                                    <br/>
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
                                    <Field as="select" name="host1">
                                        <option value="India">India</option>
                                        <option value="Austria">Austria</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 2</label>
                                    <Field as="select" name="host2">
                                        <option value="Argentina">Argentina</option>
                                        <option value="Spain">Spain</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 3</label>
                                    <Field as="select" name="host3">
                                        <option value="Mexico">Mexico</option>
                                        <option value="South Africa">South Africa</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 4</label>
                                    <Field as="select" name="host4">
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Brazil">Brazil</option>
                                    </Field><br></br><br></br>

                                    
                                    <label>Points Table</label>
                                    <Field type="checkbox" name="pointsTable"></Field>
                                    <br></br><br></br>
                            
                                    <label>Series Points</label>
                                    <Field className="form-control" type="number" name="seriesPoints" /><br></br><br></br>

                                   
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