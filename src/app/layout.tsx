import type { Metadata, Viewport } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { GlobalContextProvider } from './contexts/store';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';
const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });
import { GoogleAnalytics } from '@next/third-parties/google';
import { getSocialLinksQuery } from './queries/getSocialLinksQuery';
import { fetchData } from './utils/callApi';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import { Suspense } from 'react';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
  interactiveWidget: 'overlays-content',
  colorScheme: 'light',
  themeColor: '#eeeeee',
};

export const metadata: Metadata = {
  title: {
    default: 'Micanovi Dvori',
    template: '%s | Micanovi Dvori',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const prepareSocialLinks = await fetchData(getSocialLinksQuery);

  const socialShorthand = prepareSocialLinks.data.povezniceDrustvene.povezniceDrustveneFields;
  return (
    <html lang='en'>
      <body className={ubuntu.className}>
        <Toaster />
        <Suspense>
          <GlobalContextProvider>
            <AppHeader appSocialLinks={socialShorthand} />
            <Providers>{children}</Providers>
            <AppFooter appSocialLinks={socialShorthand} />
          </GlobalContextProvider>
        </Suspense>
      </body>
      <GoogleAnalytics gaId={process.env.MICANOVI_DVORI_GOOGLE_ANALYTICS_CODE!} />
    </html>
  );
}
