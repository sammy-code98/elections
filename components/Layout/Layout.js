import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>MEN2023</title>
        <meta name="description" content="Engr. Elias Mbam Nwalem Governorship Campaign Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
