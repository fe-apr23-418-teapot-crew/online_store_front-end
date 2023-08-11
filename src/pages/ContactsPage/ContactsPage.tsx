import React from 'react';
import styles from './ContactsPage.module.scss';

const developers = [
  {
    devName: 'Bogdan Mihailenko',
    links: {
      gmail: 'b.a.mykhailenko@gmail.com',
      github: 'https://github.com/bohdan-mykhailenko',
      linkedin: 'https://www.linkedin.com/in/bohdan-mykhailenko-a1849926b/',
    },
    role: 'teamlead',
  },
  {
    devName: 'Maksym Nemera',
    links: {
      gmail: 'maksym.nemera@outlook.com',
      github: 'https://github.com/maksym-nemera',
      linkedin: 'https://www.linkedin.com/in/maksym-nemera/',
    },
    role: 'backend developer',
  },
  {
    devName: 'Maksym Bobryk',
    links: {
      gmail: 'booobryyyk@gmail.com',
      github: 'https://github.com/maksym-bobryk',
      linkedin: 'http://www.linkedin.com/in/maksym-bobryk',
    },
    role: 'fullstack developer',
  },
  {
    devName: 'Kucheriavenko Yuliia',
    links: {
      gmail: 'kucheriavenko.dev@gmail.com',
      github: 'https://github.com/Yuliia-kucheriavenko',
      linkedin: 'https://www.linkedin.com/in/yuliia-kucheriavenko-800ab6233/',
    },
    role: 'frontend developer',
  },
  {
    devName: 'Ivan Iarovyi',
    links: {
      gmail: 'yarovyi@gmail.com',
      github: 'https://github.com/niaYaro',
      linkedin: 'https://www.linkedin.com/in/ivan-yarovyi-067381266/',
    },
    role: 'frontend developer',
  },
  {
    devName: 'Kyryl Shorin',
    links: {
      gmail: 'kirillshorin8838@gmail.com',
      github: 'https://github.com/kirilshorin',
    },
    role: 'frontend developer',
  },
];

export const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our team</h1>
      {developers.map((developer) => (
        <section key={developer.devName}>
          <div className={styles.card}>
            <div className={styles.card__name}>
              {developer.devName}
            </div>
            <div className={styles.card__role}>
              Role: {developer.role}
            </div>
            <a href={developer.links.github} className={styles.card__item}>
              GitHub
            </a>
            <a href={developer.links.gmail} className={styles.card__item}>
              Email
            </a>
            <a href={developer.links.linkedin} className={styles.card__item}>
              LinkedIn
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};
