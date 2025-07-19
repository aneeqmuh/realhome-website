import { Inter, Edu_NSW_ACT_Foundation, Jost, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const eduFont = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-edu'
});

const jost = Jost({ subsets: ["latin"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Real Home Contracting | Villa Renovation & Construction in Ajman, UAE",
  description:
    "Real Home Building Contracting LLC offers custom villa construction, 3D design, electrical work, and renovation services in Ajman, UAE.",
  keywords:
    "Ajman construction, UAE villa building, Real Home Contracting, home renovation, 3D design, interior design, electrical services",
  // ADD ICONS HERE:
  icons: {
    icon: [
      { url: '/images/logo2.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: '/images/logo2.png',
    shortcut: '/images/logo2.png',
  },
  openGraph: {
    title: "Real Home Contracting | Villa Renovation in Ajman",
    description: "Contact us for expert construction and interior design services across the UAE.",
    url: "https://realhomecontracting.com",
    siteName: "Real Home Contracting",
    images: ['/images/logo2.png'], // Also good for social sharing
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}