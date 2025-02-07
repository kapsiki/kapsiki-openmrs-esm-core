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
      alt={poweredByLogo.alt ? t(poweredByLogo.alt) : t('openmrsLogo', 'OpenMRS logo')}
      className={styles.poweredByLogo}
      src={interpolateUrl(poweredByLogo.src)}
    />
  ) : (
    <img
      alt={poweredByLogo.alt ? t(poweredByLogo.alt) : t('openmrsLogo', 'OpenMRS logo')}
      className={styles.poweredByLogo}
      src={ProductOfLogo}
    />
  );
};

export default PoweredByLogo;
