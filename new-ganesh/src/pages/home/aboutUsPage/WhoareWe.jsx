import React from 'react';

const WhoareWe = () => {
  const styles = {
    container: { maxWidth: 800, margin: '40px auto', padding: '0 20px' },
    heading: { fontSize: 30, marginBottom: 12, color: '#111' },
      title: {
      fontSize: 40,
      color: '#000000ff',
      fontFamily: '"Bricolage Grotesque", Arial, sans-serif',
    
    },
    text: { fontSize: 18, color: '#666666', lineHeight: 1.5 },
  };

  return (
    <div style={styles.container}>
      <div style={styles.heading}><h2 style = {styles.title}>Who Are We?</h2></div>
      <p style={styles.text}>
        description of company
      </p>
     
    </div>
  );
};

export default WhoareWe;
