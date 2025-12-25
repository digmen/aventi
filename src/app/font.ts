import localFont from "next/font/local";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

// Типы для шрифтов
export interface FontFamily {
  [key: string]: NextFontWithVariable;
}

// AwesomeSerif Шрифты
export const AwesomeSerifItalicVAR = localFont({
  src: "../../public/fonts/AwesomeSerif/Awesome Serif Italic VAR-VF.ttf",
  variable: "--font-awesome-serif-italic-var",
});

export const AwesomeSerifItalic = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerifItalic-Regular.otf",
  variable: "--font-awesome-serif-italic",
});

export const AwesomeSerifItalicMedRegular = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerifItalic-MedRegular.otf",
  variable: "--font-awesome-serif-italic-medium-regular",
});

export const AwesomeSerifItalicBdRegular = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerifItalic-BdRegular.otf",
  variable: "--font-awesome-serif-italic-bold-regular",
});

export const AwesomeSerifItalicLightReg = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerifItalic-LightReg.otf",
  variable: "--font-awesome-serif-italic-light-regular",
});

export const AwesomeSerifItalicTall = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerifItalic-Tall.otf",
  variable: "--font-awesome-serif-italic-tall",
});

export const AwesomeSerifItalicExtraTall = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerifItalic-ExtraTall.otf",
  variable: "--font-awesome-serif-italic-extra-tall",
});

export const AwesomeSerifVAR = localFont({
  src: "../../public/fonts/AwesomeSerif/Awesome Serif VAR-VF.ttf",
  variable: "--font-awesome-serif-var",
});

export const AwesomeSerifRegular = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerif-Regular.otf",
  variable: "--font-awesome-serif-regular",
});

export const AwesomeSerifMediumRegular = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerif-MediumRegular.otf",
  variable: "--font-awesome-serif-medium-regular",
});

export const AwesomeSerifBoldRegular = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerif-BoldRegular.otf",
  variable: "--font-awesome-serif-bold-regular",
});

export const AwesomeSerifSemiBoldRegular = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerif-SemiBoldRegular.otf",
  variable: "--font-awesome-serif-semi-bold-regular",
});

export const AwesomeSerifLightRegular = localFont({
  src: "../../public/fonts/AwesomeSerif/AwesomeSerif-LightRegular.otf",
  variable: "--font-awesome-serif-light-regular",
});

// ClashDisplay Шрифты
export const ClashDisplayVariable = localFont({
  src: "../../public/fonts/ClashDisplay/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display-variable",
});

export const ClashDisplayLight = localFont({
  src: "../../public/fonts/ClashDisplay/ClashDisplay-Light.ttf",
  variable: "--font-clash-display-light",
});

export const ClashDisplayRegular = localFont({
  src: "../../public/fonts/ClashDisplay/ClashDisplay-Regular.ttf",
  variable: "--font-clash-display-regular",
});

export const ClashDisplayMedium = localFont({
  src: "../../public/fonts/ClashDisplay/ClashDisplay-Medium.ttf",
  variable: "--font-clash-display-medium",
});

export const ClashDisplaySemibold = localFont({
  src: "../../public/fonts/ClashDisplay/ClashDisplay-Semibold.ttf",
  variable: "--font-clash-display-semibold",
});

export const ClashDisplayBold = localFont({
  src: "../../public/fonts/ClashDisplay/ClashDisplay-Bold.ttf",
  variable: "--font-clash-display-bold",
});

export const ClashDisplayExtralight = localFont({
  src: "../../public/fonts/ClashDisplay/ClashDisplay-Extralight.ttf",
  variable: "--font-clash-display-extralight",
});

// CraftworkGrotesk Шрифты
export const CraftworkGroteskGX = localFont({
  src: "../../public/fonts/CraftworkGrotesk/CraftworkGroteskGX.woff",
  variable: "--font-craftwork-grotesk-gx",
});

export const CraftworkGroteskRegular = localFont({
  src: "../../public/fonts/CraftworkGrotesk/CraftworkGrotesk-Regular.woff",
  variable: "--font-craftwork-grotesk-regular",
});

export const CraftworkGroteskMedium = localFont({
  src: "../../public/fonts/CraftworkGrotesk/CraftworkGrotesk-Medium.woff",
  variable: "--font-craftwork-grotesk-medium",
});

export const CraftworkGroteskSemiBold = localFont({
  src: "../../public/fonts/CraftworkGrotesk/CraftworkGrotesk-SemiBold.woff",
  variable: "--font-craftwork-grotesk-semi-bold",
});

export const CraftworkGroteskBold = localFont({
  src: "../../public/fonts/CraftworkGrotesk/CraftworkGrotesk-Bold.woff",
  variable: "--font-craftwork-grotesk-bold",
});

export const CraftworkGroteskHeavy = localFont({
  src: "../../public/fonts/CraftworkGrotesk/CraftworkGrotesk-Heavy.woff",
  variable: "--font-craftwork-grotesk-heavy",
});

// Объединение всех шрифтов в группы для удобства использования
export const awesomeSerif = {
  italicVar: AwesomeSerifItalicVAR,
  italic: AwesomeSerifItalic,
  italicMediumRegular: AwesomeSerifItalicMedRegular,
  italicBoldRegular: AwesomeSerifItalicBdRegular,
  italicLightRegular: AwesomeSerifItalicLightReg,
  italicTall: AwesomeSerifItalicTall,
  italicExtraTall: AwesomeSerifItalicExtraTall,
  var: AwesomeSerifVAR,
  regular: AwesomeSerifRegular,
  mediumRegular: AwesomeSerifMediumRegular,
  boldRegular: AwesomeSerifBoldRegular,
  semiBoldRegular: AwesomeSerifSemiBoldRegular,
  lightRegular: AwesomeSerifLightRegular,
};

export const clashDisplay = {
  variable: ClashDisplayVariable,
  light: ClashDisplayLight,
  regular: ClashDisplayRegular,
  medium: ClashDisplayMedium,
  semibold: ClashDisplaySemibold,
  bold: ClashDisplayBold,
  extralight: ClashDisplayExtralight,
};

export const craftworkGrotesk = {
  gx: CraftworkGroteskGX,
  regular: CraftworkGroteskRegular,
  medium: CraftworkGroteskMedium,
  semiBold: CraftworkGroteskSemiBold,
  bold: CraftworkGroteskBold,
  heavy: CraftworkGroteskHeavy,
};

// Общий объект для всех шрифтов
export const fonts = {
  awesomeSerif,
  clashDisplay,
  craftworkGrotesk,
};
