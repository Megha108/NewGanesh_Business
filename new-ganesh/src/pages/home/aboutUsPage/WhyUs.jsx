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
        threshold: 0.2, // 20% of item visible to trigger
      }
    );

    listRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const styles = {
    container: {
      maxWidth: 900,
      margin: "10vw auto",
      padding: "0 1vw",
    },
    heading: {
      fontSize: 40,
      marginBottom: 30,
      color: "#111",
      fontWeight: "bold",
      textAlign: "center",
    },
    list: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "3vw 12vw",
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    item: {
      fontSize: 18,
      opacity: 0,
      transform: "translateY(20px)",
      transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    },
    itemVisible: {
      opacity: 1,
      transform: "translateY(0)",
    },
    iconText: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 8,
      whiteSpace: "nowrap",
      textAlign: "left",
    },
    description: {
      fontSize: 15,
      color: "#444",
      lineHeight: 1.4,
    },
  };

  const items = [
    { icon: "🌱", title: "100% Genuine Product", desc: "We provide only authentic, certified seeds ensuring top-quality crops." },
    { icon: "🤝", title: "Dedicated Support", desc: "Our team is always ready to guide farmers with expert advice and solutions." },
    { icon: "💰", title: "Reasonable Price", desc: "High-quality products at prices that are fair and farmer-friendly." },
    { icon: "🍃", title: "Environmentally Friendly", desc: "Sustainable practices that protect soil, water, and the environment." },
    { icon: "👩‍🌾", title: "Professional Team", desc: "Experienced agricultural experts committed to helping you succeed." },
    { icon: "🚀", title: "Quickly & Efficiently", desc: "Fast delivery and efficient service to meet farming needs on time." },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Why Choose Us?</h2>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <li
            key={index}
            ref={(el) => (listRef.current[index] = el)}
            data-index={index}
            style={{
              ...styles.item,
              ...(visibleItems.includes(index) ? styles.itemVisible : {}),
            }}
          >
            <div style={styles.iconText}>
              {item.icon} {item.title}
            </div>
            <div style={styles.description}>{item.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyUs;
