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
}

export default new PlayerDataService()