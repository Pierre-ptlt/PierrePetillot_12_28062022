import axios from "axios";

function getUserActivity(id) {
  return axios.get(`/user/${id}/activity`);
}

export default getUserActivity;