import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "../../components/Dashboard";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </>
  );
}
