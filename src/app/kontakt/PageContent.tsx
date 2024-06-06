'use client';

import React from 'react';

import Image, { StaticImageData } from 'next/image';

import styles from '../styles/contact.module.scss';
import localFont from 'next/font/local';
const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import { BannerLayer, ParallaxBanner, useParallax } from 'react-scroll-parallax';
import PaperDividBot from '../components/PaperDividBot';

import micanoviParallax from '../img/globals/micanovi-kontakt-forma-parallax.png';
import PaperDividTop from '../components/PaperDividTop';
import ContactForm from '../components/ContactForm';
import {
  MdMailOutline as MailIcon,
  MdOutlineLocationOn as LocationIcon,
  MdLocalPhone as PhoneIcon,
} from 'react-icons/md';
import { parseByLang } from '../utils/parseByLang';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

interface AboutUsPageContent {
  title: string;
  imgSrc: StaticImageData;
}

const PageContent = (content: AboutUsPageContent) => {
  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={content.imgSrc ?? ''} alt='hero' placeholder='blur' priority quality={100} />,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 0.85],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroHeader}>
        <h1 className={RecoletaBold.className}>{content.title}</h1>
      </div>
    ),
  };

  const { ref: paralaImage } = useParallax<HTMLDivElement>({
    scale: [1, 1.7],
  });

  const params = useSearchParams().get('lang');

  const pars = params === 'hr' ? UserLanguage.hr : UserLanguage.en;

  return (
    <div>
      <div className={styles.heroWrapp}>
        <PaperDividTop />
        <ParallaxBanner className={styles.sectionHero} layers={[background, headline]} />
      </div>

      <div className={styles.masterContainer}>
        <PaperDividBot />
        <div className={styles.contentContainer}>
          <ContactForm />
          <div className={styles.contactCardCont}>
            <div className={styles.contactInfoCont}>
              <p>{parseByLang('Kontaktirajte nas', 'Contact us', pars)}</p>

              <div className={styles.contactInfoInnerCont}>
                <a href='https://www.google.com/maps/dir//Obala+hr.+Čas.+Senada+Ž.+6,+23450,+Obrovac/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4761c76f06da2a03:0x8abf7d8f6eb1b3c1?sa=X&ved=1t:707&ictx=111'>
                  <span className={styles.contactIcon}>
                    <LocationIcon size={24} />
                  </span>
                  <span className={styles.contactText}>Župani, Kruševo, Drage 7a 23450 Obrovac</span>
                </a>

                <a href={'mailto:info@riva-rafting-centar.hr'}>
                  <span className={styles.contactIcon}>
                    <MailIcon size={24} />
                  </span>
                  <span className={styles.contactText}>info@riva-rafting-centar.hr</span>
                </a>

                <a href={'tel:+38523689920'}>
                  <span className={styles.contactIcon}>
                    <PhoneIcon size={24} />
                  </span>
                  <span className={styles.contactText}>023 689 920</span>
                </a>
              </div>
            </div>
            <div className={styles.contactImageCont}>
              {/* @ts-ignore */}
              <Image ref={paralaImage} fill src={micanoviParallax} alt='kaya tour' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
