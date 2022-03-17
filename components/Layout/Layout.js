import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      <Head>
        {/* <title>MSG2023</title>
        <meta name="description" content="Engr. Elias Mbam Nwalem Support Group" />
        <link rel="icon" href="/favicon.ico" /> */}
        {/* Primary Meta Tags  */}
        {/* <!-- Primary Meta Tags --> */}
<title>Engr Mbam Elias Support Group</title>
<meta name="title" content="Engr Mbam Elias Support Group"/>
<meta name="description" content="Engr. Mbam Support Group Governorship Campaign Committee.
The messiah the good people of ebonyi need.
The servant leader we need come 2023."/>
 <link rel="icon" href="/favicon.ico" />

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://msg2023.vercel.app/"/>
<meta property="og:title" content="Engr Mbam Elias Support Group"/>
<meta property="og:description" content="Engr. Mbam Support Group Governorship Campaign Committee.
The messiah the good people of ebonyi need.
The servant leader we need come 2023."/>
<meta property="og:image" content="https://msg2023.vercel.app/public/seo.jpg"/>

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://metatags.io/"/>
<meta property="twitter:title" content="Engr Mbam Elias Support Group"/>
<meta property="twitter:description" content="Engr. Mbam Support Group Governorship Campaign Committee.
The messiah the good people of ebonyi need.
The servant leader we need come 2023."/>
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
      </Head>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}
