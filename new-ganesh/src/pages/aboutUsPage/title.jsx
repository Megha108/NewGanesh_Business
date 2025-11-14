import React from 'react';
import CastorImage from '../../assets/freepik__upload__4474.png';

const Title = () => {
  return (
    <div className="relative text-center py-[7vw] min-h-[calc(10vw+25vw)] overflow-hidden">
      
      {/* Image background */}
      <img
        src={CastorImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 mt-10"
      />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="font-bold text-[72px] text-black font-bricolage-grotesque mt-25">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default Title;
