'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/kampKucicaSekcija.module.scss';
import { Link as ScrollLink } from 'react-scroll';

import { TfiArrowTopRight as ArticleArrow } from 'react-icons/tfi';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
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

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');

  const parseByLang = (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString);

  const parseBullets = () => {
    return checkParams === UserLanguage.hr
      ? bulletsHr.map((bullet: string) => <li key={bullet}>{bullet}</li>)
      : bulletsEn.map((bullet: string) => <li key={bullet}>{bullet}</li>);
  };

  return (
    <article className={`${styles.kampKucicaCard} ${parseClass}`}>
      <div className={styles.kampKucicaImageCont}>
        <Image fill src={imageUrl} alt='camp house thumbnail' />
      </div>
      <div className={styles.kampKucicaContent}>
        <h2>{parseByLang(titleHr, titleEng)}</h2>

        {descHr ? <p>{parseByLang(descHr, descEng)}</p> : bulletsHr ? <ul>{parseBullets()}</ul> : null}

        <ScrollLink to='#gallery-section' duration={500} smooth className={styles.kampKucicaCtaCont}>
          <span>{parseByLang(learnMoreHr, learnMoreEng)}</span>
          <span>
            <ArticleArrow className={styles.articleArrow} />
          </span>
        </ScrollLink>
      </div>
    </article>
  );
};

export default KampKucicaCard;
