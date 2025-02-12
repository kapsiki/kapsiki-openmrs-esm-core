import React from 'react';
import { interpolateUrl, useConfig } from '@openmrs/esm-framework';
import { type TFunction } from 'react-i18next';
import { type ConfigSchema } from './config-schema';
import styles from './login/login.scss';
import ProductOfLogo from './assets/productoflogo.png';

const PoweredByLogo: React.FC<{ t: TFunction }> = ({ t }) => {
  const { poweredByLogo } = useConfig<ConfigSchema>();
  return poweredByLogo.src ? (
    <img
      alt={poweredByLogo.alt ? t(poweredByLogo.alt) : t('EMR Logo', 'EMR logo')}
      className={styles.poweredByLogo}
      src={interpolateUrl(poweredByLogo.src)}
    />
  ) : (
    <svg role="img" className={styles.logo}>
      <title>{t('openmrsLogo', 'OpenMRS logo')}</title>
      <use href="#omrs-logo-full-color"></use>
    </svg>
  );
};

export default PoweredByLogo;
