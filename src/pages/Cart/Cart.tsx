import React, { useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { MenuLink } from '../../components/MenuLink';
//import { Product } from '../../types/Product';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import styles from './Cart.module.scss';
import chevron from '../../icons/Chevron (Arrow Right).svg';
import lineCheckout from '../../icons/LineCheckout.svg';
import { LiteProduct } from '../../types/LiteProduct';
import { getCartItems } from '../../helpers/localStorage/getCartItems';
import { getTotalAmount } from '../../helpers/localStorage/getTotalAmount';

interface CartProps {}

export const Cart: React.FC<CartProps> = () => {
  const storedCartItems = getCartItems();
  const storedTotalAmount = getTotalAmount(storedCartItems);
  const [cartItems, setCartItems] = useState<LiteProduct[]>(storedCartItems);
  const [totalAmount, setTotalAmount] = useState(storedTotalAmount);
  const [isModal, setIsModal] = useState(false);

  const cartItemsCount = storedCartItems.length;
  const isCartEmpty = cartItemsCount < 1;

  const handleRemoveFromCart = (productId: number) => {
    const updatedCartItems = cartItems
      .filter((product) => product.id !== productId);
    
    setCartItems(updatedCartItems);
  
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const changeTotalAmount = (newPrice: number) => {
    setTotalAmount((prevTotalAmount) => prevTotalAmount + newPrice);
  };

  return (
    <section className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.cart__navigation}>
          <MenuLink to="/" path="Back">
            <img
              src={chevron}
              alt="Chevron"
              className={styles.cart__navigation__chevronButton}
            />
            <div className={styles.cart__navigation__backBotton}>{'Back'}</div>
          </MenuLink>
        </div>

        <h1 className={styles.cart__title}>Cart</h1>

        {!isCartEmpty ? (
          <div className={styles.cart__content}>
            <ul className={styles.cart__products}>
              {cartItems.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  onRemoveFromCart={handleRemoveFromCart}
                  onChangeTotalAmount={changeTotalAmount}
                />
              ))}
            </ul>

            <div className={styles.cart__from}>
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
              <button
                className={styles.cart__button}
                onClick={() => setIsModal(true)}
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <h2>Empty cart! Lets make the first purchase!</h2>
        )}
      </div>
      {isModal && <ModalWindow />}
    </section>
  );
};
