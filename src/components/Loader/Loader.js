import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ setLoading }) => {
    useEffect(() => {
        // Hook which updates setLoading state to false after 4sec
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="loader">
            <div className="loader-inner">
               <HeaderImageBlock />
            </div>
        </div>
    )
};

export const HeaderImageBlock = () => {
    return (
        <motion.div className="header-image-block"
            animate={{
            //    scale: .5,
               transition: {
                duration: 1,
               } 
            }}>
            <div className="header-image bg-header-dark dark:bg-header-light bg-cover object-cover bg-center"></div>
        </motion.div>
    )
}

export default Loader