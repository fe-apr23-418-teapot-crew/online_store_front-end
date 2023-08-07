import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './BannerSlider.scss';

import slider_1_desk from './desktop-images/desktop-image-1.png';
import slider_2_desk from './desktop-images/desktop-image-2.png';
import slider_3_desk from './desktop-images/desktop-image-3.png';
import slider_1_mob from './mobile-images/mobile-image-1.png';
import slider_2_mob from './mobile-images/mobile-image-2.png';
import slider_3_mob from './mobile-images/mobile-image-3.png';


type Props = {
  className: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

function Arrow(props: Props): JSX.Element {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick} />;
}

export const BannerSlider: React.FC = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 3000,
    prevArrow: <Arrow className="slick-prev slick-arrow" />,
    nextArrow: <Arrow className="slick-next slick-arrow" />,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slick-slide">
          <Link to="/phones/apple-iphone-14-pro-1tb-spaceblack">
            <img id='slick-slide__img-desk' src={slider_1_desk} />
            <img id='slick-slide__img-mob' src={slider_1_mob} />
          </Link>
        </div>
        <div className="slick-slide">
          <Link to="/phones">
            <img id='slick-slide__img-desk' src={slider_2_desk} />
            <img id='slick-slide__img-mob' src={slider_2_mob} />
          </Link>
        </div>
        <div className="slick-slide">
          <Link to="/tablets">
            <img id='slick-slide__img-desk' src={slider_3_desk} />
            <img id='slick-slide__img-mob' src={slider_3_mob} />
          </Link>
        </div>
      </Slider>
    </div>

  );
};