import React, { useState } from 'react';
import { regIcons, socialsIcons, ctaIcons } from '../navIcons'
import './navbar.css';

const Navbar = () => {

  const [active, setActive ] = useState(0);

  return (
    <nav className='fixed z-10 flex justify-around items-center bottom w-full bottom-0 max-h-[4.4rem]'>
        <ul className='flex relative'>
            {
                regIcons.map((menu, i) => (
                    <li key={i} className="nav-list w-16">
                        <a href="#" className='flex flex-col text-center' onClick={() => setActive(i)} alt="Site link icons">
                            <span className='reg-icon-container cursor-pointer'>
                                <img src={menu.icon}></img>
                            </span>
                            <span>
                                {menu.title}
                            </span>
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar


// {/* <span 
//                                 className={` ${
//                                     active === i 
//                                         ? 'translate-y-4 duration-700 opacity-100' 
//                                         : 'opacity-0 translate-y-10'} `}
//                             >
//                                 {menu.title}
//                             </span> */}


// {/* <nav>
//        {/* Regular Navbar */}
//        <div>

//         {/* Regular Items */}
//             <div className='reg-navbar'>
//                 <ul>
//                     {regIcons.map((nav, index) => (
//                     <a href={`${nav.pathway}`}>
//                         <li>
//                         <span href={`${nav.pathway}`}>
//                             <img src={nav.src} alt=""></img>
//                         </span>
//                         <span href={`${nav.pathway}`}>
//                             {nav.title}
//                         </span>
//                         </li>
//                     </a>
//                     ))}
//                 </ul>
//             </div>
//         </div>

//         {/* Socials Navbar */}
//         <div>
//             <div className='socials-navbar'>
//                 <ul>
//                     {socialsIcons.map((nav, index) => (
//                     <a href={`${nav.pathway}`}>
//                         <li>
//                         <span href={`${nav.pathway}`}>
//                             <img src={nav.src} alt=""></img>
//                         </span>
//                         <span href={`${nav.pathway}`}>
//                             {nav.title}
//                         </span>
//                         </li>
//                     </a>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     </nav> */}