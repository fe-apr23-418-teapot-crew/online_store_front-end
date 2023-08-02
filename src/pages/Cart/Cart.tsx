import React, { useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { MenuLink } from '../../components/MenuLink';
import { Product } from '../../types/Product';
import styles from './Cart.module.scss';

interface CartProps {}

export const Cart: React.FC<CartProps> = () => {
  const existingCartProducts = localStorage.getItem('cartItems');
  const cartProducts: Product[] = existingCartProducts
    ? JSON.parse(existingCartProducts)
    : [];

  const [totalAmount, setTotalAmount] = useState(0);
  const totalCartItemsCount = cartProducts.length;
  const isCartItemsEmpty = totalCartItemsCount < 1;

  const changeTotalAmount = (amout: number) => {
    const currentTotalAmount = totalAmount;

    setTotalAmount(currentTotalAmount + amout);
  };

  return (
    <section className={styles.cart}>
      <div className="container">
        <div className={styles.cart__navigation}>
          <MenuLink to="/" path="Back">
            {'< Back'}
          </MenuLink>
        </div>

        <h1 className={styles.cart__title}>Cart</h1>

        {!isCartItemsEmpty && (
          <div className={styles.cart__content}>
            <ul className={styles.cart__products}>
              {cartProducts.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  onChangeTotalAmount={changeTotalAmount}
                />
              ))}
            </ul>

            <form className={styles.cart__form}>
              <span className={styles.cart__totalAmout}>{totalAmount}</span>

              <span className={styles.cart__totalCount}>
                {`Total for ${totalCartItemsCount}`}
              </span>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
