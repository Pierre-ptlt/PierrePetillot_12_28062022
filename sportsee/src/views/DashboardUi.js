import Header from "../components/Header";
import LateralBar from "../components/LateralBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetUserInfos from "../services/GetUserInfos";
// import NotFound from "./404";
import "../style/DashboardUi.css";
import Activity from "../components/Activity";

function DashboardUi() {
	const { id } = useParams();
	const [name, setName] = useState("");

	useEffect(() => {
		GetUserInfos(id)
			.then((res) => {
				setName(res.data.data.userInfos.firstName);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);
	return (
		<div className="App">
			<Header />
			<div className="dashboard-body">
				<h1 className="dashboard-title">
					Bonjour<p className="name">{name}</p>
				</h1>
				<Activity id={id} />
			</div>
			<LateralBar />
		</div>
	);
}

export default DashboardUi;
