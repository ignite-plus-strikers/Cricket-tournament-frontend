import axios from 'axios'


const PLAYER_API_URL = 'http://localhost:8081/api'


class PlayerDataService {

    retrieveAllPlayers() {
        return axios.get(`${PLAYER_API_URL}/players`);
    }
    deletePlayer(id) {
        return axios.delete(`${PLAYER_API_URL}/player/${id}`);
    }

    retrievePlayer(id) {
        return axios.get(`${PLAYER_API_URL}/player/${id}`);
    }
    
        updatePlayer(id, player) {
            return axios.put(`${PLAYER_API_URL}/player/${id}`, player);
        }
      
        createPlayer(player) {
            return axios.post(`${PLAYER_API_URL}/player`,player);
        }
}

export default new PlayerDataService()