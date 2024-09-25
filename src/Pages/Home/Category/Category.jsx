import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={'From 10am to 11pm'}
        heading={'Order Now'}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-2xl font-semibold text-white -mt-24 text-center">
            Salad
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-2xl font-semibold text-white -mt-24 text-center">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-2xl font-semibold text-white -mt-24 text-center">
            Coffee
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-2xl font-semibold text-white -mt-24 text-center">
            Dessert
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-2xl font-semibold text-white -mt-20 text-center">
            Salad
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
