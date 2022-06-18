export enum portfolioType {
  ALL = "*",
  YOUTUBE = "youtube",
  VIMEO = "vimeo",
  SOUNDCLOUD = "soundcloud",
  POPUP = "popup",
  DETAIL = "detail",
}

export const portfolioProps = {
  [portfolioType.YOUTUBE]: {
    wrapperClassName: "youtube",
    category: "Youtube",
    className: "popup-youtube",
    hoverImage: "42-56.jpg",
  },
  [portfolioType.VIMEO]: {
    wrapperClassName: "vimeo",
    category: "vimeo",
    className: "popup-vimeo",
    hoverImage: "42-34.jpg",
  },
  [portfolioType.SOUNDCLOUD]: {
    wrapperClassName: "soundcloud",
    category: "Soundcloud",
    className: "soundcloude_link mfp-iframe audio",
    hoverImage: "42-56.jpg",
  },
  [portfolioType.POPUP]: {
    wrapperClassName: "popup",
    category: "Popup",
    className: "zoom",
    hoverImage: "42-34.jpg",
  },
  [portfolioType.DETAIL]: {
    wrapperClassName: "detail",
    category: "Detail",
    className: "portfolio_popup",
    hoverImage: "42-34.jpg",
  },
};

export const projectList = [
  // {
  //   title: "Mockup Shape",
  //   type: portfolioType.YOUTUBE,
  //   image: "1.jpg",
  //   href: "https://www.youtube.com/embed/7e90gBu4pas?autoplay=1",
  // },
  // {
  //   title: "Ave Bottle",
  //   type: portfolioType.VIMEO,
  //   image: "2.jpg",
  //   href: "https://player.vimeo.com/video/337293658?autoplay=1",
  // },
  // {
  //   title: "Magic Art",
  //   type: portfolioType.SOUNDCLOUD,
  //   image: "3.jpg",
  //   href: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  // },
  // {
  //   title: "Scott Felix",
  //   type: portfolioType.POPUP,
  //   image: "5.jpg",
  //   href: "img/portfolio/5.jpg",
  // },
  // {
  //   title: "Art Stone",
  //   type: portfolioType.POPUP,
  //   image: "4.jpg",
  //   href: "img/portfolio/4.jpg",
  // },
  // {
  //   title: "Global Evolution",
  //   type: portfolioType.DETAIL,
  //   image: "6.jpg",
  //   href: "#",
  // },
  {
    id: 1,
    title: "Techsembly | E-commerce Website",
    type: portfolioType.DETAIL,
    category: "E-commerce",
    image: "7.jpg",
    href: null,
    images: [],
    shortDesc: "",
    longDesc: "",
  },
  {
    id: 2,
    title: "Neyborly | Real-Estate Marketplace",
    type: portfolioType.DETAIL,
    category: "Marketplace",
    image: "8.jpg",
    href: null,
    images: ["10.jpg", "12.jpg", "3.jpg"],
    shortDesc: `We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible.`,
    longDesc: `Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they phase when they will represent the target product. Building mockups strikes the ideal balance ease of modification.`,
    client: "Neyborly",
    date: "October, 2021",
  },
  {
    id: 3,
    title: "Travel Experience | Bus Ride Booking Web App",
    type: portfolioType.DETAIL,
    category: "Transportation",
    image: "9.jpg",
    href: null,
    images: [],
    shortDesc: "",
    longDesc: "",
    client: "",
    date: "",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "*",
  "E-commerce",
  "Marketplace",
  "Transportation",
];

export const config = {
  itemSelector: ".grid-item",
  //    layoutMode: "fitRows",
  percentPosition: true,
  masonry: {
    columnWidth: ".grid-item",
  },
  animationOptions: {
    duration: 750,
    easing: "linear",
    queue: false,
  },
};

export const DELAY_TIME = 500;
