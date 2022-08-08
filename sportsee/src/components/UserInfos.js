import "../style/UserInfos.css";
import UserInfosItem from "./UserInfosItem";
import getUserInfos from "../services/GetUserInfos";
import { useEffect } from "react";
import { useState } from "react";

function UserInfos(props) {
	const [data, setData] = useState(null);

	useEffect(() => {
		getUserInfos(props.id)
			.then((res) => {
				setData(res.data.data.keyData);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	console.log(data);
	// useEffect(() => {
	//     if (data) {
	//         console.log(data);
	//     }
	// }, [data]);

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
