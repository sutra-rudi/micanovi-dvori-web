'use client';

import styles from '../styles/dodatneInformacije.module.scss';
import imgone from '../img/sections/imag1.png';
import imgtwo from '../img/sections/imag2.png';
import imgthree from '../img/sections/imag3.png';
import React from 'react';
import Image from 'next/image';
import { Ubuntu_Condensed } from 'next/font/google';
import Link from 'next/link';
import { useAppContext } from '../contexts/store';

const ubuntuCondensed = Ubuntu_Condensed({ weight: '400', subsets: ['latin'] });
import { useInView } from 'react-intersection-observer';
interface MoreInfoProps {
  isLanding: boolean;
}

const DodatneInformacije = (props: MoreInfoProps) => {
  const {
    state: { userLang },
  } = useAppContext();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section
      className={
        props.isLanding
          ? `${styles.dodatneInformacije}`
          : `${styles.dodatneInformacije} ${styles.dodatneInformacijeSub}`
      }
    >
      <h2 className={styles.sectionHeading}>{userLang === 'hr' ? 'Dodatne Informacije' : 'Additional information'}</h2>

      <div ref={ref} className={styles.sectionListContainer}>
        <div className={inView ? `${styles.imageBox} ${styles.inView}` : `${styles.imageBox}`}>
          <div className={styles.titleHolder}>
            <div className={styles.titleHolderInner}>
              <h6 className={ubuntuCondensed.className}>RIVA RAFTING</h6>
              <h2 className={styles.headingDefault}>{`TURISTIČKE\nAKTIVNOSTI\nNA ZRMANJI\nI VELEBITU`}</h2>
            </div>
          </div>

          <Image src={imgone} fill alt='offer image' />
        </div>
        <div className={inView ? `${styles.imageBox} ${styles.inView}` : `${styles.imageBox}`}>
          <div className={styles.titleHolder}>
            <div className={styles.titleHolderInner}>
              <h6 className={ubuntuCondensed.className}>MIĆANOVI DVORI</h6>
              <h2 className={styles.headingDefault}>{`ZRMANJA\nCAMPING\nVILAGGE\n `}</h2>
            </div>
          </div>

          <Image src={imgtwo} fill alt='offer image' />
        </div>
        <div className={inView ? `${styles.imageBox} ${styles.inView}` : `${styles.imageBox}`}>
          <Link href={'/obrovacki-kraj'}>
            <div className={styles.titleHolder}>
              <div className={styles.titleHolderInner}>
                <h6 className={ubuntuCondensed.className}>OBROVAC - ZRMANJA - VELEBIT</h6>
                <h2 className={styles.headingDefault}>{`ŠTO POSJETITI U\nOKOLICI?\n  `}</h2>
              </div>
            </div>

            <Image src={imgthree} fill alt='offer image' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DodatneInformacije;
