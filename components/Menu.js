"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import useWindowSize from "../hooks/useWindowSize";

export default function Menu() {
  const [isHover, setIsHover] = useState(false);

  const router = useRouter();
  const { locale } = useRouter();
  const { t } = useTranslation("menu");
  const path = router.pathname;

  const size = useWindowSize();
  const isTablet = size.width < 1080;
  const is2xl = size.width > 1536;
  const isLg = size.width > 1024;
  
  return (
    <nav
      className="flex uppercase font-bold lg:text-buttonText text-white
    w-full justify-center absolute top-0 left-0 h-full items-center sm:text-lg 2xl:text-xl"
    >
      <Link className="px-1" href="/" locale={locale}>
        <p
          className={`cursor-pointer ${
            path == "/" && "button-orange"
          } px-4 py-8 2xl:px-2 2xl:py-4 bo w-[10vw]  text-center`}
        >
          {t("home")}
        </p>
      </Link>
      <Link href="/rrethNesh" className="px-1" locale={locale}>
        <p
          className={`cursor-pointer  ${
            path == "/rrethNesh" && "button-orange"
          } bo w-[10vw]  text-center px-4 py-8 2xl:px-2 2xl:py-4`}
        >
          {t("about")}
        </p>
      </Link>

    
      <div
        className="relative flex items-center flex-col w-[10vw] "
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
      <Link href="/brendet" className="px-1 z-50" locale={locale}>
        <p
          className={`cursor-pointer  ${
            path == "/brendet"
          } w-[10vw]  text-center z-40 px-4 py-2 2xl:px-2 2xl:py-4 `}
        >
          {t("brands")}
        </p>
        </Link>

        {isHover && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
            className=" w-[10vw] absolute h-24 2xl:h-34 z-30 top-16 text-center"
          >
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1 } }}
              className="py-2 button-hover "
            >
              <Link href="/brendet/besiana" className="h-full" locale={locale}>
                <p>Besiana</p>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
              className="py-2 button-hover"
            >
              <Link href="/brendet/vegiana" className="h-full" locale={locale}>
                <p>Vegiana</p>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              className="py-2 button-hover"
            >
              <Link href="/brendet/bonafide" className="h-full" locale={locale}>
                <p>Bonafide</p>
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              className="py-2 button-hover"
            >
              <Link href="/brendet/others" className="h-full" locale={locale}>
                <p>{t("oth")}</p>
              </Link>
            </motion.li>
          </motion.ul>
        )}
        {isHover && (
          <div className="absolute top-0 z-10 w-[10vw] drop-shadow-3xl ">
            <motion.svg
              initial={{ height: "3rem" }}
              animate={{
                height: is2xl ? "16rem" : "17rem",
                transition: { duration: 0.2 },
              }}
              width="10vw"
              height="12rem"
              viewBox="0 0 209 51"
              fill="#F9AE4C"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M103.426 48.3525C33.4424 52.2888 61.05 47.8686 20.5989 48.4529C6.06254 48.6623 -0.00468007 44.8972 0.158602 34.6582C0.463682 15.3044 -1.84805 5.60245 4.66175 2.64878C6.23871 1.9347 7.61372 1.68094 14.738 1.22358C29.8201 0.255742 37.3612 -0.228177 47.2741 0.229185C68.6125 1.21768 154.013 0.394426 184.646 0.00788089C202.358 -0.216374 208.399 4.32479 207.982 16.2664C207.342 34.6464 208.906 42.5573 203.939 45.927C197.837 50.0669 185.72 49.3676 162.014 48.3437C156.66 48.1135 155.247 47.9099 150.383 47.6296C132.091 46.5703 118.779 47.488 103.426 48.3525Z" />
            </motion.svg>
          </div>
        )}
      </div>
      

      {/* <Link href="/partneret" locale={locale}>
        <p
          className={`cursor-pointer px-4 py-8 ${
            path == "/partneret" && "button-orange"
          } bo w-[10vw]  text-center`}
        >
           {t("partnership")}
        </p>
      </Link> */}

      <Link href="/kontakti" locale={locale}>
        <p
          className={`cursor-pointer px-4 py-8 ${
            path == "/kontakti" && "button-orange"
          } bo w-[10vw]  text-center`}
        >
          {t("contact")}
        </p>
      </Link>
    </nav>
  );
}
