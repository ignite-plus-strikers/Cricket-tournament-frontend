import axios from 'axios'
import {base_url} from '../../../src/UrlConstant'

const SCORECARD_API_URL = 'http://localhost:8080/cricket-tournament';
const PRE_MATCH_API_URL = 'http://localhost:8080/cricket-tournament'

class ScorecardDataService {

        retrieveBatsmen(id) {
            //return axios.get(`${SCORECARD_API_URL}/batsman-by-match/${id}`);
            return axios.get(`${base_url}/batsman-by-match/${id}`);
        }

        retrieveBowlers(id){
            //return axios.get(`${SCORECARD_API_URL}/bowler-by-match/${id}`);
            return axios.get(`${base_url}/bowler-by-match/${id}`);
        }
        getPreMatchData(id) {
            //return axios.get(`${PRE_MATCH_API_URL}/pre-match/${id}`);
            return axios.get(`${base_url}/pre-match/${id}`);
        }

        createBatsmanInAMatch(batsman){
            //return axios.post(`${SCORECARD_API_URL}/batsman-by-match`,batsman);
            return axios.post(`${base_url}/batsman-by-match`,batsman);
        }

        updateBatsmanInAMatch(matchid, batsmanname, batsman) {
            //return axios.put(`${SCORECARD_API_URL}/batsman-by-match/${matchid}/${batsmanname}`, batsman);
            return axios.put(`${base_url}/batsman-by-match/${matchid}/${batsmanname}`, batsman);
        }

        createBowlerInAMatch(bowler){
            //return axios.post(`${SCORECARD_API_URL}/bowler-by-match`,bowler);
            return axios.post(`${base_url}/bowler-by-match`,bowler);
        }

        updateBowlerInAMatch(matchid, bowlername, bowler) {
            //return axios.put(`${SCORECARD_API_URL}/bowler-by-match/${matchid}/${bowlername}`, bowler);
            return axios.put(`${base_url}/bowler-by-match/${matchid}/${bowlername}`, bowler);
        }

        retrieveAllBatsmenInAMatch(matchid) {
            //return axios.get(`${SCORECARD_API_URL}/batsman-by-match/${matchid}`);
            return axios.get(`${base_url}/batsman-by-match/${matchid}`);
        }
        retrieveAllBowlersInAMatch(matchid) {
            //return axios.get(`${SCORECARD_API_URL}/bowler-by-match/${matchid}`);
            return axios.get(`${base_url}/bowler-by-match/${matchid}`);
        }

        retrieveBowlerByName(matchid,bowlername) {
            //return axios.get(`${SCORECARD_API_URL}/bowler-by-match/${matchid}/${bowlername}`);
            return axios.get(`${base_url}/bowler-by-match/${matchid}/${bowlername}`);
        }


	 createMatchResult(matchresult){
            //return axios.post(`${SCORECARD_API_URL}/match-result`,matchresult);
            return axios.post(`${base_url}/match-result`,matchresult);
        }

        updateMatchResult(matchid,matchresult) {
            //return axios.put(`${SCORECARD_API_URL}/match-result/${matchid}`, matchresult);
            return axios.put(`${base_url}/match-result/${matchid}`, matchresult);
        }

	retrieveMatchResult(matchid) {
            //return axios.get(`${SCORECARD_API_URL}/match-result/${matchid}`);
            return axios.get(`${base_url}/match-result/${matchid}`);
        }
}

export default new ScorecardDataService()