import React, { useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { MenuLink } from '../../components/MenuLink';
import { Product } from '../../types/Product';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import styles from './Cart.module.scss';
import chevron from '../../icons/Chevron (Arrow Right).svg';
import lineCheckout from '../../icons/LineCheckout.svg';

interface CartProps {}

// const TEMP_DATA = [
//   {
//     id: 1,
//     category: 'phone',
//     itemId: '0',
//     name: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
//     fullPrice: 1000,
//     price: 999,
//     screen: '15',
//     capacity: '12',
//     color: 'black',
//     ram: '12',
//     year: 2020,
//     image: 'https://content1.rozetka.com.ua/goods/images/big/284920757.jpg',
//   },
//   {
//     id: 1,
//     category: 'phone',
//     itemId: '0',
//     name: 'Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)',
//     fullPrice: 1000,
//     price: 1012,
//     screen: '15',
//     capacity: '12',
//     color: 'black',
//     ram: '12',
//     year: 2020,
//     image: 'https://content1.rozetka.com.ua/goods/images/big/284920757.jpg',
//   },
//   {
//     id: 1,
//     category: 'phone',
//     itemId: '0',
//     name: 'Apple iPhone 14 Pro Plus 128GB PRODUCT Red (MQ513)',
//     fullPrice: 1000,
//     price: 856,
//     screen: '15',
//     capacity: '12',
//     color: 'black',
//     ram: '12',
//     year: 2020,
//     image: 'https://content1.rozetka.com.ua/goods/images/big/284920757.jpg',
//   }
// ];

export const Cart: React.FC<CartProps> = () => {
  const existingCartItems = localStorage.getItem('cartItems');
  const [cartItems, setCartItems] = useState<LiteProduct[]>(
    existingCartItems ? JSON.parse(existingCartItems) : [],
  );

  const [isModal, setIsModal] = useState(false);


  console.log(cartProducts);

  const [totalAmount, setTotalAmount] = useState(0);
  const totalCartItemsCount = cartProducts.length;
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
      <div className={styles.container}>
        <div className={styles.cart__navigation}>
          <MenuLink to="/" path="Back">
            <img 
              src={chevron}
              alt='Chevron'
              className={styles.cart__navigation__chevronButton}
            />
            <div className={styles.cart__navigation__backBotton}>
              {'Back'}
            </div>
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
                <span className={styles.cart__totalAmout}>{`$${totalAmount}`}</span>

                <span className={styles.cart__totalCount}>
                  {`Total for ${totalCartItemsCount} items`}
                </span>
              </div>
              <img 
                src={lineCheckout}
                alt='lineCheckout'
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
        )}
      </div>
      {isModal && <ModalWindow />}
    </section>
  );
};
