import "@/styles/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  const messages = pageProps.messages || {};

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Component {...pageProps} />
      </NextIntlClientProvider>
    </>
  );
}
