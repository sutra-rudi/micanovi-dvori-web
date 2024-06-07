'use client';
import localFont from 'next/font/local';
import React from 'react';
import styles from '../styles/heroSekcija.module.scss';
import PaperDividTop from '../components/PaperDividTop';
import Loading from '../loading';

import micanoviHeroPoster from '../img/heros/micanovi-dvori-poster.png';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-SemiBold.ttf', weight: '600' }],
});

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

import ReactPlayer from 'react-player';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import { getHeroTextQuery } from '../queries/getHeroTextQuery';

const HeroSekcija = () => {
  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef<ReactPlayer>(null);

  const [heroData, setHeroData] = React.useState<any>();

  React.useEffect(() => {
    const clientGetHero = async () => {
      const queryMic = process.env.NEXT_PUBLIC_MICANOVI_BASE_QUERY;

      const getHeroText = await fetch(`${queryMic}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: getHeroTextQuery,
        }),
        cache: 'no-store',
      });
      const heroText = await getHeroText.json();

      setHeroData(heroText.data.allMicanoviHeroTekst.edges[0].node.micanoviHeroTekstFields);
    };

    clientGetHero();
  }, []);

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const parseByLang = (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString);

  const onReady = React.useCallback(() => {
    if (!isReady) {
      // const timeToStart = 7 * 60 + 12.6;
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);

  const headline_en = `Welcome to \n Mićanovi Dvori`;
  const headline_hr = `Dobro došli na\n Mićanove Dvore`;

  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: false,
    children: (
      <ReactPlayer
        url={'/hero-video-micanovi.mp4'}
        loop
        muted
        volume={0}
        width={'100%'}
        height={'100%'}
        playsinline
        playing={isReady}
        onReady={onReady}
        fallback={<Loading />}
        config={{
          file: {
            attributes: {
              poster: micanoviHeroPoster.src,
            },
          },
        }}
      />
    ),
  };

  const foreground: BannerLayer = {
    translateY: [0, 30],
    shouldAlwaysCompleteAnimation: false,
    children: (
      <div className={styles.heroCtaKontejner}>
        <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>{parseByLang(headline_hr, headline_en)}</h1>
        {heroData && <h2>{parseByLang(heroData.heroTekstHr, heroData.heroTekstEn)}</h2>}
      </div>
    ),
  };

  const headline: BannerLayer = {
    translateY: [0, 15],
    scale: [1.1, 0.7],
    opacity: [0.15, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroCtaHeaderBacksideWrapper}>
        <h1 className={`${RecoletaBold.className} ${styles.heroCtaHeaderBackside}`}>
          {parseByLang(headline_hr, headline_en)}
        </h1>
        {heroData && <h2>{parseByLang(heroData.heroTekstHr, heroData.heroTekstEn)}</h2>}
      </div>
    ),
  };

  return (
    <section className={styles.heroSekcija}>
      <PaperDividTop />
      <ParallaxBanner className={styles.playerContainer} layers={[background, headline, foreground]} />
    </section>
  );
};

export default HeroSekcija;
