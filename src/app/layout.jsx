// Component
import Header from "../components/Header/page";
import Footer from "@/components/Footer/page";
import ThemeContextProvider from "@/context/themeContext";

//Utils
import { roboto, robotoCondensed } from "@/utils/fonts";
import SmoothScrolling from "@/utils/lenis";

// Styles
import "../styles/globals.css";

export const metadata = {
  title: "DAlekseev.dev Portfolio",
  description: "DAlekseev.dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoCondensed.variable}`}>
      <SmoothScrolling>
        <ThemeContextProvider>
          {/* <body> */}
          <Header />
          <main>{children}</main>
          <Footer />
          {/* </body> */}
        </ThemeContextProvider>
      </SmoothScrolling>
    </html>
  );
}
