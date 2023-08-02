import React, { useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { MenuLink } from '../../components/MenuLink';
import { Product } from '../../types/Product';
import styles from './Cart.module.scss';

interface CartProps {}

export const Cart: React.FC<CartProps> = () => {
  const existingCartProducts = localStorage.getItem('cartItems');
  const [cartProducts, setCartProducts] = useState<Product[]>(
    existingCartProducts ? JSON.parse(existingCartProducts) : [],
  );

  const [totalAmount, setTotalAmount] = useState(0);
  const totalCartItemsCount = cartProducts.length;
  const isCartItemsEmpty = totalCartItemsCount < 1;

  const changeTotalAmount = (amount: number) => {
    setTotalAmount((prevTotalAmount) => prevTotalAmount + amount);
  };

  const changeCartProducts = (updatedCartItems: Product[]) => {
    setCartProducts([...updatedCartItems]);
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
                  onChangeCartProducts={changeCartProducts}
                />
              ))}
            </ul>

            <div className={styles.cart__from}>
              <div className={styles.cart__total}>
                <span className={styles.cart__totalAmout}>{totalAmount}</span>

                <span className={styles.cart__totalCount}>
                  {`Total for ${totalCartItemsCount}`}
                </span>
              </div>

              <button className={styles.cart__button}>Checkout</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
