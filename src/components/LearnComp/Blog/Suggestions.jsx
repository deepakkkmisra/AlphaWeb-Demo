import React, { useRef } from 'react';
import './Suggestions.scss';
import BlogBox from './BlogBox';
import blog1 from '../../../assets/images/blog_1.jpg';
import blog2 from '../../../assets/images/blog_2.jpg';
import blog3 from '../../../assets/images/blog_3.jpg';
import blog4 from '../../../assets/images/blog_4.jpg';

import arrowLeftImg from '../../../assets/icons/arrow-left-gray.svg';
import arrowRightImg from '../../../assets/icons/arrow-right-blue.svg';
import dropdownIcon from '../../../assets/icons/dropdown.svg';

// Import Swiper and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Keyboard, Navigation } from 'swiper/modules';

function Suggestions() {
  const swiperRef = useRef(null); // Ref to Swiper instance

  const blogData = [
    {
      id: 1,
      title: "How to Choose the Right Trading Style and Strategy",
      image: blog1,
      description:
        "Embarking on a trading journey can be both exciting and daunting. With a myriad of trading styles and strategies available,…",
    },
    {
      id: 2,
      title: "How to Spot Trend Reversals in Trading",
      image: blog2,
      description:
        "Identifying trend reversals in financial markets is a crucial skill for traders and investors. Recognizing when a trend is losing…",
    },
    {
      id: 3,
      title: "20+ Best Day Trading Podcasts to Get Inspired in 2024",
      image: blog3,
      description:
        "In the fast-paced world of day trading, staying informed and inspired is crucial for success. Podcasts offer a convenient way…",
    },
    {
      id: 4,
      title: "Why Day Traders Love Trading Gold",
      image: blog4,
      description:
        "Gold has long been a favorite among day traders, offering a unique blend of volatility, liquidity, and market dynamics that…",
    },
  ];

  return (
    <div className="suggestions_wrapper">
      <div className="suggestions_header">
        <h2>Suggestions</h2>
        {/* <button className="gradientButton_small">Categories
          <img src={dropdownIcon} alt='' />
        </button> */}
      </div>

      <div className="suggested_blogs">
        {/* Custom Arrows */}
        <img
          className="arrow_left"
          src={arrowLeftImg}
          alt="Left Arrow"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />

        <Swiper
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1600: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1450: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1000: {
              slidesPerView: 2,  // Show 2 slides for screen widths below 1000px
              slidesPerGroup: 2,
            },
            769: {
              slidesPerView: 2, // Keep 2 slides on smaller screens like tablets
              slidesPerGroup: 2,
            },
            0: {
              slidesPerView: 1,  // For mobile devices, show 1 slide
              slidesPerGroup: 1,
            },
          }}
          scrollbar={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Navigation]}
          className="mySwiper"
          ref={swiperRef}
        >
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogBox
                title={blog.title}
                image={blog.image}
                description={blog.description}
                blogId={blog.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <img
          className="arrow_right"
          src={arrowRightImg}
          alt="Right Arrow"
          onClick={() => swiperRef.current.swiper.slideNext()}
        />
      </div>
    </div>
  );
}

export default Suggestions;
