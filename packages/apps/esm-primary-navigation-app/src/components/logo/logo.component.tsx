import React from 'react';
import { interpolateUrl, useConfig } from '@openmrs/esm-framework';
import { type ConfigSchema } from '../../config-schema';
import styles from './logo.scss';
import logoImg from '../../assets/kapsiki-healthcare-logo.png';

const Logo: React.FC = () => {
  const { logo } = useConfig<ConfigSchema>();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Failed to load logo image:', e);
  };

  return (
    <>
      {logo?.src ? (
        <img alt={logo.alt} className={styles.logo} onError={handleImageError} src={interpolateUrl(logo.src)} />
      ) : logo?.name ? (
        logo.name
      ) : (
        <img alt={logo.alt} className={styles.logo} onError={handleImageError} src={logoImg} />
      )}
    </>
  );
};

export default Logo;
