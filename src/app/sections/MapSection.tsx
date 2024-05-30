'use client';

import Image from 'next/image';
import React from 'react';
// import mapPlaceholder from '../img/sections/map-placeholder-micanovi.png';
import styles from '../styles/mapSection.module.scss';
import MapboxMapa from '../components/MapboxMapa';

const MapSection = ({ apiKey }: { apiKey: string }) => {
  return (
    <section className={styles.sectionMain}>
      <MapboxMapa apiKey={apiKey} />
      {/* <div className={styles.mapContainer}><Image fill src={mapPlaceholder} alt='mapa' priority /></div> */}
    </section>
  );
};

export default MapSection;
