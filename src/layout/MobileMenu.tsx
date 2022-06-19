import { useState } from "react";
import { header, HEADER_LIST } from "../constant/constant";
import { Logo, ResumeButton } from "./Header";

export const HeaderItem = ({ title, url, setToggle }) => {
  return (
    <li className="current">
      <a href={url} onClick={() => setToggle(false)}>
        {title}
      </a>
    </li>
  );
};

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

export const MobileMenuLayout = ({ children }) => {
  return (
    <div className="mobile_menu_inner">
      <div className="mobile_in">{children}</div>
    </div>
  );
};

export const DropdownLayout = ({ children, toggle }) => {
  return (
    <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
      <div className="dropdown_inner">
        <ul className="anchor_nav">{children}</ul>
      </div>
    </div>
  );
};

export const MobileMenu = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  const headerList = Object.values(header);

  return (
    <div className="dizme_tm_mobile_menu">
      <MobileMenuLayout>
        <Logo logo={logo} />
        <HamburgerMenu toggle={toggle} setToggle={setToggle} />
      </MobileMenuLayout>
      <DropdownLayout toggle={toggle}>
        {headerList?.map((header) => {
          const { title, url } = HEADER_LIST[header];
          return (
            <HeaderItem
              key={header}
              title={title}
              url={url}
              setToggle={setToggle}
            />
          );
        })}
        <ResumeButton />
      </DropdownLayout>
    </div>
  );
};
