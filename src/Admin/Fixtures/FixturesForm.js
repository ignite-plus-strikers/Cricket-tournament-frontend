import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
 import 'react-datepicker/dist/react-datepicker-cssmodules.css';



class FixturesForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
           team1:"",
           team2:"",
           hometeam:"",
           gametype:"",
           venue:"",
           series:"",
           matchdesc:"",
           matchDateTime:"",
           GMToffset:"",
           livecoverage:"",
           scorer:""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    componentDidMount() {


    }
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
                <a href="#services"><div className="Selected_color">Fixtures</div></a><hr></hr>
                <a href="#clients">Series Master</a><hr></hr>
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
                                    <br></br>
                                    <label>Team1</label>
                                    <Field as="select" name="team1">
                                        <option value="A_team">A_TEAM</option>
                                        <option value="B_team">B_TEAM</option>
                                    </Field><br></br><br></br>

                                    <label>Team2</label>
                                    <Field as="select" name="team2">
                                        <option value="C_team">C_TEAM</option>
                                        <option value="D_team">D_TEAM</option>
                                    </Field><br></br><br></br>

                                    
                                    <label>Home Team</label>
                                    <Field as="select" name="hometeam">
                                        <option value="C_team">C_TEAM</option>
                                        <option value="D_team">D_TEAM</option>
                                    </Field><br></br><br></br>

                                    <label>Game Type</label>
                                    <Field as="select" name="gametype">
                                        <option value="C_team">Friendly match</option>
                                        <option value="D_team"></option>
                                    </Field><br></br><br></br>

                                    <label>Venue</label>
                                    <Field as="select" name="venue">
                                        <option value="C_team">Bangalore</option>
                                        <option value="D_team">Chennai</option>
                                    </Field><br></br><br></br>

                                    <label>Series</label>
                                    <Field as="select" name="series">
                                        <option value="C_team">T20 series</option>
                                        <option value="D_team">Champion county match</option>
                                    </Field><br></br><br></br>

                                    <label>Match Description</label>
                                    <Field className="form-control" type="text" name="matchdesc" /><br></br><br></br>

                                   
                                    <label>Match Date and Time</label>
                                    <DatePicker 
                                        selected={this.state.startDate}
                                        showMonthDropdown
                                        showYearDropdown
                                        name="matchDateTime"
                                        minDate={new Date("1940-01-01")}
                                        maxDate={(new Date("2009-12-31"))}
                                        dropdownMode="select"
                                        onChange={this.handleChange}
                                    ></DatePicker>
                                    <br></br><br></br>

                                    <label>GMT Offset</label>
                                    <Field className="form-control" type="text" name="GMToffset" /><br></br><br></br>

                                    <label>Scorer</label>
                                    <Field as="select" name="scorer">
                                        <option value="Scorer 1">Scorer 1</option>
                                        <option value="Scorer 2">Scorer 2</option>
                                    </Field><br></br><br></br>


                                    <label>Live coverage</label>
                                    <Field as="select" name="livecoverage">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
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

export default FixturesForm