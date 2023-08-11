import React from 'react';
import styles from './ContactsPage.module.scss';

interface ContactsPageProps {}

export const ContactsPage: React.FC<ContactsPageProps> = () => {
  return (
    <div className={styles.contactsPage}>
      <div className={styles.contactsContainer}>
        <h2 className={styles.contactsTitle}>Contact Us</h2>
        <p className={styles.contactsDescription}>
          If you have any questions or inquiries, feel free to get in touch with
          us. We would d love to hear from you!
        </p>
        <div className={styles.contactsInfo}>
          <div className={styles.contactsInfoItem}>
            <h3 className={styles.infoTitle}>Email</h3>
            <p className={styles.infoText}>info@example.com</p>
          </div>
          <div className={styles.contactsInfoItem}>
            <h3 className={styles.infoTitle}>Phone</h3>
            <p className={styles.infoText}>+1 (123) 456-7890</p>
          </div>
          <div className={styles.contactsInfoItem}>
            <h3 className={styles.infoTitle}>Address</h3>
            <p className={styles.infoText}>123 Main Street, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
};
