import useWindowSize from "../../hooks/useWindowSize";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
const BlobV2 = ({
  left,
  bottom,
  header,
  text,
  tags,
  color,
  fill,
  mini,
  vleraE,
  yndryat,
  karb,
  prot,
  krip,
  koha,
  sasia,
}) => {
  const size = useWindowSize();
  const isMobile = size.width < 1024;
  const isTablet = size.width < 728;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [isInfo, setIsInfo] = useState(false);
  const button =
    fill === "#EE303C"
      ? "button-red"
      : fill === "#FBB04C"
      ? "button-orange"
      : fill === "#4F2C15"
      ? "button-brown"
      : "button-green";
  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      className={`h-full w-full flex  ${
        left && !isMobile && "justify-start pl-[10vw]"
      }  ${!isMobile && bottom ? "items-end pb-[10vw]" : "items-center"} ${
        isMobile ? (bottom ? "items-end" : "items-center") : ""
      } ${isMobile && "justify-center"} ${
        !isMobile && !left && "justify-end pr-[10vw]"
      }`}
    >
      <div className="relative ">
        {isMobile ? (
          <>
            <svg
              width="100%"
              height="379"
              viewBox="0 0 360 379"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M357.834 203.447C356.461 199.599 355.603 200.679 352.21 193.24C350.527 189.558 349.939 187.55 349.55 185.877C349.002 183.549 347.939 179.016 348.328 173.981C348.79 168.048 350.777 167.713 351.629 160.594C352.091 156.745 351.926 153.641 351.807 151.223C351.279 140.802 351.16 124.981 351.814 111.822C350.639 109.205 349.457 106.619 348.256 104.048C343.846 94.6012 339.298 85.4889 334.631 76.7264C333.463 74.5358 332.288 72.3604 331.106 70.2002C330.862 69.759 330.611 69.257 330.354 68.7702C330.235 68.5877 330.116 68.4051 330.017 68.2225C327.614 64.0391 325.191 59.886 322.742 55.8243C319.554 50.5455 316.32 45.4189 313.059 40.3683C299.672 29.4912 286.516 17.1234 272.996 7.11349C272.845 7.007 272.686 6.90052 272.534 6.79403C265.412 4.63384 255.543 2.24546 246.295 2.04769C245.78 2.03248 243.153 2.00205 239.601 1.42398C237.634 1.10451 235.68 0.252605 233.713 0.0700532C229.515 -0.325475 225.336 1.07409 221.151 1.27185C211.533 1.74344 201.916 1.59131 192.298 1.6978C187.816 1.74344 183.327 1.72823 178.845 1.9412C173.716 2.18461 168.6 4.02533 163.458 2.38237C162.157 1.95642 160.83 1.68259 159.517 1.63695C158.21 1.59131 156.777 1.211 155.615 2.24546C153.681 3.96448 151.734 3.82757 149.773 3.87321C147.265 3.93406 144.757 3.79714 142.255 3.66023C134.611 3.23428 126.967 3.20385 119.329 3.96448C116.035 4.29916 112.748 4.98373 109.447 5.22713C107.599 5.36404 105.777 5.13585 103.988 6.67233C103.295 7.26562 102.404 7.34168 101.678 6.94615C100.998 6.56584 100.311 6.29201 99.6247 6.04861C98.8656 6.23116 98.1065 6.41371 97.3474 6.61148C94.8917 7.25041 92.4361 7.91976 89.9805 8.61954C89.162 8.86294 88.3434 9.09113 87.5315 9.34975C88.1916 9.13677 88.8517 8.93901 89.5118 8.72603C88.284 9.01507 87.0628 9.50187 85.8416 9.91261C80.7587 11.6164 75.6957 13.5636 70.6524 15.7999C60.797 20.1963 51.0273 25.7794 41.5019 33.1423C39.1981 34.9221 36.9339 36.9454 34.6368 38.7862C34.5377 38.8622 34.4519 38.9383 34.3661 38.9991C34.3595 38.9991 34.3529 39.0143 34.3529 39.0143C33.1581 40.3226 31.9567 41.5853 30.7751 42.9696C30.0688 43.7911 29.3757 44.6886 28.6825 45.5558C26.4448 55.8851 23.9495 65.8037 20.3585 73.5774C20.2595 78.704 19.8899 83.8003 19.1373 88.8509C16.2064 108.506 10.2126 122.592 6.21895 140.695C4.61488 147.967 3.01081 155.147 1.26811 162.13C0.462776 167.607 -0.263347 172.033 0.0931136 179.351C0.218535 181.906 0.244939 180.157 0.997467 188.22C2.62134 205.577 2.33749 212.164 4.84592 220.014C5.49943 222.052 5.53243 221.657 6.30476 224.076C7.58538 228.107 9.66473 234.633 9.82316 242.742C9.98159 250.743 8.21909 257.802 6.10013 266.321C6.04732 266.534 6.00111 266.717 5.97471 266.823C4.85252 269.622 3.5587 273.821 3.70392 278.704C3.78974 281.656 4.33763 282.796 5.22218 287.543C5.75027 290.372 6.10013 293.263 6.59521 297.903C11.3282 307.182 14.6552 319.124 17.9953 331.294C18.2462 331.857 18.497 332.466 18.7479 333.15C19.6852 335.767 19.9691 337.638 20.2529 339.433C20.3783 339.889 20.5038 340.331 20.6292 340.787C21.1375 342.582 21.659 344.362 22.1804 346.142C23.2168 348.454 23.7053 349.002 29.5935 353.581C32.9073 356.152 36.3068 358.175 39.5612 361.111C39.7988 361.324 40.0893 361.172 40.3467 361.309C42.7759 362.617 45.3438 363.195 47.5881 365.477C51.298 369.219 55.4765 369.691 58.7638 370.497C62.7113 371.471 65.2923 372.094 68.8305 371.106C73.3259 369.828 75.1676 367.12 77.3988 370.056C78.5474 371.562 79.4979 374.163 81.7423 375.578C82.3166 375.943 82.9437 376.506 84.0659 376.369C86.1717 376.111 88.3038 375.183 90.37 375.669C95.7763 376.963 101.176 375.989 106.582 376.263C108.147 376.339 109.718 376.917 111.249 377.632C112.312 378.134 113.269 378.225 114.345 377.601C116.002 376.643 117.732 376.171 119.329 378.377C120.233 379.64 121.085 378.666 121.989 378.21C123.131 377.647 124.419 376.658 125.455 377.343C127.983 379.016 130.393 378.164 132.848 377.039C134.782 376.141 136.677 375.137 138.591 377.769C139.165 378.56 140.123 378.058 140.895 377.875C145.734 376.765 150.559 375.274 155.411 374.513C162.487 373.403 169.583 372.87 176.666 371.973C178.62 371.729 180.548 372.566 182.555 371.486C183.987 370.71 185.637 372.414 187.189 372.46C192.318 372.581 197.447 372.414 202.582 372.429C206.655 372.444 210.735 372.855 214.801 372.505C219.818 372.064 222.478 371.745 226.188 370.33C228.34 369.508 230.459 368.459 233.753 368.246C235.014 368.17 235.951 368.261 236.208 368.291C238.756 368.535 246.75 368.702 248.632 368.702C258.507 368.717 262.844 364.336 267.907 366.679C269.557 367.439 270.805 368.641 272.086 369.691C277.954 369.524 283.816 369.234 289.677 368.854C292.259 363.606 294.681 357.506 297.969 357.506C300.484 357.506 300.378 361.065 304.141 363.621C307.672 366.025 311.098 365.158 313.758 363.591C317.554 358.738 321.27 353.566 324.901 348.028C326.419 343.616 327.858 338.885 331.509 333.85C340.486 321.436 346.15 330.169 350.586 317.588C351.2 315.853 352.21 306.3 354.243 287.193C355.801 272.528 356.58 265.18 357.2 256.098C357.392 253.299 357.715 248.233 358.342 241.038C359.148 231.834 359.095 232.108 359.517 228.64C360.402 221.064 360.197 210.08 357.834 203.447Z"
                fill="white"
              />
            </svg>
          </>
        ) : (
          <svg
            width="42.7vw"
            height="25.3vw"
            viewBox="0 0 892 503"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M886.633 271.262C883.231 265.809 881.105 267.339 872.698 256.799C868.527 251.583 867.071 248.737 866.106 246.366C864.749 243.069 862.115 236.645 863.08 229.511C864.225 221.105 869.148 220.63 871.258 210.543C872.403 205.09 871.994 200.692 871.7 197.265C870.392 182.5 870.097 160.084 871.716 141.439C868.805 137.732 865.877 134.067 862.9 130.425C851.975 117.039 840.705 104.128 829.141 91.7126C826.246 88.6087 823.335 85.5265 820.407 82.4657C819.802 81.8406 819.181 81.1293 818.543 80.4396C818.248 80.1809 817.954 79.9223 817.709 79.6636C811.755 73.7361 805.752 67.8517 799.684 62.0967C791.784 54.6172 783.77 47.3534 775.69 40.1972C742.52 24.7857 709.922 7.2619 676.425 -6.92099C676.048 -7.07187 675.656 -7.22275 675.28 -7.37363C657.631 -10.4344 633.179 -13.8184 610.264 -14.0987C608.988 -14.1202 602.479 -14.1633 593.679 -14.9824C588.805 -15.435 583.964 -16.6421 579.089 -16.9007C568.687 -17.4612 558.334 -15.4781 547.964 -15.1979C524.133 -14.5297 500.302 -14.7453 476.471 -14.5944C465.366 -14.5297 454.243 -14.5513 443.138 -14.2495C430.429 -13.9047 417.753 -11.2966 405.011 -13.6245C401.789 -14.228 398.502 -14.616 395.247 -14.6806C392.008 -14.7453 388.459 -15.2842 385.58 -13.8184C380.788 -11.3828 375.963 -11.5768 371.105 -11.5121C364.89 -11.4259 358.675 -11.6199 352.476 -11.8139C333.535 -12.4174 314.595 -12.4605 295.671 -11.3828C287.509 -10.9086 279.364 -9.93862 271.186 -9.59375C266.606 -9.39976 262.092 -9.72308 257.659 -7.54607C255.942 -6.70544 253.734 -6.59767 251.935 -7.15809C250.25 -7.69695 248.549 -8.08493 246.848 -8.42981C244.967 -8.17115 243.086 -7.9125 241.205 -7.63229C235.121 -6.727 229.036 -5.7786 222.952 -4.78709C220.924 -4.44222 218.895 -4.1189 216.884 -3.75247C218.519 -4.05423 220.155 -4.33444 221.79 -4.63621C218.748 -4.22667 215.722 -3.53693 212.696 -2.95495C200.102 -0.540844 187.557 2.21814 175.061 5.38666C150.641 11.6159 126.434 19.5264 102.833 29.9588C97.1242 32.4807 91.5141 35.3475 85.8222 37.9556C85.5768 38.0633 85.3642 38.1711 85.1516 38.2573C85.1352 38.2573 85.1189 38.2789 85.1189 38.2789C82.1584 40.1326 79.1816 41.9216 76.2539 43.8831C74.5038 45.047 72.7864 46.3187 71.069 47.5473C65.5243 62.1829 59.3417 76.2364 50.4439 87.2508C50.1986 94.5147 49.2827 101.735 47.4181 108.892C40.156 136.74 25.3046 156.7 15.4092 182.349C11.4346 192.653 7.46011 202.826 3.1421 212.72C1.14666 220.479 -0.652515 226.752 0.230715 237.12C0.541481 240.741 0.606905 238.262 2.4715 249.686C6.4951 274.28 5.79179 283.613 12.0071 294.735C13.6264 297.623 13.7081 297.063 15.6218 300.49C18.7949 306.202 23.9471 315.449 24.3396 326.937C24.7322 338.275 20.3651 348.276 15.1148 360.347C14.9839 360.649 14.8694 360.907 14.804 361.058C12.0235 365.024 8.81767 370.973 9.1775 377.892C9.39013 382.074 10.7477 383.69 12.9394 390.415C14.2479 394.425 15.1148 398.52 16.3415 405.094C28.0688 418.242 36.3123 435.163 44.5885 452.406C45.21 453.204 45.8315 454.066 46.4531 455.036C48.7756 458.743 49.4789 461.395 50.1822 463.938C50.493 464.585 50.8038 465.21 51.1145 465.856C52.374 468.4 53.6661 470.922 54.9582 473.444C57.5261 476.72 58.7365 477.496 73.3261 483.984C81.5369 487.626 89.9603 490.493 98.0238 494.653C98.6127 494.955 99.3323 494.739 99.9702 494.933C105.989 496.787 112.352 497.606 117.913 500.839C127.105 506.142 137.458 506.81 145.604 507.952C155.385 509.332 161.78 510.216 170.547 508.815C181.685 507.004 186.249 503.167 191.777 507.327C194.623 509.461 196.978 513.147 202.539 515.152C203.962 515.669 205.516 516.466 208.297 516.272C213.514 515.906 218.797 514.591 223.917 515.281C237.312 517.113 250.692 515.734 264.087 516.122C267.964 516.229 271.856 517.048 275.651 518.062C278.284 518.773 280.656 518.902 283.322 518.018C287.427 516.66 291.713 515.992 295.671 519.118C297.912 520.907 300.022 519.527 302.262 518.881C305.092 518.083 308.281 516.682 310.849 517.652C317.114 520.023 323.084 518.816 329.168 517.221C333.961 515.949 338.655 514.527 343.398 518.255C344.821 519.376 347.193 518.665 349.106 518.406C361.095 516.833 373.052 514.721 385.073 513.643C402.607 512.069 420.19 511.315 437.74 510.043C442.581 509.698 447.357 510.884 452.33 509.353C455.879 508.254 459.968 510.668 463.812 510.733C476.52 510.905 489.229 510.668 501.954 510.69C512.046 510.711 522.154 511.293 532.229 510.798C544.66 510.172 551.251 509.72 560.443 507.715C565.776 506.551 571.026 505.064 579.188 504.762C582.312 504.655 584.634 504.784 585.272 504.827C591.586 505.172 611.393 505.409 616.054 505.409C640.523 505.43 651.269 499.223 663.814 502.542C667.903 503.62 670.994 505.323 674.167 506.81C688.708 506.573 703.232 506.163 717.756 505.625C724.152 498.188 730.154 489.545 738.3 489.545C744.531 489.545 744.27 494.589 753.593 498.21C762.343 501.615 770.832 500.387 777.424 498.167C786.828 491.291 796.037 483.962 805.033 476.116C808.795 469.866 812.36 463.162 821.405 456.028C843.649 438.439 857.683 450.811 868.674 432.986C870.195 430.528 872.698 416.992 877.735 389.92C881.596 369.141 883.526 358.73 885.063 345.862C885.537 341.896 886.339 334.719 887.893 324.523C889.888 311.483 889.757 311.871 890.804 306.956C892.996 296.222 892.489 280.66 886.633 271.262Z"
              fill="white"
            />
          </svg>
        )}
        <motion.div className="absolute top-0 left-0 md:pt-[3vw] md:pl-[6vw] md:pr-[3vw] pt-6 px-4 text-center md:text-left justify-center md:items-start items-center flex flex-col  ">
          {!isInfo && (
            <div className="h-full flex flex-col items-center justify-center w-full pt-14">
              <h1
                className={`${color} lg:text-h3Desktop pb-4 text-mobSliderH md:px-0 px-2 md:text-[4vw]`}
              >
                {header}
              </h1>
              <p className="lg:text-[1vw] md:text-[1.7vw] text-[3.4vw] md:p-0 p-2 md:pb-4">
                {text}
              </p>
            </div>
          )}
          {isInfo && (
            <div
              className={`w-full flex justify-between items-center ${color}`}
            >
              <>
                <div>
                  <h3 className="text-[6vw] lg:text-[1.3vw] md:text-[2.8vw] lg:pt-0  px-14 md:px-10 pb-10 lg:pb-0 lg:px-0 lg:w-full ">
                    VLERAT USHQYESE:
                  </h3>
                  {/* vlerat */}
                  <div className=" flex lg:px-0 px-10">
                    <ul className="lg:text-[1vw] text-black ">
                      <li className="w-full  ">
                        <p>-Vlerat energjike</p>
                      </li>
                      <li className="w-full ">
                        <p>-Yndyrat</p>
                      </li>
                      <li className="w-full ">
                        <p>-Karbohidratet</p>
                      </li>
                      <li className="w-full ">
                        <p>-Proteinat</p>
                      </li>
                      <li className="w-full ">
                        <p>-Kripërat</p>
                      </li>
                    </ul>
                    <ul className="lg:text-[1vw] text-black px-2">
                      <li className="w-full ">
                        <p>{vleraE || ""}</p>
                      </li>
                      <li className="w-full ">
                        <p>{yndryat || ""}</p>
                      </li>
                      <li className="w-full ">
                        <p>{karb || ""}</p>
                      </li>
                      <li className="w-full ">
                        <p>{prot || ""}</p>
                      </li>
                      <li className="w-full ">
                        <p>{krip || ""}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="absolute flex  lg:right-[5vw] gap-6 2xl:bottom-[1vw] md:-bottom-[10vw] -bottom-[22vw] lg:bottom-0 lg:px-0 md:px-16 px-24 ">
                  {/* koha */}
                  <div className="flex flex-col items-center ">
                    <svg
                      width={isTablet ? "10vw" : "4vw"}
                      height={isTablet ? "10vw" : "4vw"}
                      viewBox="0 0 47 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M46.1215 17.8127C46.0678 17.4241 46.0135 17.0382 45.9653 16.638C45.9116 16.3163 45.9116 16.0161 45.9116 15.6994C45.9116 15.364 45.9116 15.0181 45.8462 14.6317C45.3897 11.9179 44.408 9.6459 42.5583 7.02751C41.2027 5.19634 39.6095 4.22307 37.6584 3.13457C35.4004 1.95713 33.7091 1.22653 31.2461 0.737365C30.6833 0.613856 30.1033 0.583112 29.5426 0.553475C28.9981 0.524383 28.4834 0.496937 28.0081 0.38056C27.3207 0.266384 26.744 0.153304 26.1706 0.0391281L26.0759 0.0210137L25.867 0.0226605C25.5668 -0.00643228 25.2222 -0.00807919 25.0832 0.0210137C22.4862 0.0210137 19.8211 0.708261 16.7021 2.17933C15.7575 2.59486 14.5925 3.06529 13.5499 3.45502C13.5355 3.45886 12.4359 3.77669 11.9971 4.2065C11.7722 4.28829 11.5423 4.36295 11.3102 4.43924C10.5612 4.68461 9.78681 4.93821 9.1275 5.40479C3.94621 9.04086 0.839991 15.0993 0.148207 22.9197C-0.0994198 25.3795 0.767552 27.466 1.6041 29.4794C1.84896 30.0854 2.09492 30.5723 2.31098 30.9929C2.40571 31.2723 2.61455 31.6549 2.73587 31.8645C2.73532 31.8772 2.73532 31.8898 2.73532 31.9024C2.73532 32.2274 3.01508 32.5743 3.10149 32.6577C3.46435 33.0771 3.82665 33.4658 4.18895 33.8549C4.54183 34.2326 4.89416 34.6113 5.26643 35.0406C7.49338 37.2478 10.1934 38.725 12.8049 40.1533L13.9261 40.7697C16.4832 42.2288 19.6609 43 23.1137 43C24.5839 43 26.073 42.8606 27.5438 42.585C28.5149 42.3929 29.3958 41.9828 30.2477 41.5871C30.487 41.4751 30.7252 41.3653 30.898 41.2824C31.1213 41.2275 31.3445 41.1776 31.5661 41.1298C32.2957 40.9701 33.0502 40.8054 33.7727 40.3943C34.6917 39.7443 36.1409 38.5576 36.6189 38.1623L38.7728 37.0914C40.0204 36.2252 40.8885 34.9973 41.7449 33.7841C42.2535 32.9454 42.5853 32.1653 42.9359 31.3414C43.0911 30.978 43.2506 30.6025 43.4273 30.2166C44.6045 27.8832 45.7164 25.6798 46.1983 22.9302C46.6005 21.2373 46.3567 19.4961 46.1213 17.8131L46.1215 17.8127ZM7.90748 32.8896C3.69509 28.8858 3.86186 22.0488 4.74482 17.016C4.96309 15.9324 5.65832 14.0611 6.25942 13.2195C6.36689 13.006 6.94968 12.0833 7.25769 11.6683L7.97176 10.9607L8.04655 10.8586C8.1086 10.7368 8.31911 10.4996 8.44818 10.3706L9.80486 9.02632C9.90513 8.98296 9.99376 8.90995 10.0503 8.81004C10.1733 8.72715 10.294 8.64481 10.4131 8.56303C10.9256 8.21226 11.4081 7.88016 12.0817 7.58814C12.213 7.50141 12.4751 7.379 12.7066 7.27086C13.0551 7.10894 13.2872 7.00024 13.4212 6.87838C14.1819 6.588 14.9435 6.32616 15.6997 6.06653C17.0109 5.61587 18.3671 5.14818 19.6379 4.55533L19.9443 4.42853C20.6307 4.14419 21.0107 3.98775 21.47 3.84173L21.4772 3.86753L22.9685 3.53928C24.2355 3.37624 25.5306 3.5552 27.048 3.79672L27.5555 3.87521C27.9986 3.9098 28.4324 3.92407 28.859 3.93889C29.9071 3.97457 30.897 4.00805 31.8537 4.32369C32.7766 4.66731 34.5438 5.7174 35.1466 6.07532C38.1325 7.61448 40.0608 9.63129 41.3976 12.6103C41.8696 13.7004 41.9604 14.9969 42.0491 16.2512C42.0878 16.8101 42.1294 17.387 42.1997 17.9096C42.2285 18.3591 42.2695 18.7955 42.3111 19.2237C42.4379 20.5537 42.5587 21.8102 42.2103 23.1057C41.6352 25.4963 40.6126 27.7974 39.1589 29.9591C38.1263 31.6635 36.9596 33.4183 35.4667 34.6738C34.9449 35.0185 34.217 35.3665 33.5732 35.6739C33.3704 35.7705 33.1788 35.8622 32.9743 35.9659C32.6264 36.1817 32.309 36.4122 31.9999 36.6373C31.4891 37.0094 31.0066 37.3613 30.4582 37.5721C30.3518 37.599 30.1447 37.683 29.5059 37.9492C28.9137 38.1962 27.6812 38.7116 27.4667 38.7402C21.6095 38.7402 16.9877 37.9404 13.3359 36.2969C13.111 36.1953 12.8867 36.0976 12.6623 36.0005C11.5942 35.5355 10.585 35.0969 9.72683 34.3416C9.53128 34.1873 9.28531 33.9809 9.03824 33.7751C8.3574 33.2042 8.0782 32.9786 7.90757 32.8902L7.90748 32.8896Z"
                        fill={fill}
                      />
                      <motion.path
                        animate={
                          inView
                            ? { rotate: 0, transition: { duration: 0.7 } }
                            : { rotate: -90 }
                        }
                        d="M21.5653 26.1087C21.8136 26.2354 22.0455 26.3541 22.2471 26.4671C22.3138 26.5048 22.4612 26.5698 22.6479 26.6498C22.9209 26.7685 23.8023 27.069 23.8023 27.23V27.3256L25.7944 28.5869C25.8424 28.61 25.9073 28.638 25.9792 28.6691C26.0641 28.7069 26.2167 28.7732 26.3128 28.8234L26.4467 28.9399C26.6353 29.0741 26.8308 29.2458 27.0361 29.4254C27.6637 29.974 28.3753 30.5964 29.2516 30.5964C29.324 30.5964 29.3968 30.592 29.4705 30.5831C30.7617 30.4248 31.6058 28.766 31.5228 27.7684C31.443 26.8143 30.603 26.1528 29.9274 25.6211L29.7296 25.4641C29.1356 24.9893 28.4738 24.5985 27.8346 24.2201C27.4749 24.0072 27.1146 23.7942 26.767 23.5675C26.4693 23.3732 26.102 23.2011 25.7129 23.0188C25.0713 22.7174 24.3443 22.3768 24.0354 21.9469C23.8982 21.7557 23.8426 21.5041 23.7838 21.2369C23.747 21.0693 23.7087 20.9021 23.6541 20.7416C23.6476 20.0312 23.6322 19.3189 23.6173 18.6053C23.5776 16.7794 23.5375 14.8903 23.6523 13.0608C23.6663 12.8407 23.6943 12.6326 23.7218 12.4348C23.8356 11.6038 23.9532 10.7444 22.6947 10.203C22.2869 10.0278 21.6975 9.92334 21.1198 9.92334C20.635 9.92334 19.7437 9.99981 19.2258 10.5111C18.4158 11.3109 18.4648 12.9994 18.5007 14.2318C18.5072 14.4653 18.5142 14.6773 18.5128 14.8556C18.5096 15.2984 18.4746 15.7479 18.4414 16.1827C18.4046 16.6548 18.3663 17.143 18.3672 17.6383C18.3677 18.3043 18.3504 18.9801 18.3322 19.658C18.3033 20.766 18.2739 21.9113 18.3271 23.0093C18.3966 24.4871 20.2285 25.425 21.5653 26.1087Z"
                        fill={fill}
                      />
                    </svg>
                    <p className="text-gray-700">{koha}</p>
                  </div>
                  {/* sasia */}
                  <div className="flex flex-col items-center ">
                    <svg
                      width={isTablet ? "10vw" : "4vw"}
                      height={isTablet ? "10vw" : "4vw"}
                      viewBox="0 0 69 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        animate={
                          inView
                            ? { pathLength: 1, fill: fill }
                            : { pathLength: 0, fill: "none" }
                        }
                        d="M34.1566 43.908C29.7459 44.1317 25.0415 43.1619 20.4106 41.8939C19.0138 41.5209 17.7643 40.8497 16.588 40.0292C15.6322 39.358 14.6769 38.6869 13.7212 38.0152C12.9125 37.4928 12.4716 36.6728 11.8101 36.0011C9.60469 33.9126 8.06127 31.3018 6.44409 28.7659C3.94441 24.8877 2.32722 20.5614 1.15095 16.0859C0.709981 14.4449 0.415659 12.8038 0.121861 11.0884C-0.0253002 10.4172 -0.0253007 9.74608 0.0485372 9.07438C0.121861 8.40319 0.269023 7.73203 0.857157 7.2841C3.20969 5.1956 5.92937 3.7784 9.08997 3.18155C12.3977 2.58477 15.6322 1.76422 18.94 1.16751C19.9691 1.01819 20.9982 0.943782 21.954 0.943782C24.0122 0.943782 25.9231 0.197677 27.9819 0.0488711C28.8639 -0.0255304 29.8196 -0.0255309 30.7016 0.123272C33.2747 0.421403 35.8471 0.421403 38.4201 0.64565C41.875 0.943781 45.33 0.571249 48.7849 1.0187C51.358 1.39176 53.8572 1.91361 56.4296 2.21225C59.3696 2.5853 62.2365 3.10716 65.03 4.15144C65.7653 4.44957 66.574 4.67382 67.3087 5.04635C68.6316 5.71754 69.2198 6.68732 68.9259 8.02966C68.1172 11.386 68.0439 14.8174 67.1615 18.1738C66.4262 20.859 65.3972 23.3949 64.4418 26.0058C64.148 26.9007 63.3394 27.4975 62.8979 28.2436C61.4279 30.7795 59.6634 33.0917 57.7524 35.3295C56.65 36.5974 55.3999 37.5673 54.0036 38.5365C52.5336 39.5808 51.2102 40.9237 49.3725 41.5199C48.0496 41.9673 46.7262 42.266 45.4765 42.7878C41.9483 44.3555 38.2728 43.9824 34.1565 43.908L34.1566 43.908ZM2.76853 13.5501C2.54805 14.1469 2.76853 14.6688 2.84186 15.1911C3.28283 17.6525 4.3858 19.8904 5.19439 22.2026C5.56204 23.2468 5.78252 24.2911 6.44397 25.1859C7.32591 26.3795 8.13453 27.6474 8.86975 28.9154C9.31072 29.7359 9.89884 30.7057 10.7075 31.1532C12.5452 32.123 13.942 33.6147 15.6325 34.7334C16.7349 35.4795 17.9112 36.3 19.0142 37.1205C19.3818 37.3442 19.6756 37.5679 19.9699 36.9712C20.7052 35.7032 21.9548 35.032 23.2045 34.4353C25.7036 33.2417 28.3499 32.645 31.1434 32.7198C34.5983 32.7942 38.0533 32.3468 41.5082 33.018C42.9782 33.3161 44.4483 33.3161 45.919 33.5403C48.2715 33.8385 50.1824 34.8827 51.1383 37.1205C53.5641 35.9269 55.6223 34.5096 57.3868 32.6449C58.4159 31.5262 59.2979 30.2577 60.1803 28.9899C61.3565 27.2744 62.7533 25.7078 63.1942 23.545C63.2676 23.3213 63.4147 23.0975 63.488 22.8738C64.9581 19.5174 66.0611 16.086 66.4281 12.3566C66.5014 11.7598 66.8691 11.163 66.5014 10.5663C65.9133 10.4919 65.4724 10.79 64.9575 11.0138C62.826 11.7599 60.694 12.4311 58.4886 12.7292C57.3862 12.8785 56.2832 13.1022 55.1809 13.4004C53.7841 13.6985 52.4612 14.1465 51.0645 14.4446C49.6679 14.7427 48.3449 14.4446 47.0214 14.8176C45.919 15.1158 44.7428 15.1158 43.5665 15.2651C41.4351 15.4888 39.3031 15.4888 37.1714 15.6381C34.5251 15.8619 31.8055 16.1605 29.1591 16.5331C25.2632 17.0554 21.5145 15.9363 17.6181 15.6381C15.8537 15.4888 14.0898 14.967 12.3254 15.5637C11.7373 15.7875 11.1492 15.6381 10.4877 15.4893C7.98753 14.7437 5.41499 14.147 2.76869 13.5501L2.76853 13.5501ZM2.62137 8.62711C4.53246 9.74573 6.66447 10.2681 8.79595 10.4174C10.707 10.5667 12.6919 10.6411 14.5296 11.0142C19.3813 11.8347 24.1591 12.4315 29.0843 12.1328C29.3781 12.1328 29.6724 12.0584 29.9662 12.0584C33.1268 12.2077 36.288 11.9091 39.3753 11.6109C42.5359 11.3872 45.6238 11.1635 48.7844 11.2379C53.1213 11.3872 57.3849 10.9397 61.6484 9.89554C63.4127 9.44808 65.1033 8.92572 66.5734 7.88149C67.1616 7.43404 67.1616 6.98658 66.5001 6.61354C66.2796 6.46422 65.9853 6.46422 65.7648 6.38982C63.5594 5.79303 61.3541 4.89816 59.002 4.52508C55.4738 4.0027 51.945 3.48086 48.4906 2.73481C45.9914 2.21243 43.4184 2.58548 40.9192 2.43668C37.7586 2.13854 34.6707 2.21295 31.5101 1.98922C30.1134 1.91482 28.6433 1.69109 27.2467 1.98922C25.1884 2.5116 23.0564 2.6604 20.9249 2.88413C20.3368 2.95853 19.6753 2.88413 19.0872 3.03346C16.5881 3.70464 14.015 4.07768 11.5158 4.6001C9.16331 5.12247 6.8113 5.56992 4.67982 6.76292C3.94504 7.21038 3.20978 7.80662 2.62158 8.62712L2.62137 8.62711ZM36.8028 40.5513C39.4491 40.7751 42.0222 40.9244 44.5213 39.9545C45.8442 39.4322 47.1676 38.9103 48.4905 38.3136C49.4463 37.9405 49.5196 37.4931 48.7843 36.8219C48.1229 36.2995 47.3875 35.927 46.5789 35.8521C42.9769 35.4047 39.3752 34.6586 35.6998 34.7335C34.4502 34.7335 33.274 34.8828 32.0244 34.7335C30.1133 34.5842 28.2756 34.8079 26.4379 35.3303C24.894 35.7033 23.4239 36.2252 22.1744 37.2694C21.4391 37.8662 21.5129 38.3137 22.3216 38.6118C25.997 39.9541 29.8196 40.2528 33.7155 40.4765C34.6708 40.5514 35.7737 40.6264 36.8029 40.5514L36.8028 40.5513Z"
                      />
                    </svg>
                    <p className="text-gray-700">{sasia}</p>
                  </div>
                </div>
              </>
            </div>
          )}
        </motion.div>
        <motion.button
          onClick={() => setIsInfo(!isInfo)}
          className={`-bottom-2  w-full h-10 ${button} px-4 py-2 text-white absolute`}
        >
          {!isInfo ? "Vlerat ushqyese" : "Përshkrimi"}
        </motion.button>
      </div>
    </motion.div>
  );
};
export default BlobV2;