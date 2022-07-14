import { Badge, Brushes } from "@components";
import { About as AboutType } from "@constant/type";
import Image from "next/image";
import { AboutWrapper } from "./AboutWrapper";

interface Props {
  aboutContent: AboutType;
}

export const About: React.FC<Props> = ({ aboutContent }) => {
  const { tagline, title, bio, totalProject, experience } = aboutContent || {};
  const { paragraph1, paragraph2, paragraph3, paragraph4 } = bio || {};
  const brushList = [
    { num: 1, className: "brush_1 fadeInLeft" },
    { num: 2, className: "brush_2 fadeInRight" },
  ];

  return (
    <AboutWrapper>
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <div className="image">
              <Image
                src={`/img/about/about.webp`}
                alt="image"
                width={485}
                height={478}
              />
              <Badge
                className="year"
                counterNumber={experience}
                text1="Years of"
                text2="Experience"
              />
              <Badge
                className="project"
                counterNumber={totalProject}
                text1="Total"
                text2="Large Scale Projects"
              />
            </div>
          </div>

          <div className="right">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span>{title}</span>
              <h3>{tagline}</h3>
            </div>

            <div className="text wow fadeInUp" data-wow-duration="1s">
              <p className="tw-mb-2">{paragraph1}</p>
              <p className="tw-mb-2">{paragraph2}</p>
              <p className="tw-mb-2">{paragraph3}</p>
              <p className="">{paragraph4}</p>
            </div>

            {/* <div
              className="dizme_tm_button wow fadeInUp"
              data-wow-duration="1s"
            >
              <a className="anchor" href="#contact">
                <span>Learn more about me</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <Brushes imagePath="about" brushList={brushList} />
    </AboutWrapper>
  );
};
