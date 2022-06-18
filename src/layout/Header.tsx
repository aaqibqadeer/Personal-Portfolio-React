import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { header, HEADER_LIST } from "../constant/constant";
import { useThemeContext } from "../context/theme";

export const HeaderItem = ({ title, url }) => {
  return (
    <li className="">
      <a href={url}>{title}</a>
    </li>
  );
};

export const Logo = ({ logo }) => {
  return (
    <div className="logo">
      <a href="#home">
        {logo && <img src={logo ? logo : "img/logo/logo.png"} alt="image" />}
      </a>
    </div>
  );
};

export const ResumeButton = () => {
  return (
    <li className="download_cv">
      <a href="img/cv/1.jpg" download="">
        <span>Download CV</span>
      </a>
    </li>
  );
};

const Header = ({ logo }) => {
  const { darkTheme, toggleTheme } = useThemeContext();
  const themeIcon = darkTheme ? solid("sun") : solid("moon");
  const headerList = Object.values(header);
  const themeIconstlye = {
    cursor: "pointer",
    color: darkTheme ? "#ebb800" : "white",
    width: "25px",
    height: "26px",
    backgroundColor: darkTheme ? "white" : "black",
    padding: "7px",
    borderRadius: "50%",
  };

  return (
    <div className="dizme_tm_header">
      <div className="container">
        <div className="inner">
          <Logo logo={logo} />
          <div className="menu">
            <ul className="anchor_nav">
              {headerList?.map((header) => {
                const { title, url } = HEADER_LIST[header];
                return <HeaderItem key={header} title={title} url={url} />;
              })}
              <ResumeButton />
              <FontAwesomeIcon
                icon={themeIcon}
                onClick={toggleTheme}
                style={themeIconstlye}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
