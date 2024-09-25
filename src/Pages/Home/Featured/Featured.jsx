import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
  return (
    <div className="featured-item bg-fixed bg-opacity-30 text-white pt-8 my-10">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>

      {/* Flex for responsive layout */}
      <div className="flex flex-col md:flex-row justify-center bg-stone-500 items-center pb-10 md:pb-20 pt-8 md:pt-12 px-5 md:px-36">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <img src={featured} alt="" className="w-full object-cover" />
        </div>

        {/* Text Content Section */}
        <div className="md:ml-10 w-full md:w-1/2 text-center md:text-left">
          <p>Aug, 20, 2029</p>
          <h3 className="uppercase text-lg md:text-2xl mt-3 md:mt-0">
            Where Can I Get Some?
          </h3>
          <p className="mt-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            fugiat possimus voluptatem natus delectus odit ipsam impedit
            temporibus deserunt, soluta deleniti corporis earum at! Ducimus
            provident tempore repellendus corporis?
          </p>
          <button className="btn btn-outline border-0 border-b-4 px-8 md:px-10 mt-5">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
