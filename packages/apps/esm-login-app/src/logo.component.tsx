import React from 'react';
import { interpolateUrl, useConfig } from '@openmrs/esm-framework';
import { type TFunction } from 'react-i18next';
import { type ConfigSchema } from './config-schema';
import styles from './login/login.scss';
import EMRLogo from './assets/kapsiki-healthcare-logo.png';

const Logo: React.FC<{ t: TFunction }> = ({ t }) => {
  const { logo } = useConfig<ConfigSchema>();
  return logo.src ? (
    <img
      alt={logo.alt ? t(logo.alt) : t('openmrsLogo', 'EMR logo')}
      className={styles.logoImg}
      src={interpolateUrl(logo.src)}
    />
  ) : (
    <img alt={logo.alt ? t(logo.alt) : t('openmrsLogo', 'EMR logo')} className={styles.logoImg} src={EMRLogo} />
  );
};

export default Logo;
