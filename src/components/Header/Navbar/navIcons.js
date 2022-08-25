// Reg Icons
import { BiDesktop } from 'react-icons/bi';
import { IoPeopleCircleSharp } from 'react-icons/io5';
import { RiChatSmile2Line } from 'react-icons/ri';

// Social Icons
import { AiOutlineGithub } from 'react-icons/ai';
import { SiFiverr } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

// Regular Icons
export const regIcons = [
  {
    title: 'portfolio',
    icon: <BiDesktop size={'1.4rem'} />,
    pathway: '#work',
  },
  {
    title: 'about us',
    icon: <IoPeopleCircleSharp size={'1.4rem'} />,
    pathway: '#about',
  },
  {
    title: 'hire us',
    icon: <RiChatSmile2Line size={'1.4rem'} />,
    pathway: '#contact',
  },
];

// Social Icons
export const socialsIcons = [
  {
    title: 'our github',
    icon: <AiOutlineGithub size={'1.4rem'} />,
    pathway: 'https://github.com/The-JL-Group',
  },
  {
    title: 'fiverr',
    icon: <SiFiverr size={'1.4rem'} />,
    pathway:
      'https://www.fiverr.com/thejlgroup/design-and-create-your-custom-unique-website-using-react',
  },
  {
    title: 'email us',
    icon: <MdEmail size={'1.4rem'} />,
    pathway: 'mailto:jameslinagroup@gmail.com',
  },
];
