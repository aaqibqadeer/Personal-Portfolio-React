import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../../utilits";
import { SkillsLayout } from "./SkillsLayout";
import { SkillsList } from "./SkillsList";
import { Info } from "./type";

interface Props {
  dark?: boolean;
}

const Skills: React.FC<Props> = ({ dark }) => {
  const [data, setData] = useState<Info>(null);

  const getData = async () => {
    setData(await fatchData("/static/info.json"));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <SkillsLayout>
      <div className="left">
        <div
          data-wow-duration="1s"
          data-align="left"
          className="dizme_tm_main_title wow fadeInUp"
        >
          <span>{data?.skillTitle}</span>
          <h3>{data?.skillTagline}</h3>
          <p>{data?.skillDescription}</p>
        </div>

        {data && <SkillsList skills={data.skills} />}
      </div>

      <div className="right">
        <img src={`img/skills/1.png`} alt="image" />
      </div>
    </SkillsLayout>
  );
};
export default Skills;
