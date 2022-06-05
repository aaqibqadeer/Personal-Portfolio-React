import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
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
        <title>Dizme | Home</title>
      </Head>
      <Home dark={darkTheme} />
      <Process dark={darkTheme} />
      <About dark={darkTheme} />
      <Portfolio />
      <Skills dark={darkTheme} />
      <Service dark={darkTheme} />
      <Testimonial />
      <Partners dark={darkTheme} />
      <News />
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;
