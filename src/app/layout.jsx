// Styles
import "../styles/globals.css";

import SmoothScrolling from "@/utils/lenis";

// Component
import Header from "../components/Header/page";
import Footer from "@/components/Footer/page";
import ThemeContextProvider from "@/contexts/themeContext";

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
          <div className="wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
        {/* </ThemeContextProvider> */}
      </SmoothScrolling>
    </html>
  );
}
