const { Icon } = wp.components;
const { withDispatch } = wp.data;

const LayoutButton = ({
	label,
	icon,
	description,
	preview,
	recommended,
	layout,
	resetBlocks,
	insertBlocks,
	open,
	close
}) => {
	return (
		<button
			onClick={() => {
				open();
				resetBlocks([]);
				setTimeout(() => {
					insertBlocks(layout);
					close();
				}, 0);
			}}
		>
			<div className="c9-icon-and-about">
				{preview ? (
					<img src={preview} alt="layout preview"></img>
				) : (
					<Icon icon={icon} />
				)}
				<div className="c9-layout-button-content">
					<h3>{label}</h3>
					<p>{description}</p>
				</div>
			</div>
			<div className="c9-recommended">
				{recommended && (
					<p className="c9-includes">
						<strong>includes: </strong>
						{recommended}
					</p>
				)}
			</div>
		</button>
	);
};

export default withDispatch(dispatch => {
	const { resetBlocks, insertBlocks } = dispatch("core/editor");

	return {
		resetBlocks,
		insertBlocks
	};
})(LayoutButton);
