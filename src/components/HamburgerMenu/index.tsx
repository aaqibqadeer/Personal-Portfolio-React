export const HamburgerMenu = ({ toggle, setToggle }) => {
  return (
    <div className="trigger">
      <div
        className={`hamburger hamburger--slider ${toggle ? "is-active" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </div>
    </div>
  );
};
