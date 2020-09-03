import React from 'react';

const IconSwitch = ({
	icon,
	onSwitch,
}) => {
	return (
		<div className="switch-icon">
			<i className="material-icons" onClick={() => onSwitch(icon)}>{icon}</i>
		</div>
	)
}

export default IconSwitch;
