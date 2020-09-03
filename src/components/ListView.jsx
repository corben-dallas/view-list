import React from 'react';

import ShopItem from './ShopItem';

const ListView = ({items}) => items.map(item => <ShopItem {...item} />);

export default ListView;
