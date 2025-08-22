import React from "react";
import styles from "./About.module.scss";
import creatorImg from "../components/img/creator.jpg";

const About = () => {
  return (
    <div className={styles.pageContainer}>
      {}
      <div className={styles.background}>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>
        <div className={styles.cloud}></div>
      </div>

      {}
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>

        <p className={styles.text}>
          Booking App is your perfect companion for travel. 🌴 It helps you
          discover hotels worldwide and make your trips unforgettable.
        </p>

        <p className={styles.text}>
          Built with ❤️ using React, Redux, and JSON-server to simulate real
          booking apps.
        </p>

        <ul className={styles.features}>
          <li>🌍 Discover hotels worldwide</li>
          <li>⚡ Fast and responsive interface</li>
          <li>💳 Easy booking simulation</li>
          <li>🔒 Safe and secure experience</li>
        </ul>

        <div className={styles.team}>
          <h2 className={styles.teamTitle}>Meet the Creator</h2>
          <div className={styles.member}>
            <img
              src={creatorImg}
              alt="Stanislav Butunets"
              className={styles.creatorImg}
            />
            <p>Stanislav Butunets – Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
