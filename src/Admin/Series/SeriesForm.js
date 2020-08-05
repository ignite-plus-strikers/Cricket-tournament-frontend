import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Series.css';

import SeriesDataService from './Service/SeriesDataService';


class SeriesForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
           series_name:"",
           series_short_name:"",
           series_start_date:"",
           series_end_date:"",
           tournament:"A-Limited Overs International",
           series_type:"First Class",
           host1:"India",
           host2:"Argentina",
           host3:"Mexico",
           host4:"New Zealand",
           points_table_active:false,
           series_points:""
          

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    
    validate(values) {
        let errors = {};
        if (!values.series_name) {
            errors.series_name = 'Enter Series Name'
        } else if (!values.series_short_name) {
            errors.series_name = 'Enter Series Short Name'
        }else if (!values.series_points) {
            errors.series_name = 'Enter Series Points'
        }

        return errors

    }
   
    onSubmit(values) {
        var series={
            series_name:values.series_name,
            series_short_name:values.series_short_name,
            series_start_date:values.series_start_date,
            series_end_date:values.series_end_date,
            series_type:values.series_type,
            tournament:values.tournament,
            points_table_active:values.points_table_active,
            series_points:values.series_points,
            host_country:[values.host1,values.host2,values.host3,values.host4]
        };
        console.log(values); 
        SeriesDataService.createSeries(series)
        .then(() => this.props.history.push('/admin/dashboard/SeriesDisplay'))  
       }
    render() {
        let series_name = this.state.series_name
        let series_short_name= this.state.series_short_name
        let series_start_date= this.state.series_start_date
        let series_end_date= this.state.series_end_date
        let tournament = this.state.tournament
        let series_type= this.state.series_type
        let host1= this.state.host1
        let host2= this.state.host2
        let host3= this.state.host3
        let host4= this.state.host4
        let points_table_active= this.state.points_table_active
        let series_points= this.state.series_points
        
        return (
            <div>
                
                <div className="seriesform">
            <Formik  
                    initialValues={{series_name, series_short_name,series_start_date,series_end_date,tournament,series_type,host1,host2,host3,host4,points_table_active,series_points }}               
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>     
                                    <br/>
                                    <ErrorMessage name="series_name" component="div"
                                        className=" errormsg alert warning" />  
                                         
                                    <br/>
                                    <label>Series Name</label>
                                    <Field className="form-control" type="text" name="series_name" /><br></br><br></br>

                                    <label>Series Short Name</label>
                                    <Field className="form-control" type="text" name="series_short_name" /><br></br><br></br>

                                    <label>Series Start Date</label>
                                    <Field className="form-control" type="text" name="series_start_date" /><br></br><br></br>

                                    <label>Series End Date</label>
                                    <Field className="form-control" type="text" name="series_end_date" /><br></br><br></br>


                                    <label>Tournament</label>
                                    <Field as="select" name="tournament">
                                        <option value="A-Limited Overs International">A-Limited Overs International</option>
                                        <option value="National">National</option>
                                    </Field><br></br><br></br>

                                    <label>Series Type</label>
                                    <Field as="select" name="series_type">
                                        <option value="First class">First Class</option>
                                        <option value="Second class">Second Class</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 1</label>
                                    <Field as="select" name="host1">
                                        <option value="India">India</option>
                                        <option value="Austria">Austria</option>
                                        <option value="UNKWN">UNKWN</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 2</label>
                                    <Field as="select" name="host2">
                                        <option value="Argentina">Argentina</option>
                                        <option value="Spain">Spain</option>
                                        <option value="UNKWN">UNKWN</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 3</label>
                                    <Field as="select" name="host3">
                                        <option value="Mexico">Mexico</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="UNKWN">UNKWN</option>
                                    </Field><br></br><br></br>

                                    <label>Host Country 4</label>
                                    <Field as="select" name="host4">
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="UNKWN">UNKWN</option>
                                    </Field><br></br><br></br>

                                    
                                    <label>Points Table</label>
                                    <Field type="checkbox" name="points_table_active"></Field>
                                    <br></br><br></br>
                            
                                    <label>Series Points</label>
                                    <Field className="form-control" type="number" name="series_points" /><br></br><br></br>


                                   
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