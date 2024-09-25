import React from 'react';

const FoodCart = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl ">
      <figure>
        <img src={image} alt="food" />
      </figure>
      <p className="absolute right-0 mr-4 top-5 px-4 font-semibold">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 px-8 md:px-10 mt-5">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
