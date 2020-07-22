import React, { Component } from 'react'
import './Series.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../App.css';


class AddTeams extends Component {

    constructor(props) {
        super(props)
        this.state = {
            teams: [],
            message: null
        }
       
       
    }


    render() {
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay"><div className="Selected_color">Series Mastar</div></a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                <center>
                    <h2>Series Name</h2>
                </center>
               <div className="addTeamsForm">
                   <Formik>
                       <Form>
                           <br/><br/>
                                <label>Select Team : </label>
                                <Field as="select">
                                    <option value="M">Type to search dropdown</option>
                                </Field><br/><br/><br/>
                                <button className="btn warning marginsave" type="submit">Add</button>
                       </Form>
                   </Formik>
               </div>
   
           
            </div>
        )
    }
    
}

export default AddTeams