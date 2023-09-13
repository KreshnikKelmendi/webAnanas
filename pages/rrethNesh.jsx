import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import HorizontalSlider from "../components/HorizontalSlider";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useWindowSize from "../hooks/useWindowSize";


const RrethNesh = () => {
  const { t } = useTranslation("aboutUs");

  const SliderData = [
    {
      image: "/rrethNesh/slider/foto1.png",
      text: t("sliderOne"),
    },

    {
      image: "/rrethNesh/slider/foto2.png",
      text: "Kontrata në mes të gumpanise për prodhimin e biberit “BESIANA” dhe Qendrës grumbulluese “AGROCELINA”. Me datën 23.03.2017 është nënshkruar kontrata në mes të Kompanisë për prodhimin e biberit “BESIANA” dhe Qendrës grumbulluese “AGROCELINA” për kultivimin e specit të kuq të varietetit ne siperfaqe prej 50 hektar. Fermerët më të mirë do të kontraktohen për prodhimin e këtij speci. Kontraktimi e fermereve po bëhet qe disa vite dhe është bërë një re-freskim i traditës 90 vjeqare të Kompanisë ‘Besiana’ nga Podujeva. Farmerëve ju urojmë që punët t’ju ecin mbarë edhe këtë vit. Në njejtët kohë, i falenderojmë KONSUMATORET tonë për perdorimin e produkteve tona - janë pikerisht ata që caktojnë hapsirën e tokës që mbjell me këtë lloj speci.",
    },

    {
      image: "/rrethNesh/slider/foto2.png",
      text: "Kontrata në mes të gumpanise për prodhimin e biberit “BESIANA” dhe Qendrës grumbulluese “AGROCELINA”. Me datën 23.03.2017 është nënshkruar kontrata në mes të Kompanisë për prodhimin e biberit “BESIANA” dhe Qendrës grumbulluese “AGROCELINA” për kultivimin e specit të kuq të varietetit ne siperfaqe prej 50 hektar. Fermerët më të mirë do të kontraktohen për prodhimin e këtij speci. Kontraktimi e fermereve po bëhet qe disa vite dhe është bërë një re-freskim i traditës 90 vjeqare të Kompanisë ‘Besiana’ nga Podujeva. Farmerëve ju urojmë që punët t’ju ecin mbarë edhe këtë vit. Në njejtët kohë, i falenderojmë KONSUMATORET tonë për perdorimin e produkteve tona - janë pikerisht ata që caktojnë hapsirën e tokës që mbjell me këtë lloj speci.",
    },
  ];
  const size = useWindowSize();
  const isMobile = size.width < 768;
  
  return (
    <div className="w-full">
      <Header />
      <motion.div className="min-h-screen md:h-[120vw] relative h-[130vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <Image
            src="/rrethNeshBG.png"
            fill
            className="object-cover h-full md:w-full  mt-42 md:mt-20 "
          />
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center z-30 pt-desktop">
          <h1 className="z-30 text-orange-main pt-desktop md:text-headerTwoDesktop text-mobH3">
            {t("aboutUs")}
          </h1>
          <p className="md:w-1/2 w-full px-10 z-30 text-center text-mobParagraph md:text-paragraphDesktop">
            {t("aboutUsText")}
          </p>
        </div>
        {!isMobile && (
          <div className="w-full z-30 flex justify-end items-start flex-col pt-[24vw] px-desktop">
            <h1
              className="z-30 text-orange-main pt-desktop md:text-headerTwoDesktop
          text-mobH3"
            >
              {t("history")}
            </h1>
            <p className="md:w-1/3 w-full z-30 md:text-white text-mobParagraph md:text-paragraphDesktop text-black">
              {t("historyText")}
            </p>
          </div>
        )}
      </motion.div>
      <div className="flex pl-desktop pr-10 pb-desktop md:flex-row flex-col items-center">
        {isMobile && (
          <div className="w-full z-30 flex justify-end items-start flex-col px-desktop -mt-48 pb-20">
            <h1
              className="z-30 text-orange-main pt-desktop md:text-headerTwoDesktop
          text-mobH3"
            >
              {t("history")}
            </h1>
            <p className="md:w-1/3 w-full z-30 md:text-white text-mobParagraph md:text-paragraphDesktop text-black">
              {t("historyText")}
            </p>
          </div>
        )}
        <div className="md:w-1/2 relative w-full min-h-[40vh]">
          <Image
            src="/rrethNesh/fotoProdhimet.png"
            fill
            className="object-contain h-full w-full"
          />
        </div>
        <div className="md:w-1/2 pr-desktop pl-10 z-40 w-full">
          <h1 className="text-green-main md:text-headerTwoDesktop text-mobH3">
            Prodhimet
          </h1>
          <p>{t("products")}</p>
        </div>
      </div>
  
     

      {/* Galeria */}
    
       
     
      <div
        className="bg-red-main mt-desktop flex flex-col items-center
      justify-around py-0"
      >
         <img src='/7I3A0084 1.png' alt="" />
        <h1 className="my-10 text-white md:text-headerTwoDesktop text-mobH3">
          Galeria
        </h1>
        <div>
          <HorizontalSlider sliderData={SliderData} />
        </div>
      </div>
      {/* kontakti */}

      <Footer />
    </div>
  );
};
export default RrethNesh;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["aboutUs", "menu"])),
    },
  };
}
