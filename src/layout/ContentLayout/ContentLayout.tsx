import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';

interface ContentLayoutProps {
  path: string;
  title: string;
}

import { Phone } from '../../types/phone';
import dataFromServer from '../../data/phones.json';

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  path,
  title,
}) => {
  const [locationHistory] = useState(['gadgets', 'iphone 10 Pro Max']);
  const [gadgets] = useState<Phone[]>(dataFromServer);
  const count = gadgets.length;

  return (
    <div className={`${path}`}>
      <div className={`${path}__location-history`}>
        <HomeIcon />

        <ul className={`${path}__location-history-list`}>
          {locationHistory.map((location) => (
            <li key={location} className={`${path}__location-history-item`}>
              {`> + ${location}`}
            </li>
          ))}
        </ul>
      </div>

      <h1 className={`${path}__title`}>{title}</h1>

      <h6 className={`${path}__count`}>
        {count} + {'models'}
      </h6>

      <div className={`${path}__filter-fields`}>
        <select name="sort-by" className={`${path}__select`}>
          <option value="by-date" selected>
            By date
          </option>
          <option value="by-name">By name</option>
          <option value="by-price">By price</option>
        </select>

        <select name="pagination" className={`${path}__select`}>
          <option value="16" selected>
            16
          </option>
          <option value="32">32</option>
          <option value="64">64</option>
          <option value="all">All</option>
        </select>
      </div>

      <ul className={`${path}__gadgets`}>
        {gadgets.map((gadget) => (
          <li key={gadget.id}>
            <h3>{gadget.name}</h3>

            <span>{gadget.color}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
