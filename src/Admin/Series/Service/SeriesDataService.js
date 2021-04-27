import axios from 'axios'
import {base_url} from '../../../../src/UrlConstant'

const SERIES_API_URL = 'http://localhost:8080/cricket-tournament'


class SeriesDataService {

    retrieveAllSeries() {
        //return axios.get(`${SERIES_API_URL}/series`);
        return axios.get(`${base_url}/series`);
    }
    deleteSeries(id) {
        //return axios.delete(`${SERIES_API_URL}/series/${id}`);
        return axios.delete(`${base_url}/series/${id}`);
    }

    retrieveSeries(id) {
        //return axios.get(`${SERIES_API_URL}/series/${id}`);
        return axios.get(`${base_url}/series/${id}`);
    }
    
        updateSeries(id,series) {
            //return axios.put(`${SERIES_API_URL}/series/${id}`, series);
            return axios.put(`${base_url}/series/${id}`, series);
        }
      
        createSeries(series) {
            //return axios.post(`${SERIES_API_URL}/series`,series);
            return axios.post(`${base_url}/series`,series);    
        }
        createTeam(seriesid,team){
            //return axios.post(`${SERIES_API_URL}/series-teams`,team);
            return axios.post(`${base_url}/series-teams`,team);
        }
        deleteTeam(seriesid,teamid){
            //return axios.delete(`${SERIES_API_URL}/series-teams/${seriesid}/${teamid}`);
            return axios.delete(`${base_url}/series-teams/${seriesid}/${teamid}`);
        }
        retrieveAllTeamsInASeries(seriesid) {
            //return axios.get(`${SERIES_API_URL}/series-teams/${seriesid}`);
            return axios.get(`${base_url}/series-teams/${seriesid}`);
        }
}

export default new SeriesDataService()