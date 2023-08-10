import React from 'react';
import styles from './RightsPage.module.scss';

interface RightsPageProps {}

export const RightsPage: React.FC<RightsPageProps> = () => {
  return (
    <div className={styles.rightsPage}>
      <div className={styles.rightsContainer}>
        <h2 className={styles.rightsTitle}>Rights and Legal Information</h2>
        <p className={styles.rightsDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tincidunt justo a efficitur. Nulla facilisi. Sed nec purus sit amet
          ligula gravida auctor. Nulla facilisi. Vestibulum vehicula, tellus ut
          fermentum hendrerit, libero mi posuere nisi, eu mattis tortor turpis
          ac arcu.
        </p>
        <p className={styles.rightsDescription}>
          Fusce ac enim a arcu cursus malesuada. Sed laoreet bibendum sapien,
          non facilisis velit elementum eget. Maecenas tincidunt tincidunt est
          vel vulputate. Donec non iaculis ligula. In malesuada, massa quis
          ullamcorper tempus, lectus lorem dignissim turpis, euismod tempor
          felis dolor nec dolor.
        </p>
      </div>
    </div>
  );
};
