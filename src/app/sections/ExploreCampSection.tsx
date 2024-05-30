'use client';

import React from 'react';
import { parseByLang } from '../utils/parseByLang';
import { useAppContext } from '../contexts/store';
import { UserLanguage } from '../types/appState';
import { taxonomyEn, taxonomyHr } from '../staticContentData/exploreTaxonomyCont';
import Image from 'next/image';
import styles from '../styles/exploreCampSection.module.scss';
import { galleryImages } from '../staticContentData/staticImageImports';

const ExploreCampSection = () => {
  const [currentActiveFilter, setCurrentActiveFilter] = React.useState<string>('Vinski Podrum');
  const {
    state: { userLang },
  } = useAppContext();

  const TaxonomyFilterCont = () => {
    if (userLang === UserLanguage.hr) {
      return taxonomyHr.map((tax) => (
        <span
          className={currentActiveFilter === tax ? `${styles.activeFilter}` : ''}
          onClick={() => setCurrentActiveFilter(tax)}
          key={tax}
        >
          {tax}
        </span>
      ));
    } else
      return taxonomyEn.map((tax) => (
        <span
          className={currentActiveFilter === tax ? `${styles.activeFilter}` : ''}
          onClick={() => setCurrentActiveFilter(tax)}
          key={tax}
        >
          {tax}
        </span>
      ));
  };

  const demoGallery = Array.from(Array(12).keys());

  return (
    <section className={styles.sectionMain}>
      <div className={styles.sectionTitle}>
        <h2>{parseByLang('Fotogalerija', 'Photo Gallery', userLang)}</h2>
      </div>

      {/* <div className={styles.taxonomyFilterContainer}>
        <TaxonomyFilterCont />
      </div> */}

      <div className={styles.galleryContainer}>
        {galleryImages.map((galItem) => (
          <div key={galItem.src} className={styles.imageContainer}>
            <Image
              src={galItem.src}
              placeholder='blur'
              blurDataURL={galItem.blurDataURL}
              priority
              fill
              alt='placeholder'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCampSection;
