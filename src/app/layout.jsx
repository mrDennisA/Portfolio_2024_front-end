import { Suspense } from "react";

// Component
import Header from "../components/Header/page";
import Footer from "@/components/Footer/page";
import ThemeContextProvider from "@/context/themeContext";

//Utils
import SmoothScrolling from "@/util/lenis";

// Styles
import "../styles/globals.css";

export const metadata = {
  title: "DAlekseev.dev Portfolio",
  description: "DAlekseev.dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScrolling>
        {/* <ThemeContextProvider> */}
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
        {/* </ThemeContextProvider> */}
      </SmoothScrolling>
    </html>
  );
}
