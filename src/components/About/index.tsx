import Image from "next/image";
import { AboutLayout } from "./AboutLayout";
import { Badge } from "./Badge";
import { AboutMeDescription, AboutMeTitle } from "./constant";

interface Props {
  dark?: boolean;
}

const About: React.FC<Props> = ({ dark }) => {
  return (
    <AboutLayout>
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <div className="image">
              <img src={`img/about/1.png`} alt="image" />
              <Badge
                className="year"
                counterNumber={2}
                text1="Years of"
                text2="Experience"
              />
              <Badge
                className="project"
                counterNumber={5}
                text1="Total"
                text2="Large Scale Projects"
              />
            </div>
          </div>

          <div className="right">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span>About Me</span>
              <h3>{AboutMeTitle}</h3>
            </div>

            <div className="text wow fadeInUp" data-wow-duration="1s">
              <p>{AboutMeDescription}</p>
            </div>

            <div
              className="dizme_tm_button wow fadeInUp"
              data-wow-duration="1s"
            >
              <a className="anchor" href="#contact">
                <span>Learn more about me</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
        <img src="/img/brushes/about/1.png" alt="image" />
      </div>

      <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
        <Image src="/img/brushes/about/2.png" alt="image" layout="fill" />
      </div>
    </AboutLayout>
  );
};
export default About;
