import "./global.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-1">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}