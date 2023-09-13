import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const Logo = () => {
  const size = useWindowSize();
  const isMobile = size.width < 768;
  const isTablet = size.width < 1080;
  const isGigantic = size.width > 1440;
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="z-50 ">
      <Link href="/">
        <motion.svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <motion.path
            d="M19.1768 38.8986L10.5334 30.265C10.3979 30.1297 10.3979 29.8861 10.5334 29.7508L19.1768 21.1173C19.3122 20.9819 19.5561 20.9819 19.6916 21.1173L28.3349 29.7508C28.4707 29.8861 28.4707 30.1297 28.3349 30.265L19.6916 38.8986C19.5561 39.0338 19.3122 39.0338 19.1768 38.8986Z"
            fill={isHover ? "#FBB04C" : "white"}
          />
          <motion.path
            d="M29.6355 28.479L20.9921 19.8455C20.8566 19.7101 20.8566 19.4666 20.9921 19.3312L29.6355 10.6977C29.7708 10.5624 30.0146 10.5624 30.1505 10.6977L38.7935 19.3312C38.9293 19.4666 38.9293 19.7101 38.7935 19.8455L30.1505 28.479C29.9879 28.6143 29.7708 28.6143 29.6355 28.479Z"
            fill={isHover ? "#FBB04C" : "white"}
          />
          <motion.path
            d="M8.74499 28.479L0.101593 19.8455C-0.0338642 19.7101 -0.0338642 19.4666 0.101593 19.3312L8.74499 10.6977C8.88045 10.5624 9.12431 10.5624 9.25982 10.6977L17.9032 19.3312C18.0387 19.4666 18.0387 19.7101 17.9032 19.8455L9.25982 28.479C9.09725 28.6143 8.88045 28.6143 8.74499 28.479Z"
            fill={isHover ? "#FBB04C" : "white"}
          />
          <motion.path
            d="M11.5721 7.83801L10.2693 9.13934L16.8025 15.6651L18.1053 14.3638L11.5721 7.83801Z"
            fill={isHover ? "#67AE3E" : "white"}
          />
          <motion.path
            d="M14.2062 5.22632L12.9034 6.52766L19.4367 13.0535L20.7395 11.7521L14.2062 5.22632Z"
            fill={isHover ? "#67AE3E" : "white"}
          />
          <motion.path
            d="M27.2758 7.83398L18.1179 16.9816L19.4207 18.2829L28.5787 9.13531L27.2758 7.83398Z"
            fill={isHover ? "#67AE3E" : "white"}
          />
          <motion.path
            d="M24.6564 5.2207L20.7288 9.14381L22.0316 10.4451L25.9592 6.52206L24.6564 5.2207Z"
            fill={isHover ? "#67AE3E" : "white"}
          />
          <motion.path
            d="M22.0372 2.60107L18.1096 6.5242L19.4124 7.82552L23.34 3.90241L22.0372 2.60107Z"
            fill={isHover ? "#67AE3E" : "white"}
          />
          <motion.path
            d="M19.437 0L15.5094 3.92313L16.8122 5.22446L20.7398 1.30133L19.437 0Z"
            fill={isHover ? "#67AE3E" : "white"}
          />
        </motion.svg>
      </Link>
    </div>
  );
};
export default Logo;
