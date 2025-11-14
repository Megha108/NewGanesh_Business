import React from 'react';
import CastorImage from '../../assets/farmerfinal.png';

const Title = () => {
  return (
    <div className="relative text-center py-[7vw] h-55 sm:min-h-[calc(16vw+22vw)] overflow-hidden">
      
      {/* Image background */}
      <img
        src={CastorImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-35 sm:h-full object-cover z-0 mt-20"
      />

    </div>
  );
};

export default Title;
