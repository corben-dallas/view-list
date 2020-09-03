import React from 'react';

import ShopCard from './ShopCard';

const CardsView = ({cards}) => 
    <div className="cards-view">
        { cards.map(card => <ShopCard {...card} />) }
    </div>

export default CardsView;
