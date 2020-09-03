import React from 'react';

const ShopCard = ({
	color,
	img,
	name,
	price,
}) => {
	return (
		<div className="card">
			<div className="list-view__name">
				<p>{name}</p>
			</div>
			<div className="list-view__color">
				<p>{color}</p>
			</div>
			<div className="list-view__img">
				<img src={img} alt={name}/>
			</div>
			<div className="card__bottom">
				<div className="list-view__price">
					<p>{price}</p>
				</div>
				<div className="list-view__btn">add</div>
			</div>
		</div>
	)
}

export default ShopCard;
