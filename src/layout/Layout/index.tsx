import { SiteSetting } from "@constant/type";
import { useThemeContext } from "@context/theme";
import {
  aTagClick,
  dataImage,
  scrollTop,
  scroll_,
  stickyNav,
  wowJsAnimation,
} from "@utility/utilits";
import { FC, Fragment, useEffect } from "react";
import { Cursor, Header, PreLoader, Progressbar } from "..";
import { ImageView, VideoPopup } from "../../components";
import { MobileMenu } from "../MobileMenu";

interface Props {
  children: React.ReactNode;
  siteSetting: SiteSetting;
}

export const Layout: FC<Props> = ({ children, siteSetting }) => {
  const { darkTheme } = useThemeContext();

  useEffect(() => {
    dataImage();
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
        <MobileMenu />
        <Header />
        {children}
        <Cursor />
        <Progressbar />
      </div>
    </Fragment>
  );
};
