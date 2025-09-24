import React from 'react';
import GrassImage from '../../../assets/image/aboutus/GrassImage.webp';

const Title = () => {
  const styles = {
    container: {
      textAlign: 'center',
      margin: '5vw 0',
      backgroundImage: `url(${GrassImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '7vw 0',
      minHeight: 'calc(10vw + 15vw)', // base height + 2vw extra
    },
    title: {
      fontSize: 72,
      color: '#ffffff',
      fontFamily: '"Bricolage Grotesque", Arial, sans-serif',
      textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
    </div>
  );
};

export default Title;
