import Image from "next/image";
import { partneret } from "../../data/PartneretData";
import { useTranslation } from "next-i18next";

const Partneret = () => {
  const { t } = useTranslation("home");

  return (
    <div className="w-full overflow-hidden relative md:max-h-1/2 max-h-screen h-full py-14">
      <div className="w-full h-full items-center justify-starts flex flex-col">
        <h1 className="text-green-main md:text-headerTwoDesktop pt-10 text-5xl">
           {t("partnerHeader")}
        </h1>
        <p className="px-4 sm:text-left text-center pb-10">
        {t("partnerText")}
        </p>
      </div>
      <div className="absolute h-full bg-gradient-to-r from-white w-[20vw] left-0 z-30"></div>
      <div className="absolute h-full bg-gradient-to-l from-white w-[20vw] right-0 z-30"></div>
      <div className="w-[200%] h-[20vw] overflow-hidden relative">
        <div className="w-[200%] flex items-center h-full justify-around absolute left-0 animate gap-20">
          {partneret.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-shrink-0 justify-center items-start w-[7rem] md:w-[10rem] lg:w-[10rem]"
              >
                <Image
                  src={item}
                  width={100}
                  height={50}
                  className="object-cover"
                  alt=""
                />
              </div>
            );
          })}
          {partneret.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-shrink-0 justify-center items-start w-[7rem] md:w-[10rem] lg:w-[10rem]"
              >
                <Image
                  src={item}
                  width={100}
                  height={50}
                  className="object-cover"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partneret;
