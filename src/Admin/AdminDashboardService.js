import axios from 'axios'

const DASHBOARD_API_URL = 'http://localhost:8081/cricket-tournament'

class AdminDashBoardService{
    retrieveCounters(){
        return axios.get(`${DASHBOARD_API_URL}/counters`);
    }

}

export default new AdminDashBoardService()