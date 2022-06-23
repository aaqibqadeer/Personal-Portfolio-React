import { HamburgerMenu, HeaderItem, Logo, ResumeButton } from "@components";
import { header, HEADER_LIST } from "@constant/constant";
import { useState } from "react";
import { DropdownWrapper, MobileMenuWrapper } from ".";

export const MobileMenu = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  const headerList = Object.values(header);

  return (
    <div className="dizme_tm_mobile_menu">
      <MobileMenuWrapper>
        <Logo logo={logo} />
        <HamburgerMenu toggle={toggle} setToggle={setToggle} />
      </MobileMenuWrapper>
      <DropdownWrapper toggle={toggle}>
        {headerList?.map((header) => {
          const { title, url } = HEADER_LIST[header];
          return (
            <HeaderItem
              key={header}
              title={title}
              url={url}
              setToggle={() => setToggle(false)}
            />
          );
        })}
        <ResumeButton />
      </DropdownWrapper>
    </div>
  );
};
