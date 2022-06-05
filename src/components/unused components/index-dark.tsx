import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../../layout/Layout";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import News from "../News";
import Newsletter from "../Newsletter";
import Partners from "../Partners";
import Process from "../Process";
import Service from "../Service";
import Skills from "../Skills";
import Testimonial from "../Testimonial";

const Portfolio = dynamic(() => import("../Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <Layout dark>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      <Home dark />
      <Process dark />
      <About dark />
      <Portfolio />
      <Skills dark />
      <Service dark />
      <Testimonial />
      <Partners dark />
      <News />
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;
