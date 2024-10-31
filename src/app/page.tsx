import AppHeader from './components/AppHeader';
import styles from './styles/page.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import AppFooter from './components/AppFooter';
import HeroSekcija from './sections/HeroSekcija';
import OdmoriSeSekcija from './sections/OdmoriSeSekcija';
import KampKuciceSekcija from './sections/KampKuciceSekcija';
import ExploreCampSection from './sections/ExploreCampSection';
import DodatneInformacije from './sections/DodatneInformacije';
import OnamaSekcija from './sections/OnamaSekcija';
import PogledajVideo from './sections/PogledajVideo';
import GallerySection from './sections/GallerySection';
import MapSection from './sections/MapSection';
import { UserLanguage } from './types/appState';
import micanoviHero from '../app/img/micanovi-galerija/micanovi-gallery01.png';
import micanoviHeroAlt from '../app/img/micanovi-galerija/micanovi-gallery03.png';

export async function generateMetadata({ searchParams }: { searchParams: { lang: string } }) {
  const parseByLang = (hrString: string | string[], enString: string | string[]) => {
    if (Array.isArray(hrString) && Array.isArray(enString)) {
      return searchParams.lang === 'hr' ? hrString : enString;
    }
    return searchParams.lang === UserLanguage.hr ? hrString : enString;
  };

  return {
    generator: 'Next.js',
    applicationName: 'Mićanovi Dvori',
    referrer: 'origin-when-cross-origin',
    keywords: parseByLang(
      ['konoba', 'domaća hrana', 'Hrvatska', 'Zrmanja', 'tradicionalna jela', 'udoban ambijent', 'gastro avantura'],
      ['tavern', 'homemade food', 'Croatia', 'Zrmanja', 'traditional dishes', 'cozy ambiance', 'gastro adventure']
    ),
    authors: [{ name: 'Mićanovi Dvori' }, { name: 'Studio Sutra', url: 'https://www.sutra.hr/' }],
    creator: 'Mićanovi Dvori',
    publisher: 'Mićanovi Dvori',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: 'index, follow',
    title: parseByLang(
      'Mićanovi Dvori - Konoba s Domaćom Hranom, Hrvatska',
      'Mićanovi Dvori - Tavern with Homemade Food, Croatia'
    ),
    description: parseByLang(
      'Dobrodošli u Mićanove Dvore, mjesto gdje možete uživati u domaćoj hrani i udobnom ambijentu. Pridružite nam se i okusite delicije iz zaboravljenog doba.',
      'Welcome to Mićanovi Dvori, a place where you can enjoy homemade food and a cozy ambiance. Join us and taste delicacies from a forgotten era.'
    ),
    openGraph: {
      title: parseByLang(
        'Mićanovi Dvori - Konoba s Domaćom Hranom, Hrvatska',
        'Mićanovi Dvori - Tavern with Homemade Food, Croatia'
      ),
      description: parseByLang(
        'Dobrodošli u Mićanovi Dvori, mjesto gdje možete uživati u domaćoj hrani i udobnom ambijentu. Pridružite nam se i okusite delicije iz zaboravljenog doba.',
        'Welcome to Mićanovi Dvori, a place where you can enjoy homemade food and a cozy ambiance. Join us and taste delicacies from a forgotten era.'
      ),
      url: 'https://micanovidvori.com',
      siteName: 'Mićanovi Dvori',
      locale: parseByLang('hr_HR', 'en_US'),
      type: 'website',
      images: [
        {
          url: micanoviHero.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Uživanje u domaćoj hrani u Mićanovi Dvorima', 'Enjoying homemade food at Mićanovi Dvori'),
        },
        {
          url: micanoviHeroAlt.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Uživanje u domaćoj hrani u Mićanovi Dvorima', 'Enjoying homemade food at Mićanovi Dvori'),
        },
      ],
    },
    twitter: {
      title: parseByLang(
        'Mićanovi Dvori - Konoba s Domaćom Hranom, Hrvatska',
        'Mićanovi Dvori - Tavern with Homemade Food, Croatia'
      ),
      description: parseByLang(
        'Dobrodošli u Mićanovi Dvori, mjesto gdje možete uživati u domaćoj hrani i udobnom ambijentu. Pridružite nam se i okusite delicije iz zaboravljenog doba.',
        'Welcome to Mićanovi Dvori, a place where you can enjoy homemade food and a cozy ambiance. Join us and taste delicacies from a forgotten era.'
      ),
      url: '',
      siteName: 'Mićanovi Dvori',
      locale: parseByLang('hr_HR', 'en_US'),
      type: 'website',
      images: [
        {
          url: micanoviHero.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Uživanje u domaćoj hrani u Mićanovi Dvorima', 'Enjoying homemade food at Mićanovi Dvori'),
        },
        {
          url: micanoviHeroAlt.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Uživanje u domaćoj hrani u Mićanovi Dvorima', 'Enjoying homemade food at Mićanovi Dvori'),
        },
      ],
    },
  };
}

export default async function Home() {
  const mapboxApiKey = process.env.MAPBOX_API_KEY;
  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.homeMain}>
        <HeroSekcija />
        <OdmoriSeSekcija />
        <KampKuciceSekcija />
        <PogledajVideo />
        <ExploreCampSection />
        <OnamaSekcija />
        <MapSection apiKey={mapboxApiKey!} />
        <DodatneInformacije isLanding />
        <GallerySection />
      </main>
    </Suspense>
  );
}
