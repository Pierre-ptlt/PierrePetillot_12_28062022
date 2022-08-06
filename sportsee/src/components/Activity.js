import getUserActivity from "../services/GetUserActivity";
import "../style/Activity.css";
import { useState, useEffect } from "react";
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
	const [minCal, setMinCal] = useState(0);
	const [maxCal, setMaxCal] = useState(0);
	const [minKg, setMinKg] = useState(0);
	const [maxKg, setMaxKg] = useState(0);

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
			setMinCal(Math.min(...calories));
			setMaxCal(Math.max(...calories));
			setMinKg(Math.min(...kilograms));
			setMaxKg(Math.max(...kilograms));
		}
	}, [data]);

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
			<div className="activity-content">
				<ResponsiveContainer
					width="100%"
					height="100%"
					aspect={3.5}
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
							dataKey="kilogram"
							yAxisId="kilogramAxis"
							interval={"preserveEnd"}
							orientation="right"
							tickLine={false}
							axisLine={false}
							tickCount={4}
							domain={[minKg - 1, maxKg + 1]}
						/>
						<YAxis
							dataKey="calories"
							yAxisId="caloriesAxis"
							orientation="right"
							hide={true}
							domain={[minCal * 0.7, maxCal * 1.1]}
						/>
						<Tooltip content={<CustomTooltip />} />
						<Legend />
						<Bar
							dataKey="kilogram"
							yAxisId="kilogramAxis"
							radius={[50, 50, 0, 0]}
							fill="#282D30"
						/>
						<Bar
							dataKey="calories"
							yAxisId="caloriesAxis"
							radius={[50, 50, 0, 0]}
							fill="#E60000"
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default Activity;
