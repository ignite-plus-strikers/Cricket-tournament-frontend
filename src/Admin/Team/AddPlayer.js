import React, { Component } from 'react'
import './Team.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../App.css';


class AddPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            players: [],
            message: null
        }
       
       
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
                <center>
                    <h2>Team Name</h2>
                </center>
               <div className="addPlayerForm">
                   <Formik>
                       <Form>
                           <br/><br/>
                                <label>Select Player : </label>
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

export default AddPlayer