function CustomTooltip(props) {
	const { payload, active } = props;
	if (active && payload && payload.length) {
		return (
			<div className="activity-tooltip">
				<p className="activity-tooltip-item">{payload[0].value}kg</p>
				<p className="activity-tooltip-item">{payload[1].value}Kcal</p>
			</div>
		);
	}

	return null;
}

export default CustomTooltip;
