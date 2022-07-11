import axios from "axios";

function GetUserPerformance(id) {
  return axios.get(`/user/${id}/performance`);
}

export default GetUserPerformance;