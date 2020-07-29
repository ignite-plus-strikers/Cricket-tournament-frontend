import axios from 'axios'


const FIXTURE_API_URL = 'http://localhost:8080/cricket-tournament'


class FixtureDataService {

    retrieveAllFixtures() {
        return axios.get(`${FIXTURE_API_URL}/fixtures`);
    }
    deleteFixture(id) {
        return axios.delete(`${FIXTURE_API_URL}/fixture/${id}`);
    }

    retrieveFixture(id) {
        return axios.get(`${FIXTURE_API_URL}/fixture/${id}`);
    }
    
        updateFixture(id, fixture) {
            return axios.put(`${FIXTURE_API_URL}/fixture/${id}`, fixture);
        }
      
        createFixture(fixture) {
            return axios.post(`${FIXTURE_API_URL}/fixture`,fixture);    
        }
}

export default new FixtureDataService()