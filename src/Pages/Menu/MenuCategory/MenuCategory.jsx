import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, image }) => {
  return (
    <div className="pt-8">
      {title && <Cover title={title} image={image}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 my-14">
        {items?.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
