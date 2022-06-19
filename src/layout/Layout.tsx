import { FC, Fragment, useEffect, useState } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  aTagClick,
  dataImage,
  fatchData,
  scrollTop,
  scroll_,
  stickyNav,
  wowJsAnimation,
} from "../utilits";
import Cursor from "./Cursor";
import Header from "./Header";
import { MobileMenu } from "./MobileMenu";
import PreLoader from "./PreLoader";
import Progressbar from "./Progressbar";

interface Props {
  children?: React.ReactNode;
  dark?: boolean;
}

const Layout: FC<Props> = ({ children, dark }) => {
  const [siteInfo, setSiteInfo] = useState<any>({});

  const setData = async () => {
    setSiteInfo(await fatchData("/static/siteSetting.json"));
    dataImage();
  };

  useEffect(() => {
    setData();
  }, []);

  const subscribeEvents = () => {
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollTop);
  };

  const unsubscribeEvents = () => {
    window.removeEventListener("scroll", scroll_);
    window.removeEventListener("scroll", stickyNav);
    window.removeEventListener("scroll", scrollTop);
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
        {/* <CopyRight brandName={siteInfo && siteInfo.brandName} /> */}
        <Cursor />
        <Progressbar />
      </div>
    </Fragment>
  );
};
export default Layout;
