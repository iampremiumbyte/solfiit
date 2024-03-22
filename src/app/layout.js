import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solfit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/SolFit Flavicon color.png" sizes="any" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
