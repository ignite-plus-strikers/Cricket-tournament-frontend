import axios from 'axios'


const SCORER_API_URL = 'http://localhost:8080/cricket-tournament'


class ScorerDataService {

    // retrieveAllScorers() {
    //     return axios.get(`${SCORER_API_URL}/scorers`);
    // }
    retrieveAllScorers() {
        return axios.get(`${SCORER_API_URL}/scorer-creds`);
    }
    
}

export default new ScorerDataService()