import React from 'react';

const ShopItem = ({
	color,
	img,
	name,
	price,
}) => {
	return (
		<div className="list-view">
			<div className="list-view__img">
				<img src={img} alt={name}/>
			</div>
			<div className="list-view__name">
				<p>{name}</p>
			</div>
			<div className="list-view__color">
				<p>{color}</p>
			</div>
			<div className="list-view__price">
				<p>{price}</p>
			</div>
			<div className="list-view__btn">add</div>
		</div>
	)
}

export default ShopItem;
