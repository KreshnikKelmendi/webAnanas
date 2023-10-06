import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const MobileMenu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropDown, setDropdown] = useState(false);

  //localization
  const { locale, locales, push } = useRouter();
  const router = useRouter();
  const { t } = useTranslation("menu");
  const handleLocaleChange = (locale) => () => {
    push(router.pathname, undefined, { locale: locale });
  };

  const path = router.pathname;
  return (
    <>
      <div
        className="fixed top-3 right-2 z-50 cursor-pointer overflow-visible "
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      >
        <svg
          width="38"
          height="23"
          viewBox="0 0 40 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <motion.path
            animate={menuActive ? { rotate: 45, y: 10 } : { rotate: 0 }}
            d="M19.8894 4.83502C6.43115 5.22863 11.7402 4.78663 3.96129 4.84505C1.16586 4.866 -0.000900003 4.48951 0.0305 3.46566C0.0891686 1.53037 -0.35539 0.560218 0.89648 0.264865C1.19974 0.193461 1.46416 0.168086 2.83419 0.122352C5.73457 0.0255729 7.18475 -0.0228166 9.09107 0.0229174C13.1946 0.121762 29.6176 0.0394407 35.5084 0.000788051C38.9145 -0.0216364 40.0763 0.432458 39.9962 1.62656C39.873 3.46448 40.1738 4.25553 39.2186 4.59248C38.0452 5.00645 35.715 4.93652 31.1562 4.83414C30.1266 4.81112 29.8548 4.79076 28.9194 4.76273C25.4017 4.65681 22.8418 4.74857 19.8894 4.83502Z"
            fill="white"
          />
          <motion.path
            animate={
              menuActive
                ? { opacity: 0, x: 10, transition: { duration: 0.2 } }
                : { opacity: 1, x: 0, transition: { duration: 0.2 } }
            }
            d="M27.9336 14.835C19.8587 15.2286 23.0441 14.7866 18.3768 14.8451C16.6995 14.866 15.9995 14.4895 16.0183 13.4657C16.0535 11.5304 15.7868 10.5602 16.5379 10.2649C16.7198 10.1935 16.8785 10.1681 17.7005 10.1224C19.4407 10.0256 20.3109 9.97718 21.4546 10.0229C23.9167 10.1218 33.7706 10.0394 37.3051 10.0008C39.3487 9.97836 40.0458 10.4325 39.9977 11.6266C39.9238 13.4645 40.1043 14.2555 39.5312 14.5925C38.8271 15.0065 37.429 14.9365 34.6937 14.8341C34.076 14.8111 33.9129 14.7908 33.3516 14.7627C31.241 14.6568 29.7051 14.7486 27.9336 14.835Z"
            fill="white"
          />
          <motion.path
            animate={menuActive ? { rotate: -45, y: -10 } : { rotate: 0 }}
            d="M19.8894 24.835C6.43115 25.2286 11.7402 24.7866 3.96129 24.8451C1.16586 24.866 -0.000900003 24.4895 0.0305 23.4657C0.0891686 21.5304 -0.35539 20.5602 0.89648 20.2649C1.19974 20.1935 1.46416 20.1681 2.83419 20.1224C5.73457 20.0256 7.18475 19.9772 9.09107 20.0229C13.1946 20.1218 29.6176 20.0394 35.5084 20.0008C38.9145 19.9784 40.0763 20.4325 39.9962 21.6266C39.873 23.4645 40.1738 24.2555 39.2186 24.5925C38.0452 25.0065 35.715 24.9365 31.1562 24.8341C30.1266 24.8111 29.8548 24.7908 28.9194 24.7627C25.4017 24.6568 22.8418 24.7486 19.8894 24.835Z"
            fill="white"
          />
        </svg>
      </div>
      {menuActive ? (
        <motion.div
          initial={{ x: "100%" }}
          animate={{
            x: 0,
            transition: { duration: 0.1, ease: [0.17, 0.67, 0.83, 0.67] },
          }}
          className="fixed top-0 left-0 w-screen h-screen z-40 bg-green-main flex flex-col items-end justify-center text-white px-6 text-[12.09vw]"
        >
          <div className="fixed bottom-0 w-screen flex">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex justify-end">
              <button
                onClick={handleLocaleChange(locales[0])}
                className="text-[5,8139534884vw] font-sans"
              >
                {locales[0]}
              </button>
              <p className="text-[5,8139534884vw] font-sans">/</p>
              <button
                onClick={handleLocaleChange(locales[1])}
                className="text-[5,8139534884vw] font-sans"
              >
                {locales[1]}
              </button>
            </div>
          </div>
          <div className={`${path == "/" && "mobMenuActive"} w-full`}>
            <Link href="/">
              <h1 className={`w-full text-end cursor-pointer `}>{t("home")}</h1>
            </Link>
          </div>
          <div className={`${path == "/rrethNesh" && "mobMenuActive"} w-full`}>
            <Link href="/rrethNesh">
              <h1 className={`w-full text-end cursor-pointer `}>
                {" "}
                {t("about")}
              </h1>
            </Link>
          </div>
          <div className={`${path == "/brendet" && "mobMenuActive"} w-full`}>
          <Link href="/brendet">
              {/* <h1 className={`w-full text-end cursor-pointer `}>
                {" "}
                {t("brands")}
              </h1> */}
              <div
              onClick={() => {
                setDropdown(!dropDown);
              }}
            >
              <h1 className={`w-full text-end cursor-pointer `}>
                {t("brands")}
              </h1>
              {/* {dropDown && ( */}
                <div className="w-full text-end">
                  <Link href="/brendet/besiana">
                    <h2 className="text-2xl">Besiana</h2>
                  </Link>
                  <Link href="/brendet/vegiana">
                    <h2 className="text-2xl">Vegiana</h2>
                  </Link>
                  <Link href="/brendet/bonafide">
                    <h2 className="text-2xl">Bonafide</h2>
                  </Link>
                  <Link href="/brendet/others">
                    <h2 className="text-2xl">{t('oth')}</h2>
                  </Link>
                </div>
               {/* )}  */}
            </div>
            </Link>
           
          </div>
          {/* <div className={`${path == "/partneret" && "mobMenuActive"} w-full`}>
            <Link href="/partneret">
              <h1 className={`w-full text-end cursor-pointer `}>
                {t("partnership")}
              </h1>
            </Link>
          </div> */}
          <div className={`${path == "/kontakti" && "mobMenuActive"} w-full`}>
            <Link href="/kontakti">
              <h1 className={`w-full text-end cursor-pointer `}>
                {t("contact")}
              </h1>
            </Link>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
};
export default MobileMenu;
