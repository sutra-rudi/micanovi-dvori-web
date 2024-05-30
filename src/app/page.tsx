import AppHeader from './components/AppHeader';
import styles from './styles/page.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import AppFooter from './components/AppFooter';
import HeroSekcija from './sections/HeroSekcija';
import OdmoriSeSekcija from './sections/OdmoriSeSekcija';
import KampKuciceSekcija from './sections/KampKuciceSekcija';
import ExploreCampSection from './sections/ExploreCampSection';
import ParallaxVideoSection from './sections/ParallaxVideoSection';
import FAQsection from './sections/FAQsection';
import DodatneInformacije from './sections/DodatneInformacije';
import OnamaSekcija from './sections/OnamaSekcija';
import PogledajVideo from './sections/PogledajVideo';
import GallerySection from './sections/GallerySection';
import ReviewsSection from './sections/ReviewsSection';
import MapSection from './sections/MapSection';

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.homeMain}>
        <HeroSekcija />
        <OdmoriSeSekcija />
        <KampKuciceSekcija />
        <PogledajVideo />
        <ExploreCampSection />
        {/* <ParallaxVideoSection /> */}
        <OnamaSekcija />
        <MapSection />
        {/* <ReviewsSection /> */}

        <DodatneInformacije isLanding />
        {/* <FAQsection /> */}
        <GallerySection />
      </main>
      <AppFooter />
    </Suspense>
  );
}
