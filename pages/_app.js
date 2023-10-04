import "../styles/globals.css";
import localFont from "@next/font/local";
import { appWithTranslation } from "next-i18next";


const headerFont = localFont({
  src: "../public/fonts/FontsFree-Net-TheForegenRoughOne.ttf",
  variable: "--font-rough",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`${headerFont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(MyApp);
