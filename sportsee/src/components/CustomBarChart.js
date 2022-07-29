function CustomBarChart({ fill, x, y, width, height }) {
	const path = `m ${x} ${y + height} h ${width} v -${height} c -1 -9 ${
		(-19 / 17) * width
	} ${(-10 / 17) * width} ${(-17 / 17) * width} 0`;

	return <path d={path} stroke="none" fill={fill} />;
}

export default CustomBarChart;
