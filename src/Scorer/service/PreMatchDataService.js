import axios from 'axios'
import {base_url} from '../../../src/UrlConstant'

const PREMATCH_API_URL = 'http://localhost:8080/cricket-tournament';
const UMPIRE_API_URL = 'http://localhost:8080/cricket-tournament';
const REFEREE_API_URL = 'http://localhost:8080/cricket-tournament';
const FIXTURE_API_URL = 'http://localhost:8080/cricket-tournament';
const TEAM_API_URL = 'http://localhost:8080/cricket-tournament';



class PreMatchDataService {

    retrieveAllPreMatches() {
        //return axios.get(`${PREMATCH_API_URL}/pre-matches`);
        return axios.get(`${base_url}/pre-matches`);
    }
      
   createPreMatch(fixture_id,fixture) {
           //return axios.post(`${PREMATCH_API_URL}/pre-match`,fixture); 
           return axios.post(`${base_url}/pre-match`,fixture);    
        }
   
    retrieveAllUmpires() {
        //return axios.get(`${UMPIRE_API_URL}/umpires`);
        return axios.get(`${base_url}/umpires`);
        }

    retrieveAllReferees() {
        //return axios.get(`${REFEREE_API_URL}/referees`);
        return axios.get(`${base_url}/referees`);
        }
    retrieveFixture(id) {
        //return axios.get(`${FIXTURE_API_URL}/fixture/${id}`);
        return axios.get(`${base_url}/fixture/${id}`);
        }
    retrieveAllTeams() {
     //return axios.get(`${TEAM_API_URL}/teams`);
     return axios.get(`${base_url}/teams`);
        }
    retrieveAllTeamPlayers(teamid) {
        //return axios.get(`${TEAM_API_URL}/teamplayer/${teamid}`);
        return axios.get(`${base_url}/teamplayer/${teamid}`);
        }
    
}

export default new PreMatchDataService()