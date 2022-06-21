import dynamic from "next/dynamic";
import Head from "next/head";
import { About, Home, News, Skills, Testimonial } from "../src/container";
import { useThemeContext } from "../src/context/theme";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/container/Portfolio"), {
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
      {/* <Process dark={darkTheme} /> */}
      <About />
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
