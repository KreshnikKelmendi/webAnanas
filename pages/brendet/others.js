import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useWindowSize from "../../hooks/useWindowSize";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BrendetToggle3 from "../../components/BrendetToggle3";


const Others = () => {
    const { t } = useTranslation("besiana");
    const size = useWindowSize();
    const isMobile = size.width < 768;

    const ProduktetTjera = [
        {
          id: 1,
          img: "/brendet/besiana/sodaBikarboni74.png",
          color: "text-[#FFFFFF]",
          fill: "none",
          header: t("soda1"),
          text: t("sodaDesc"),
          tags: ["100GR", "200GR", "500GR", "1000GR"],
          left: true,
          bottom: true,
          specific:"/brendet/besiana/sodeBikarboni74.png"
        },
        {
          id: 2,
          img: "/brendet/besiana/pire74.png",
          color: "text-[#FFFFFF]",
          fill: "none",
          header: t("pire1"),
          text: t("pireDesc"),
          tags: ["250GR", "500GR", "1000GR"],
          left: false,
          bottom: false,
          specific:"/brendet/besiana/Patate_Pire.png"
        }
      ];

    return(
        
        <div className="h-full w-full overflow-hidden ">
        <Header />
        <main className="relative">
          <div className="w-screen h-20 absolute bottom-0 left-0 bg-gradient-to-t from-white z-40"></div>
          <BrendetToggle3
            bgColor={"green-main"}
            color={"#25579c"}
            data={ProduktetTjera}
            text={t("others")}
            
          />
        </main>
        <Footer />
      </div>
    )
}

export default Others;

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["besiana", "menu"])),
      },
    };
  }