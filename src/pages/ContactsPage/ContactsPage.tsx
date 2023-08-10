import React from 'react';
import styles from './CartPage.module.scss';

const developers = [
  {
    devName: 'Bogdan Mihailenko',
    links: {
      gmail: 'b.a.mykhailenko@gmail.com',
      github: 'https://github.com/bohdan-mykhailenko',
      linkedin: 'https://www.linkedin.com/in/bohdan-mykhailenko-a1849926b/',
    },
  },
  {
    devName: 'Maksym Nemera',
    links: {
      gmail: 'maksym.nemera@outlook.com',
      github: 'https://github.com/maksym-nemera',
      linkedin: 'https://www.linkedin.com/in/maksym-nemera/',
    },
  },
  {
    devName: 'Maksym Bobryk',
    links: {
      gmail: 'booobryyyk@gmail.com',
      github: 'https://github.com/maksym-bobryk',
      linkedin: 'http://www.linkedin.com/in/maksym-bobryk',
    },
  },
  {
    devName: 'Kucheriavenko Yuliia',
    links: {
      gmail: 'kucheriavenko.dev@gmail.com',
      github: 'https://github.com/Yuliia-kucheriavenko',
      linkedin: 'https://www.linkedin.com/in/yuliia-kucheriavenko-800ab6233/',
    },
  },
  {
    devName: 'Ivan Iarovyi',
    links: {
      gmail: 'yarovyi@gmail.com',
      github: 'https://github.com/niaYaro',
      linkedin: 'https://www.linkedin.com/in/ivan-yarovyi-067381266/',
    },
  },
  {
    devName: 'Kyryl Shorin',
    links: {
      gmail: 'kirillshorin8838@gmail.com',
      github: 'https://github.com/kirilshorin',
    },
  },
];

export const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our team</h1>
      {developers.map(developer =>
        <> 
          <div className={styles.card}>
            <div 
              key={developer.devName}
              className={styles.card__name}
            >
              {developer.devName}
            </div>
            <div>
              {developer.links.github}
            </div>
            <div>
              {developer.links.gmail}
            </div>
            <div>
              {developer.links.linkedin}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
