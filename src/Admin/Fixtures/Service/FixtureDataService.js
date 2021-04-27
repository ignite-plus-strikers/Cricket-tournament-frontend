import axios from 'axios'
import {base_url} from '../../../../src/UrlConstant'

const FIXTURE_API_URL = 'http://localhost:8080/cricket-tournament'


class FixtureDataService {

    retrieveAllFixtures() {
        //return axios.get(`${FIXTURE_API_URL}/fixtures`);
        return axios.get(`${base_url}/fixtures`)
    }
    deleteFixture(id) {
        //return axios.delete(`${FIXTURE_API_URL}/fixture/${id}`);
        return axios.delete(`${base_url}/fixture/${id}`)
    }

    retrieveFixture(id) {
        //return axios.get(`${FIXTURE_API_URL}/fixture/${id}`);
        return axios.get(`${base_url}/fixture/${id}`)
    }
    
        updateFixture(id, fixture) {
            //return axios.put(`${FIXTURE_API_URL}/fixture/${id}`, fixture);
            return axios.put(`${base_url}/fixture/${id}`,fixture)
        }
      
        createFixture(fixture) {
            //return axios.post(`${FIXTURE_API_URL}/fixture`,fixture); 
            return axios.post(`${base_url}/fixture`,fixture)   
        }
}

export default new FixtureDataService()