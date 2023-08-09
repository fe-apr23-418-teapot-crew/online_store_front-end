import React from 'react';
import { ButtonGroupProps } from 'react-multi-carousel';
import style from './CarouselButtons.module.scss';
import classnames from 'classnames/bind';

import leftArrow from '../../../icons/ArrowLeft.svg';
import rightArrow from '../../../icons/ArrowRight.svg';


const cn = classnames.bind(style);

export const CarouselButtons: React.FC = (
  { next, previous, carouselState }
  : ButtonGroupProps) => {
  const currentSlide = carouselState?.currentSlide ?? 0;
  const isInitialSlide = currentSlide === 0;

  const handlePrevClick = () => {
    if (previous) {
      previous();
    }
  };

  const handleNextClick = () => {
    if (next) {
      next();
    }
  };

  return (
    <div className={cn('carousel__buttons')}>
      <button
        className={cn('carousel__button', {
          'carousel__button--disabled': isInitialSlide,
        })}
        onClick={handlePrevClick}
      >
        <img src={leftArrow} />
      </button>

      <button
        className={cn('carousel__button')}
        onClick={handleNextClick}
      >
        <img src={rightArrow} />
      </button>
    </div>
  );
};