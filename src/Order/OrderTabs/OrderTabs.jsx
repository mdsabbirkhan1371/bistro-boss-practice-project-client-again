import React from 'react';
import FoodCart from '../../Components/SectionTitle/FoodCart/FoodCart';

const OrderTabs = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map(item => (
        <FoodCart item={item}></FoodCart>
      ))}
    </div>
  );
};

export default OrderTabs;
