import axios from "axios";

function getUserSession(id) {
	return axios.get(`/user/${id}/average-sessions`);
}

export default getUserSession;
