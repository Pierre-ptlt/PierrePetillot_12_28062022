import getUserActivity from "../services/GetUserActivity";
import "../style/Activity.css";
import { useState, PureComponent, useEffect } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

function Activity(props) {
	const [data, setData] = useState(null);
	let calories = [];
	let kilograms = [];

	useEffect(() => {
		getUserActivity(props.id)
			.then((res) => {
				setData(res.data.data.sessions);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		if (data) {
			data.forEach((session) => {
				calories.push(session.calories);
				kilograms.push(session.kilogram);
			});
		}
	}, [data]);

	console.log(kilograms, calories);

	return (
		<div className="activity">
			<h2>Activité</h2>
			<ResponsiveContainer
				width="100%"
				height="100%"
				aspect={3}
				className="activity-graph-container"
			>
				<BarChart
					className="avtivity-graph"
					width={500}
					height={300}
					barGap={8}
					barSize={7}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis axisLine={false} tickLine={false} dataKey="day" />
					<YAxis
						dataKey="kilogram"
						interval={"preserveEnd"}
						orientation="right"
						tickLine={false}
						axisLine={false}
						tickCount={4}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Legend />
					<Bar dataKey="kilogram" fill="#282D30" />
					<Bar dataKey="calories" fill="#E60000" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Activity;
