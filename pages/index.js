import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner"
import Register from "../components/Registration/Register";
import WhatsappGroup from "../components/Groups/WhatsappGroup";
import About from "../components/About/About"
import Awards from "../components/Awards/Awards";
import Mission from "../components/Mission";

export default function Home() {
  return (
    <Layout>
      <main className="mb-10">
        <Banner/>
        <Register/>
        <WhatsappGroup/>
        <About/>
        <Awards/>
        <Mission/>
      </main>
    </Layout>
  );
}
