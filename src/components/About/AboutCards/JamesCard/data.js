import jamesImg from "../../../../assets/james.jpg";
import { AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

export default {
  jamesImgSrc: jamesImg,
  contentTitle: 'Jimbo',
  expandedTitle: 'James Edwards',
  longDescription: 'i am a 20yr old full-stack dev from california!',
  portfolioDescription: 'checkout my personal portfolio here!',
  github: <AiOutlineGithub style={{ color: '#212020'}} size={'1.4rem'}/>,
  email: <MdEmail style={{ color: '#212020'}} size={'1.4rem'}/>,
  linkedIn: <AiFillLinkedin style={{ color: '#212020'}} size={'1.4rem'}/>,
}