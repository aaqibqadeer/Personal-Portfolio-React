export const Badge = ({ counterNumber, text1, text2, className }) => {
  return (
    <div className={`numbers ${className}`}>
      <div className="wrapper">
        <h3>{counterNumber}</h3>
        <span className="name">
          {text1}
          <br />
          {text2}
        </span>
      </div>
    </div>
  );
};
