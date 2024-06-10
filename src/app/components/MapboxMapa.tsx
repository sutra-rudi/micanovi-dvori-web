'use client';

import PaperDividTop from '@/app/components/PaperDividTop';
import PaperDividBotAlt from '@/app/components/PaperDivitBotAlt';
import React from 'react';
import mapboxgl from 'mapbox-gl';
import styles from '../styles/mapSection.module.scss';

interface AktivnostInterface {
  apiKey: string;
}

const MapboxMapa = (props: AktivnostInterface) => {
  const mapContainer = React.useRef<any>(null);
  const map = React.useRef<any>(null);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/lovreperaic/clwkedp9500ul01qs8qdn6vbd',
      accessToken: props.apiKey,

      // center: [lng, lat],
      zoom: 11,
    });

    map.current.scrollZoom.disable();
    map.current.setCenter({ lat: '44.182943149033214', lng: '15.69450882816688' });
    map.current.flyTo({ lat: '44.182943149033214', lng: '15.69450882816688' });
  }, [props.apiKey]);

  return (
    <div className={styles.mapContainer} ref={mapContainer}>
      <PaperDividTop />
      <PaperDividBotAlt />
    </div>
  );
};

export default MapboxMapa;
