import React from 'react';
import styles from './TechSpecs.module.scss';
import { ProductMain } from '../../types/ProductMain';

interface Props {
  product: ProductMain
}

export const TechSpecs: React.FC<Props> = ({ product }) => {
  const techSpecsData = [
    { label: 'Screen', value: product.screen },
    { label: 'Resolution', value: product.resolution },
    { label: 'Processor', value: product.processor },
    { label: 'RAM', value: product.ram },
    { label: 'Built-in memory', value: product.capacity },
    { label: 'Camera', value: product.camera },
    { label: 'Zoom', value: product.zoom },
    { label: 'Cell', value: product.cell.join(', ') },
  ];

  return (
    <section className={styles.techspecs}>
      <h3 className={styles.techspecs__header}>Tech Specs</h3>
      <div className={styles.techspecs__container}>
        {techSpecsData.map((spec, index) => (
          <div key={index} className={styles['techspecs__spec-row']}>
            <p className={styles.techspecs__subtitle}>{spec.label}</p>
            <p className={styles.techspecs__data}>{spec.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
