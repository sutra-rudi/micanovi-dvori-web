import React, { Suspense } from 'react';
import styles from '../styles/contact.module.scss';
import AppFooter from '../components/AppFooter';
import kontaktHero from '../img/sections/kucice/micanovi-kartica-3-back.png';
import AppHeader from '../components/AppHeader';
import Loading from './loading';
import PageContent from './PageContent';

export default async function Kontakt({ searchParams }: any) {
  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.sectionMain}>
        <PageContent
          title={typeof searchParams !== 'undefined' && searchParams.lang === 'en' ? `SEND INQUIRY` : `POŠALJI UPIT`}
          imgSrc={kontaktHero}
        />
      </main>
    </Suspense>
  );
}
