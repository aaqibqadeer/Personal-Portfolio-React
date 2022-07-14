import { HeaderItem, Logo, ResumeButton } from "@components";
import { header, HEADER_LIST } from "@constant/constant";
import { useThemeContext } from "@context";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderWrapper } from "./HeaderWrapper";

export const Header = ({ logo }: { logo?: string }) => {
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
    <HeaderWrapper>
      <Logo />
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
    </HeaderWrapper>
  );
};
