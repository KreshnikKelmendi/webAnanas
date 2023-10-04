import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
//hooks
import useWindowSize from "../hooks/useWindowSize";
const Header = () => {
  const { locale, locales, push } = useRouter();
  const router = useRouter();

  const handleLocaleChange = (locale) => () => {
    push(router.pathname, undefined, { locale: locale });
  };
  const size = useWindowSize();
  const isMobile = size.width < 768;
  const isTablet = size.width < 1080;
  const isGigantic = size.width > 1920;
  
  return (
    <header
      className={` ${
        isTablet
          ? "bg-[#0000003D] h-12  top-0 left-0 -mt-12 "
          : "bg-[#0000003D]  h-16 -mt-16"
      } w-full z-50 sticky top-0 2xl:h-20 2xl:-mt-20`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
        className={`flex items-center justify-between h-full px-desktop`}
      >
        <Logo />
        {isTablet ? <MobileMenu /> : <Menu />}
        {!isTablet && (
          <div className="flex text-white z-50 2xl:text-2xl xl:text-md ">
            <button
              onClick={handleLocaleChange(locales[0])}
              className=" font-sans px-2  "
            >
              {locales[0]}
            </button>
            <p className=" font-sans">/</p>
            <button
              onClick={handleLocaleChange(locales[1])}
              className=" font-sans px-2 "
            >
              {locales[1]}
            </button>
          </div>
        )}
      </motion.div>
    </header>
  );
};
export default Header;
