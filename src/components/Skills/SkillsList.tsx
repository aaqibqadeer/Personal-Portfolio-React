import { Skill } from "./type";

export const SkillsList = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="dodo_progress wow fadeInUp" data-wow-duration="1s">
      {skills?.map((skill, i) => (
        <div
          className="progress_inner skillsInner___"
          data-value={skill.value}
          data-color={skill.color}
          key={i}
        >
          <span>
            <span className="label">{skill.name}</span>
            <span className="number">{skill.value}%</span>
          </span>

          <div className="background">
            <div className="bar">
              <div className="bar_in" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
