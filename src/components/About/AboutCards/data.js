import jamesImg from "../../../assets/james.jpg";
import linaImg from "../../../assets/lina.jpg";

import { ReactComponent as AirConditioning } from "../../../assets/icons/ac.svg";
import { ReactComponent as Fridge } from "../../../assets/icons/fridge.svg";
import { ReactComponent as TV } from "../../../assets/icons/tv.svg";
import { ReactComponent as Wifi } from "../../../assets/icons/wifi.svg";

export default {
  // imgSrc: houseImage,
  jamesImgSrc: jamesImg,
  linaImgSrc: linaImg,
  // imgAlt: 'house exterior',
  title: 'JamES',
  location: '',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9947.133297451766!2d-116.54188886062025!3d51.443772998228525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5379df397c545cdb%3A0xfdc48e8bb4d734b9!2sEmerald%20Lake!5e0!3m2!1sen!2sus!4v1618319664103!5m2!1sen!2sus',
  price: '',
  shortDescription: '',
  longDescription: 'i am a 20yr old full-stack dev from california!',
  amenities: [
    {
      icon: AirConditioning,
      name: 'Central Air',
    },
    {
      icon: Fridge,
      name: 'Kitchen',
    },
    {
      icon: TV,
      name: 'Smart TV',
    },
    {
      icon: Wifi,
      name: 'Wifi',
    }
  ],
}
