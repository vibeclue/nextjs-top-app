import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import './globals.css';
import { Header } from '../components/layout/Header/Header';
import { Sidebar } from "@/components/layout/Sidebar/Sidebar";
import { Footer } from "@/components/layout/Footer/Footer";


const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Мой топ чего-то",
  description: "Мой рейтинг для чето-то",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ru">
      <body className={notoSans.className}>
        <Header />
        <div>
          <Sidebar />
          <main>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
