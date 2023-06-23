import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
  body {
    margin: 0; line-height: normal;
  }
:root {

/* fonts */
--font-exo-2: 'Exo 2';
--font-montserrat: Montserrat;

/* font sizes */
--font-size-lg: 18px;
--font-size-sm: 14px;
--font-size-3xl: 22px;
--font-size-base: 16px;
--font-size-xl: 20px;
--font-size-21xl: 40px;
--font-size-13xl: 32px;
--font-size-xs: 12px;
--font-size-9xl: 28px;
--font-size-5xl: 24px;
--font-size-5xs-7: 7.7px;
--font-size-7xl: 26px;
--font-size-lgi: 19px;
--font-size-11xl: 30px;
--font-size-2xs: 11px;
--font-size-26xl: 45px;

/* Colors */
--color-white: #fff;
--color-gray-100: #fafcff;
--color-gray-200: #231f20;
--color-gray-300: #0f1114;
--color-gray-400: #060707;
--color-gainsboro-100: #e5e8eb;
--color-silver-100: #c6c8ce;
--color-silver-200: #c4c4c4;
--color-whitesmoke: #f7f8fa;
--color-goldenrod: #fac73f;
--color-darkgray: #8f979e;
--color-mediumseagreen: #34c77b;
--color-gold-100: #fedb33;
--color-gold-200: #fdc10e;
--color-chocolate: #d06437;
--color-dimgray: #707070;
--color-orange: #e99511;
--color-orangered: #fb402b;
--color-dodgerblue: #0985eb;
--color-darkslategray-100: #454f63;
--color-darkslategray-200: #2c3e50;

/* Gaps */
--gap-20xl: 39px;
--gap-16xl: 35px;
--gap-61xl: 80px;
--gap-mid: 17px;
--gap-21xl: 40px;
--gap-7xs: 6px;
--gap-xs: 12px;
--gap-68xl: 87px;
--gap-52xl: 71px;
--gap-2xl: 21px;
--gap-19xl: 38px;
--gap-base: 16px;
--gap-17xl: 36px;
--gap-5xs: 8px;

/* Paddings */
--padding-48xl: 67px;
--padding-3xs: 10px;

/* border radiuses */
--br-mini: 15px;
--br-5xs: 8px;
--br-3xs: 10px;
--br-4xl: 23px;
--br-lg: 18px;
--br-9xs: 4px;
--br-sm: 14px;
--br-xs: 12px;
--br-4xs: 9px;
--br-11xs-1: 1.1px;
--br-xl: 20px;
--br-11xs: 2px;

}
`;
}
