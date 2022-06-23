export interface HomeData {
  info: Info;
  about: About;
  portfolio: Portfolio;
  testimonial: Testimonial;
  blog: Blog[];
  partners: Partner[];
  service: Service[];
  siteSetting: SiteSetting;
  workProcess: WorkProcess[];
}

export interface About {
  title: string;
  tagline: string;
  bio: Bio;
  totalProject: number;
  experience: number;
}

export interface Bio {
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
}

export interface Blog {
  title: string;
  img: string;
  category: string;
  date: DateClass;
  url: string;
  details: string[];
}

export interface DateClass {
  date: string;
  month: string;
}

export interface Info {
  name: string;
  address: string;
  bio: string;
  mainSkill: string;
  img: string;
  skillTitle: string;
  skillTagline: string;
  skillDescription: string;
  skills: Skill[];
  social: Social[];
  contact: Contact;
}

export interface Contact {
  address: string;
  email: string;
  phn: string;
}

export interface Skill {
  name: string;
  className: string;
  icon: string;
  color: string;
  value: number;
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export interface Partner {
  link: string;
  logo: Logo;
}

export interface Logo {
  light: string;
  dark: string;
}

export interface Portfolio {
  heading: string;
  tagline: string;
  description: string;
}

export interface Service {
  title: string;
  price: string;
  img: string;
  shortDec: string;
  icon: Icon;
  dec: string[];
}

export interface Icon {
  svg: string;
  iconBg: string;
}

export interface SiteSetting {
  logo: Logo;
  brandName: string;
}

export interface Testimonial {
  title: string;
  heading1: string;
  heading2: string;
  testimonials: TestimonialElement[];
}

export interface TestimonialElement {
  name: string;
  className: string;
  img: string;
  profession: string;
  details: string;
  show?: string;
}

export interface WorkProcess {
  title: string;
  icons: Logo;
  dec: string;
}
