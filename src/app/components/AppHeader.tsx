'use client';

import Link from 'next/link';
import React from 'react';
import svgAppLogo from '../img/logos/micanovi-logo.svg';
import Image from 'next/image';

import styles from '../styles/appHeader.module.scss';
import AppButton from './AppButton';
import LanguageSwitch from './LanguageSwitch';
import { Spin as Hamburger } from 'hamburger-react';

import mobilePapir from '../img/globals/MOBILE-PAPIR.svg';
import { useAppContext } from '../contexts/store';
import { useSearchParams } from 'next/navigation';

import { FaFacebookF as FacebookIcon, FaTelegramPlane as TeleIcon, FaInstagram as InstaIcon } from 'react-icons/fa';

const AppHeader = () => {
  const {
    state: { userLang },
  } = useAppContext();

  const parseByLang = (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString);
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const navLinksOne = [
    {
      text: parseByLang(`O nama`, `About us`),
      href: parseByLang(`/o-nama/?lang=${checkParams}`, `/about-us/?lang=${checkParams}`),
    },

    { text: parseByLang('Kontakt', 'Contact'), href: `/kontakt/?lang=${checkParams}` },
    {
      text: parseByLang('Što posjetiti?', 'What to visit?'),
      href: parseByLang(`/sto-posjetiti/?lang=${checkParams}`, `/what-to-visit/?lang=${checkParams}`),
    },

    { text: parseByLang('Fotogalerije', 'Photo galleries'), href: `/kontakt/?lang=${checkParams}` },
    {
      text: parseByLang('Google maps', 'Google maps'),
      href: `https://www.google.com/maps/dir//Mićanovi+Dvori+-+Restaurant+%26+Camping+Village+Zrmanja,+Kruševo,+Župani+Drage+bb,+23450,+Obrovac/@44.185102,15.6901721,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4761c76fa64dcc3b:0xaad9982059813b2!2m2!1d15.692747!2d44.185102?entry=ttu`,
    },
  ];
  const navLinksTwo = [
    { text: 'Zrmanja Camping Vilagge', href: '/' },
    { text: 'Riva Rafting Centar', href: '/' },
    // { text: 'Što posjetiti u okolici?', href: '/obrovacki-kraj' },
  ];

  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  const handleNavControl = () => {
    if (!isNavOpen) {
      document.documentElement.classList.add('overflow-hidden');
      setIsNavOpen(true);
    } else {
      document.documentElement.classList.remove('overflow-hidden');
      setIsNavOpen(false);
    }
  };

  React.useEffect(() => {
    document.documentElement.classList.remove('overflow-hidden');
  }, []);

  const HeaderBaseOne = () => {
    return (
      <div className={styles.navLeft}>
        {navLinksOne.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    );
  };

  const HeaderBaseTwo = () => {
    return (
      <div className={styles.navRight}>
        {navLinksTwo.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <nav className={styles.navParent}>
      <div className='overflow-hidden'>
        <div className={`${styles.navPromoTrack} `}>
          <span>TRIP ADVISOR</span>
          <span>|</span>
          <a href='tel:+0038523689920'>+385 23 689 920</a>
          <span>|</span>
          <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
        </div>
        <div className={styles.navMaster}>
          <Link className={styles.noEffectLogo} href={'/'}>
            <Image src={svgAppLogo} alt='app logo' />
          </Link>
          <div className={styles.navParentMaster}>
            <div className={styles.navInnerParent}>
              <div className={styles.navLeftParent}>
                <HeaderBaseOne />
              </div>
              <span className={styles.headerLinkDivid}>|</span>

              <HeaderBaseTwo />
            </div>
            <div className={styles.navInnerParent}>
              <AppButton isNav content={parseByLang('KAKO DO NAS?', 'HOW TO FIND US?')} />
              <div className={styles.navInnerParentLang}>
                <LanguageSwitch />
              </div>
              <Hamburger toggled={isNavOpen} onToggle={handleNavControl} color='#2f2a32' />
            </div>
          </div>
        </div>

        {/* MOBILE */}

        <div
          className={
            isNavOpen ? `${styles.mobileNavParent}` : `${styles.mobileNavParent} ${styles.mobileNavParentClosed}`
          }
        >
          <div className={styles.mobileNavParentInner}>
            <div className={styles.langSwitchBlock}>
              <LanguageSwitch />
            </div>

            <div className={styles.mobileBlock}>
              {navLinksOne.map((link, index) => (
                <Link key={link.text} href={link.href}>
                  {link.text}
                </Link>
              ))}
            </div>

            <div className={styles.mobileBlockSpace}></div>

            <div className={styles.mobileBlock}>
              {navLinksTwo.map((link, index) => (
                <Link key={link.text} href={link.href}>
                  {link.text}
                </Link>
              ))}
            </div>

            <div className={styles.socialBlock}>
              <div className={styles.socialBlockImage}>
                <FacebookIcon size={20} color='#2f476f' />
              </div>
              <div className={styles.socialBlockImage}>
                <InstaIcon size={20} color='#2f476f' />
              </div>
              <div className={styles.socialBlockImage}>
                <TeleIcon size={20} color='#2f476f' />
              </div>
            </div>

            <Image className={styles.mobilePapir} alt='' src={mobilePapir} />
          </div>
        </div>
      </div>

      {/* MOBILE */}
    </nav>
  );
};

export default AppHeader;
