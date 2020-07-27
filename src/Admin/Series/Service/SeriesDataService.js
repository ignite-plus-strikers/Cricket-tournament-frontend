import axios from 'axios'


const SERIES_API_URL = 'http://localhost:8080/cricket-tournament'


class SeriesDataService {

    retrieveAllSeries() {
        return axios.get(`${SERIES_API_URL}/series`);
    }
    deleteSeries(id) {
        return axios.delete(`${SERIES_API_URL}/series/${id}`);
    }

    retrieveSeries(id) {
        return axios.get(`${SERIES_API_URL}/series/${id}`);
    }
    
        updateSeries(id,series) {
            return axios.put(`${SERIES_API_URL}/series/${id}`, series);
        }
      
        createSeries(series) {
            return axios.post(`${SERIES_API_URL}/series`,series);    
        }
        createTeam(seriesid,team){
            return axios.post(`${SERIES_API_URL}/series-teams`,team);
        }
        deleteTeam(seriesid,teamid){
            return axios.delete(`${SERIES_API_URL}/series-teams/${seriesid}/${teamid}`);
        }
        retrieveAllTeamsInASeries(seriesid) {
            return axios.get(`${SERIES_API_URL}/series-teams/${seriesid}`);
        }
}

export default new SeriesDataService()