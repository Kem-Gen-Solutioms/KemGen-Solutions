import React from "react";
import styles from './AboutUsHome.module.css';

const AboutUsHome = () => {
  return (
    <div className={`container ${styles.contain}`}>
      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className={styles.title}>Tailored Cybersecurity Solutions</h2>
      </div>

      {/* Cards */}
      <div className="row">
        {/* HIPAA Compliance Box */}
        <div className="col-md-3">
          <div className={`${styles.box} ${styles.hipaa}`}>
            <h3>HIPAA Compliance</h3>
            <p>Helping small and medium medical practices meet HIPAA Security Rule requirements with tailored risk assessments and policy reviews.</p>
          </div>
        </div>

        {/* Penetration Testing Box */}
        <div className="col-md-3">
          <div className={`${styles.box} ${styles.penTest}`}>
            <h3>Penetration Testing</h3>
            <p>Proactively identify vulnerabilities in EHR systems, patient portals, and networks before hackers exploit them.</p>
          </div>
        </div>

        {/* Ransomware Protection Box */}
        <div className="col-md-3">
          <div className={`${styles.box} ${styles.ransomware}`}>
            <h3>24/7 Monitoring</h3>
            <p>We provide round-the-clock monitoring to ensure that your business is always safe.</p>
          </div>
        </div>

        {/* Asset Protection Box */}
        <div className="col-md-3">
          <div className={`${styles.box} ${styles.assetProtection}`}>
            <h3>Asset Protection</h3>
            <p>We safeguard your assets with continuous monitoring and state-of-the-art encryption.</p>
          </div>
        </div>
      </div>

      {/* CTA Button Section */}
      <div className="text-center mt-5">
        <a href="/services" className={styles.ctaButton}>
          Check Our Services
        </a>
      </div>

    </div>
  );
};

export default AboutUsHome;
