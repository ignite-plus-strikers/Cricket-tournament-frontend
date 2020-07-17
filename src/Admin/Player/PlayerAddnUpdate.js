import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PlayerDataService from './Service/PlayerDataService';




class PlayerAddnUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player_id: this.props.match.params.id,
            p_firstname:'',
            p_lastname:'',
            p_gender:'',
            p_dob:'',
            p_category:'',
            p_nationality:'',
            p_batting_style:'',
            p_bowling_style:'',
            player_role:'',
            retired_or_playing:''
        }
        this.onSubmit = this.onSubmit.bind(this)

    }
    componentDidMount() {

        console.log(this.state.player_id)
        if (this.state.player_id == -1) {
            return
        }

        PlayerDataService.retrievePlayer(this.state.player_id)
            .then(response => this.setState({
                p_firstname: response.data.p_firstname,
                p_lastname:response.data.p_lastname,
                p_gender:response.data.p_gender,
                p_dob :response.data.p_dob,
                p_category:response.data.p_category,
                p_nationality:response.data.p_nationality,
                p_batting_style:response.data.p_batting_style,
                p_bowling_style :response.data.p_bowling_style,
                player_role :response.data.player_role,
                retired_or_playing :response.data.retired_or_playing

            }))
    }
    onSubmit(values) {
        

        let player = {
            player_id: this.state.player_id,
            p_firstname: values.p_firstname,
            p_lastname: values.p_lastname,
            p_gender:values.p_gender,
            p_dob:values.p_dob,
            p_category:values.p_category,
            p_nationality:values.p_nationality,
            p_batting_style:values.p_batting_style,
            p_bowling_style:values.p_bowling_style,
            player_role:values.player_role,
            retired_or_playing:values.retired_or_playing
        }

        if (this.state.player_id === -1) {
            PlayerDataService.createPlayer(player)
                .then(() => this.props.history.push('/admin/dashboard/PlayerDisplay'))
        } else {
            PlayerDataService.updatePlayer(this.state.player_id, player)
                .then(() => this.props.history.push('/admin/dashboard/PlayerDisplay'))
        }

        console.log(values);
    }
    render() {

        let p_firstname = this.state.p_firstname
        let player_id = this.state.player_id
        let p_lastname = this.state.p_lastname
        let p_gender = this.state.p_gender
        let p_dob= this.state.p_dob
        let p_category = this.state.p_category
        let p_nationality= this.state.p_nationality
        let p_batting_style = this.state.p_batting_style
        let p_bowling_style= this.state.p_bowling_style
        let player_role = this.state.player_role
        let retired_or_playing = this.state.retired_or_playing
        
        return (
            <div>
                 <div class="sidenav">
                <a href="#about">Dashboard</a><hr></hr>
                <a href="#services">Fixtures</a><hr></hr>
                <a href="#clients">Series Mastar</a><hr></hr>
                <a href="#contact">Team Master</a><hr></hr>
                <a href="#contact"><div className="Selected_color">Player Master</div></a><hr></hr>
                </div>
                <div className="playerform">
            <Formik
                    initialValues={{ player_id,p_firstname,p_lastname,p_gender,p_dob, p_category,p_nationality, p_batting_style,p_bowling_style,player_role ,retired_or_playing}}
                    onSubmit={this.onSubmit}
                    enableReinitialize={true}>
                    {
                        (props) => (
                            <Form>
                                
                                    <label>Player Id</label>
                                    <Field className="form-control" type="text" name="player_id" disabled /><br></br><br></br>

                                    <label>First Name</label>
                                    <Field className="form-control" type="text" name="p_firstname" /><br></br><br></br>

                                    <label>Last Name</label>
                                    <Field className="form-control" type="text" name="p_lastname" /><br></br><br></br>

                                    <label>Gender</label>
                                    <Field as="select" name="p_gender">
                                        <option value="M">M</option>
                                        <option value="F">F</option>
                                    </Field><br></br><br></br>

                                    <label>Date of Birth</label>
                                    <Field className="form-control" type="text" name="p_dob" /><br></br><br></br>

                                    <label>Visual Classification</label>
                                    <Field as="select" name="p_category">
                                        <option value="B1">B1</option>
                                        <option value="B2">B2</option>
                                        <option value="B3">B3</option>
                                    </Field><br></br><br></br>

                                    <label>Nationality</label>
                                    <Field className="form-control" type="text" name="p_nationality" /><br></br><br></br>

                                    <label>Batting style</label>
                                    <Field as="select" name="p_batting_style">
                                        <option value="right-handed-batsman">right-handed-batsman</option>
                                        <option value="left-handed-batsman">left-handed-batsman</option>
                                    </Field><br></br><br></br>

                                    <label>Bowling style</label>
                                    <Field as="select" name="p_bowling_style">
                                        <option value="left-handed-bowler">left-handed-bowler</option>
                                        <option value="right-handed-bowler">right-handed-bowler</option>
                                    </Field><br></br><br></br>

                                    <label>Player role</label>
                                    <Field className="form-control" type="text" name="player_role" /><br></br><br></br>

                                    <label>Retired or Playing</label>
                                    <Field as="select" name="retired_or_playing">
                                        <option value="retired">retired</option>
                                        <option value="playing">playing</option>
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

export default PlayerAddnUpdate