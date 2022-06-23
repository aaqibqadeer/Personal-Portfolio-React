export const Logo = ({ logo }) => {
  return (
    <div className="logo">
      <a href="#home">
        <img src={logo ? logo : "img/logo/logo.png"} alt="image" />
      </a>
    </div>
  );
};
