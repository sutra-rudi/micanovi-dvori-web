'use client';

import Link from 'next/link';
import React from 'react';
import svgAppLogo from '../img/logos/micanovi-logo.svg';
import Image from 'next/image';

import styles from '../styles/appHeader.module.scss';
import AppButton from './AppButton';
import LanguageSwitch from './LanguageSwitch';
import { Spin as Hamburger } from 'hamburger-react';
import { Link as ScrollLink } from 'react-scroll';
import mobilePapir from '../img/globals/MOBILE-PAPIR.svg';

import { useSearchParams } from 'next/navigation';

import { FaFacebookF as FacebookIcon, FaTelegramPlane as TeleIcon, FaInstagram as InstaIcon } from 'react-icons/fa';
import { UserLanguage } from '../types/appState';
import { getSocialLinksQuery } from '../queries/getSocialLinksQuery';

const AppHeader = () => {
  const [footerURLS, setFooterURLS] = React.useState<any>();

  React.useEffect(() => {
    const prepareFooterLinks = async () => {
      const getSocialLinks = await fetch(`https://cms.zrmanja-camping.hr/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: getSocialLinksQuery }),
        cache: 'no-store',
      });

      const parseSocialLinksData = await getSocialLinks.json();
      const prepareDataForFooter = parseSocialLinksData.data.povezniceDrustvene.povezniceDrustveneFields;
      setFooterURLS(prepareDataForFooter);
      return prepareDataForFooter;
    };

    prepareFooterLinks();
  }, []);
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const parseByLang = (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString);

  const navLinksOne = [
    {
      text: parseByLang(`O nama`, `About us`),
      href: parseByLang(`/o-nama/?lang=${checkParams}`, `/about-us/?lang=${checkParams}`),
    },

    { text: parseByLang('Kontakt', 'Contact'), href: `/kontakt/?lang=${checkParams}` },
    {
      text: parseByLang('Što posjetiti?', 'What to visit?'),
      href: parseByLang(`/obrovacki-kraj/?lang=${checkParams}`, `/obrovacki-kraj/?lang=${checkParams}`),
    },

    { text: parseByLang('Fotogalerije', 'Photo galleries'), href: `` },
    {
      text: parseByLang('Google maps', 'Google maps'),
      href: `https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=hr&sa=X&geocode=KTvMTaZvx2FHMbITmAWCma0K&daddr=Kruševo,+Župani+Drage+bb,+23450,+Obrovac`,
    },
  ];
  const navLinksTwo = [
    { text: 'Zrmanja Camping Vilagge', href: 'https://www.zrmanja-camping.hr/' },
    { text: 'Riva Rafting Centar', href: 'https://riva-rafting-centar.hr' },
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
        {navLinksOne.map((link, index) => {
          if (index === 3) {
            return (
              <ScrollLink to='#gallery-section' smooth duration={500} key={link.text}>
                {link.text}
              </ScrollLink>
            );
          }
          return (
            <Link key={link.text} href={link.href}>
              {link.text}
            </Link>
          );
        })}
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
          <Link className={styles.noEffectLogo} href={`/?lang=${checkParams}`}>
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
              {/* <AppButton isNav content={parseByLang('KAKO DO NAS?', 'HOW TO FIND US?')} /> */}
              <Link
                className={styles.navCta}
                href={
                  'https://www.google.com/maps?client=safari&rls=en&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=hr&sa=X&geocode=KTvMTaZvx2FHMbITmAWCma0K&daddr=Kruševo,+Župani+Drage+bb,+23450,+Obrovac'
                }
              >
                <span>{parseByLang('KAKO DO NAS?', 'HOW TO FIND US?')}</span>
              </Link>
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
                <a href={typeof footerURLS !== 'undefined' && footerURLS !== null ? footerURLS.facebook : ''}>
                  <FacebookIcon size={20} color='#2f476f' />
                </a>
              </div>
              <div className={styles.socialBlockImage}>
                <a href={typeof footerURLS !== 'undefined' && footerURLS !== null ? footerURLS.instagram : ''}>
                  <InstaIcon size={20} color='#2f476f' />
                </a>
              </div>
              <div className={styles.socialBlockImage}>
                <a href='mailto:info@riva-rafting-centar.hr'>
                  <TeleIcon size={20} color='#2f476f' />
                </a>
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
