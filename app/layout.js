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
      <body
        className={`${inter.className} bg-bgSoft text-text min-h-screen relative`}
      >
        <div className="bg-[#F8973B]">
          <Navbar />
        </div>
        <div className="flex-1">{children}</div>
        <div className="absolute bottom-0 left-0 right-0">
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-S9KSPX27VG" />
      </body>
    </html>
  );
}
