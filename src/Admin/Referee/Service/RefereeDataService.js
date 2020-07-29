import axios from 'axios'


const REFEREE_API_URL = 'http://localhost:8080/cricket-tournament'


class RefereeDataService {

    retrieveAllReferees() {
        return axios.get(`${REFEREE_API_URL}/referees`);
    }
    deleteReferee(id) {
        return axios.delete(`${REFEREE_API_URL}/referee/${id}`);
    }

    retrieveReferee(id) {
        return axios.get(`${REFEREE_API_URL}/referee/${id}`);
    }
    
        updateReferee(id, referee) {
            return axios.put(`${REFEREE_API_URL}/referee/${id}`, referee);
        }
      
        createReferee(referee) {
            return axios.post(`${REFEREE_API_URL}/referee`,referee);    
        }
}

export default new RefereeDataService()