import axios from 'axios'
import {base_url} from '../../../../src/UrlConstant'

const REFEREE_API_URL = 'http://localhost:8080/cricket-tournament'


class RefereeDataService {

    retrieveAllReferees() {
        //return axios.get(`${REFEREE_API_URL}/referees`);
        return axios.get(`${base_url}/referees`);
    }
    deleteReferee(id) {
        //return axios.delete(`${REFEREE_API_URL}/referee/${id}`);
        return axios.delete(`${base_url}/referee/${id}`);
    }

    retrieveReferee(id) {
        //return axios.get(`${REFEREE_API_URL}/referee/${id}`);
        return axios.get(`${base_url}/referee/${id}`);
    }
    
        updateReferee(id, referee) {
            //return axios.put(`${REFEREE_API_URL}/referee/${id}`, referee);
            return axios.put(`${base_url}/referee/${id}`, referee);
        }
      
        createReferee(referee) {
            //return axios.post(`${REFEREE_API_URL}/referee`,referee); 
            return axios.post(`${base_url}/referee`,referee);    
        }
}

export default new RefereeDataService()