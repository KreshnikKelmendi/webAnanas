import Header from "../components/Header";
import Form from "../components/homePage/Form";
import Map from "../components/Map";
import Footer from "../components/Footer";
import useWindowSize from "../hooks/useWindowSize";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Brendet = () => {
  const { t } = useTranslation("contact");
  const size = useWindowSize();
  const isMobile = size.width < 768;

  return (
    <div className="w-full min-h-screen kontaktiBg overflow-hidden">
      <Header />
      <main className="w-full h-full pt-24">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-orange-main md:text-headerDesktop pb-10 text-mobH3">
            {t("brands")}
          </h1>
          <p className="w-2/3 text-center md:text-paragraphDesktop text-mobParagraph">
            {t("brands")}
          </p>
        </div>         
      </main>
      <Footer />
    </div>
  );
};

export default Brendet;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contact", "menu"])),
    },
  };
}
