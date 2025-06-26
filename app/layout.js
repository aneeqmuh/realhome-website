import { Inter, Edu_NSW_ACT_Foundation, Jost,Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const eduFont = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
  weight: ['400'], // this font has only one weight
  variable: '--font-edu'
});

const jost = Jost({ subsets: ["latin"]});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Real-Home Contracting",
  description: "Real-Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
