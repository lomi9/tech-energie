import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Scroller({ images }) {

    const swiperSettings = {
        modules: [Navigation, Pagination],
        navigation: true,
        pagination: { clickable: true },
        breakpoints: {
            100: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40
            },
        },
    };


    return (
      <div className="scroller">
        <Swiper {...swiperSettings} >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
                <div className='image-container'>
                    <img src={img.url} alt={img.description} className='image-container-img'/>
                </div>
                <div className="image-description">
                    <p className="image-description-text">{img.description}</p>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  

