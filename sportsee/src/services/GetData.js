import axios from "axios";

function GetData(id, type) {
	const url = type ? `/user/${id}/${type}` : `/user/${id}`;

	return axios.get(url);
}

export default GetData;
