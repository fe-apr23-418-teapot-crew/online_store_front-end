import React, { useContext, useEffect, useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { MenuLink } from '../../components/MenuLink';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import styles from './CartPage.module.scss';
import cn from 'classnames';
import chevron from '../../icons/Chevron (Arrow Right).svg';
import lineCheckout from '../../icons/LineCheckout.svg';
import { getTotalAmount } from '../../helpers/localStorage/getTotalAmount';
import { StorageContext } from '../../contexts/StorageContext';
import { EmptyScreen } from '../../components/EmptyScreen';

export const CartPage: React.FC = () => {
  const { cartProducts, resetStorage } = useContext(StorageContext);
  const storedTotalAmount = getTotalAmount(cartProducts);
  const [totalAmount, setTotalAmount] = useState(storedTotalAmount);
  const [isModal, setIsModal] = useState(false);
  const [isLimit, setisLimit] = useState(false);

  const cartItemsCount = cartProducts.length;
  const isCartEmpty = cartItemsCount < 1;
  console.log(totalAmount);

  useEffect(() => {
    if (totalAmount > 1000000) {
      setisLimit(true);
    } else {
      setisLimit(false);
    }
  }, [totalAmount]);

  const changeTotalAmount = (newPrice: number) => {
    setTotalAmount((prevTotalAmount: number) => prevTotalAmount + newPrice);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetStorage('cart');
    setIsModal(true);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <section
      className={cn(styles.cart, { [styles['is-active']]: isCartEmpty })}
    >
      <div className={styles.container}>
        <div className={styles.cart__navigation}>
          <MenuLink to="/" path="Back">
            <img
              src={chevron}
              alt="Chevron"
              className={styles['cart__navigation--chevronButton']}
            />
            <div
              onClick={goBack}
              className={styles['cart__navigation--backButton']}
            >
              {'Back'}
            </div>
          </MenuLink>
        </div>

        <h1 className={styles.cart__title}>Cart</h1>
        <div className={styles.cart__content}>
          {!isCartEmpty ? (
            <>
              <ul className={styles.cart__products}>
                {cartProducts?.map((product) => (
                  <CartItem
                    isLimit={isLimit}
                    key={product.id}
                    product={product}
                    onChangeTotalAmount={changeTotalAmount}
                  />
                ))}
              </ul>

              <form className={styles.cart__from} onSubmit={handleSubmit}>
                <div className={styles.cart__total}>
                  <span
                    className={styles.cart__totalAmout}
                  >{`$${totalAmount}`}</span>

                  <span className={styles.cart__totalCount}>
                    {`Total for ${cartItemsCount} items`}
                  </span>
                </div>
                <img
                  src={lineCheckout}
                  alt="lineCheckout"
                  className={styles.lineCheckout}
                />
                <button className={styles.cart__button}>Checkout</button>
              </form>
            </>
          ) : (
            <EmptyScreen />
          )}
        </div>
      </div>
      {isModal && <ModalWindow />}
    </section>
  );
};
