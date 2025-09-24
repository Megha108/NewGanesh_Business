import React from 'react';
import GrassImage from '../../../assets/image/aboutus/GrassImage.webp';

const Title = () => {
  return (
    <div
      className="text-center py-[7vw] min-h-[calc(10vw+20vw)] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${GrassImage})` }}
    >
      <h1 className="text-[72px] text-white font-bricolage-grotesque drop-shadow-[2px_2px_6px_rgba(0,0,0,0.6)] mt-20">
        About Us
      </h1>

    </div>
  );
};

export default Title;
