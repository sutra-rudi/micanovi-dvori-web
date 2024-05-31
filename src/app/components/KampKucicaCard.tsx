'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/kampKucicaSekcija.module.scss';
import { useAppContext } from '../contexts/store';
import { parseByLang } from '../utils/parseByLang';
import { Link as ScrollLink } from 'react-scroll';

import { TfiArrowTopRight as ArticleArrow } from 'react-icons/tfi';
interface KampKucicaCard {
  imageUrl: StaticImageData;
  titleHr: string;
  titleEng: string;
  learnMoreHr: string;
  learnMoreEng: string;
  descHr: string | any;
  descEng: string | any;
  bulletsHr: string[] | any;
  bulletsEn: string[] | any;
  checkAvailabilityHr: string;
  checkAvailabilityEng: string;
  klasa: string;
}

const KampKucicaCard = (props: KampKucicaCard) => {
  const { imageUrl, titleHr, titleEng, learnMoreHr, learnMoreEng, descHr, descEng, bulletsEn, bulletsHr, klasa } =
    props;
  const parseClass = `${styles[klasa]}`;
  const {
    state: { userLang },
  } = useAppContext();

  const parseBullets = () => {
    return userLang === 'hr'
      ? bulletsHr.map((bullet: string) => <li key={bullet}>{bullet}</li>)
      : bulletsEn.map((bullet: string) => <li key={bullet}>{bullet}</li>);
  };

  return (
    <article className={`${styles.kampKucicaCard} ${parseClass}`}>
      <div className={styles.kampKucicaImageCont}>
        <Image fill src={imageUrl} alt='camp house thumbnail' />
      </div>
      <div className={styles.kampKucicaContent}>
        <h2>{parseByLang(titleHr, titleEng, userLang)}</h2>

        {descHr ? <p>{parseByLang(descHr, descEng, userLang)}</p> : bulletsHr ? <ul>{parseBullets()}</ul> : null}

        <ScrollLink to='#gallery-section' duration={500} smooth className={styles.kampKucicaCtaCont}>
          <span>{parseByLang(learnMoreHr, learnMoreEng, userLang)}</span>
          <span>
            <ArticleArrow className={styles.articleArrow} />
          </span>
        </ScrollLink>
      </div>
    </article>
  );
};

export default KampKucicaCard;
