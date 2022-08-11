import { useEffect, useState } from "react";
import "../style/AverageSession.css";
import getData from "../services/GetData";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function AverageSession(props) {
	const [data, setData] = useState(null);
	const [length, setLength] = useState(null);
	const [maxLength, setMaxLength] = useState(0);

	const customTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="tooltip-session">
					<p className="tooltop-min">{`${payload[0].value} min`}</p>
				</div>
			);
		}
		return null;
	};

	useEffect(() => {
		getData(props.id, "average-sessions")
			.then((res) => {
				setData(res.data.data.sessions);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		if (data) {
			setLength(data.map((item) => item.sessionLength));
		}
	}, [data]);

	useEffect(() => {
		if (length) {
			setMaxLength(Math.max(...length));
		}
	}, [length]);

	return (
		<div className="session-wrapper">
			<div className="session-opacity"></div>
			<p className="session-title">Durée moyenne des sessions</p>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={300}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 15,
						left: 15,
						bottom: 5,
					}}
				>
					<XAxis
						dataKey="day"
						tickLine={false}
						axisLine={false}
						tick={{
							fill: "#fff",
							fontSize: "12px",
							fontWeight: "bold",
						}}
					/>
					<YAxis
						dataKey="sessionLength"
						hide={true}
						domain={[0, maxLength + 25]}
					/>
					<Tooltip content={customTooltip} />
					<Legend />
					<Line
						type="monotone"
						dataKey="sessionLength"
						stroke="#fff"
						dot={false}
						activeDot={{
							r: 4,
							fill: "white",
							strokeWidth: 10,
							stroke: "rgba(255,255,255,0.198345)",
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

export default AverageSession;
