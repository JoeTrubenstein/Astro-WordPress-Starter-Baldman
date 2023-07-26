import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://baldmanbrands.com/",
  author: "Joe Trubenstein",
  desc: "Web Development and Digital Marketing from Japan.",
  title: "Astro x Wordpress",
  ogImage: "widebmb.webp",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/joeTrubenstein",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/baldman.japan",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/baldman.japan/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joseph-trubenstein-506189b3/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  }
];
