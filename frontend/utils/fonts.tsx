import {
  Poppins,
  Lora,
  Syncopate,
  Open_Sans,
  Dancing_Script,
  Allura,
} from "next/font/google";
export const allura = Allura({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: "normal",
  preload: true,
});
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export const lora = Lora({
  subsets: ["cyrillic-ext", "latin-ext", "cyrillic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: "italic",
  preload: true,
});

export const syncopate = Syncopate({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: "normal",
  preload: true,
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  preload: true,
});

export const dancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: "normal",
  preload: true,
});
