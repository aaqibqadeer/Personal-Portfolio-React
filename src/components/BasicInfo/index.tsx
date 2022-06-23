export const BasicInfo = ({ data }) => {
  const { name, address, bio, mainSkill } = data || {};
  return (
    <>
      <div className="hello">
        <h3 className="orangeText">{`Hello, I'm`}</h3>
      </div>

      <div className="name">
        <h3>{name}</h3>
      </div>

      <div className="job">
        <p>
          A <span className="greenText">{mainSkill}</span> From{" "}
          <span className="purpleText">{address}</span>
        </p>
      </div>

      <div className="text">
        <p>{bio}</p>
      </div>
    </>
  );
};
