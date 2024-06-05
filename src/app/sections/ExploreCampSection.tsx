'use client';

import React from 'react';
import { parseByLang } from '../utils/parseByLang';

import Image from 'next/image';
import styles from '../styles/exploreCampSection.module.scss';
import { galleryImages } from '../staticContentData/staticImageImports';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
const ExploreCampSection = () => {
  const [isLightboxOpen, setIsLightboxOpen] = React.useState<boolean>(false);
  const [firstLightboxImage, setFirstLightboxImage] = React.useState<number>(0);
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  return (
    <section className={styles.sectionMain} id='#gallery-section'>
      <div className={styles.sectionTitle}>
        <h2>{parseByLang('Fotogalerija', 'Photo Gallery')}</h2>
      </div>

      <div className={styles.galleryContainer}>
        {galleryImages.map((galItem, index) => (
          <div key={galItem.src} className={styles.imageContainer}>
            <Image
              src={galItem.src}
              placeholder='blur'
              blurDataURL={galItem.blurDataURL}
              priority
              fill
              alt='camp site view'
              onClick={() => {
                setFirstLightboxImage(index);
                setIsLightboxOpen(true);
              }}
            />
          </div>
        ))}
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={galleryImages}
          index={firstLightboxImage}
        />
      </div>
    </section>
  );
};

export default ExploreCampSection;
