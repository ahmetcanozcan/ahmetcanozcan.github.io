import React from 'react';

import * as styles from './PreLoader.module.css';

const PreLoader = () => {
  return (
    <div className={styles.preLoader}>
      <div className={styles.preLoaderCircle} />
    </div>
  );
};


export default PreLoader;