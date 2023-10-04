import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";

//TODO: set z-index for buttons to 50
const Slider = ({ slideData, inverted, color }) => {
  const size = useWindowSize();
  const isMobile = size.width < 768;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrev, setIsPrev] = useState(false);
  const prev = useMotionValue(false);
  const slides = slideData;
  const handlePrev = () => {
    const next = currentSlide - 1;
    setIsPrev(true);
    prev.set(true);
    setCurrentSlide(next < 0 ? slides.length - 1 : next);
  };

  const handleNext = () => {
    const next = currentSlide + 1;
    setIsPrev(false);
    prev.set(false);
    setCurrentSlide(next === slides.length ? 0 : next);
  };

  const slideCalc = currentSlide > 3 ? 3 : currentSlide;
  //animation

  const variants = {
    enter: !isMobile
      ? {
          x: isMobile ? 0 : inverted ? "-200%" : "200%",
          y: -20 + slideCalc * 30 + "%",
          scale: 0,
        }
      : {
          x: 0,
          y: "30vh",
          scale: 0,
        },

    center: isMobile
      ? { x: 0, y: 0, opacity: 1, scale: 0.95 }
      : { x: 0, y: 0, opacity: 1, scale: 1 },
    exit: { x: 0, scale: 0 },
  };

  return (
    <div
      className={`flex md:h-[40vw] h-[80vh] w-full md:items-center overflow-hidden  ${
        !inverted && "md:pl-desktop"
      } px-dekstop md:pr-0 items-start `}
    >
      {/* button prev mobile */}
      {isMobile && (
        <motion.button
          initial={{ scale: 1, opacity: 0.95 }}
          whileHover={{ opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          className="pt-[20vh] pl-4 z-40"
        >
          <svg
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:rotate-180 rotate-90"
          >
            <path
              d="M22.7082 0.286876C23.8589 0.291945 25.1277 0.453013 26.703 0.792056C30.1782 1.53941 32.3979 4.13854 32.6411 7.74466C32.7443 9.26978 32.8226 10.8129 32.9158 12.5988C32.9608 13.4943 33.0107 14.4579 33.069 15.5235L33.069 15.533C33.0757 15.9802 33.089 16.4533 33.104 16.9523C33.1256 17.667 33.1489 18.4324 33.1489 19.2315C33.1489 21.1909 33.0107 23.3575 32.3763 25.4897C31.2406 29.3059 28.5314 31.5637 24.5399 32.0211C19.2796 32.6231 14.6154 32.7132 10.2842 32.297C9.92788 32.2627 9.5632 32.2384 9.21018 32.2159C8.69064 32.1821 8.15112 32.1466 7.62325 32.0774C3.68508 31.5626 1.48037 29.5948 0.684408 25.8817C0.373017 24.4275 0.179855 22.9683 0.109917 21.5429C-0.163174 15.9757 0.0716175 11.0421 0.825948 6.45946C1.25723 3.8316 2.59604 2.17695 4.80242 1.54279C7.0804 0.888929 8.93209 0.543689 10.6289 0.458084C14.5138 0.262657 18.397 0.264346 22.7082 0.286876Z"
              fill="white"
            />
            <path
              d="M8.72341 11.2899C9.59576 13.7979 10.9043 16.4149 12.6489 19.1406C13.2195 20.3069 14.9556 23.4967 15.7521 22.8898C16.5745 21.649 17.6733 20.3202 18.3103 19.1406C19.1915 18.1596 20.0624 16.3683 21.0279 15.081C22.0884 13.667 23.1923 12.0942 23.9719 10.535"
              stroke={color}
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </motion.button>
      )}
      {/* slider small images inverted */}
      {inverted && (
        <div className="flex flex-row md:flex-col overflow-hidden lg:pl-10 ">
          <motion.div
            animate={
              currentSlide >= 3
                ? { y: 20 - currentSlide * 10 + "vw" }
                : { y: 0 }
            }
            className="h-[30vw] md:w-[12vw]"
          >
            {slides.map((slide, index) => {
              return (
                <motion.div
                  key={index}
                  className={`slider-button-bg md:h-[10vw] md:w-[8vw] h-[32vw] w-[24vw] relative ${
                    currentSlide === index &&
                    "slider-button-active transition-all duration-500  md:flex-shrink-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    fill
                    style={{ objectFit: "contain" }}
                    className="scale-75"
                    alt="slideR"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}
      {/* buttons */}
      {!inverted && !isMobile && (
        <div className="flex md:flex-col flex-row h-full gap-4 justify-center z-40">
          <motion.button
            initial={{ scale: 1, opacity: 0.95 }}
            whileHover={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
          >
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:rotate-180 rotate-90"
            >
              <path
                d="M22.7082 0.286876C23.8589 0.291945 25.1277 0.453013 26.703 0.792056C30.1782 1.53941 32.3979 4.13854 32.6411 7.74466C32.7443 9.26978 32.8226 10.8129 32.9158 12.5988C32.9608 13.4943 33.0107 14.4579 33.069 15.5235L33.069 15.533C33.0757 15.9802 33.089 16.4533 33.104 16.9523C33.1256 17.667 33.1489 18.4324 33.1489 19.2315C33.1489 21.1909 33.0107 23.3575 32.3763 25.4897C31.2406 29.3059 28.5314 31.5637 24.5399 32.0211C19.2796 32.6231 14.6154 32.7132 10.2842 32.297C9.92788 32.2627 9.5632 32.2384 9.21018 32.2159C8.69064 32.1821 8.15112 32.1466 7.62325 32.0774C3.68508 31.5626 1.48037 29.5948 0.684408 25.8817C0.373017 24.4275 0.179855 22.9683 0.109917 21.5429C-0.163174 15.9757 0.0716175 11.0421 0.825948 6.45946C1.25723 3.8316 2.59604 2.17695 4.80242 1.54279C7.0804 0.888929 8.93209 0.543689 10.6289 0.458084C14.5138 0.262657 18.397 0.264346 22.7082 0.286876Z"
                fill="white"
              />
              <path
                d="M8.72341 11.2899C9.59576 13.7979 10.9043 16.4149 12.6489 19.1406C13.2195 20.3069 14.9556 23.4967 15.7521 22.8898C16.5745 21.649 17.6733 20.3202 18.3103 19.1406C19.1915 18.1596 20.0624 16.3683 21.0279 15.081C22.0884 13.667 23.1923 12.0942 23.9719 10.535"
                stroke={color}
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </motion.button>
          <motion.button
            initial={{ scale: 1, opacity: 0.95 }}
            whileHover={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
          >
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="-rotate-90 md:rotate-0"
            >
              <path
                d="M22.7082 0.286876C23.8589 0.291945 25.1277 0.453013 26.703 0.792056C30.1782 1.53941 32.3979 4.13854 32.6411 7.74466C32.7443 9.26978 32.8226 10.8129 32.9158 12.5988C32.9608 13.4943 33.0107 14.4579 33.069 15.5235L33.069 15.533C33.0757 15.9802 33.089 16.4533 33.104 16.9523C33.1256 17.667 33.1489 18.4324 33.1489 19.2315C33.1489 21.1909 33.0107 23.3575 32.3763 25.4897C31.2406 29.3059 28.5314 31.5637 24.5399 32.0211C19.2796 32.6231 14.6154 32.7132 10.2842 32.297C9.92788 32.2627 9.5632 32.2384 9.21018 32.2159C8.69064 32.1821 8.15112 32.1466 7.62325 32.0774C3.68508 31.5626 1.48037 29.5948 0.684408 25.8817C0.373017 24.4275 0.179855 22.9683 0.109917 21.5429C-0.163174 15.9757 0.0716175 11.0421 0.825948 6.45946C1.25723 3.8316 2.59604 2.17695 4.80242 1.54279C7.0804 0.888929 8.93209 0.543689 10.6289 0.458084C14.5138 0.262657 18.397 0.264346 22.7082 0.286876Z"
                fill="white"
              />
              <path
                d="M8.72341 11.2899C9.59576 13.7979 10.9043 16.4149 12.6489 19.1406C13.2195 20.3069 14.9556 23.4967 15.7521 22.8898C16.5745 21.649 17.6733 20.3202 18.3103 19.1406C19.1915 18.1596 20.0624 16.3683 21.0279 15.081C22.0884 13.667 23.1923 12.0942 23.9719 10.535"
                stroke={color}
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </motion.button>
        </div>
      )}
      {/* active slider image */}
      <div className="flex md:flex-row flex-col w-full h-full items-center ">
        <AnimatePresence mode={"popLayout"}>
          {/* main picture not inverted */}
          {!inverted && (
            <motion.div
              key={currentSlide}
              className="flex md:flex-row flex-col pl-desktop md:w-1/3 h-1/2 w-1/2  "
              variants={variants}
              initial="enter"
              animate="center"
              whileHover={{
                rotateZ: -10,
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.2 }}
              exit="exit"
            >
              <Image
                src={slides[currentSlide].image}
                fill
                className="object-contain"
                alt="slidePos"
              />
            </motion.div>
          )}
          {/* slider info inverted */}
          {inverted && (
            <motion.div
              key={slides[currentSlide].id}
              className="flex flex-col p-[2vw] w-2/4"
            >
              <motion.h1
                initial={{ opacity: 0, x: -5 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.1, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0, ease: "easeOut" },
                }}
                className="text-h3Desktop text-white"
              >
                {slides[currentSlide].id}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -5 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0, ease: "easeOut" },
                }}
                className="text-h3Desktop text-white"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -5 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0, ease: "easeOut" },
                }}
                className="text-buttonText text-white font-medium"
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          )}
          {/* main picture inverted */}
          {inverted && (
            <motion.div
              key={currentSlide}
              className="flex h-full w-1/3 relative"
              variants={variants}
              initial="enter"
              animate="center"
              whileHover={{
                rotateZ: inverted ? 10 : -10,
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.2 }}
              exit="exit"
            >
              <Image
                src={slides[currentSlide].image}
                fill
                style={{ objectFit: "contain" }}
                alt="sliderPosition"
              />
            </motion.div>
          )}
          {/* slider info not inverted */}
          {!inverted && (
            <motion.div
              key={slides[currentSlide].id}
              className="flex flex-col md:p-[2vw] pb-[2vw] md:w-2/4 w-full text-center md:text-left -mt-6"
            >
              <motion.h1
                initial={
                  isMobile ? { opacity: 0, y: 10 } : { opacity: 0, x: -5 }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.2, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0, ease: "easeOut" },
                }}
                className="md:text-h3Desktop text-white text-mobSliderH"
              >
                {slides[currentSlide].id}
              </motion.h1>
              <motion.h1
                initial={
                  isMobile ? { opacity: 0, y: 10 } : { opacity: 0, x: -5 }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.2, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0, ease: "easeOut" },
                }}
                className="md:text-h3Desktop text-white text-mobSliderH"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={
                  isMobile ? { opacity: 0, y: 10 } : { opacity: 0, x: -5 }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.2, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0, ease: "easeOut" },
                }}
                className="md:text-buttonText text-white font-medium text-mobSliderP"
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* small slider img not inverted */}
        {!inverted && (
          <div
            className="flex md:flex-col overflow-hidden pr-[2vw] md:w-[8vw] w-[72vw]
         flex-row "
          >
            <motion.div
              animate={
                currentSlide >= 3 && !isMobile
                  ? { y: 20 - currentSlide * 10 + "vw" }
                  : isMobile && currentSlide >= 3
                  ? { x: 48 - currentSlide * 24 + "vw" }
                  : { y: 0, x: 0 }
              }
              className="h-[30vw] md:block  flex "
            >
              {slides.map((slide, index) => {
                return (
                  <motion.div
                    key={index}
                    className={`slider-button-bg md:h-[10vw] md:w-[8vw] h-[32vw] w-[20vw] relative cursor-pointer md:mx-0 mx-2 ${
                      currentSlide === index &&
                      "slider-button-active transition-all duration-500 flex-shrink-0  "
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    <Image
                      src={slide.image}
                      fill
                      style={{ objectFit: "contain" }}
                      className="scale-75"
                      alt="sliderR"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        )}
      </div>
      {/* buttons inverted */}
      {inverted && !isMobile && (
        <div className="flex flex-col h-full gap-4 justify-center z-40 mr-10">
          <motion.button
            initial={{ scale: 1, opacity: 0.95 }}
            whileHover={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
          >
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M22.7082 0.286876C23.8589 0.291945 25.1277 0.453013 26.703 0.792056C30.1782 1.53941 32.3979 4.13854 32.6411 7.74466C32.7443 9.26978 32.8226 10.8129 32.9158 12.5988C32.9608 13.4943 33.0107 14.4579 33.069 15.5235L33.069 15.533C33.0757 15.9802 33.089 16.4533 33.104 16.9523C33.1256 17.667 33.1489 18.4324 33.1489 19.2315C33.1489 21.1909 33.0107 23.3575 32.3763 25.4897C31.2406 29.3059 28.5314 31.5637 24.5399 32.0211C19.2796 32.6231 14.6154 32.7132 10.2842 32.297C9.92788 32.2627 9.5632 32.2384 9.21018 32.2159C8.69064 32.1821 8.15112 32.1466 7.62325 32.0774C3.68508 31.5626 1.48037 29.5948 0.684408 25.8817C0.373017 24.4275 0.179855 22.9683 0.109917 21.5429C-0.163174 15.9757 0.0716175 11.0421 0.825948 6.45946C1.25723 3.8316 2.59604 2.17695 4.80242 1.54279C7.0804 0.888929 8.93209 0.543689 10.6289 0.458084C14.5138 0.262657 18.397 0.264346 22.7082 0.286876Z"
                fill="white"
              />
              <path
                d="M8.72341 11.2899C9.59576 13.7979 10.9043 16.4149 12.6489 19.1406C13.2195 20.3069 14.9556 23.4967 15.7521 22.8898C16.5745 21.649 17.6733 20.3202 18.3103 19.1406C19.1915 18.1596 20.0624 16.3683 21.0279 15.081C22.0884 13.667 23.1923 12.0942 23.9719 10.535"
                stroke={color}
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </motion.button>
          <motion.button
            initial={{ scale: 1, opacity: 0.95 }}
            whileHover={{ opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
          >
            <svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7082 0.286876C23.8589 0.291945 25.1277 0.453013 26.703 0.792056C30.1782 1.53941 32.3979 4.13854 32.6411 7.74466C32.7443 9.26978 32.8226 10.8129 32.9158 12.5988C32.9608 13.4943 33.0107 14.4579 33.069 15.5235L33.069 15.533C33.0757 15.9802 33.089 16.4533 33.104 16.9523C33.1256 17.667 33.1489 18.4324 33.1489 19.2315C33.1489 21.1909 33.0107 23.3575 32.3763 25.4897C31.2406 29.3059 28.5314 31.5637 24.5399 32.0211C19.2796 32.6231 14.6154 32.7132 10.2842 32.297C9.92788 32.2627 9.5632 32.2384 9.21018 32.2159C8.69064 32.1821 8.15112 32.1466 7.62325 32.0774C3.68508 31.5626 1.48037 29.5948 0.684408 25.8817C0.373017 24.4275 0.179855 22.9683 0.109917 21.5429C-0.163174 15.9757 0.0716175 11.0421 0.825948 6.45946C1.25723 3.8316 2.59604 2.17695 4.80242 1.54279C7.0804 0.888929 8.93209 0.543689 10.6289 0.458084C14.5138 0.262657 18.397 0.264346 22.7082 0.286876Z"
                fill="white"
              />
              <path
                d="M8.72341 11.2899C9.59576 13.7979 10.9043 16.4149 12.6489 19.1406C13.2195 20.3069 14.9556 23.4967 15.7521 22.8898C16.5745 21.649 17.6733 20.3202 18.3103 19.1406C19.1915 18.1596 20.0624 16.3683 21.0279 15.081C22.0884 13.667 23.1923 12.0942 23.9719 10.535"
                stroke={color}
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </motion.button>
        </div>
      )}
      {/* isMobile next button */}
      {isMobile && (
        <motion.button
          initial={{ scale: 1, opacity: 0.95 }}
          whileHover={{ opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="pt-[20vh] pr-4"
        >
          <svg
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-90 md:rotate-0"
          >
            <path
              d="M22.7082 0.286876C23.8589 0.291945 25.1277 0.453013 26.703 0.792056C30.1782 1.53941 32.3979 4.13854 32.6411 7.74466C32.7443 9.26978 32.8226 10.8129 32.9158 12.5988C32.9608 13.4943 33.0107 14.4579 33.069 15.5235L33.069 15.533C33.0757 15.9802 33.089 16.4533 33.104 16.9523C33.1256 17.667 33.1489 18.4324 33.1489 19.2315C33.1489 21.1909 33.0107 23.3575 32.3763 25.4897C31.2406 29.3059 28.5314 31.5637 24.5399 32.0211C19.2796 32.6231 14.6154 32.7132 10.2842 32.297C9.92788 32.2627 9.5632 32.2384 9.21018 32.2159C8.69064 32.1821 8.15112 32.1466 7.62325 32.0774C3.68508 31.5626 1.48037 29.5948 0.684408 25.8817C0.373017 24.4275 0.179855 22.9683 0.109917 21.5429C-0.163174 15.9757 0.0716175 11.0421 0.825948 6.45946C1.25723 3.8316 2.59604 2.17695 4.80242 1.54279C7.0804 0.888929 8.93209 0.543689 10.6289 0.458084C14.5138 0.262657 18.397 0.264346 22.7082 0.286876Z"
              fill="white"
            />
            <path
              d="M8.72341 11.2899C9.59576 13.7979 10.9043 16.4149 12.6489 19.1406C13.2195 20.3069 14.9556 23.4967 15.7521 22.8898C16.5745 21.649 17.6733 20.3202 18.3103 19.1406C19.1915 18.1596 20.0624 16.3683 21.0279 15.081C22.0884 13.667 23.1923 12.0942 23.9719 10.535"
              stroke={color}
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </motion.button>
      )}
    </div>
  );
};
export default Slider;
