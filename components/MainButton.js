import { useState } from "react";
import { motion } from "framer-motion";
 
const MainButton = ({
  text,
  textColor,
  buttonClass,
  hoverClass,
  hoverText,
  animate,
  delay,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={` items-center justify-center flex relative z-40 ${
        isHover ? hoverClass : buttonClass
      } `}
      initial={animate && { opacity: 0 }}
      animate={
        animate && { opacity: 1, transition: { duration: 0.5, delay: delay } }
      }
    >
      <p
        className={`text-[3.02vw] md:text-buttonText font-sans z-40 py-4 px-12 uppercase ${
          isHover ? hoverText : textColor
        } `}
      >
        {text}
      </p>
    </motion.button>
  );
};

export default MainButton;
