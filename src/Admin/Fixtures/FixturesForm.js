import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FixtureDataService from './Service/FixtureDataService';
import TeamDataService from '../Team/Service/TeamDataService';
import SeriesDataService from '../Series/Service/SeriesDataService';
import ScorerDataService from './Service/ScorerdataService';

class FixturesForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
           team1:"",
           team2:"",
           home_team:"",
           match_type:"National",
           venue:"",
           series_name:"",
           series_id:"",
           description:"",
           fixture_date_time:"",
           gmt_offset:"",
           live_coverage:"Yes",
           scorer_id:"",
           scorer_name:"",
           teams:[],
           series:[],
           scorers:[]
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.refreshTeams = this.refreshTeams.bind(this)
        this.refreshSeries = this.refreshSeries.bind(this)
        this.refreshScorers = this.refreshScorers.bind(this)
        
    }
    componentDidMount() {
        this.refreshTeams();
        this.refreshSeries();
        this.refreshScorers();
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
    refreshSeries() {
        SeriesDataService.retrieveAllSeries()
            .then(
                response => {
                    console.log(response);
                    this.setState({ series: response.data })
                }
            )
            
    }
    refreshScorers() {
        ScorerDataService.retrieveAllScorers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ scorers: response.data })
                }
            )
            
    }
    
    validate(values) {
       
    }
    
    onSubmit(values) {
        let seriesName
        let scorer_name
        

        this.setState({series_id:values.series_id})
        this.state.series.map(s =>{
            if(s.series_id===this.state.series_id){
               seriesName=s.series_short_name
                }
        }
           
        )


        this.setState({scorer_id:values.scorer_id})
        this.state.scorers.map(s =>{
            if(s.scorer_id===this.state.scorer_id){
               scorer_name=s.firstname+" "+s.middlename+" "+s.lastname
                }
        }
           
        )

        var fixture={
            team1:values.team1,
            team2:values.team2,
            home_team:values.home_team ,
            series_id:values.series_id ,
            series_name:seriesName ,
            fixture_date_time:values.fixture_date_time ,
            match_type: values.match_type,
            description: values.description,
            live_coverage:values.live_coverage ,
            venue:values.venue ,
            scorer_id:values.scorer_id ,
            scorer_name:scorer_name ,
            gmt_offset:values.gmt_offset
        }
        FixtureDataService.createFixture(fixture)
        .then(() => this.props.history.push('/admin/dashboard/FixtureDisplay'))
        console.log(fixture);
        
    }
    render() {
        let team1=this.state.team1
        let team2=this.state.team2
        let home_team=this.state.home_team
        let match_type=this.state.match_type
        let venue=this.state.venue
        let series_id=this.state.series_id
        let description=this.state.description
        let fixture_date_time=this.state.fixture_date_time
        let gmt_offset=this.state.gmt_offset
        let scorer_id=this.state.scorer_id
        let live_coverage=this.state.live_coverage

        return (
            <div>
        <div className="playerform">
            <Formik
                    initialValues={{team1,team2,home_team, match_type,venue,series_id,description,fixture_date_time,gmt_offset,scorer_id,live_coverage}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>     
                                    <br></br>
                                    <label>Team 1</label>
                                    <Field as="select" name="team1">
                                <option value="">-----Select Team1-----</option>
                                {
                                this.state.teams.map(
                                    t =>
                                    <option value={t.tname}>{t.tname}</option>
                                            
                                )
                            }  
                                </Field><br/><br/>

                                <label>Team 2</label>
                                    <Field as="select" name="team2">
                                <option value="">-----Select Team2-----</option>
                                {
                                this.state.teams.map(
                                    t =>
                                    <option value={t.tname}>{t.tname}</option>
                                            
                                )
                            }  
                                </Field><br/><br/>

                                <label>Home Team</label>
                                    <Field as="select" name="home_team">
                                <option value="">-----Select Home Team-----</option>
                                {
                                this.state.teams.map(
                                    t =>
                                    <option value={t.tname}>{t.tname}</option>
                                            
                                )
                            }  
                                </Field><br/><br/>

                                   

                                    <label>Match Type</label>
                                    <Field as="select" name="match_type">
                                    <option value="National">National</option>
                                    <option value="Regional">Regional</option>
                                    <option value="Zonal">Zonal</option>
                                    <option value="International">International</option>
                                    <option value="Friendly match">Friendly match</option>
                                    </Field><br></br><br></br>

                                    <label>Venue</label>
                                    <Field className="form-control" type="text" name="venue" /><br></br><br></br>


                                    <label>Series</label>
                                    <Field as="select" name="series_id">
                                <option value="">-----Select series-----</option>
                                {
                                this.state.series.map(
                                    s =>
                                    <option value={s.series_id}>{s.series_short_name}</option>
                                            
                                )
                            }  
                                </Field><br/><br/>

                                    <label>Match Description</label>
                                    <Field className="form-control" type="text" name="description" /><br></br><br></br>

                                   
                                    <label>Match Date and Time</label>
                                    <Field className="form-control" type="text" name="fixture_date_time" /><br></br><br></br>
                                    

                                    <label>GMT Offset</label>
                                    <Field className="form-control" type="text" name="gmt_offset" /><br></br><br></br>

                                    <label>Scorer</label>
                                    <Field as="select" name="scorer_id">
                                <option value="">-----Select scorer-----</option>
                                {
                                this.state.scorers.map(
                                    s =>
                                    <option value={s.scorer_id}>{s.firstname} {s.middlename} {s.lastname}</option>
                                            
                                )
                            }  
                                </Field><br/><br/>


                                    <label>Live coverage</label>
                                    <Field as="select" name="live_coverage">
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