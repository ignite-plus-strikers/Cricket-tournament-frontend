import axios from "axios";

const SCORERCRED_API_URL = "http://localhost:8080/cricket-tournament";

class ScorerCredDataService {
  retrieveAllScorer() {
    return axios.get(`${SCORERCRED_API_URL}/scorer-creds`);
  }

  createScorer(scorer) {
    return axios.post(`${SCORERCRED_API_URL}/scorer-cred`, scorer);
  }

  userRoleByEmail(userbyrole){
    return axios.post(`${SCORERCRED_API_URL}/user-role`,userbyrole)
  }
}

export default new ScorerCredDataService();