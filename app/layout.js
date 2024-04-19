import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cathy's Clean",
  description: "Cathy's Clean is a cleaning service in Coeur d'Alene, ID.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgSoft text-text min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-YHG07W3YVV" />
      </body>
    </html>
  );
}
