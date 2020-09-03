import React, { useState } from 'react';

import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const Store = ({ 
	products,
}) => {
	const [icon, setIcon] = useState('view_list');

	const handleSwitchIcon = (iconName) => {
		setIcon(iconName ===  'view_list' ? 'view_module' : 'view_list');
	}

	return (
		<div className="wrapper">
			<IconSwitch icon={icon} onSwitch={(icon) => { handleSwitchIcon(icon) }}/>
			{
				icon === 'view_list' ? 
					<CardsView cards={products}/> : <ListView items={products}/>
			}
		</div>
	)
};

export default Store;
