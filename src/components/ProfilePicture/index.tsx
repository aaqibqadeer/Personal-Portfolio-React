export const ProfilePicture = ({ skills, img }) => {
  return (
    <>
      <div className="rounded-full">
        <img src={img} alt="image" />
      </div>

      {skills?.map((skill, i) => {
        return (
          skill.icon && (
            <span
              key={i}
              className={`skills ${skill.className} anim_moveBottom`}
            >
              <img src={`/img/icons/${skill.icon}.png`} alt="" />
            </span>
          )
        );
      })}
    </>
  );
};
