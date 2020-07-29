import axios from 'axios'


const UMPIRE_API_URL = 'http://localhost:8080/cricket-tournament'


class UmpireDataService {

    retrieveAllUmpires() {
        return axios.get(`${UMPIRE_API_URL}/umpires`);
    }
    deleteUmpire(id) {
        return axios.delete(`${UMPIRE_API_URL}/umpire/${id}`);
    }

    retrieveUmpire(id) {
        return axios.get(`${UMPIRE_API_URL}/umpire/${id}`);
    }
    
        updateUmpire(id, umpire) {
            return axios.put(`${UMPIRE_API_URL}/umpire/${id}`, umpire);
        }
      
        createUmpire(umpire) {
            return axios.post(`${UMPIRE_API_URL}/umpire`,umpire);    
        }
}

export default new UmpireDataService()