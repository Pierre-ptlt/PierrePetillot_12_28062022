import "../style/Score.css";
import getUserInfos from "../services/GetUserInfos";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function Score(props) {
	const [data, setData] = useState(null);
	const [score, setScore] = useState(0);
	const innerPie = [{ value: 100 }];

	useEffect(() => {
		getUserInfos(props.id)
			.then((res) => {
				setData(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		if (data) {
			setScore(data.score || data.todayScore);
		}
	}, [data]);

	const completion = [
		{ name: "completed", value: score, fillColor: `#FF0000` },
		{ name: "incomplete", value: 1 - score, fillColor: "transparent" },
	];

	return (
		<div className="score-wrapper">
			<h3 className="score-title">Score</h3>
			<ResponsiveContainer width="100%" height="100%">
				<PieChart width={180} height={180}>
					<Pie data={innerPie} dataKey="value" outerRadius={70} fill="white" />
					<Pie
						data={completion}
						dataKey="value"
						innerRadius={70}
						outerRadius={80}
						startAngle={90}
						endAngle={360}
						stroke={"transparent"}
					>
						{completion.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={entry.fillColor}
								cornerRadius="50%"
							/>
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<p className="score-text">
				<span className="score-score">{`${score * 100}%`}</span> <br /> de votre{" "}
				<br /> objectif
			</p>
		</div>
	);
}

export default Score;
