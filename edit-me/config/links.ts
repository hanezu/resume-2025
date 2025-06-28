import { SiGithub, SiRss } from '@icons-pack/react-simple-icons';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CMSLink } from 'edit-me/types/cms-link';

export const links: CMSLink[] = [
  {
    href: 'https://github.com/hanezu',
    icon: SiGithub,
    title: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/huachun/',
    icon: FaLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'mailto:huachun@cmu.edu',
    icon: MdEmail,
    title: 'Email',
  },
  {
    href: '/rss/feed.xml',
    icon: SiRss,
    title: 'RSS',
  },
];
