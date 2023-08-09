import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../../consts/api';
import { DetailedProduct } from '../../types/DetailedProduct';
import { About } from '../../components/About';
import { ProductImageCarousel } from '../../components/Product/ProductImageCarousel/ProductImageCarousel';
import { RecommendedGoods } from '../../components/RecommendedGoods/RecommendedGoods';
import { TechSpecs } from '../../components/TechSpecs';
import { ProductActions } from '../../components/Product/ProductActions';
import { ProductVarieties } from '../../components/Product/ProductVarieties';
import { MenuLink } from '../../components/MenuLink';
import chevron from '../../icons/Chevron (Arrow Right).svg';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import styles from './ProductPage.module.scss';

interface FetchProductProps<T> {
  url: string;
  setFunc: (v: T) => void;
  errorText: string;
}

export const fetchProduct = async <T extends DetailedProduct | null>({
  url,
  setFunc,
  errorText,
}: FetchProductProps<T>) => {
  fetch(url)
    .then((response) => response.json())
    .then(setFunc)
    .catch((error) => {
      console.error(errorText, error);
    });
};

export const ProductPage = () => {
  const [productDetails, setProductDetails] = useState<DetailedProduct | null>(
    null,
  );

  const { pathname } = useLocation();

  const normalizedPathName = pathname.slice(1);

  useEffect(() => {
    fetchProduct({
      url: `${API_URL}${normalizedPathName}`,
      setFunc: setProductDetails,
      errorText: 'Error fetching product details:',
    });
  }, [pathname]);

  return (
    <>
      <Breadcrumbs path={normalizedPathName} productDetails={productDetails} />

      <section className={styles.product}>
        <div className={styles.product__navigation}>
          <MenuLink to="/" path="Back">
            <img
              src={chevron}
              alt="Chevron"
              className={styles['product__navigation--chevronButton']}
            />
            <div className={styles['product__navigation--backButton']}>
              {'Back'}
            </div>
          </MenuLink>
        </div>

        {productDetails ? (
          <>
            <h1 className={styles.product__title}>{productDetails?.name}</h1>
            <div className={styles['product--images--varieties--actions']}>
              <div className={styles.product__images}>
                <ProductImageCarousel product={productDetails} />
              </div>

              <div className={styles['product--varieties--actions']}>
                <div className={styles.product__variants}>
                  <ProductVarieties
                    product={productDetails}
                    changeProduct={setProductDetails}
                  />
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
              <RecommendedGoods />
            </div>
          </>
        ) : null}
      </section>
    </>
  );
};