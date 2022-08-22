import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Variants
import { container, headerImg } from './loaderVariants';
import SVGText from "./SVGText/SVGText";

const Loader = ({ setLoading }) => {

    useEffect(() => {
        // Hook which updates setLoading state to false after 4sec
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2700);
        return () => clearTimeout(timer);
    });

    return (
        // Anything in here will last for the amount of time specified in the setTimeout hook function
        <div className="loader">
            <div className="loader-inner">
               <SVGText/>
            </div>
        </div>
    )
};

// Header Img
export const HeaderImageBlock = () => {
    return (
        <motion.div className="header-image-block"
         variants={headerImg}
         initial="hidden"
         animate="show"
         exit="exit">
            <div className="header-image bg-header-dark dark:bg-header-light bg-cover object-cover bg-center">
                <p className="developers-txt">developers.</p>
            </div>
        </motion.div>
    )
}

export default Loader;