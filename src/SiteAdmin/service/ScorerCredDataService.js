import axios from "axios";
import {base_url} from '../../../src/UrlConstant'

const SCORERCRED_API_URL = "http://localhost:8080/cricket-tournament";

class ScorerCredDataService {
  retrieveAllScorer() {
    //return axios.get(`${SCORERCRED_API_URL}/scorer-creds`);
    return axios.get(`${base_url}/scorer-creds`);
  }

  createScorer(scorer) {
    //return axios.post(`${SCORERCRED_API_URL}/scorer-cred`, scorer);
    return axios.post(`${base_url}/scorer-cred`, scorer);
  }

  userRoleByEmail(userbyrole){
    //return axios.post(`${SCORERCRED_API_URL}/user-role`,userbyrole)
    return axios.post(`${base_url}/user-role`,userbyrole)
  }
}

export default new ScorerCredDataService();