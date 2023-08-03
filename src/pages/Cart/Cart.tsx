import React, { useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { MenuLink } from '../../components/MenuLink';
import styles from './Cart.module.scss';
import { LiteProduct } from '../../types/LiteProduct';

interface CartProps {}

export const Cart: React.FC<CartProps> = () => {
  const existingCartItems = localStorage.getItem('cartItems');
  const [cartItems, setCartItems] = useState<LiteProduct[]>(
    existingCartItems ? JSON.parse(existingCartItems) : [],
  );

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalCartItemsCount = cartItems.length;
  const isCartItemsEmpty = totalCartItemsCount < 1;

  const handleRemoveFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter(
      (product) => product.id !== productId,
    );
    
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
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
              {cartItems.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  onRemoveFromCart={handleRemoveFromCart}
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
