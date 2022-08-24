import React, { useState, useEffect } from "react";
import './svgtext.scss';

// Video
// Luis Quintero - Pexels.com - Free to use
import svgVideo from '../../../assets/videos/svg-video.mp4';

// SVG Data
// const svgTxt = ["three", "one", "two"];
const svgTxt = ["James", "JL", "Lina"];

const JamesSVG = () => {

    const [index, setTxtChange] = useState(0);

    useEffect(() => {
        const txtTimer = () => {
            setTxtChange(prevIndex => {
                if (prevIndex === svgTxt.length - 1){
                    return 0;
                }
                return prevIndex + 1;
            })
        };
        setInterval(txtTimer, 1200);

        // A "cleanup" function which will clear the interval timer when the component unmounts
        return () => { clearInterval(txtTimer); }
    }, []);

    return (
        <div className='svg-txt-container'>

            <video className='loader-video' autoPlay playsInline muted loop preload>
                <source src={svgVideo}></source>
            </video>

            <svg className='loader-txt' height="100%" width="100%">
                <defs>
                    <mask id="mask" x="0" y="0" height="100%" width="100%">
                        <rect x="0" y="0" height="100%" width="100%" />
                        {/* <text x="50%" y="50%" fill="red" text-anchor="middle">I love SVG</text> */}
                        <text x="50%" y="50%" text-anchor="middle">{svgTxt[index]}</text>
                    </mask>
                </defs>
                <rect x="0" y="0" height="100%" width="100%" />
            </svg>
        </div>
    )
}

const SVGText = () => {
  return (
    <div>
        <JamesSVG/>
    </div>
  )
}

export default SVGText;