import "./global.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import SessãoInfo from "./componentes/SessãoInfo";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="bg-white min-h-screen flex flex-col">
        <Header/>
        <main className="flex-1">
        {children}
        <SessãoInfo/>
        </main>
        <Footer/>
      </body>
    </html>
  );
}