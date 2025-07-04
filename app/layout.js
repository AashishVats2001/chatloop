import "./globals.css";
import { lato } from './fonts';
import Navbar from "@/components/Navbar";
import '@/lib/fontawesome'; // adjust path if needed


export const metadata = {
  title: "VerseSquare",
  description: " Connect. Collaborate. Create.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body className="font-lato antialiased justify-center flex-col items-center flex">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
