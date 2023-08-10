import React, { useContext, useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import styles from './CartPage.module.scss';
import cn from 'classnames';
import chevron from '../../icons/Chevron (Arrow Right).svg';
import lineCheckout from '../../icons/LineCheckout.svg';
import { getTotalAmount } from '../../helpers/localStorage/getTotalAmount';
import { StorageContext } from '../../contexts/StorageContext';

export const CartPage: React.FC = () => {
  const { cartProducts, resetStorage } = useContext(StorageContext);
  const storedTotalAmount = getTotalAmount(cartProducts);
  const [totalAmount, setTotalAmount] = useState(storedTotalAmount);
  const [isModal, setIsModal] = useState(false);

  const cartItemsCount = cartProducts.length;
  const isCartEmpty = cartItemsCount < 1;

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
    <section className={cn(styles.cart, { [styles['is-active']]: isCartEmpty })}>
      <div className={styles.container}>
        <div className={styles.cart__navigation}>
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
        </div>

        <h1 className={styles.cart__title}>Cart</h1>

        {!isCartEmpty ? (
          <div className={styles.cart__content}>
            <ul className={styles.cart__products}>
              {cartProducts?.map((product) => (
                <CartItem
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
          </div>
        ) : (
          <h2>Empty cart! Lets make the first purchase!</h2>
        )}
      </div>
      {isModal && <ModalWindow />}
    </section>
  );
};
