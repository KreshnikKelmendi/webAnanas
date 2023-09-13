import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//components
import Header from "../components/Header";
import BesianaSlider from "../components/homePage/BesianaSlider";
import BonafideSlider from "../components/homePage/BonafideSlider";
import HeroLayout from "../components/homePage/Hero/HeroLayout";
import Partneret from "../components/homePage/Partneret";
import VegianaSlider from "../components/homePage/VegianaSlider";
import AboutUs from "../components/homePage/AboutUs";
import Footer from "../components/Footer";
import InitialAnimation from "../components/homePage/InitialAnimation";
import localFont from "@next/font/local";

//font
export const mainFont = localFont({
  src: "../public/fonts/FontsFree-Net-TheForegenRoughOne.ttf",
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ananas Impex</title>
        <meta name="description" content="Ananas Impex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InitialAnimation />
      <Header />
      <HeroLayout />
      <AboutUs />
      <BesianaSlider />
      <VegianaSlider />
      <BonafideSlider />
      <Partneret />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "menu",
        "home",
        "besiana",
        "vegiana",
        "bonafide",
        "button",
      ])),
    },
  };
}
