import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/roboto/Roboto-Thin.ttf",
      style: "normal",
      weight: "100",
      display: "swap",
    },
    {
      path: "../../public/fonts/roboto/Roboto-Light.ttf",
      style: "normal",
      weight: "300",
      display: "swap",
    },
    {
      path: "../../public/fonts/roboto/Roboto-Regular.ttf",
      style: "normal",
      weight: "400",
      display: "swap",
    },
    {
      path: "../../public/fonts/roboto/Roboto-Medium.ttf",
      style: "normal",
      weight: "500",
      display: "swap",
    },
    {
      path: "../../public/fonts/roboto/Roboto-Bold.ttf",
      style: "normal",
      weight: "700",
      display: "swap",
    },
    {
      path: "../../public/fonts/roboto/Roboto-Black.ttf",
      style: "normal",
      weight: "900",
      display: "swap",
    },
  ],
  variable: "--font-roboto",
});

export const robotoCondensed = localFont({
  src: [
    {
      path: "../../public/fonts/robotoCondensed/RobotoCondensed-Thin.ttf",
      style: "normal",
      weight: "100",
      display: "swap",
    },
    {
      path: "../../public/fonts/robotoCondensed/RobotoCondensed-ExtraLight.ttf",
      style: "normal",
      weight: "200",
      display: "swap",
    },
    {
      path: "../../public/fonts/robotoCondensed/RobotoCondensed-ExtraLightItalic.ttf",
      style: "italic",
      weight: "200",
      display: "swap",
    },
    {
      path: "../../public/fonts/robotoCondensed/RobotoCondensed-Light.ttf",
      style: "normal",
      weight: "300",
      display: "swap",
    },
    {
      path: "../../public/fonts/robotoCondensed/RobotoCondensed-LightItalic.ttf",
      style: "italic",
      weight: "300",
      display: "swap",
    },
  ],
  variable: "--font-robotoCondensed",
});

export const dmSerifDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/DMSerifDisplay-Regular.ttf",
      style: "normal",
      weight: "400",
      display: "swap",
    },
  ],
  variable: "--font-dmSerifDisplay",
});

export const graphik = localFont({
  src: [
    {
      path: "../../public/fonts/graphik/Graphik-Bold-Web.woff2",
      style: "normal",
      weight: "700",
      display: "swap",
    },
    {
      path: "../../public/fonts/graphik/Graphik-Medium-Web.woff2",
      style: "normal",
      weight: "500",
      display: "swap",
    },
    {
      path: "../../public/fonts/graphik/Graphik-Regular-Web.woff2",
      style: "normal",
      weight: "400",
      display: "swap",
    },
    {
      path: "../../public/fonts/graphik/Graphik-Light-Web.woff2",
      style: "normal",
      weight: "300",
      display: "swap",
    },
    {
      path: "../../public/fonts/graphik/Graphik-Extralight-Web.woff2",
      style: "normal",
      weight: "200",
      display: "swap",
    },
    {
      path: "../../public/fonts/graphik/Graphik-Thin-Web.woff2",
      style: "normal",
      weight: "100",
      display: "swap",
    },
  ],
  variable: "--font-graphik",
});
