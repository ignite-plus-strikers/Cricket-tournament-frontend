import axios from 'axios'


const PREMATCH_API_URL = 'http://localhost:8080/cricket-tournament';
const UMPIRE_API_URL = 'http://localhost:8080/cricket-tournament';
const REFEREE_API_URL = 'http://localhost:8080/cricket-tournament';
const FIXTURE_API_URL = 'http://localhost:8080/cricket-tournament';
const TEAM_API_URL = 'http://localhost:8080/cricket-tournament';



class PreMatchDataService {

    retrieveAllPreMatches() {
        return axios.get(`${PREMATCH_API_URL}/pre-matches`);
    }
      
   createPreMatch(fixture_id,fixture) {
           return axios.post(`${PREMATCH_API_URL}/pre-match`,fixture);    
        }
   
    retrieveAllUmpires() {
        return axios.get(`${UMPIRE_API_URL}/umpires`);
        }

    retrieveAllReferees() {
        return axios.get(`${REFEREE_API_URL}/referees`);
        }
    retrieveFixture(id) {
        return axios.get(`${FIXTURE_API_URL}/fixture/${id}`);
        }
    retrieveAllTeams() {
     return axios.get(`${TEAM_API_URL}/teams`);
        }
    retrieveAllTeamPlayers(teamid) {
        return axios.get(`${TEAM_API_URL}/teamplayer/${teamid}`);
        }
    
}

export default new PreMatchDataService()