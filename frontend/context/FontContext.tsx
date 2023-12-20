import React, { createContext, useState } from "react";
import {
  poppins,
  lora,
  syncopate,
  openSans,
  dancingScript,
  allura,
} from "../utils/fonts";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  name: "light",
  background: "#fff",
  colors: {
    $primary: "#314f8c",
    $secondary: "#314f8c",
    $lightPink: "#40318c",
    $button: "#F06292",
    $span: "#314f8c",
    $cardBackground: "#f5f7fa",
  },
  cardShadow:
    "0px 4px 7px rgba(6, 22, 33, 0.13), 0px 13px 22px rgba(0, 30, 43, 0.12)",
  fonts: {
    $sansSerif: "sans-serif",
    $poppins: poppins.style.fontFamily,
    $opensans: openSans.style.fontFamily,
    $lora: lora.style.fontFamily,
    $syncopate: syncopate.style.fontFamily,
    $dancingScript: dancingScript.style.fontFamily,
    $allura: allura.style.fontFamily,
  },
  fontSizes: {
    $small: "1em",
    $medium: "2em",
    $large: "3em",
  },
};

// const darkTheme = {
//   name: "dark",
//   background: "#072442",
//   colors: {
//     $primary: "#ffffff",
//     $secondary: "#BDC5CE",
//     $span: "#ffffff",
//     $lightPink: "#6C5AB5",
//     $button: "#F06292",
//     $cardBackground: "#0A365B",
//   },
//   cardShadow: "0px 2px 5px rgba(0, 0, 0, 0.2), 0px 5px 15px rgba(0, 0, 0, 0.1)",
//   fonts: lightTheme.fonts,
//   fontSizes: lightTheme.fontSizes,
// };

export const ThemeContext = createContext({ theme: lightTheme });

const Theme = ({ children }: { children: any }) => {
  return (
    <ThemeContext.Provider value={{ theme: lightTheme }}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
