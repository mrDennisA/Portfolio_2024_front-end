// Component
import Header from "../components/Header/page";
import Footer from "@/components/Footer/page";

//Utils
import LenisContextProvider from "@/utils/lenisContext";
import ThemeContextProvider from "@/utils/themeContext";

//Fonts
import { roboto, robotoCondensed, dmSerifDisplay, graphik } from "@/utils/fonts";

// Styles
import "../styles/globals.css";

export const metadata = {
  title: "DAlekseev.dev Portfolio",
  description: "DAlekseev.dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${graphik.variable}`}>
      <link rel="icon" href="/favicon.svg" />
      <LenisContextProvider>
        <ThemeContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeContextProvider>
      </LenisContextProvider>
    </html>
  );
}
