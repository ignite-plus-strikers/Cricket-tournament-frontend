import axios from 'axios'
import {base_url} from '../../../../src/UrlConstant'

const UMPIRE_API_URL = 'http://localhost:8080/cricket-tournament'


class UmpireDataService {

    retrieveAllUmpires() {
        //return axios.get(`${UMPIRE_API_URL}/umpires`);
        return axios.get(`${base_url}/umpires`);
    }
    deleteUmpire(id) {
        //return axios.delete(`${UMPIRE_API_URL}/umpire/${id}`);
        return axios.delete(`${base_url}/umpire/${id}`);
    }

    retrieveUmpire(id) {
        //return axios.get(`${UMPIRE_API_URL}/umpire/${id}`);
        return axios.get(`${base_url}/umpire/${id}`);
    }
    
        updateUmpire(id, umpire) {
            //return axios.put(`${UMPIRE_API_URL}/umpire/${id}`, umpire);
            return axios.put(`${base_url}/umpire/${id}`, umpire);
        }
      
        createUmpire(umpire) {
            //return axios.post(`${UMPIRE_API_URL}/umpire`,umpire);  
            return axios.post(`${base_url}/umpire`,umpire);    
        }
}

export default new UmpireDataService()