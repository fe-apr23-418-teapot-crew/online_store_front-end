import React, {
  useState,
  useEffect,
} from 'react';
import cn from 'classnames';
import './ProductImageCarousel.scss';
import { DetailedProduct } from '../../types/DetailedProduct';
import { API_URL } from '../../consts/api';

interface ProductImageCarouselProps {
  product: DetailedProduct;
}

export const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  product,
}) => {
  const images: string[] = product.images;

  const [cardImage, setCardImage] = useState(API_URL + images[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const changeImage = (image: string, index: number) => {
    setCardImage(API_URL + image);
    setActiveImageIndex(index);
  };

  useEffect(() => {setCardImage(API_URL + images[0]);}, [images]);

  return (
    <div className="carousel__container">
      <div className="carousel__selector-container">
        {images.map((image, index) => (
          <button
            key={image}
            className={cn('carousel__selector-button', {
              'carousel__selector-button--active': activeImageIndex === index,
            })}
            onClick={() => changeImage(image, index)}
          >
            <img
              src={API_URL + image}
              className="carousel__selector-image"
              alt="selector image"
            />
          </button>
        ))}
      </div>

      <div className="carousel__photo-container">
        <img src={cardImage} alt="Product Image" className="carousel__image" />
      </div>
    </div>
  );
};
