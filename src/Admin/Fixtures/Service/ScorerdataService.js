import axios from 'axios'


const SCORER_API_URL = 'http://localhost:8080/cricket-tournament'


class ScorerDataService {

    retrieveAllScorers() {
        return axios.get(`${SCORER_API_URL}/scorers`);
    }
    
}

export default new ScorerDataService()