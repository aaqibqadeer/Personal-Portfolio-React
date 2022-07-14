import Image from "next/image";
import profilePicture from "public/img/slider/avatar.webp";

export const ProfilePicture = ({ skills }) => {
  return (
    <>
      <div className="rounded-full">
        <Image src={profilePicture} alt="Profile Picture" />
      </div>

      {skills?.map((skill, i) => {
        return (
          <span key={i} className={`skills ${skill.className} anim_moveBottom`}>
            <Image
              src={`/img/icons/${skill.icon}.png`}
              alt="Tech Stacks"
              objectFit="cover"
              layout="fill"
            />
          </span>
        );
      })}
    </>
  );
};
