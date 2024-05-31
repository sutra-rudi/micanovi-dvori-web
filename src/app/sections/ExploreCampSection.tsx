'use client';

import React from 'react';
import { parseByLang } from '../utils/parseByLang';
import { useAppContext } from '../contexts/store';
import Image from 'next/image';
import styles from '../styles/exploreCampSection.module.scss';
import { galleryImages } from '../staticContentData/staticImageImports';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
const ExploreCampSection = () => {
  const {
    state: { userLang },
  } = useAppContext();
  const [isLightboxOpen, setIsLightboxOpen] = React.useState<boolean>(false);
  const [firstLightboxImage, setFirstLightboxImage] = React.useState<number>(0);

  return (
    <section className={styles.sectionMain} id='#gallery-section'>
      <div className={styles.sectionTitle}>
        <h2>{parseByLang('Fotogalerija', 'Photo Gallery', userLang)}</h2>
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
