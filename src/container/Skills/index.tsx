import { Skills as SkillsType } from "@constant/type";
import { activeSkillProgress } from "@utility/utilits";
import Image from "next/image";
import skillsImg from "public/img/skills/1.webp";
import { useEffect } from "react";
import { SkillsLayout } from "./SkillsLayout";
import { SkillsList } from "./SkillsList";

interface Props {
  skillsContent: SkillsType;
}

const Skills: React.FC<Props> = ({ skillsContent }) => {
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
        <Image src={skillsImg} alt="image" />
      </div>
    </SkillsLayout>
  );
};

export default Skills;
