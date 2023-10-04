import Image from "next/image";
import MainButton from "../../MainButton";
import BannerBlob from "../../BannerBlob";
import Link from "next/link";
import { motion } from "framer-motion";
//hooks
import useWindowSize from "../../../hooks/useWindowSize";
import { useTranslation } from "next-i18next";
import { mainFont } from "../../../pages";

const HeroLayout = () => {
  const size = useWindowSize();
  const { t } = useTranslation("home");
  const isMobile = size.width < 768;
  const isGigantic = size.width > 1440;
  const buttonText = t("readMore");
  
  return (
    <>
      <div
        className={` overflow-hidden  ${
          isMobile ? "h-screen" : "h-[48.33vw]"
        } w-full`}
      >
        <div
          className={`w-full h-screen ${
            isMobile ? "h-screen" : "h-[48.33vw]"
          } relative`}
        >
          <Image src="/a-farm-field-planted-with-pepper-crops-2022-11-09-06-37-54-utc 1.png" fill className="object-cover"alt="" />
          <motion.div className="ml-desktop top-16 md:top-[16vw] md:h-[18vw] h-[69vw] md:w-[38vw] w-[89vw] relative flex md:items-start justify-center flex-col lg:pl-20 items-center px-10 2xl:px-32">
            <BannerBlob
              bgColor={"#65AC45"}
              width={isMobile && "90vw"}
              animateInitial={true}
            />

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              className={`--font-rough text-white z-20 md:text-headerDesktop leading-none sm:text-7xl text-6xl text-center md:text-left`}
            >
              ANANAS IMPEX
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className="text-white z-20 md:text-paragraphDesktop font-sans leading-none pb-4 text-[4vw] text-center md:text-left"
            >
              {t("heroText")}
            </motion.p>

            <Link href="/rrethNesh">
              <MainButton
                buttonClass={"button-white"}
                text={buttonText}
                textColor={"text-green-main"}
                hoverClass={"button-red"}
                hoverText={"text-white"}
                animate={true}
                delay={0.5}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default HeroLayout;
