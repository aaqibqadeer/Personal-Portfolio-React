import { HomeContent } from "@constant/type";
import { About, Home } from "@container";
import content from "@data/home.json";
import { Layout } from "@layout";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Portfolio = dynamic(() => import("../src/container/Portfolio"), {
  ssr: false,
});
const Skills = dynamic(() => import("@container/Skills"));
const News = dynamic(() => import("@container/News"));
const Testimonial = dynamic(() => import("@container/Testimonial"));
interface Props {
  content: HomeContent;
}

const Index: React.FC<Props> = ({ content }) => {
  const {
    pageTitle,
    info,
    about,
    portfolio,
    skills: skillsContent,
    testimonial,
    blog,
    siteSetting,
  } = content || {};

  return (
    <Layout siteSetting={siteSetting}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Home introContent={info} skills={skillsContent.skillsList} />
      <About aboutContent={about} />
      <Portfolio portfolioContent={portfolio} />
      <Skills skillsContent={skillsContent} />
      <Testimonial testimonialContent={testimonial} />
      <News blogContent={blog} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      content,
    },
  };
};

export default Index;
