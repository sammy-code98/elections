import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      <Head>
       
        {/* <!-- Primary Meta Tags --> */}
        <title>Engr Mbam Elias Support Group || MSG2023</title>
        <meta name="title" content="Engr Mbam Elias Support Group" />
        <meta
          name="description"
          content="Engr. Mbam Support Group Governorship Campaign Committee.
The messiah the good people of ebonyi need.
The servant leader we need come 2023."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://msg2023.org" />
        <meta property="og:title" content="Engr Mbam Elias Support Group" />
        <meta
          property="og:description"
          content="Engr. Mbam Support Group Governorship Campaign Committee.
The messiah the good people of ebonyi need.
The servant leader we need come 2023."
        />
        <meta
          property="og:image"
          content="https://github.com/sammy-code98/elections/blob/main/public/seo.jpeg?raw=true"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://msg2023.org" />
        <meta
          property="twitter:title"
          content="Engr Mbam Elias Support Group"
        />
        <meta
          property="twitter:description"
          content="Engr. Mbam Support Group Governorship Campaign Committee.
                 The messiah the good people of ebonyi need.
                  The servant leader we need come 2023."
        />
        <meta
          property="twitter:image"
          content="https://github.com/sammy-code98/elections/blob/main/public/seo.jpeg?raw=true"
        />
      </Head>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
