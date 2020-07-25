import React, { Component } from 'react'
import './Team.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../App.css';
import PlayerDataService from '../../Admin/Player/Service/PlayerDataService';
import TeamDataService from './Service/TeamDataService';


class AddPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            team_id: this.props.match.params.id,
            players: [],
            teams:[],
            message: null,
            selected:'',
            player_id:'',
            tname:""
            
        }
        this.refreshPlayers = this.refreshPlayers.bind(this)
        this.getTeamName=this.getTeamName.bind(this)
        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {
        this.refreshPlayers();
        this.getTeamName();
    }

    getTeamName(){
        TeamDataService.retrieveAllTeams()
        .then(
            response => {
                console.log(response);
                this.setState({ teams : response.data })
            }
        )
        

    }

    refreshPlayers() {
        PlayerDataService.retrieveAllPlayers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ players: response.data })
                }
            )
    }
    onSubmit(values){
        let player_first_name
        let player_last_name
        let player_initials
        this.setState({player_id:values.selected})
        this.state.players.map(p =>{
            if(p.player_id===this.state.player_id){
                player_first_name=p.first_name;
                player_last_name=p.last_name;
                player_initials=p.player_initials;
                }
        }
           
        )
        
        
        var teamplayer = {
            team_id:this.state.team_id,
            player_id:values.selected,
            player_first_name: player_first_name,
            player_last_name:player_last_name,
            player_initials: player_initials
        }
       
        let teamid=this.state.team_id
            TeamDataService.createPlayer(teamid,teamplayer)
                .then(() => this.props.history.push(`/admin/dashboard/TeamShowPlayer/${teamid}`))
        console.log(values);
    }

    
    validate(values) {
        let errors = {};
        if (!values.selected) {
            errors.selected = 'Select Player'
        } 

        return errors

    }



    render() {
        let selected=this.state.selected
        let teamID=this.state.team_id
        let teamname=this.state.tname
        return (
            <div>
                <div className="sidenav">
                <a href="/admin/dashboard">Dashboard</a><hr></hr>
                <a href="/admin/dashboard/FixtureDisplay">Fixtures</a><hr></hr>
                <a href="/admin/dashboard/SeriesDisplay">Series Master</a><hr></hr>
                <a href="/admin/dashboard/TeamDisplay"><div className="Selected_color">Team Master</div></a><hr></hr>
                <a href="/admin/dashboard/PlayerDisplay">Player Master</a><hr></hr>
                </div>
                
                {this.state.teams.map(team =>{
                    if(team.team_id===teamID){
                        teamname=team.tname
                        }
                }
                   
                )
                }
                <center>
                    <h2>{teamname}</h2>
                </center>
               <div className="addPlayerForm">
                   <Formik
                   initialValues={{selected}}
                   onSubmit={this.onSubmit}
                   validateOnChange={false}
                   validateOnBlur={false}
                   validate={this.validate}
                  
                    >
                       <Form>
                                <ErrorMessage name="selected" component="div"
                                        className=" errormsg alert warning" /> 
                                <br/><br/>
                                <label>Select Player : </label>
                                <Field as="select" name="selected">
                                <option value="">-----Select Player-----</option>
                                {
                                this.state.players.map(
                                    player =>
                                    <option value={player.player_id}>{player.first_name} {player.last_name} {player.player_initials}</option>
                                            
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

export default AddPlayer