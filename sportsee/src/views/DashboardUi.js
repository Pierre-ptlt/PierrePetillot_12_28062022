import Header from "../components/Header";
import LateralBar from "../components/LateralBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetUserInfos from "../services/GetData";
import mockData from "../services/MockData";
import "../style/DashboardUi.css";
import Activity from "../components/Activity";
import AverageSession from "../components/AverageSession";
import ActivityRadar from "../components/ActivityRadar";
import Score from "../components/Score";
import UserInfos from "../components/UserInfos";

/**
 * @params none
 * @returns the dashboard ui
 */

function DashboardUi() {
	const { id } = useParams();
	const [name, setName] = useState("");
	const filtered = mockData.USER_MAIN_DATA.filter((item) => item.id == id);

	// data recuperation
	useEffect(() => {
		GetUserInfos(id)
			.then((res) => {
				setName(res.data.data.userInfos.firstName);
			})
			.catch((err) => {
				setName(filtered[0].userInfos.firstName);
				console.log(err);
			});
	}, [id]);

	//render
	return (
		<div className="App">
			<Header />
			<div className="dashboard-body">
				<div className="dashboard-header">
					<h1 className="dashboard-title">
						Bonjour<p className="name">{name}</p>
					</h1>
					<p className="intro">
						Félicitation ! Vous avez explosé vos objectifs hier 👏
					</p>
				</div>
				<div className="dashboard-content">
					<div className="graphs-wrapper">
						<Activity id={id} />
						<div className="little-graphs">
							<AverageSession id={id} />
							<ActivityRadar id={id} />
							<Score id={id} />
						</div>
					</div>
					<div className="user-wrapper">
						<UserInfos id={id} />
					</div>
				</div>
			</div>
			<LateralBar />
		</div>
	);
}

export default DashboardUi;
