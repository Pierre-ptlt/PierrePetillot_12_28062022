import axios from "axios";

function GetUserInfos(id) {
  return axios.get(`/user/${id}`);
}

export default GetUserInfos;