export interface Skill {
  name: string;
  icon: string;
  color: string;
  value: number;
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export interface Contact {
  address: string;
  email: string;
  phn: string;
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
