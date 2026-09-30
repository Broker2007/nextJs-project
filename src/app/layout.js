import { Nunito } from "next/font/google";
import "./globals.scss";
import "@/style/scss/app.scss"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "ООО Вектор - Металлоконструкции и строительная оснастка",
  description: "Производство металлоконструкций, строительной оснастки и механическая обработка деталей любой сложности от ООО Вектор.",
  keywords: "металлоконструкции, строительная оснастка, металлообработка, ооо вектор, токарная обработка, фрезеровка",
  openGraph: {
    title: "ООО Вектор - Производство металлоконструкций",
    description: "Надежный партнер в производстве металлоконструкций и строительной оснастки.",
    url: "https://vektorv.ru",
    siteName: "ООО Вектор",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <body className={nunito.className}>
        <Header/>
        {children}
        <Footer/>
      </body>

    </html>
  );
}
