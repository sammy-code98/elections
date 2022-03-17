import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>MSG2023</title>
        <meta name="Engr ELIAS MBAM SUPPORT GROUP 2023" content="Engr. Elias Mbam Nwalem Governorship Campaign Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
