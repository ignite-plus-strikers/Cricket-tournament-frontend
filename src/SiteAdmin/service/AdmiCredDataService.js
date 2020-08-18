import axios from "axios";

const ADMINCRED_API_URL = "http://localhost:8080/cricket-tournament";

class AdminCredDataService {
  retrieveAllAdmin() {
    return axios.get(`${ADMINCRED_API_URL}/admin-creds`);
  }

  createAdmin(admin) {
    return axios.post(`${ADMINCRED_API_URL}/admin-cred`, admin);
  }

  userRoleByEmail(userbyrole){
    return axios.post(`${ADMINCRED_API_URL}/user-role`,userbyrole)
  }

}

export default new AdminCredDataService();