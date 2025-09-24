import React, { useEffect, useRef, useState } from "react";

const WhyUs = () => {
  const listRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, parseInt(index)]);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    listRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const styles = {
    container: {
      maxWidth: "90vw",
      margin: "40px auto",
      padding: "0 20px",
      fontFamily: '"Bricolage Grotesque", Arial, sans-serif',
    },
    headerSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "start",
      marginBottom: "1vw",
    },
    headingsContainer: {
      textAlign: "left",
    },
    mainHeading: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#000",
      marginBottom: "10px",
      letterSpacing: "1px",
      lineHeight: "1.1",
      position: "relative"
    },
    subHeading: {
      fontSize: "28px",
      color: "#666",
      marginBottom: "10px",
      fontWeight: "normal",
      position: "relative",
      paddingBottom: "15px",
    },
    underline: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "20vw",
      height: "0.17vw",
      backgroundColor: "#000",
      marginTop: "2vw"
    },
    underlineContainer: {
      position: "relative",
      marginTop: "1vw", // Added gap between text and underline
    },
    highlightSectionRight: {
      padding: "1.5vw",
      backgroundColor: "#ffffffff",
      borderRadius: "8px",
      height: "fit-content",
      display: "flex",
      textAlign: "right",
      minHeight: "160px",
      width: "54vw",
    },
    highlightSectionVisible: {
      opacity: 1,
      transform: "translateY(0)",
    },
    highlightText: {
      fontSize: "16px",
      color: "#333",
      lineHeight: "1.5",
      fontStyle: "italic",
      margin: 0,
      textAlign: "left",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      maxHeight: "72px",
    },
    contentGrid: {
      display: "grid",
      gridTemplateRows: "auto auto",
      gap: "50px",
      textAlign: "left",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "60px",
    },
    featureBox: {
      opacity: 0,
      transform: "translateY(20px)",
      transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      display: "flex",
      alignItems: "flex-start",
      gap: "20px",
    },
    featureBoxVisible: {
      opacity: 1,
      transform: "translateY(0)",
    },
    icon: {
      fontSize: "32px",
      minWidth: "40px",
      marginTop: "5px",
    },
    content: {
      flex: 1,
    },
    featureTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#000",
      marginBottom: "15px",
      lineHeight: "1.2",
    },
    featureText: {
      fontSize: "16px",
      color: "#666",
      lineHeight: "1.6",
    },
  };

  const contentData = [
    {
      icon: "✓",
      title: "100% Genuine Product",
      text: "We provides 100% Genuin Seeds Products, with sure testing results, with attractive packing.",
    },
    {
      icon: "🌱",
      title: "Environmentally Friendly",
      text: "We use environmental friendly companies, such as zero waste printers for all our marketing material.",
    },
    {
      icon: "📞",
      title: "Dedicated Support",
      text: "Whether you use our services or not, but when you call, we support our customers the most dedicated.",
    },
    {
      icon: "👥",
      title: "Professional Team",
      text: "We understand that customer satisfaction starts with dependable service. With a dedicated and dedicated team.",
    },
    {
      icon: "💰",
      title: "Reasonable Price",
      text: "We assure our customers that our company has a very reasonable price, we keeping customers is our criteria.",
    },
    {
      icon: "⚡",
      title: "Quickly And Efficiently",
      text: "We always work quickly, but we pairing is great quality, we know how you look forward to your garden.",
    },
  ];

  const highlightText = "Ganesh Seeds Pvt Ltd is committed to providing farmers and gardeners with the highest quality seeds available, using the latest technology and advanced breeding methods to ensure that our products deliver maximum yields and are well-adapted to local growing conditions.";

  return (
    <div style={styles.container}>
      {/* Header Section with Headings and Highlight Text Side by Side */}
      <div style={styles.headerSection}>
        {/* Left Side - Headings */}
        <div style={styles.headingsContainer}>
          <h1 style={styles.subHeading}>
            BEST SEEDS FOR YOU
          </h1>
         
            <h2 style={styles.mainHeading}>Why Choose Us</h2>
             <div style={styles.underlineContainer}><div style={styles.underline}></div>
          </div>
        </div>

        {/* Right Side - Highlight Text (3 lines) */}
        <div
          ref={(el) => (listRef.current[1] = el)}
          data-index={6}
          style={{
            ...styles.highlightSectionRight,
            
          }}
        >
          <p style={styles.highlightText}>{highlightText}</p>
        </div>
      </div>

      {/* Content Grid - Two Rows with Three Items Each */}
      <div style={styles.contentGrid}>
        {/* First Row - First three items */}
        <div style={styles.row}>
          {contentData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              ref={(el) => (listRef.current[index] = el)}
              data-index={index}
              style={{
                ...styles.featureBox,
                ...(visibleItems.includes(index) ? styles.featureBoxVisible : {}),
              }}
            >
              <div style={styles.icon}>{item.icon}</div>
              <div style={styles.content}>
                <h3 style={styles.featureTitle}>{item.title}</h3>
                <p style={styles.featureText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Next three items */}
        <div style={styles.row}>
          {contentData.slice(3, 6).map((item, index) => (
            <div
              key={index + 3}
              ref={(el) => (listRef.current[index + 3] = el)}
              data-index={index + 3}
              style={{
                ...styles.featureBox,
                ...(visibleItems.includes(index + 3) ? styles.featureBoxVisible : {}),
              }}
            >
              <div style={styles.icon}>{item.icon}</div>
              <div style={styles.content}>
                <h3 style={styles.featureTitle}>{item.title}</h3>
                <p style={styles.featureText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;