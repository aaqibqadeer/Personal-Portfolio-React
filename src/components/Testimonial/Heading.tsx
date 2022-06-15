export const Heading = ({ title, heading1, heading2 }) => {
  return (
    <div className="dizme_tm_main_title" data-align="center">
      <span>{title}</span>
      <h3>{heading1}</h3>
      {/* <p>{heading2}</p> */}
    </div>
  );
};
