import axios from 'axios'


const TEAM_API_URL = 'http://localhost:8080/cricket-tournament'


class TeamDataService {

    retrieveAllTeams() {
        return axios.get(`${TEAM_API_URL}/teams`);
    }
    deleteTeam(id) {
        return axios.delete(`${TEAM_API_URL}/team/${id}`);
    }

    retrieveTeam(id) {
        return axios.get(`${TEAM_API_URL}/team/${id}`);
    }
    
        updateTeam(id,team) {
            return axios.put(`${TEAM_API_URL}/team/${id}`, team);
        }
      
        createTeam(team) {
            return axios.post(`${TEAM_API_URL}/team`,team);    
        }
        createPlayer(teamid,teamplayer){
            return axios.post(`${TEAM_API_URL}/teamplayer`,teamplayer);
        }
        deletePlayer(teamid,playerid){
            return axios.delete(`${TEAM_API_URL}/teamplayer/${teamid}/${playerid}`);
        }
        retrieveAllTeamPlayers() {
            return axios.get(`${TEAM_API_URL}/teamplayers`);
        }
}

export default new TeamDataService()