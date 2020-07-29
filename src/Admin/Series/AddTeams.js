import React, { Component } from 'react'
import './Series.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../App.css';
import TeamDataService from '../Team/Service/TeamDataService';
import SeriesDataService from './Service/SeriesDataService';


class AddTeams extends Component {

    constructor(props) {
        super(props)
        this.state = {
            series_id: this.props.match.params.id,
            teams: [],
            series:[],
            message: null,
            selected:'',
            team_id:'',
            series_name:""
            
        }
        this.refreshTeams = this.refreshTeams.bind(this)
        this.getSeriesName=this.getSeriesName.bind(this)
        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
       
    }
    componentDidMount() {
        this.refreshTeams();
        this.getSeriesName();
    }

    getSeriesName(){
        SeriesDataService.retrieveAllSeries()
        .then(
            response => {
                console.log(response);
                this.setState({ series : response.data })
            }
        )
        

    }

    refreshTeams() {
        TeamDataService.retrieveAllTeams()
            .then(
                response => {
                    console.log(response);
                    this.setState({ teams: response.data })
                }
            )
    }
    onSubmit(values){
        let team_name
        this.setState({team_id:values.selected})
        this.state.teams.map(t =>{
            if(t.team_id===this.state.team_id){
                team_name=t.tname;
               
                }
        }
           
        )
        
        
        var series_teams = {
            series_id:this.state.series_id,
            team_id:values.selected,
            team_name:team_name
        }
       
        let seriesid=this.state.series_id
            SeriesDataService.createTeam(seriesid,series_teams)
                .then(() => this.props.history.push(`/admin/dashboard/SeriesShowTeam/${seriesid}`))
        console.log(values);
    }

    
    validate(values) {
        let errors = {};
        if (!values.selected) {
            errors.selected = 'Select Team'
        } 

        return errors

    }




    render() {
        let selected=this.state.selected
        let seriesID=this.state.series_id
        let seriesname=this.state.series_name
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay"><div className="Selected_color">Series Master</div></a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay">Team Master</a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                <a href="/admin/dashboard/UmpireDisplay">Umpire Master</a><hr></hr>
                <a href="/admin/dashboard/RefereeDisplay">Match Referee</a><hr></hr>
                </div>
                {this.state.series.map(s =>{
                    if(s.series_id===seriesID){
                        seriesname=s.series_name
                        }
                }
                   
                )
                }
                <center>
                    <h2>{seriesname}</h2>
                </center>
               <div className="addTeamsForm">
                   <Formik
                    initialValues={{selected}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}>
                       <Form>
                           <br/>
                                <ErrorMessage name="selected" component="div"
                                        className=" errormsg alert warning" /> 
                                <br/><br/>
                                <label>Select Team : </label>
                                <Field as="select" name="selected">
                                <option value="">-----Select Team-----</option>
                                {
                                this.state.teams.map(
                                    team =>
                                    <option value={team.team_id}>{team.tname}</option>
                                            
                                )
                            }
                                    
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