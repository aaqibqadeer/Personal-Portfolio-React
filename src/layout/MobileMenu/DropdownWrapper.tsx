export const DropdownWrapper = ({ children, toggle }) => {
  return (
    <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
      <div className="dropdown_inner">
        <ul className="anchor_nav">{children}</ul>
      </div>
    </div>
  );
};
