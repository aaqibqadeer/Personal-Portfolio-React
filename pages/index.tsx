import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Home from "../src/components/Home";
import { News } from "../src/components/News";
import Process from "../src/components/Process";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import { useThemeContext } from "../src/context/theme";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  const { darkTheme } = useThemeContext();

  return (
    <Layout dark={darkTheme}>
      <Head>
        <title>Aaqib Qadeer Soomro | Home</title>
      </Head>
      <Home dark={darkTheme} />
      <Process dark={darkTheme} />
      <About dark={darkTheme} />
      <Portfolio />
      <Skills dark={darkTheme} />
      {/* <Service dark={darkTheme} /> */}
      <Testimonial />
      {/* <Partners dark={darkTheme} /> */}
      <News />
      {/* <Newsletter /> */}
      {/* <Contact /> */}
    </Layout>
  );
};
export default Index;
