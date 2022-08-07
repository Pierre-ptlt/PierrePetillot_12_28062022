import "../style/ActivityRadar.css";
import getUserPerformance from "../services/GetUserPerformance";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

function ActivityRadar(props) {
	const [data, setData] = useState(null);

	useEffect(() => {
		getUserPerformance(props.id)
			.then((res) => {
				setData(res.data.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const categories = (data) => {
		switch (data.kind) {
			case 1:
				return "Cardio";

			case 2:
				return "Energie";

			case 3:
				return "Endurance";

			case 4:
				return "Force";

			case 5:
				return "Vitesse";

			case 6:
				return "Intensité";

			default:
				console.log("error");
				break;
		}
	};

	return (
		<div className="radar-wrapper">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart outerRadius="60%" data={data}>
					<PolarGrid radialLines={false} d="" />
					<PolarAngleAxis
						dataKey={(data) => categories(data)}
						stroke="#fff"
						dy={4}
						tickLine={false}
						tick={{
							fontSize: 12,
							fontWeight: 500,
						}}
						d=""
					/>
					<Radar
						dataKey="value"
						stroke="transparent"
						fill="rgb(255, 1, 1)"
						fillOpacity={0.7}
						d=""
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default ActivityRadar;
