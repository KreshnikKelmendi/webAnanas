import Header from "../components/Header";
import Footer from "../components/Footer";
import useWindowSize from "../hooks/useWindowSize";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Partneret = () => {
    const { t } = useTranslation("partnership");
    const size = useWindowSize();
    const isMobile = size.width < 768;
  

    return(
        <div className="w-full min-h-screen kontaktiBg overflow-hidden">
        <Header />
        <main className="w-full h-full pt-24">
          <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-orange-main md:text-headerDesktop pb-10 text-mobH3">
              {t("partnership")}
            </h1>
            {/* <p className="w-2/3 text-center md:text-paragraphDesktop text-mobParagraph">
              {t("partnership")}
            </p> */}
          </div>
          </main>
          </div>
    )
}

export default Partneret;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["partnership", "menu"])),
      },
    };
  }