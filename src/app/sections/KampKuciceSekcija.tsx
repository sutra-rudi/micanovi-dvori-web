'use client';

import React from 'react';
import { kampKuciceContent } from '../staticContentData/kampKucice';
import KampKucicaCard from '../components/KampKucicaCard';
import styles from '../styles/kampKucicaSekcija.module.scss';

const KampKuciceSekcija = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.kampKuciceCardContainer}>
        {kampKuciceContent.map((item, index) => {
          const {
            titleEng,
            titleHr,
            learnMoreEn,
            learnMoreHr,
            imageUrl,
            checkAvailabilityEng,
            checkAvailabilityHr,
            descEn,
            descHr,
            bulletsHr,
            bulletsEn,
            klasa,
          } = item;
          return (
            <KampKucicaCard
              key={index}
              titleEng={titleEng}
              titleHr={titleHr}
              learnMoreEng={learnMoreEn}
              learnMoreHr={learnMoreHr}
              imageUrl={imageUrl}
              checkAvailabilityEng={checkAvailabilityEng}
              checkAvailabilityHr={checkAvailabilityHr}
              descEng={descEn}
              descHr={descHr}
              bulletsHr={bulletsHr}
              bulletsEn={bulletsEn}
              klasa={klasa}
            />
          );
        })}
      </div>
    </section>
  );
};

export default KampKuciceSekcija;
