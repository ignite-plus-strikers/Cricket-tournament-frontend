import axios from 'axios'
import {base_url} from '../../../../src/UrlConstant'

const TEAM_API_URL = 'http://localhost:8080/cricket-tournament'


class TeamDataService {

    retrieveAllTeams() {
        //return axios.get(`${TEAM_API_URL}/teams`);
        return axios.get(`${base_url}/teams`);
    }
    deleteTeam(id) {
        //return axios.delete(`${TEAM_API_URL}/team/${id}`);
        return axios.delete(`${base_url}/team/${id}`);
    }

    retrieveTeam(id) {
        //return axios.get(`${TEAM_API_URL}/team/${id}`);
        return axios.get(`${base_url}/team/${id}`);
    }
    
        updateTeam(id,team) {
            //return axios.put(`${TEAM_API_URL}/team/${id}`, team);
            return axios.put(`${base_url}/team/${id}`, team);
        }
      
        createTeam(team) {
            //return axios.post(`${TEAM_API_URL}/team`,team); 
            return axios.post(`${base_url}/team`,team);    
        }
        createPlayer(teamid,teamplayer){
            //return axios.post(`${TEAM_API_URL}/teamplayer`,teamplayer);
            return axios.post(`${base_url}/teamplayer`,teamplayer);
        }
        deletePlayer(teamid,playerid){
            //return axios.delete(`${TEAM_API_URL}/teamplayer/${teamid}/${playerid}`);
            return axios.delete(`${base_url}/teamplayer/${teamid}/${playerid}`);
        }

        retrieveAllTeamPlayers(teamid) {
            //return axios.get(`${TEAM_API_URL}/teamplayer/${teamid}`);
            return axios.get(`${base_url}/teamplayer/${teamid}`);
        }
}

export default new TeamDataService()