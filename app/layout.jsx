import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <header> <Header/> </header>
        {children}
        <footer> <Footer/> </footer>
      </body>
    </html>
  );
}