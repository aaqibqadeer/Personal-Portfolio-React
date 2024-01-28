import {
  AboutMeButton,
  BasicInfo,
  MouseIcon,
  ProfilePicture,
  SocialMediaIcons,
} from "@components";
import { Info, Skill } from "@constant/type";
import { HomeWrapper } from "./HomeWrapper";

interface Props {
  introContent: Info;
  skills: Skill[];
}

export const Home: React.FC<Props> = ({ introContent, skills }) => {
  const { img, social, ...basicInfo } = introContent || {};

  return (
    <HomeWrapper>
      <div className="container">
        <div className="content">
          <div className="details">
            {/* <BasicInfo data={basicInfo} /> */}
            <div className="button">
              {/* <AboutMeButton /> */}
              {/* <SocialMediaIcons social={social} /> */}
            </div>
          </div>

          <div className="avatar">
            <div className="image">
              {/* <ProfilePicture skills={skills} /> */}
            </div>
          </div>
        </div>
      </div>
      <MouseIcon />
    </HomeWrapper>
  );
};
