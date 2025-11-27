import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import './globals.css';


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
        {children}
      </body>
    </html>
  );
}
