import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading="What Our Clients Say?"
        heading="Testimonials"
      ></SectionTitle>

      <Swiper
        slidesPerView={1} // 1 slide for small and medium devices
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide for devices >= 640px
          768: { slidesPerView: 1 }, // 1 slide for devices >= 768px (medium screens)
          1024: { slidesPerView: 1 }, // Show 2 slides for larger screens (optional)
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <div className="mx-10 md:mx-14 my-8 flex flex-col items-center text-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-3 text-sm md:text-base">{review.details}</p>
              <h3 className="text-orange-500 font-semibold text-lg md:text-xl">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
