import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BrendetToggle from "../../components/BrendetToggle";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const BonafideLogo = () => {
  return (
    <svg
      width="177"
      height="37"
      viewBox="0 0 177 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_565_281)">
        <path
          d="M22.5492 14.9299C23.4759 14.5903 24.4514 13.8142 25.3781 12.6016C26.3048 11.4375 26.8901 10.1763 27.1827 8.76965C27.4266 7.31451 27.3291 6.10187 26.7438 5.03474C26.2072 3.96762 25.3781 3.24004 24.2563 2.65797C23.1345 2.1244 21.9639 1.73636 20.6958 1.49383C19.4277 1.29981 18.0131 1.1543 16.5987 1.1543C13.2332 1.1543 10.6969 1.34832 8.89226 1.78487C8.40452 1.93038 7.9168 1.97889 7.47783 2.1244C7.08763 2.26992 6.64866 2.46395 6.11213 2.75498C5.62439 3.04602 5.18541 3.43406 4.84399 3.87061C4.50257 4.35566 4.30747 4.93773 4.16115 5.56831L2.06384 17.4037L0.0640734 28.754C-0.0334758 29.3846 -0.0334698 29.9666 0.161628 30.4517C0.356727 30.9368 0.649369 31.2763 1.03957 31.5673C1.42976 31.8584 1.81997 32.0524 2.16139 32.1979C2.55158 32.3434 2.99056 32.3919 3.42952 32.5375C5.08786 32.974 7.5266 33.168 10.892 33.168C10.9896 33.168 11.1359 33.168 11.2335 33.168C11.3798 33.168 11.4774 33.168 11.6237 33.168C13.4283 33.168 15.0867 32.974 16.6962 32.586C18.3058 32.1979 19.8178 31.5673 21.2322 30.7912C22.6467 30.0151 23.8173 28.9481 24.7928 27.5414C25.8171 26.1832 26.4512 24.6311 26.7438 22.8363C27.0364 21.2841 26.8413 19.7319 26.1097 18.2768C25.3781 16.8216 24.2075 15.8515 22.5004 15.1725C22.4028 15.1725 22.4028 15.0754 22.5492 14.9299ZM17.6229 23.6609C17.3791 25.0676 16.8425 26.1347 16.0622 26.9593C15.233 27.7839 14.2575 28.172 13.1357 28.172C10.6969 28.2205 9.42881 28.4144 9.52632 27.8809L10.3068 23.5154L11.1359 18.5678C13.2332 18.1797 14.8916 18.4223 16.2085 19.3924C17.5254 20.3625 17.9643 21.7692 17.6229 23.6609ZM18.3058 9.44872C18.1107 10.6614 17.4766 11.7285 16.4523 12.5531C15.3793 13.4262 13.9649 13.8627 12.0626 13.8627L13.4771 5.90785C14.8916 5.56831 16.111 5.66532 17.184 6.15037C18.2083 6.68394 18.5984 7.75106 18.3058 9.44872Z"
          fill="white"
        />
        <path
          d="M46.8388 29.9177C44.205 32.149 41.181 33.2646 37.7667 33.2646C34.3525 33.2646 31.7187 32.149 29.8652 29.9177C28.0118 27.6865 27.3777 24.9702 27.9631 21.7688C28.4995 18.5674 30.1091 15.8511 32.743 13.6198C35.4255 11.3885 38.4496 10.2729 41.815 10.2729C45.2292 10.2729 47.8631 11.3885 49.7165 13.6198C51.57 15.8511 52.2527 18.5674 51.7163 21.7688C51.1309 25.0186 49.5214 27.6865 46.8388 29.9177ZM36.3035 26.5224C36.6937 27.832 37.4253 28.4626 38.5959 28.4626C40.9371 28.4626 42.4979 26.2313 43.327 21.7688C43.6197 19.7801 43.6197 18.1794 43.2295 16.9182C42.8392 15.7055 42.1077 15.075 40.9371 15.075C39.7665 15.075 38.7422 15.7055 37.9618 16.9667C37.1326 18.2279 36.5474 19.8286 36.2547 21.7688C35.962 23.6605 35.962 25.2612 36.3035 26.5224Z"
          fill="white"
        />
        <path
          d="M73.421 30.5487C73.5185 31.3733 73.6649 32.0038 73.9088 32.2949C74.1526 32.6344 74.3965 32.8769 74.6891 33.071C74.9818 33.2164 75.1769 33.362 75.3232 33.5075C75.4696 33.653 75.4695 33.7501 75.372 33.9925C74.9818 34.7201 74.2502 35.3508 73.1284 35.9813C72.0066 36.6604 70.836 36.9514 69.7141 36.9514C67.9095 36.9514 66.5926 36.3693 65.6171 35.1567C64.5928 34.041 64.3001 32.4403 64.6416 30.5002L66.6901 18.4223C66.934 16.9671 66.6413 16.1425 65.861 15.997C65.0318 15.8514 64.2514 16.288 63.4222 17.3551C62.6906 18.2282 62.2517 19.3924 61.959 20.7021C61.0811 26.2317 60.5933 29.045 60.5445 29.239C60.3006 30.5972 59.6666 31.5673 58.5936 32.1494C57.5205 32.7799 56.4475 33.071 55.4232 33.071H55.3744C54.2526 33.071 53.3259 32.7799 52.4967 32.1494C51.6676 31.5673 51.3749 30.5972 51.6188 29.239C51.6188 29.1905 51.7651 28.657 51.9114 27.6868C52.1065 26.7167 52.3504 25.6011 52.5942 24.4369C52.8382 23.2728 52.9845 22.3997 53.082 21.9147C53.1796 21.4296 53.3746 19.926 53.8136 17.5007L54.4477 13.8627C54.6915 12.5046 55.2769 11.5344 56.3012 10.9524C57.2766 10.3703 58.3009 10.0793 59.3739 10.0308H59.4227C60.4957 10.0793 61.3737 10.3703 62.2029 10.9524C63.032 11.5344 63.3247 12.5046 63.032 13.8627C63.032 13.9112 62.9832 14.0083 62.9344 14.2508C62.8857 14.4448 62.8369 14.6873 62.7881 14.8329H62.9832C64.1538 13.2322 65.422 12.0681 66.8365 11.2435C68.2997 10.4674 69.6166 10.1278 70.8847 10.1278C72.4943 10.1278 73.7625 10.7583 74.6891 12.0681C75.5671 13.3777 75.8109 15.0268 75.5183 17.1126C75.4208 17.5977 75.2745 18.5193 75.0306 19.8774C74.7867 21.2841 73.9088 26.4257 73.6649 27.5898C73.421 28.7055 73.3234 29.7726 73.421 30.5487Z"
          fill="white"
        />
        <path
          d="M101.515 17.7917C101.125 20.2655 100.686 22.7878 100.296 25.3101C99.8569 27.8323 99.6617 29.1905 99.6129 29.336C99.4177 30.6942 98.7833 31.6643 97.7594 32.2464C96.6866 32.8769 95.6618 33.168 94.6379 33.168H94.5891C93.5651 33.168 92.6379 32.8769 91.8092 32.2464C90.9796 31.6643 90.6868 30.6942 90.9308 29.336L91.0284 28.9965H90.882C88.6877 31.7613 86.2974 33.168 83.7615 33.168C82.054 33.168 80.6395 32.5859 79.6153 31.4218C78.4934 30.2577 77.8106 28.851 77.4692 27.1048C77.1278 25.3586 77.1278 23.5639 77.4692 21.6237C78.0057 18.5193 79.2738 15.8515 81.2248 13.5717C83.1271 11.3405 85.4198 10.1763 88.0533 10.1763C90.6868 10.1763 92.4915 11.4375 93.5163 13.9597H93.6627C93.9059 12.6501 94.5403 11.6799 95.5154 11.0494C96.5402 10.4673 97.5642 10.1763 98.5889 10.1763H98.6377C99.6617 10.1763 100.588 10.4673 101.369 11.0494C102.198 11.6799 102.49 12.6501 102.198 14.0082C102.198 14.0567 101.954 15.2694 101.515 17.7917ZM90.9796 25.6496C91.7604 24.5825 92.2963 23.2244 92.5403 21.5751C92.8331 19.9259 92.7843 18.5678 92.4427 17.5006C92.0532 16.385 91.37 15.8515 90.346 15.8515C89.3213 15.8515 88.4437 16.385 87.7117 17.4521C86.9318 18.5678 86.395 19.9259 86.1022 21.5751C85.8582 23.2244 85.907 24.5825 86.2486 25.6496C86.639 26.7653 87.3701 27.2988 88.3949 27.2988C89.3701 27.2988 90.2484 26.7653 90.9796 25.6496Z"
          fill="white"
        />
        <path
          d="M126.732 21.3322C125.951 26.3768 125.61 28.9961 125.513 29.2871C125.318 30.6453 124.634 31.6154 123.611 32.1975C122.537 32.828 121.464 33.1191 120.391 33.1191H120.343C119.269 33.1191 118.294 32.828 117.513 32.1975C116.684 31.6154 116.392 30.6453 116.587 29.2871C116.636 29.2386 116.831 28.0745 117.319 25.7947C117.806 23.5149 118.05 22.1083 118.147 21.6233C118.245 21.1867 118.44 19.8285 118.831 17.5488C119.171 15.2205 119.318 14.0563 119.367 13.9109C119.562 12.6012 120.196 11.6311 121.269 11.0006C122.343 10.4184 123.415 10.1274 124.488 10.1274H124.537C125.61 10.1274 126.537 10.4184 127.366 11.0006C128.195 11.6311 128.488 12.6012 128.293 13.9109L126.732 21.3322Z"
          fill="white"
        />
        <path
          d="M169.605 31.7126C167.556 32.7312 165.215 33.1193 162.874 33.1193C159.704 33.1193 157.118 31.9551 155.313 29.7239C153.46 27.4926 152.826 24.7278 153.362 21.5749C153.948 18.4221 155.557 15.6573 158.192 13.426C160.825 11.1948 163.898 10.0791 167.507 10.0791C170.678 10.0791 173.019 10.8552 174.482 12.4074C175.945 13.9596 176.53 15.6573 176.238 17.452C175.945 19.0042 175.262 20.3138 174.238 21.381C173.165 22.448 171.946 23.1756 170.58 23.5152C169.166 23.9032 167.702 24.0972 166.142 24.2428C164.532 24.3882 163.069 24.2428 161.751 23.9517C162.093 26.0374 163.507 27.2016 165.849 27.4926C168.287 27.7837 170.873 27.2016 173.701 25.698C173.897 25.5524 174.141 25.5524 174.238 25.6494C174.677 26.086 174.043 27.2016 173.799 27.6381C173.36 28.4142 172.824 29.1418 172.19 29.7724C171.458 30.6455 170.531 31.2276 169.605 31.7126ZM162.044 20.2653C163.849 20.4108 165.312 20.2168 166.386 19.5862C167.459 19.0042 168.093 18.131 168.287 16.9184C168.385 16.3364 168.287 15.8028 167.898 15.4633C167.556 15.0752 167.068 14.8812 166.386 14.9297C166.386 14.9781 166.386 14.9782 166.337 14.9782H166.191C165.849 15.0267 165.507 15.1237 165.117 15.3662C163.751 16.0938 162.679 17.743 162.044 20.2653Z"
          fill="white"
        />
        <path
          d="M151.119 26.7651C151.168 27.5897 151.266 28.2202 151.461 28.5113C151.607 28.8508 151.802 29.0934 151.997 29.2874C152.192 29.4328 152.387 29.5784 152.485 29.6754C152.582 29.8209 152.582 29.918 152.436 30.1605C152.094 30.8881 151.314 31.5672 150.193 32.1977C149.07 32.8768 147.949 33.1678 146.778 33.1678C145.315 33.1678 144.193 32.7313 143.315 31.9067C142.437 31.0821 141.95 29.9665 141.901 28.5113H141.803C139.511 31.6157 137.023 33.2163 134.292 33.2163C131.805 33.2163 130 32.0522 128.877 29.7239C127.756 27.3956 127.512 24.7278 128.049 21.7205C128.586 18.6162 129.853 15.8998 131.707 13.6685C133.609 11.4373 135.901 10.2732 138.536 10.2732C141.267 10.2732 143.071 11.5343 144.095 14.1051H144.193C144.339 13.4261 144.632 11.7769 145.023 9.15759C145.461 6.53824 145.656 5.2286 145.705 5.18009C145.9 3.82193 146.583 2.85182 147.656 2.22125C148.729 1.63918 149.802 1.34814 150.924 1.34814H150.973C152.094 1.34814 153.07 1.63918 153.899 2.22125C154.777 2.85182 155.07 3.82193 154.875 5.18009C154.826 5.2771 154.68 6.10169 154.387 7.75088C154.045 9.40006 153.704 11.1463 153.314 13.0865C152.973 14.9782 152.729 16.2879 152.582 17.0155L151.412 23.8062C151.217 24.9219 151.07 25.989 151.119 26.7651ZM141.608 25.6495C142.339 24.5823 142.876 23.2242 143.169 21.575C143.462 19.9258 143.413 18.5192 143.023 17.452C142.632 16.3849 141.95 15.8513 140.974 15.8513C139.95 15.8513 139.072 16.3849 138.292 17.452C137.511 18.5677 137.023 19.9258 136.731 21.575C136.438 23.2242 136.487 24.5823 136.877 25.6495C137.218 26.7651 137.95 27.2987 138.974 27.2987C139.95 27.2987 140.827 26.7166 141.608 25.6495Z"
          fill="white"
        />
        <path
          d="M115.22 8.3812C115.318 8.23567 115.367 8.04162 115.562 7.65357C115.708 7.26553 115.806 6.87749 115.904 6.48944C116.148 5.03427 115.757 4.30669 114.684 4.30669C113.904 4.30669 113.319 4.54922 112.928 5.13128C112.538 5.66484 112.343 6.39243 112.343 7.26553C112.343 8.09013 112.392 8.81772 112.489 9.39977C112.587 9.98182 112.684 10.564 112.831 11.0975C115.562 11.049 116.976 11.049 117.123 11.049C117.757 11.049 118.147 11.243 118.343 11.6795C118.488 12.1646 118.537 12.6012 118.488 13.0862C118.391 13.5712 118.196 14.0563 117.855 14.4929C117.513 14.9295 117.025 15.1234 116.392 15.1234L112.294 15.0749C110.782 24.2425 110.002 28.996 109.953 29.2871C109.709 30.5967 109.075 31.5669 108.051 32.1489C106.977 32.7795 105.905 33.0706 104.881 33.1191H104.832C103.758 33.0706 102.832 32.7795 102.051 32.1489C101.222 31.5669 100.881 30.5967 101.174 29.2871L104.588 11.0975C104.783 9.30275 105.319 7.70208 106.051 6.29541C106.783 4.93726 107.661 3.87014 108.733 3.14255C109.807 2.41497 110.88 1.8814 112.099 1.49336C113.27 1.15382 114.489 1.0083 115.757 1.0083C118.196 1.0083 120.05 1.49336 121.269 2.46347C122.488 3.43358 123.025 4.59772 122.732 5.95587C122.586 7.023 122.049 7.89611 121.22 8.62367C120.342 9.35126 119.318 9.73935 118.196 9.73935C117.513 9.73935 116.879 9.64232 116.294 9.44828C115.66 9.30275 115.318 9.1087 115.269 8.96325C115.124 8.62367 115.172 8.47814 115.22 8.3812Z"
          fill="white"
        />
        <path
          d="M135.462 3.87034C135.267 2.99724 134.438 2.31817 133.56 2.02713C132.78 1.7846 131.901 1.8331 131.121 1.97862C130.585 2.07563 130.389 2.02713 130.049 1.54207C129.707 1.05702 129.317 0.668967 128.829 0.377933C128.244 0.0383939 127.512 -0.107119 126.878 0.0869041C125.268 0.523455 124.83 2.41517 125.122 3.87034C125.414 5.42251 126.39 6.92619 127.805 7.75078C130.145 9.10891 133.657 7.94481 135.072 5.76206C135.364 5.277 135.56 4.74344 135.511 4.16137C135.511 4.06436 135.511 3.96734 135.462 3.87034Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_565_281">
          <rect width="177" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Bonafide = () => {
  const { t } = useTranslation("bonafide");
  
  const BonafideData = [
    {
      id: 1,
      img: "/brendet/bonafide/pule74.png",
      color: "text-[#FBB04C]",
      fill: "#FBB04C",
      header: t("s1Header"),
      header1: t('vleraU'),
      kalorike: t('vleraKalorike'),
      text: t("firstBonafideBrand"),
      left: true,
      bottom: true,
      vleraE: "1330 kJ / 314 kcal",
      yndyrat: "3.2g / 1.9g",
      vleratYndyrore: t('vleratYndyres'),
      karb: "61.3g / 6.53g",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "9.9g",
      vleratProteines: t('vleratProteines'),
      krip: "15.03g",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10 gr",
      hiriV: t('hiriV'),
      natriumi: "1.45 gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/supePuleBonafida.png"
    },
    {
      id: 2,
      img: "/brendet/bonafide/viqi74.png",
      color: "text-[#EE303C]",
      fill: "#EE303C",
      header: t("s2Header"),
      header1: t('vleraU'),
      text: t("secondBonafideBrand"),
      tags: ["250GR", "500GR", "1000GR"],
      left: false,
      bottom: false,
      vleraE: "1330 kJ / 314 kcal",
      kalorike: t('vleraKalorike'),
      yndyrat: "3.2g / 1.9g",
      vleratYndyrore: t('vleratYndyres'),
      karb: "61.3g / 6.53g",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "9.9g",
      vleratProteines: t('vleratProteines'),
      krip: "15.03g",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10 gr",
      hiriV: t('hiriV'),
      natriumi: "1.45 gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/supeViciBonafida.png"
    },
    {
      id: 3,
      img: "/brendet/bonafide/perimesh74.png",
      color: "text-[#67AE3E]",
      fill: "#67AE3E",
      header: t("s3Header"),
      header1: t('vleraU'),
      text: t("thirdBonafideBrand"),
      tags: ["250GR", "500GR", "1000GR"],
      left: true,
      bottom: false,
      vleraE: "1330 kJ / 314 kcal",
      kalorike: t('vleraKalorike'),
      yndyrat: "3.2g / 1.9g",
      vleratYndyrore: t('vleratYndyres'),
      karb: "61.3g / 6.53g",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "9.9g",
      vleratProteines: t('vleratProteines'),
      krip: "15.03g",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10 gr",
      hiriV: t('hiriV'),
      natriumi: "1.45 gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/supePerimeshBonafida.png"
    },
    {
      id: 4,
      img: "/brendet/bonafide/gullash74.png",
      color: "text-[#FFFFFF]",
      fill: "#4F2C15",
      header: t("s4Header"),
      header1: t('vleraU'),
      text: t("fourthBonafideBrand"),
      tags: ["250GR", "500GR", "1000GR"],
      left: true,
      bottom: false,
      vleraE: "173 kJ / 724 kcal",
      kalorike: t('vleraKalorike'),
      yndyrat: "10.51gr",
      vleratYndyrore: t('vleratYndyres'),
      karb: "9.63gr",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "9.17g",
      vleratProteines: t('vleratProteines'),
      krip: "15.03gr",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10gr",
      hiriV: t('hiriV'),
      natriumi: "1.45gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/gullashBonafida.png"
    },{
      id: 5,
      img: "/brendet/bonafide/boloneze74.png",
      color: "text-[#FFFFFF]",
      fill: "#4F2C15",
      header: t("s5Header"),
      header1: t('vleraU'),
      text: t("fifthBonafideBrand"),
      tags: ["250GR", "500GR", "1000GR"],
      left: false,
      bottom: false,
      vleraE: "114 kcal",
      kalorike: t('vleraKalorike'),
      yndyrat: "4.69 gr",
      vleratYndyrore: t('vleratYndyres'),
      karb: "11.47gr",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "5.32gr",
      vleratProteines: t('vleratProteines'),
      krip: "15.03g",
      vleratKripes: t('vleratKripes'),
      hiri: "1.58gr",
      hiriV: t('hiriV'),
      natriumi: "0.65gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/bologneze.png"
    },{
      id: 6,
      img: "/brendet/bonafide/sdomatesh74.png",
      color: "text-[#FFFFFF]",
      fill: "#4F2C15",
      header: t("s6Header"),
      header1: t('vleraU'),
      text: t("sixthBonafideBrand"),
      tags: ["250GR", "500GR", "1000GR"],
      left: true,
      bottom: false,
      vleraE: "1458 kcal / 345 KJ",
      kalorike: t('vleraKalorike'),
      yndyrat: "7.2 gr",
      vleratYndyrore: t('vleratYndyres'),
      karb: "59.4gr",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "10.6gr",
      vleratProteines: t('vleratProteines'),
      krip: "11.25g",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10 gr",
      hiriV: t('hiriV'),
      natriumi: "1.45 gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/salceDomatesh.png"
    },
    {
      id: 7,
      img: "/brendet/bonafide/brokoli.png",
      color: "text-[#FFFFFF]",
      fill: "#4F2C15",
      header: t("s7Header"),
      header1: t('vleraU'),
      text: t("s7Text"),
      tags: ["250GR", "500GR", "1000GR"],
      left: false,
      bottom: false,
      vleraE: "1458 kcal / 345 KJ",
      kalorike: t('vleraKalorike'),
      yndyrat: "7.2 gr",
      vleratYndyrore: t('vleratYndyres'),
      karb: "59.4gr",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "10.6gr",
      vleratProteines: t('vleratProteines'),
      krip: "11.25g",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10 gr",
      hiriV: t('hiriV'),
      natriumi: "1.45 gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/salceDomatesh.png"
    },
    {
      id: 8,
      img: "/brendet/bonafide/domate.png",
      color: "text-[#00000]",
      fill: "#4F2C15",
      header: t("s8Header"),
      header1: t('vleraU'),
      text: t("s8Text"),
      tags: ["250GR", "500GR", "1000GR"],

      left: true,
      bottom: false,
      vleraE: "1458 kcal / 345 KJ",
      kalorike: t('vleraKalorike'),
      yndyrat: "7.2 gr",
      vleratYndyrore: t('vleratYndyres'),
      karb: "59.4gr",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "10.6gr",
      vleratProteines: t('vleratProteines'),
      krip: "11.25g",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10 gr",
      hiriV: t('hiriV'),
      natriumi: "1.45 gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/salceDomatesh.png"
    },
    {
      id: 9,
      img: "/brendet/bonafide/kerpudhe.png",
      color: "text-[#00000]",
      fill: "#4F2C15",
      header: t("s9Header"),
      header1: t('vleraU'),
      text: t("s9Text"),
      tags: ["250GR", "500GR", "1000GR"],

      left: false,
      bottom: false,
      vleraE: "1458 kcal / 345 KJ",
      kalorike: t('vleraKalorike'),
      yndyrat: "7.2 gr",
      vleratYndyrore: t('vleratYndyres'),
      karb: "59.4gr",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "10.6gr",
      vleratProteines: t('vleratProteines'),
      krip: "11.25g",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10 gr",
      hiriV: t('hiriV'),
      natriumi: "1.45 gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/salceDomatesh.png"
    },
    {
      id: 10,
      img: "/brendet/bonafide/perime.png",
      color: "text-[#FFFFFF]",
      fill: "#4F2C15",
      header: t("s10Header"),
      header1: t('vleraU'),
      text: t("s10Text"),
      tags: ["250GR", "500GR", "1000GR"],

      left: true,
      bottom: false,
      vleraE: "1458 kcal / 345 KJ",
      kalorike: t('vleraKalorike'),
      yndyrat: "7.2 gr",
      vleratYndyrore: t('vleratYndyres'),
      karb: "59.4gr",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "10.6gr",
      vleratProteines: t('vleratProteines'),
      krip: "11.25g",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10 gr",
      hiriV: t('hiriV'),
      natriumi: "1.45 gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/salceDomatesh.png"
    },
    {
      id: 11,
      img: "/brendet/bonafide/pule.png",
      color: "text-[#FFFFFF]",
      fill: "#4F2C15",
      header: t("s11Header"),
      header1: t('vleraU'),
      text: t("s11Text"),
      tags: ["250GR", "500GR", "1000GR"],

      left: false,
      bottom: false,
      vleraE: "1458 kcal / 345 KJ",
      kalorike: t('vleraKalorike'),
      yndyrat: "7.2 gr",
      vleratYndyrore: t('vleratYndyres'),
      karb: "59.4gr",
      vleratKarbohidrate: t('vleratKarbohidrate'),
      prot: "10.6gr",
      vleratProteines: t('vleratProteines'),
      krip: "11.25g",
      vleratKripes: t('vleratKripes'),
      hiri: "2.10 gr",
      hiriV: t('hiriV'),
      natriumi: "1.45 gr",
      natriumiV: t('natriumiV'),
      koha: t('koha'),
      sasia: t('sasia'),
      secondSpecific:"/brendet/bonafide/salceDomatesh.png"
    }
  ];

  return (
    <div className="h-full w-full overflow-hidden ">
      <Header />
      <main className="relative">
        <div className="w-screen h-20 absolute bottom-0 left-0 bg-gradient-to-t from-white z-30"></div>
        <BrendetToggle
          bgColor={"green-main"}
          color={"#F9AE4C"}
          data={BonafideData}
          text={t("title")}
          logo={2}
          v2={true}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Bonafide;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["bonafide", "menu"])),
    },
  };
}
