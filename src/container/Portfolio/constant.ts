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
