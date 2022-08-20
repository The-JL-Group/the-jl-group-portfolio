import React from 'react';
import './svgtext.scss';

const JamesSVG = ({  }) => {
    return (
        <div className='svg-txt-container'>

            <video className='loader-video' autoPlay playsInline muted loop preload>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"></source>
            </video>

            <svg className='loader-txt' height="100%" width="100%">
                <defs>
                    <mask id="mask" x="0" y="0" height="100%" width="100%">
                        <rect x="0" y="0" height="100%" width="100%" />
                        <text x="50%" y="50%" fill="red" text-anchor="middle">I love SVG</text>
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