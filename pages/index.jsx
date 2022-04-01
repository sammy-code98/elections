import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner";
import Ambassador from "../components/Registration/Ambassador";
import Campaign from "../components/Registration/Campaign";
import WhatsappGroup from "../components/Groups/WhatsappGroup";
import About from "../components/About/About";
import Awards from "../components/Awards/Awards";
import Mission from "../components/Mission";
import Contact from "../components/Contact/Contact";



export default function Home() {
  
  return (
    <Layout>
    <main id="home">
      <Banner />
      <div className="container">
        <Ambassador />
        <Campaign />
        <WhatsappGroup />
        <About />
        <Awards />
        <Mission />
        <Contact />
      </div>
    </main>
  </Layout>
  );
}
