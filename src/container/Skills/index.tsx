import { Skills as SkillsType } from "@constant/type";
import { activeSkillProgress } from "@utility/utilits";
import { useEffect } from "react";
import { SkillsLayout } from "./SkillsLayout";
import { SkillsList } from "./SkillsList";

interface Props {
  skillsContent: SkillsType;
}

export const Skills: React.FC<Props> = ({ skillsContent }) => {
  const { skillTitle, skillTagline, skillDescription, skillsList } =
    skillsContent || {};

  useEffect(() => {
    window?.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <SkillsLayout>
      <div className="left">
        <div
          data-wow-duration="1s"
          data-align="left"
          className="dizme_tm_main_title wow fadeInUp"
        >
          <span>{skillTitle}</span>
          <h3>{skillTagline}</h3>
          <p>{skillDescription}</p>
        </div>

        {skillsList && <SkillsList skills={skillsList} />}
      </div>

      <div className="right">
        <img src={`img/skills/1.png`} alt="image" />
      </div>
    </SkillsLayout>
  );
};
