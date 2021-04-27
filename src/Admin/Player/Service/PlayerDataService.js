import axios from 'axios'
import {base_url} from '../../../../src/UrlConstant'

const PLAYER_API_URL = 'http://localhost:8080/cricket-tournament'


class PlayerDataService {

    retrieveAllPlayers() {
        //return axios.get(`${PLAYER_API_URL}/players`);
        return axios.get(`${base_url}/players`);
    }
    deletePlayer(id) {
        //return axios.delete(`${PLAYER_API_URL}/player/${id}`);
        return axios.delete(`${base_url}/player/${id}`);
    }

    retrievePlayer(id) {
        //return axios.get(`${PLAYER_API_URL}/player/${id}`);
        return axios.get(`${base_url}/player/${id}`);
    }
    
        updatePlayer(id, player) {
            //return axios.put(`${PLAYER_API_URL}/player/${id}`, player);
            return axios.put(`${base_url}/player/${id}`, player);
        }
      
        createPlayer(player) {
            //return axios.post(`${PLAYER_API_URL}/player`,player);   
            return axios.post(`${base_url}/player`,player); 
        }
}

export default new PlayerDataService()