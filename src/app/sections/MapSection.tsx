'use client';

import Image from 'next/image';
import React from 'react';
import mapPlaceholder from '../img/sections/map-placeholder-micanovi.png';
import styles from '../styles/mapSection.module.scss';
const MapSection = () => {
  return (
    <section className={styles.sectionMain}>
      <div className={styles.mapContainer}>
        <Image fill src={mapPlaceholder} alt='mapa' priority />
      </div>
    </section>
  );
};

export default MapSection;
