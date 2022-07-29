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
import CustomBarChart from "./CustomBarChart";

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
			<div className="activity-header">
				<h2 className="activity-title">Activité quotidienne</h2>
				<ul className="activity-legend">
					<li className="activity-legend-item">Poids (kg)</li>
					<li className="activity-legend-item item-red">
						Calories brûlées(kCal)
					</li>
				</ul>
			</div>
			<ResponsiveContainer
				width="100%"
				height="100%"
				aspect={3}
				className="activity-graph-container"
			>
				<BarChart
					className="activity-graph"
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
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis axisLine={false} tickLine={false} dataKey="day" />
					<YAxis
						interval={"preserveEnd"}
						orientation="right"
						tickLine={false}
						axisLine={false}
						tickCount={4}
						domain={[
							() => Math.round(Math.min(...kilograms) - 1),
							() => Math.round(Math.min(...kilograms) + 1),
						]}
					/>
					<YAxis
						yAxisId="caloriesAxis"
						hide={true}
						domain={[
							() => Math.round(Math.min(...calories) * 0.8),
							() => Math.round(Math.min(...calories) + 1.2),
						]}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Legend />
					<Bar dataKey="kilogram" shape={<CustomBarChart />} fill="#282D30" />
					<Bar dataKey="calories" shape={<CustomBarChart />} fill="#E60000" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Activity;
