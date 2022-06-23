import {
  aTagClick,
  dataImage,
  fatchData,
  scrollTop,
  scroll_,
  stickyNav,
  wowJsAnimation,
} from "@utility/utilits";
import { FC, Fragment, useEffect, useState } from "react";
import { Cursor, Header, PreLoader, Progressbar } from "..";
import { ImageView, VideoPopup } from "../../components";
import { MobileMenu } from "../MobileMenu";

interface Props {
  children?: React.ReactNode;
  dark?: boolean;
}

export const Layout: FC<Props> = ({ children, dark }) => {
  const [siteInfo, setSiteInfo] = useState<any>({});

  const setData = async () => {
    setSiteInfo(await fatchData("/static/siteSetting.json"));
    dataImage();
  };

  useEffect(() => {
    setData();
  }, []);

  const subscribeEvents = () => {
    window?.addEventListener("scroll", scroll_);
    window?.addEventListener("scroll", stickyNav);
    window?.addEventListener("scroll", scrollTop);
  };

  const unsubscribeEvents = () => {
    window?.removeEventListener("scroll", scroll_);
    window?.removeEventListener("scroll", stickyNav);
    window?.removeEventListener("scroll", scrollTop);
  };

  useEffect(() => {
    wowJsAnimation();
    aTagClick();
    subscribeEvents();

    return () => unsubscribeEvents();
  }, []);

  return (
    <Fragment>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu logo={siteInfo?.logo?.[dark ? "dark" : "light"]} />
        <Header />
        {children}
        <Cursor />
        <Progressbar />
      </div>
    </Fragment>
  );
};
