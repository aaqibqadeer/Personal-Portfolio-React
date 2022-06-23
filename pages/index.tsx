import { HomeData } from "@constant/type";
import { About, Home, News, Skills, Testimonial } from "@container";
import { useThemeContext } from "@context";
import { Layout } from "@layout";
import dynamic from "next/dynamic";
import Head from "next/head";

const Portfolio = dynamic(() => import("../src/container/Portfolio"), {
  ssr: false,
});
interface Props {
  content: HomeData;
}

const Index: React.FC<Props> = ({ content }) => {
  const { darkTheme } = useThemeContext();
  console.log({ content });

  return (
    <Layout dark={darkTheme}>
      <Head>
        <title>Aaqib Qadeer Soomro | Home</title>
      </Head>
      <Home dark={darkTheme} />
      <About />
      <Portfolio />
      <Skills dark={darkTheme} />
      <Testimonial />
      <News />
    </Layout>
  );
};
export default Index;
