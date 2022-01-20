import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner"
import Register from "../components/Registration/Register";
import WhatsappGroup from "../components/Groups/WhatsappGroup";
import About from "../components/About/About"
import Awards from "../components/Awards/Awards";
import Mission from "../components/Mission";
import Image from "next/image";

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
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  );
}
