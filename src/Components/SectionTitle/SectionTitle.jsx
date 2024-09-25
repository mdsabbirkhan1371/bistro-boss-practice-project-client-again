import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="md:w-4/12 text-center mx-auto my-8">
      <p className="text-yellow-600 mb-2 text-xl">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-4 mb-5 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
