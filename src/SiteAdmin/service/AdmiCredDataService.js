import axios from "axios";
import {base_url} from '../../../src/UrlConstant'
const ADMINCRED_API_URL = "http://localhost:8080/cricket-tournament";

class AdminCredDataService {
  retrieveAllAdmin() {
    //return axios.get(`${ADMINCRED_API_URL}/admin-creds`);
    return axios.get(`${base_url}/admin-creds`);
  }

  createAdmin(admin) {
    //return axios.post(`${ADMINCRED_API_URL}/admin-cred`, admin);
    return axios.post(`${base_url}/admin-cred`, admin);
  }

  userRoleByEmail(userbyrole){
    //return axios.post(`${ADMINCRED_API_URL}/user-role`,userbyrole)
    return axios.post(`${base_url}/user-role`,userbyrole)
  }

}

export default new AdminCredDataService();