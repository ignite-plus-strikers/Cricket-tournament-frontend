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
        l
        return (
            <div><br></br><br></br><br></br>
                <h3>Course</h3>
                <div>{player_id}</div>
                <div>{p_firstname}</div>
                <div>{p_lastname}</div>
                <div>{p_gender}</div>
                <div>{p_dob}</div>
                <div>{p_category}</div>
                <div>{p_nationality}</div>
                <div>{p_batting_style}</div>
                <div>{p_bowling_style}</div>
                <div>{player_role}</div>
                <div>{retired_or_playing}</div>
            </div>
        )
    }

}

export default PlayerAddnUpdate