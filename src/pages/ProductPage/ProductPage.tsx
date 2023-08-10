import React from 'react';
import { useLocation } from 'react-router-dom';
import { About } from '../../components/About';
import { ProductImageCarousel } from '../../components/Product/ProductImageCarousel/ProductImageCarousel';
import { TechSpecs } from '../../components/TechSpecs';
import { ProductActions } from '../../components/Product/ProductActions';
import { ProductVarieties } from '../../components/Product/ProductVarieties';
import { MenuLink } from '../../components/MenuLink';
import chevron from '../../icons/Chevron (Arrow Right).svg';
import styles from './ProductPage.module.scss';
import { CardCarousel } from '../../components/CardCarousel/CardCarousel';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getDetailedProductByItemId } from '../../api/products';
import { useQuery } from 'react-query';
import { Loader } from '../../components/Loader';
import { useErrorHandling } from '../../hooks/useErrorHandling';
import cn from 'classnames';

export const ProductPage = () => {
  const { pathname } = useLocation();
  const [category, itemId] = pathname.slice(1).split('/');

  const { data, error, isLoading } = useQuery(
    ['detailedProduct', pathname],
    () => getDetailedProductByItemId(category, itemId),
  );

  const { handleError } = useErrorHandling();

  if (error) {
    handleError(error);
  }

  const normalizedPathName = pathname.slice(1);

  const productDetails = data || null;

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <div
        className={cn(styles.product__breadCrumbsWrapper, {
          [styles['product__breadCrumbsWrapper--hidden']]: isLoading,
        })}
      >
        <Breadcrumbs
          path={normalizedPathName}
          productDetails={productDetails}
        />
      </div>

      <section className={styles.product}>
        <div className={styles.product__navigation}>
          <MenuLink to="/" path="Back">
            <img
              src={chevron}
              alt="Chevron"
              className={styles['product__navigation--chevronButton']}
            />
            <div
              onClick={goBack}
              className={styles['product__navigation--backButton']}
            >
              {'Back'}
            </div>
          </MenuLink>
        </div>

        {productDetails ? (
          <div className={styles.product__details}>
            <h1 className={styles.product__title}>{productDetails?.name}</h1>
            <div className={styles['product--images--varieties--actions']}>
              <div className={styles.product__images}>
                <ProductImageCarousel product={productDetails} />
              </div>

              <div className={styles['product--varieties--actions']}>
                <div className={styles.product__variants}>
                  <ProductVarieties product={productDetails} />
                </div>
                <div className={styles.product__actions}>
                  <ProductActions product={productDetails} />
                </div>
              </div>
            </div>

            <div className={styles['product--about--techSpecs']}>
              <div className={styles.product__about}>
                <About product={productDetails} />
              </div>

              <div className={styles.product__techSpecs}>
                <TechSpecs product={productDetails} />
              </div>
            </div>

            <div className={styles.product__recommended}>
              <CardCarousel
                title="You may also like"
                category="1/recommended"
              />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};
