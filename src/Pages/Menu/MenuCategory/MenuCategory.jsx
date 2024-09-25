import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, image }) => {
  return (
    <div className="pt-8">
      {title && <Cover title={title} image={image}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 my-14">
        {items?.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline btn-wide border-0  border-b-4 px-8 md:px-10 mt-5">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
