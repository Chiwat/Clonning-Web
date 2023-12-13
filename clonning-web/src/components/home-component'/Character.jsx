import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import characterData from "../../data/character";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, EffectFade } from "swiper/modules";
import { useState } from "react";
const Character = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="character-container">
      <div className="title-name">
        <h2>แนะนำตัวละคร</h2>
        <h4>Character</h4>
      </div>
      <div className="character-wrap">
        <Swiper
          modules={[Navigation, Thumbs, Autoplay, EffectFade]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          loop={true}
          allowTouchMove={false}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          spaceBetween={10}
          className="character-slide-container"
        >
          {characterData.map((data, index) => {
            return (
              <SwiperSlide key={index} className="character-slides">
                <div className="img-container">
                  <img src={data.img} alt={data.Ename} />
                </div>
                <div className="details-container">
                  <h2>{data.Ename}</h2>
                  <h4>{data.THname}</h4>
                  <p>{data.Details}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="prev-btn"></button>
        <button className="next-btn" ></button>
      </div>

      <div className="thumbs-wrap">
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]}
          onSwiper={setThumbsSwiper}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          watchSlidesProgress={true}
          spaceBetween={2}
          slidesPerView={6}
          width="360"
          breakpoints={{
            
            380: {
              width: 360,
              slidesPerView: 6,
              spaceBetween: 2,
            },
            600:{
              width: 500,
              slidesPerView: 6,
              spaceBetween: 5,
            },
            960: {
              width: 900,
              slidesPerView: 10,
              spaceBetween: 10,
            },
          }}
          className="thumbnail-container"
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          loop={true}
        >
          {characterData.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="thumbs-box">
                  <img src={data.thumpImg} alt={data.Ename} />
                </div>
                <h4>{data.THname}</h4>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="next-btn"></button>
        <button className="prev-btn"></button>
      </div>
    </div>
  );
};
export default Character;
