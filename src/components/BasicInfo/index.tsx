export const BasicInfo = ({ data }) => {
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
