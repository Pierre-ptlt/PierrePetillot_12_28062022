import "../style/Score.css";
import mockData from "../services/MockData";
import getData from "../services/GetData";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/**
 *
 * @param {int} props.id - user id
 * @returns the score chart
 */

function Score(props) {
	const [data, setData] = useState(null);
	const [score, setScore] = useState(0);
	const innerPie = [{ value: 100 }];
	const filtered = mockData.USER_MAIN_DATA.filter(
		(item) => item.id == props.id
	);

	// data recuperation
	useEffect(() => {
		getData(props.id)
			.then((res) => {
				setData(res.data.data);
			})
			.catch((err) => {
				setData(filtered[0]);
				console.log(err);
			});
	}, []);

	// recuperating the score
	useEffect(() => {
		if (data) {
			setScore(data.score || data.todayScore);
		}
	}, [data]);

	// setting the chart parameteers
	const completion = [
		{ name: "completed", value: score, fillColor: `#FF0000` },
		{ name: "incomplete", value: 1 - score, fillColor: "transparent" },
	];

	// render
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
