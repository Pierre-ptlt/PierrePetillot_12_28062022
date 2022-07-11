import axios from "axios";

function GetUserSession(id) {
  return axios.get(`/user/${id}/average-sessions`);
}

export default GetUserSession;