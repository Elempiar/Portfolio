import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../scss/reset.scss";
import "../scss/main.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <div className="clear"></div>
      <Footer />
      <div className="background"></div>
    </>
  );
}