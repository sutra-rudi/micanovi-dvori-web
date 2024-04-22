'use client';

import React from 'react';
import { useAppContext } from '../contexts/store';
import AppButton from '../components/AppButton';
import odm1 from '../img/sections/odmori-se-1.png';
import odm2 from '../img/sections/odmori-se-2.png';
import odm3 from '../img/sections/odmori-se-3.png';
import Image from 'next/image';
import styles from '../styles/odmoriSe.module.scss';

const OdmoriSeSekcija = () => {
  const {
    state: { userLang },
  } = useAppContext();

  const parseByLang = (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString);

  const sectionContentHr = `Gospodarstvo Mićanovi Dvori za sezonu 2024. otvoreni su isključivo za goste koji su u aranžmanu koje pruža Riva Rafting Centar svojim gostima i partnerskim agencijama, što znači da gastro ponuda ne pružamo gostima izvan navedenog aranžmana.\nU ruralnom ambijentu Mićanovi Dvori nude izvorne specijalitete iz zaboravljenog vremena. Ne propustite priliku da ih okusite; pripremljene su na isti način kao nekada od strane naših dragih baka.`;

  const sectionContentEn = `Mićanovi Dvori Estate for the 2024 season are open exclusively to guests booked through Riva Rafting Center and their partner agencies. This means that our gastronomic offerings are not available to guests outside of the mentioned arrangements.\nIn the rural ambiance, Mićanovi Dvori offers original delicacies from a forgotten era. Don't miss the opportunity to taste them; they are prepared the same way as they were by our beloved grandmothers.`;

  return (
    <section className={styles.mainSection}>
      <div className={styles.innerContent}>
        <div className={styles.ctaContainer}>
          <h2>{parseByLang('Odmori se', 'Take a break')}</h2>
          <p>{parseByLang(sectionContentHr, sectionContentEn)}</p>
          <div className={styles.sectionButtonsContainer}>
            <AppButton isAbout content={parseByLang('Kontaktirajte nas', 'Contact us')} />
            <AppButton isRelax isAbout content={parseByLang('Google maps', 'Google maps')} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image width={315} height={237} src={odm1} alt='picture of camp' />
          <Image width={385} height={534} src={odm2} alt='picture of camp' />
          <Image width={234} height={174} src={odm3} alt='picture of camp' />
        </div>
      </div>
    </section>
  );
};

export default OdmoriSeSekcija;
