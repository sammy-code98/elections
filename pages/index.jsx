import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner"
import Register from "../components/Registration/Register";
import WhatsappGroup from "../components/Groups/WhatsappGroup";
import About from "../components/About/About"
import Awards from "../components/Awards/Awards";
import Mission from "../components/Mission";
import Contact from "../components/Contact/Contact"

export default function Home() {
  return (
    <Layout>
      <main   id="home">
        <Banner/>
        <div className="container">
        <Register/>
        <WhatsappGroup/>
        <About/>
        <Awards/>
        <Mission/>
        <Contact/>
        </div>
        
      </main>
    </Layout>
  );
}