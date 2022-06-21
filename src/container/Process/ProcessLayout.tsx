export const ProcessLayout = ({ children }) => {
  return (
    <div className="dizme_tm_section" id="process">
      <div className="dizme_tm_process">
        <div className="container">
          <div className="list">{children}</div>
        </div>
      </div>
    </div>
  );
};
