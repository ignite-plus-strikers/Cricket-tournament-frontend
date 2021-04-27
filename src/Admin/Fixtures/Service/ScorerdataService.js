import axios from 'axios'
import {base_url} from '../../../../src/UrlConstant'

const SCORER_API_URL = 'http://localhost:8080/cricket-tournament'


class ScorerDataService {

    // retrieveAllScorers() {
    //     return axios.get(`${SCORER_API_URL}/scorers`);
    //  return axios.get(`${base_url}/scorers`)
    // }
    
    retrieveAllScorers() {
        //return axios.get(`${SCORER_API_URL}/scorer-creds`);
        return axios.get(`${base_url}/scorer-creds`)
    }
    
}

export default new ScorerDataService()