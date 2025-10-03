import { TextAlignCenter } from 'lucide-react';
import React from 'react';

const WhoareWe = () => {
  const styles = {
    container: { 
      maxWidth: 500, 
      margin: '40px auto', 
      padding: '0 20px',
      textAlign: 'center' // Fixed typo: "centre" to "center"
    },

    title: {
      fontSize: 52,
      color: '#000000ff',
      fontFamily: '"Bricolage Grotesque", Arial, sans-serif',
      fontWeight: "bold",
      textAlign: "center", // Fixed typo: "centre" to "center"
      marginBottom: '20px', // Added spacing below title
    },
    text: { 
      fontSize: 18, 
      color: '#666666', 
      lineHeight: 1.5,
      textAlign: "center", // Center the description text
      margin: 0, // Remove default margins
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Who Are We?</h2>
      <p style={styles.text}>
        description of company
      </p>
    </div>
  );
};

export default WhoareWe;