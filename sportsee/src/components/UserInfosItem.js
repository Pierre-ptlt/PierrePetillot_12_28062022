import "../style/UserInfos.css";
import { GoFlame } from "react-icons/go";
import { GiChickenLeg } from "react-icons/gi";
import { FaAppleAlt, FaHamburger } from "react-icons/fa";

function UserInfosItem(props) {
	const icon =
		props.number === "1" ? (
			<GoFlame />
		) : props.number === "2" ? (
			<GiChickenLeg />
		) : props.number === "3" ? (
			<FaAppleAlt />
		) : (
			<FaHamburger />
		);

	const backgroundColor =
		props.number === "1"
			? "rgb(255, 194, 194)"
			: props.number === "2"
			? "#bde2fb"
			: props.number === "3"
			? "#fdf4ce"
			: "#ffcbda";
	const color =
		props.number === "1"
			? "red"
			: props.number === "2"
			? " #4AB8FF"
			: props.number === "3"
			? "#FDCC0C"
			: "#FD5181";

	const type =
		props.number === "1"
			? "Calories"
			: props.number === "2"
			? "Proteines"
			: props.number === "3"
			? "Glucides"
			: "Lipides";

	const unit = props.number === "1" ? "kCal" : "g";

	return (
		<div className="user-infos-item">
			<div
				className="user-infos-item-icon"
				style={{ backgroundColor: backgroundColor, color: color }}
			>
				{" "}
				{icon}{" "}
			</div>
			<div className="user-infos-item-text">
				<p className="infos-value">
					{props.data}
					{unit}
				</p>
				<p className="infos-type">{type}</p>
			</div>
		</div>
	);
}

export default UserInfosItem;
