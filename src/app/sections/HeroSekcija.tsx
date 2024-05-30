'use client';
import localFont from 'next/font/local';
import React from 'react';
import styles from '../styles/heroSekcija.module.scss';
import PaperDividTop from '../components/PaperDividTop';
import Loading from '../loading';
import { useAppContext } from '../contexts/store';
import micanoviHeroPoster from '../img/heros/micanovi-dvori-poster.png';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-SemiBold.ttf', weight: '600' }],
});

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

import ReactPlayer from 'react-player';

const HeroSekcija = () => {
  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef<ReactPlayer>(null);

  const onReady = React.useCallback(() => {
    if (!isReady) {
      // const timeToStart = 7 * 60 + 12.6;
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);

  const {
    state: { userLang },
  } = useAppContext();

  const headline_en = `Welcome to \n Mićanovi Dvori`;
  const headline_hr = `Dobro došli na\n Mićanove Dvore`;

  const langCheck = React.useCallback(
    (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString),
    [userLang]
  );

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
        <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>{langCheck(headline_hr, headline_en)}</h1>
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
          {langCheck(headline_hr, headline_en)}
        </h1>
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
