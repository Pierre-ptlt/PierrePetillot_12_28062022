import getUserActivity from "../services/GetUserActivity";
import "../style/Activity.css";
import { useState, PureComponent, useEffect } from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function Activity(props) {
	const [data, setData] = useState(null);

	useEffect(() => {
		getUserActivity(props.id)
			.then((res) => {
				setData(res.data.data.sessions);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	console.log(data);

	return (
		<div className="activity">
			<h2>Activité</h2>
			<ResponsiveContainer
				width="100%"
				height="100%"
				aspect={3.5}
				className="activity-graph-container"
			>
				<BarChart
					className="avtivity-graph"
					width={500}
					height={300}
					barGap={30}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis dataKey="kilogram" />
					<Tooltip />
					<Legend />
					<Bar dataKey="kilogram" fill="#282D30" />
					<Bar dataKey="calories" fill="#E60000" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Activity;
