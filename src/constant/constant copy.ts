export enum jsonFiles {
  PORTFOLIO = "portfolio",
}

export enum header {
  HOME = "home",
  ABOUT = "about",
  PORTFOLIO = "portfolio",
  SKILLS = "skills",
  TESTIMONIALS = "testimonials",
  BLOG = "blog",
}

export const HEADER_LIST = {
  [header.HOME]: {
    title: "Home",
    url: "#home",
  },
  [header.ABOUT]: {
    title: "About",
    url: "#about",
  },
  [header.PORTFOLIO]: {
    title: "Portfolio",
    url: "#portfolio",
  },
  [header.SKILLS]: {
    title: "Skills",
    url: "#skills",
  },
  [header.TESTIMONIALS]: {
    title: "Testimonials",
    url: "#testimonials",
  },
  [header.BLOG]: {
    title: "Blog",
    url: "#blog",
  },
};
