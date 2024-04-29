import React, { Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import styles from '../styles/page.module.scss';

import Loading from './loading';
import aboutUsHero from '../img/heros/about-us-hero.png';
import compImage from '../img/globals/about-us-company-img.png';
import dynamic from 'next/dynamic';

const pageParagraphContentHr = `Riva Rafting Centar d.o.o. is a company with over 20 years of experience in operating in rural, mountainous areas, located in Kruševo, in the hamlet of Drage above Obrovac. Our location has incredible tourist potential for active, sports, and rural tourism, and is strategically positioned within 0 to 80 km from most National Parks and Nature Parks.\n\nAs a leading company in rural and sports tourism in Zadar County and beyond, we are proud of our contribution to the region's promotion. Riva Rafting Centar d.o.o. was chosen as the main production consultant for Discovery Channel's world-famous adventure series Man, Woman, Wild. This project further positioned our company as an expert in outdoor activities, confirming our long-standing experience and knowledge of the challenging terrains that the series protagonists traverse.\n\nWe take pride in being one of the first companies in the Croatian market dedicated to designing, organizing, and conducting all services related to team building and active vacations for groups and individual guests. In addition to standard activities such as rafting, kayaking, trekking, and cycling, we have expanded our operations to include organizing sports events. Our collaboration with local communities promotes the development of new adventure sports and helps promote the region as an active vacation destination.\n\nEvery year, we strive to expand our offerings, introducing new programs that find their place in the market. Our focus is on programs that allow the exploration of the canyons of the Zrmanja, Krnjeza, and Kupa rivers, the southern slopes of Velebit, the Adriatic Sea, and the rich karst underground that this region offers.\n\nRiva Rafting Centar d.o.o. is not just a tourism company; we also participate in scientific spheres and promote the development of scientific tourism. Our activity attracts numerous scientists and researchers from various fields such as speleology, geomorphology, biology, and more. In addition to promoting the beauty of nature, we encourage research and preservation of its resources for future generations.`;

const companyInfoSegments = [
  {
    title: 'Address',
    content: 'Župani, Drage 7a\n23450 Obrovac\nCroatia',
  },
  {
    title: 'Business Hours',
    content: 'Monday – Friday: 08:00 – 15:00\nSaturday – Sunday: 08:00 – 13:00',
  },
  {
    title: 'Business Manager',
    content: 'Romana Župan, bacc.oec',
  },
  {
    title: 'Registry',
    content: 'Registered in the Zadar Court Register, No. 110013185',
  },
  {
    title: 'Employee Status',
    content: 'Authorized employee of Riva Rafting Centar, PA d.o.o. according to GL.3 Art. 16-19 of the imposed Law.',
  },
  {
    title: 'TIN (Tax Identification Number)',
    content: '07465455406',
  },
  {
    title: 'Certification',
    content:
      'Authorized by Certificate of passing the professional exam for branch office manager (N.N. 8/96) and (N.N. 62/96)\nNumber: 76/2007, July 19, 2007.\nUniversity of Split – Faculty of Economics',
  },
  {
    title: 'ID CODE',
    content: 'HR-AB-23-110013185',
  },
  {
    title: 'Contact Information',
    content:
      'Email: info@riva-rafting.hr\nPhone: +385 (0) 23 689 920\nMobile: +385 (0) 98 438 711\nFax: +385 (0) 23 689 930',
  },
  {
    title: 'Director/Management Board Member',
    content: 'Đuro Župan',
  },
  {
    title: 'Supervisory Authority',
    content: `Ministry of Tourism – Independent sector of tourism inspection\nAddress: Trg Republike Hrvatske 8/1, 10000 Zagreb, Croatia\n\nIn accordance with Article 6, Point 3 of the Law on Providing Tourism Services, we inform consumers that any dissatisfaction with the provided service can be expressed by a written complaint at the agency's premises or sent by mail, fax, or email to the address info@riva-rafting.hr.`,
  },
];

export default async function AboutUs() {
  const LazyContent = dynamic(() => import('./PageContent'), { ssr: false });

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.aboutUsMain}>
        <LazyContent
          title='About us'
          paraContent={pageParagraphContentHr}
          imgSrc={aboutUsHero}
          compImg={compImage}
          textSegments={companyInfoSegments}
        />
      </main>
      <AppFooter isAbout />
    </Suspense>
  );
}
