import type { Metadata, Viewport } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import { GlobalContextProvider } from './contexts/store';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';
const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });
import { GoogleAnalytics } from '@next/third-parties/google';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={ubuntu.className}>
        <GlobalContextProvider>
          <Providers>
            <Toaster />
            {children}
          </Providers>
        </GlobalContextProvider>
      </body>
      <GoogleAnalytics gaId={process.env.MICANOVI_DVORI_GOOGLE_ANALYTICS_CODE!} />
    </html>
  );
}
