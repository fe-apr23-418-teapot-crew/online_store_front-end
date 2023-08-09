import React, { useEffect, useState } from 'react';
import { CarouselButtons } from './CarouselButtons/CarouselButtons';
import Carousel from 'react-multi-carousel';

import { Product } from '../../types/Product';
import { API_URL } from '../../consts/api';

import 'react-multi-carousel/lib/styles.css';
import style from './CardCarousel.module.scss';
import { ProductCard } from '../Product/ProductCard';

const responsiveSettings = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1199, min: 860 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  tabletSmall: {
    breakpoint: { max: 859, min: 641 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 60,
  },
  largeMobile: {
    breakpoint: { max: 640, min: 400 },
    items: 1.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 400, min: 320 },
    items: 1.1,
    slidesToSlide: 1,
  },
};

interface Props {
  title: string;
  endpoint: string;
}

export const CardCarousel: React.FC<Props> = ({ title, endpoint }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchHotPricedProducts = () => {
    fetch(`${API_URL}products/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.rows.slice(0, 8)));
  };

  useEffect(() => {
    fetchHotPricedProducts();
  }, []);

  return (
    <div className={style.carousel__container}>
      <div className={style.HeaderContainer}>
        <h2 className={style.carousel__header}>{title}</h2>
      </div>

      <Carousel
        itemClass={style.Cards}
        responsive={responsiveSettings}
        customButtonGroup={<CarouselButtons />}
        arrows={false}
        infinite
        renderButtonGroupOutside={true}
        partialVisible={true}
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Carousel>
    </div>
  );
};
