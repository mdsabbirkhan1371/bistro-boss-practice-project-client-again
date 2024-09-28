import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FoodCart = ({ item }) => {
  const { image, name, price, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = food => {
    console.log(food);
    if (user && user?.email) {
      // send data to cart
    } else {
      Swal.fire({
        title: 'You are not Logged in?',
        text: 'Please Login!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login Now',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 border-orange-400 hover:border-orange-400 px-8 md:px-10 mt-5"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
