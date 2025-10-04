import React from 'react';
import CastorVideo from '../../assets/OATVideo.mp4';

const Title = () => {
  return (
    <div className="relative text-center py-[7vw] min-h-[calc(10vw+25vw)] overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={CastorVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-[72px] text-white font-bricolage-grotesque drop-shadow-[2px_2px_6px_rgba(0,0,0,0.6)] mt-20">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default Title;