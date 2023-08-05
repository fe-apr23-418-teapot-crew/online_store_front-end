import React from 'react';
import home from '../../icons/Home.svg';
import styles from './LocationHistory.module.scss';

interface LocationHistoryProps {
  path: string;
  locationHistoryList?: string[];
}

export const LocationHistory: React.FC<LocationHistoryProps> = ({
  path,
  locationHistoryList,
}) => {
  return (
    <div className={styles.locationHistory}>
      <img src={home} className={styles.locationHistory__homeIcon} />

      {locationHistoryList ? (
        <ul className={styles.locationHistory__list}>
          {locationHistoryList.map((location) => (
            <li key={location} className={styles.locationHistory__item}>
              {`> ${location}`}
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.locationHistory__item}>{`> ${path}`}</div>
      )}
    </div>
  );
};
