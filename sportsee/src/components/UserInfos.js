import "../style/UserInfos.css";
import UserInfosItem from "./UserInfosItem";
import mockData from "../services/MockData";
import getUserInfos from "../services/GetData";
import { useEffect } from "react";
import { useState } from "react";

/**
 *
 * @param {int} props.id - user id
 * @returns the infos components
 */

function UserInfos(props) {
	const [data, setData] = useState(null);
	const filtered = mockData.USER_MAIN_DATA.filter(
		(item) => item.id == props.id
	);

	// data recuperation
	useEffect(() => {
		getUserInfos(props.id)
			.then((res) => {
				setData(res.data.data.keyData);
			})
			.catch((err) => {
				setData(filtered[0].keyData);
				console.log(err);
			});
	}, []);

	// render
	if (data) {
		return (
			<div className="user-infos-wrapper">
				<UserInfosItem number="1" data={data.calorieCount} />
				<UserInfosItem number="2" data={data.proteinCount} />
				<UserInfosItem number="3" data={data.carbohydrateCount} />
				<UserInfosItem number="4" data={data.lipidCount} />
			</div>
		);
	}
	return <div></div>;
}

export default UserInfos;
