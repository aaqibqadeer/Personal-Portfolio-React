import {
  AboutMeButton,
  BasicInfo,
  MouseIcon,
  ProfilePicture,
  SocialMediaIcons,
} from "@components";
import { fatchData } from "@utility/utilits";
import { useEffect, useState } from "react";
import { HomeWrapper } from "./HomeWrapper";

interface Props {
  dark?: boolean;
}

export const Home: React.FC<Props> = ({ dark }) => {
  const [data, setData] = useState<any>({});

  const getData = async () => {
    setData(await fatchData("/static/info.json"));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HomeWrapper dark={dark}>
      <div className="container">
        <div className="content">
          <div className="details">
            <BasicInfo data={data} />
            <div className="button">
              <AboutMeButton />
              <SocialMediaIcons social={data.social} />
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
    </HomeWrapper>
  );
};
