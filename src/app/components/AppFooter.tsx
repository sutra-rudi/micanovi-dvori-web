'use client';

import React from 'react';
import styles from '../styles/appFooter.module.scss';
import footerBg from '../img/globals/micanovi-dvori-app-footer.png';
import footerLogo from '../img/logos/micanovi-footer-logo.svg';
import Image from 'next/image';
import facebookIcon from '../img/icons/FACEBOOK-FOOTER.svg';
import instaIcon from '../img/icons/INSTA-FOOTER.svg';
import teleIcon from '../img/icons/TELE-FOOTER.svg';
import footerArrow from '../img/icons/FOOTER-LINK-ARROW.svg';
import footerAltBg from '../img/globals/micanovi-dvori-app-footer-alt.png';
import PaperDividTop from './PaperDividTop';

import { useWindowSize } from '../hooks/useWindowSize';

import { kampKuciceContent } from '../staticContentData/kampKucice';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

interface FooterInterface {
  isAbout?: boolean;
}

const AppFooter = (props: FooterInterface) => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const parseByLang = (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString);

  const clientWindowSize = useWindowSize();

  return (
    <footer style={{ marginTop: props.isAbout ? '0' : '3rem' }} className={styles.appFooter}>
      <PaperDividTop isAbout={props.isAbout} />

      <div className={styles.socialFooterStack}>
        <p>{parseByLang('Zapratite nas:', 'Follow us:')}</p>
        <div className={styles.socialIconStack}>
          <Image src={facebookIcon} alt='icon' width={42} height={42} />
          <Image src={instaIcon} alt='icon' width={42} height={42} />
          <Image src={teleIcon} alt='icon' width={42} height={42} />
        </div>
      </div>

      <Image
        fill
        src={clientWindowSize && clientWindowSize?.width > 1024 ? footerBg : footerAltBg}
        alt='footerBackground'
        placeholder='blur'
        quality={100}
        priority
        loading='eager'
      />

      <div className={styles.footerMaster}>
        <div className={styles.appLogoContainer}>
          <Image fill src={footerLogo} alt='app logo' />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.footerBlock}>
            <p>{parseByLang('Naša ponuda', 'Our offer')}</p>
            <div className={styles.activityStack}>
              <ul>
                {kampKuciceContent.map((content, index) => (
                  <li key={index}>
                    <a href=''>{parseByLang(content.titleHr, content.titleEng)}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.footerBlock}>
            <p>{parseByLang('Linkovi', 'Links')}</p>
            <div className={styles.linkStack}>
              <a href={parseByLang(`/o-nama/?lang=${checkParams}`, `/about-us?lang=${checkParams}`)}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('O nama', 'About us')}</span>
              </a>
              <a href={`/kontakt/?lang=${checkParams}`}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang(`Kontakt forma`, `Contact form`)}</span>
              </a>
              <a href={`/#FAQ?lang=${checkParams}`}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('FAQ', 'FAQ')}</span>
              </a>
              <a href={`/obrovacki-kraj?lang=${checkParams}`}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('Obrovački kraj', 'Obrovac region')}</span>
              </a>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Zrmanja Camping village</span>
              </a>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Mićanovi dvori</span>
              </a>
            </div>
          </div>

          <div className={styles.footerBlock}>
            <p>{parseByLang('Kontaktirajte nas', 'Contact us')}</p>
            <div className={styles.contactStack}>
              <a href='https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=hr&sa=X&geocode=KTvMTaZvx2FHMbITmAWCma0K&daddr=Kruševo,+Župani+Drage+bb,+23450,+Obrovac'>{`Kruševo, Župani Drage bb,\n23450, Obrovac`}</a>
              <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
              <a href='tel:+38523689920'>023 689 920</a>
            </div>
          </div>
          <div className={styles.footerDislaimerTrack}>
            <div className={styles.disclaimerSig}>
              <div className={styles.disclaimerSigIn}>
                <a href={parseByLang('/uvjeti-koristenja', '/terms-of-use')}>
                  {parseByLang('Uvjeti i odredbe', 'Terms & Conditions')}
                </a>

                <span>|</span>

                <a href={parseByLang('/pravila-privatnosti', '/privacy-policy')}>
                  {parseByLang('Politika privatnosti', 'Privacy Policy')}
                </a>

                <span>|</span>

                <a href={parseByLang('/podatci-o-tvrtki', '/company-info')}>
                  {parseByLang('Podaci o tvrtki', 'Company info')}
                </a>
              </div>
              <div className={styles.disclaimerSigIn}>
                <span>{parseByLang('© 2024 All Rights Reserved', '© 2024 All Rights Reserved')}</span>
                <span>|</span>

                <a href='https://www.sutra.hr/'>WEB DESIGN SUTRA.HR</a>
              </div>
            </div>

            <div className={styles.disclaimerSocial}>
              <span>{parseByLang('Zapratite nas:', 'Follow us:')}</span>
              <div className={styles.disclaimerSocialIcons}>
                <a href='https://www.facebook.com/RivaRaftingCentar/'>
                  <Image src={facebookIcon} alt='icon' width={32} height={32} />
                </a>
                <a href='https://www.instagram.com/riva_rafting_centar/ '>
                  <Image src={instaIcon} alt='icon' width={32} height={32} />
                </a>
                <a href='mailto:info@riva-rafting-centar.hr'>
                  <Image src={teleIcon} alt='icon' width={32} height={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
