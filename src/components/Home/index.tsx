import parse from "html-react-parser";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fatchData } from "../../utilits";
import { HomeLayout } from "./Layout";
import { MouseIcon } from "./MouseIcon";

interface Props {
  dark?: boolean;
}

const AboutMeButton = () => {
  return (
    <div className="dizme_tm_button">
      <a className="anchor" href="#about">
        <span>About Me</span>
      </a>
    </div>
  );
};

const SocialIcon = ({ social }) => {
  return social ? (
    <div className="social">
      <ul>
        {social?.map((social, i) => (
          <li key={i}>
            <a href={social.url}>
              <i className={social.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

const BasicInfo = ({ data }) => {
  return (
    <>
      <div className="hello">
        <h3 className="orangeText">{`Hello, I'm`}</h3>
      </div>

      <div className="name">
        <h3>{data && data.name ? data.name : "name"}</h3>
      </div>

      <div className="job">
        <p>
          A <span className="greenText">{data && data.mainSkill}</span> From{" "}
          <span className="purpleText">{data.address}</span>
        </p>
      </div>

      <div className="text">
        <p>{data.bio}</p>
      </div>
    </>
  );
};

const ProfilePicture = ({ skills, img }) => {
  return (
    <>
      <Image
        src={img ? img : "/img/slider/avatar.png"}
        alt="image"
        layout="fill"
      />

      {skills?.map((skill, i) => {
        return (
          skill.icon && (
            <span key={i} className={`skills ${skill.name} anim_moveBottom`}>
              {parse(skill.icon)}
            </span>
          )
        );
      })}
    </>
  );
};

const Home: React.FC<Props> = ({ dark }) => {
  const [data, setData] = useState<any>({});

  const getData = async () => {
    setData(await fatchData("/static/info.json"));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HomeLayout dark={dark}>
      <div className="container">
        <div className="content">
          <div className="details">
            <BasicInfo data={data} />
            <div className="button">
              <AboutMeButton />
              <SocialIcon social={data.social} />
            </div>
          </div>

          <div className="avatar">
            <div className="image">
              <ProfilePicture img={data?.img} skills={data?.skills} />
            </div>
          </div>
        </div>
      </div>
      <MouseIcon dark={dark} />
    </HomeLayout>
  );
};
export default Home;
