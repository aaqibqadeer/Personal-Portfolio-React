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
    image: "Techsembly1.jpg",
    href: "https://giftslessordinary.com/us",
    images: ["Techsembly2.jpg", "Techsembly3.jpg", "Techsembly4.jpg"],
    shortDesc: `Techsembly is an eCommerce SaaS solution allowing businesses to build multi-shopfronts within one platform, for global teams and third-party vendors. Decentralizing management and fostering work collaboration to create a unified experience with a holistic view – global, with a local touch.`,
    longDesc: "",
    client: "Techsembly",
    date: "May, 2020",
    totalTime: "8 Months",
    techStack: `Angular 8 · JavaScript · TypeScript · Ruby on Rails · HTML · CSS · Bootstrap`,
  },
  {
    id: 2,
    title: "Neyborly | Real-Estate Marketplace",
    type: portfolioType.DETAIL,
    category: "Marketplace",
    image: "neyborly1.jpg",
    href: "https://neyborly.com",
    images: ["neyborly2.jpg", "neyborly3.jpg", "neyborly4.jpg"],
    shortDesc: `Neyborly gives your company access to short-term, turnkey commercial spaces exactly when you need them. Neyborly spaces are managed and on-demand so that you and your company can step right in and get to work. Whether you're looking for an on-demand workspace or a place to open your new store or restaurant in a flexible manner, Neyborly offers you new opportunities to use commercial real estate on your terms.`,
    longDesc: ``,
    client: "Neyborly",
    date: "October, 2021",
    totalTime: "5 Months",
    techStack: "HTML, CSS, Javascript, Typescript, React, Next.js, Bootstrap",
  },
  {
    id: 3,
    title: "Travel Experience | Bus Ride Booking Web App",
    type: portfolioType.DETAIL,
    category: "Transportation",
    image: "swvl1.jpg",
    href: "https://travel.swvl.io/travel",
    images: ["swvl2.jpg", "swvl3.jpg", "swvl4.jpg"],
    shortDesc: `Swvl is a premium mass transit system that provides buses and currently operating in multiple countries. It allows people to share a ride in a van or bus during morning and evening commutes for a fixed flat fare with no surge pricing. Through an app, one can book a ride at an affordable rate.`,
    longDesc: "",
    client: "SWVL",
    date: "November, 2021",
    totalTime: "8 Months",
    techStack: `JavaScript · TypeScript · React.js · Next.js · React Query · Tailwind CSS · Jest`,
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
