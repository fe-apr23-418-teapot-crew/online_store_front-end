import React, { useState } from 'react';
import cn from 'classnames';
import './ProductImageCarousel.scss';
// import { Product } from "../../types/Product";

// type Props = {
//   product: Product;
// };

export const ProductImageCarousel: React.FC = () => {
  const images: string[] = [
    'https://content1.rozetka.com.ua/goods/images/big/221214139.jpg',
    'https://content.rozetka.com.ua/goods/images/big/221214140.jpg',
    'https://content1.rozetka.com.ua/goods/images/big/221214141.jpg',
  ];
  
  const [cardImage, setCardImage] = useState(
    'https://content1.rozetka.com.ua/goods/images/big/221214139.jpg'
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  const changeImage = (image: string, index: number) => {
    setCardImage(image);
    setActiveImageIndex(index);
  };

  return (
    <div className="carousel__container">
      <div className="carousel__selector-container">
        {images.map((image, index) => (
          <button
            key={image}
            className={cn('carousel__selector-button', {
              'carousel__selector-button--active': activeImageIndex === index 
            })}
            onClick={() => changeImage(image, index)}
          >
            <img src={image} className="carousel__selector-image" alt="selector image" />
          </button>
        ))}
      </div>

      <div className="carousel__photo-container">
        <img src={cardImage} alt="Product Image" className="carousel__image" />
      </div>
    </div>
  );
};
