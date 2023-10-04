import { motion, useDragControls } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

//fix drag for mobile
const HorizontalSlider = ({ sliderData }) => {
  //imgRef
  const imgRef = useRef(null);
  //get window size
  const size = useWindowSize();
  const isMobile = size.width < 768;
  //calculate width of image
  const photoWidth = imgRef.current ? imgRef.current.offsetWidth : 0;
  // slider state and handlers
  const [currentSlide, setCurrentSlide] = useState(1);
  const [scrollStartPosition, setScrollStartPosition] = useState(0);
  const handlePrev = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return sliderData.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentSlide((prev) => {
      if (prev === sliderData.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div className="flex flex-col px-desktop w-full lg:h-[30vw] md:h-[65vw] md:max-h-screen z-30 overflow-hidden items-center justify-around h-screen">
      {/* slider nav and picture */}
      <div className="flex h-[30%] z-30  items-center justify-center">
        {/* slider prev button */}
        {!isMobile && (
          <motion.button
            initial={{ scale: 1, opacity: 0.95 }}
            animate={
              currentSlide == 0
                ? {
                    opacity: 0,
                    pointerEvents: "none",
                  }
                : { opacity: 1, pointerEvents: "auto" }
            }
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="h-full"
          >
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-90"
            >
              <path
                d="M22.7082 0.286876C23.8589 0.291945 25.1277 0.453013 26.703 0.792056C30.1782 1.53941 32.3979 4.13854 32.6411 7.74466C32.7443 9.26978 32.8226 10.8129 32.9158 12.5988C32.9608 13.4943 33.0107 14.4579 33.069 15.5235L33.069 15.533C33.0757 15.9802 33.089 16.4533 33.104 16.9523C33.1256 17.667 33.1489 18.4324 33.1489 19.2315C33.1489 21.1909 33.0107 23.3575 32.3763 25.4897C31.2406 29.3059 28.5314 31.5637 24.5399 32.0211C19.2796 32.6231 14.6154 32.7132 10.2842 32.297C9.92788 32.2627 9.5632 32.2384 9.21018 32.2159C8.69064 32.1821 8.15112 32.1466 7.62325 32.0774C3.68508 31.5626 1.48037 29.5948 0.684408 25.8817C0.373017 24.4275 0.179855 22.9683 0.109917 21.5429C-0.163174 15.9757 0.0716175 11.0421 0.825948 6.45946C1.25723 3.8316 2.59604 2.17695 4.80242 1.54279C7.0804 0.888929 8.93209 0.543689 10.6289 0.458084C14.5138 0.262657 18.397 0.264346 22.7082 0.286876Z"
                fill="white"
              />
              <path
                d="M8.72341 11.2899C9.59576 13.7979 10.9043 16.4149 12.6489 19.1406C13.2195 20.3069 14.9556 23.4967 15.7521 22.8898C16.5745 21.649 17.6733 20.3202 18.3103 19.1406C19.1915 18.1596 20.0624 16.3683 21.0279 15.081C22.0884 13.667 23.1923 12.0942 23.9719 10.535"
                stroke="#EE303C"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </motion.button>
        )}
        {/* slider pics */}
        <motion.div
          drag="x"
          dragConstraints={{ left: -10, right: 10 }}
          dragSnapToOrigin={true}
          onDragStart={(e, info) => {
            setScrollStartPosition(info.point.x);
          }}
          onDragEnd={(e, info) => {
            if (info.point.x > scrollStartPosition) {
              handlePrev();
            } else {
              handleNext();
            }
          }}
          className="flex px-desktop md:w-[78vw] h-[30vh] md:h-[30vh] z-30 items-start justify-center flex-shrink-0 flex-wrap-nowrap overflow-hidden w-[80vw] "
        >
          <motion.div
            animate={
              isMobile
                ? {
                    x: (currentSlide - 1) * -80 - 85 + "vw",
                    transition: { duration: 0.5 },
                  }
                : {
                    x: (currentSlide - 1) * -26 - 6 + "vw",
                    transition: { duration: 0.5 },
                  }
            }
            className="h-full w-full flex"
          >
            {sliderData.map((data, index) => {
              const isCurrent = index === currentSlide;
              const isPrev = index === currentSlide - 1;
              const isNext = index === currentSlide + 1;
              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: !isCurrent
                      ? !isPrev && !isNext
                        ? "0"
                        : "0.75"
                      : "1",
                    opacity: !isCurrent && !isPrev && !isNext ? "0.4" : "1",
                    transition: { duration: 0.5 },
                  }}
                  className={`lg:w-[26vw] lg:max-w-[26vw] md:w-[26vw]  relative h-[32vh] flex flex-shrink-0 w-[80vw]
                flex-wrap-nowrap items-center justify-center transition-all duration-500 ease-out  `}
                >
                  <Image
                    src={data.image}
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
        {/* next button */}
        {!isMobile && (
          <motion.button
            initial={{ scale: 1, opacity: 0.95 }}
            animate={
              currentSlide == sliderData.length - 1
                ? { opacity: 0, pointerEvents: "none" }
                : { opacity: 1 }
            }
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="h-full"
          >
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-rotate-90"
            >
              <path
                d="M22.7082 0.286876C23.8589 0.291945 25.1277 0.453013 26.703 0.792056C30.1782 1.53941 32.3979 4.13854 32.6411 7.74466C32.7443 9.26978 32.8226 10.8129 32.9158 12.5988C32.9608 13.4943 33.0107 14.4579 33.069 15.5235L33.069 15.533C33.0757 15.9802 33.089 16.4533 33.104 16.9523C33.1256 17.667 33.1489 18.4324 33.1489 19.2315C33.1489 21.1909 33.0107 23.3575 32.3763 25.4897C31.2406 29.3059 28.5314 31.5637 24.5399 32.0211C19.2796 32.6231 14.6154 32.7132 10.2842 32.297C9.92788 32.2627 9.5632 32.2384 9.21018 32.2159C8.69064 32.1821 8.15112 32.1466 7.62325 32.0774C3.68508 31.5626 1.48037 29.5948 0.684408 25.8817C0.373017 24.4275 0.179855 22.9683 0.109917 21.5429C-0.163174 15.9757 0.0716175 11.0421 0.825948 6.45946C1.25723 3.8316 2.59604 2.17695 4.80242 1.54279C7.0804 0.888929 8.93209 0.543689 10.6289 0.458084C14.5138 0.262657 18.397 0.264346 22.7082 0.286876Z"
                fill="white"
              />
              <path
                d="M8.72341 11.2899C9.59576 13.7979 10.9043 16.4149 12.6489 19.1406C13.2195 20.3069 14.9556 23.4967 15.7521 22.8898C16.5745 21.649 17.6733 20.3202 18.3103 19.1406C19.1915 18.1596 20.0624 16.3683 21.0279 15.081C22.0884 13.667 23.1923 12.0942 23.9719 10.535"
                stroke="#EE303C"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </motion.button>
        )}
      </div>
      {/* slider text */}
      <p className="text-white text-sm lg:w-1/2 w-full">
        {/* {sliderData[currentSlide].text} */}
      </p>
    </div>
  );
};

export default HorizontalSlider;
