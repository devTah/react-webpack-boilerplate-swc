import { FC } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageComponent from '../LazyImage';

interface SwiperSlideProps {
  bannerImage: Array<string>;
}

const SwiperSlideAuto: FC<SwiperSlideProps> = ({ bannerImage }) => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      className="swiper-slide-auto-container">
      {bannerImage.map((val: string, i: number) => (
        <SwiperSlide key={i.toString()}>
          <ImageComponent.LazyImage
            className="rounded-2xl"
            alt=""
            ratio="2x1"
            width={'100%'}
            height={'100%'}
            src={val}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlideAuto;
