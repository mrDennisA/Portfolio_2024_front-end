// Component
import Header from "../components/Header/page";
import Footer from "@/components/Footer/page";
import ThemeContextProvider from "@/utils/theme";

//Utils
import { roboto, robotoCondensed, dmSerifDisplay, graphik } from "@/utils/fonts";
import SmoothScrolling from "@/utils/lenis";

// Styles
import "../styles/globals.css";

export const metadata = {
  title: "DAlekseev.dev Portfolio",
  description: "DAlekseev.dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${graphik.variable}`}>
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
