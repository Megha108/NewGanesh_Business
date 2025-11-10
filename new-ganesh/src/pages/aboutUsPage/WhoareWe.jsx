import { TextAlignCenter } from "lucide-react";
import React from "react";

const WhoareWe = () => {
  const styles = {
    container: {
      maxWidth: 1400,
      margin: "40px auto",
      padding: "0 0",
      textAlign: "left", // Fixed typo: "centre" to "center"
    },

    title: {
      fontSize: 52,
      color: "#000000ff",
      fontFamily: '"Bricolage Grotesque", Arial, sans-serif',
      fontWeight: "bold",
      textAlign: "center", // Fixed typo: "centre" to "center"
      marginBottom: "20px", // Added spacing below title
    },
    text: {
      fontSize: 18,
      color: "#666666",
      lineHeight: 1.5,
      textAlign: "left", // Center the description text
      marginLeft: "8vw",
      marginRight: "8vw",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Who Are We?</h2>
      <p style={styles.text} >
        <strong>NEW GANESH SEEDS</strong> is a leading name in the Indian seed
        industry, committed to empowering farmers through quality, innovation,
        and trust. Since our establishment, we have focused on producing
        high-performance seeds that ensure excellent germination, strong crop
        growth, and higher yields. Each seed batch is sourced from certified
        growers, processed in modern facilities, and tested under real field
        conditions to guarantee purity and reliability.
      </p>
      <br/>
      <p style={styles.text}>
        With years of dedication and agricultural expertise, we have built
        strong relationships with farmers, traders, and distributors across
        India. Our mission is to promote sustainable farming practices and help
        rural communities achieve long-term success. At{" "}
        <strong>NEW GANESH SEEDS</strong>, every product reflects our motto —{" "}
        <span className="text-green-700 font-semibold">
          “Growing Trust, Ensuring Quality.”
        </span>
      </p>
    </div>
  );
};

export default WhoareWe;
