import React, { useState } from "react";
import styles from './Footer.module.css';
import { FiChevronDown } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const servicesData = [
    { 
        name: 'Privacy Policy', 
        pdfUrl: 'https://drive.google.com/your-privacy-policy-link' 
    },
    { 
        name: 'Terms & Conditions', 
        pdfUrl: 'https://drive.google.com/your-terms-link' 
    },
];

const Footer = () => {
    const [openService, setOpenService] = useState(null);

    const toggleService = (index) => {
        setOpenService(openService === index ? null : index);
    };

    return (
        <>
            {/* Newsletter Section */}
            <div className={styles.newsletterContainer} style={{ backgroundColor: '#1E2A3A', padding: '50px 0' }}>
                <div className={styles.newsletterContent}>
                    <p className={styles.newsletterText}>
                        Stay ahead of healthcare cyber threats. <br />
                        Subscribe for tips, threat alerts & compliance updates.
                    </p>
                    <div className={styles.newsletterInputContainer}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.newsletterInput}
                        />
                        <button
                            className={styles.subscribeButton}
                            onClick={() => (window.location.href = "mailto:info@kemgensecurity.com")}
                            style={{ backgroundColor: '#00B894', color: '#fff' }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div style={{ backgroundColor: '#0A1F44', paddingTop: '80px', paddingBottom: '80px', color: '#ffffff' }}>
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>KemGen Solutions</p>
                            <p className={styles.text}>
                                We help small and mid-sized medical practices stay secure, HIPAA-compliant, and resilient to cyber threats. Based in the USA. Built for healthcare.
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Resources</p>
                            {servicesData.map((service, index) => (
                                <div key={index}>
                                    <div className={styles.text} onClick={() => toggleService(index)} style={{ cursor: 'pointer' }}>
                                        {service.name}
                                        <FiChevronDown style={{ marginLeft: '8px' }} />
                                    </div>
                                    {openService === index && (
                                        <div className={styles.text}>
                                            <a href={service.pdfUrl} target="_blank" rel="noopener noreferrer">
                                                View {service.name}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Cybersecurity Services</p>
                            <p className={styles.text}>Penetration Testing</p>
                            <p className={styles.text}>HIPAA Risk Assessments</p>
                            <p className={styles.text}>Ransomware Protection</p>
                            <p className={styles.text}>Staff Cybersecurity Training</p>
                        </div>
                        {/* Column 4 */}
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Connect With Us</p>
                            <p className={styles.text}>
                                <FaLinkedin className={styles.icon} /> LinkedIn: @KemGen Solutions
                            </p>
                            <p className={styles.text}>
                                <FaTwitter className={styles.icon} /> Twitter: @KemGen Solutions
                            </p>
                            <p className={styles.text}>
                                <FaFacebook className={styles.icon} /> Facebook: @KemGeen Solutions
                            </p>
                            {/* Contact Section */}
                            <p className={styles.head}>Contact</p>
                            <p className={styles.text}>
                                Email: info@kemgensecurity.com <br />
                                Phone: (888) 308-1287 <br />
                                13101 Preston Rd<br/>
                                STE 110-50080<br/>
                                DALLAS,0TX 75240
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div style={{ backgroundColor: '#00B894', textAlign: 'center', padding: '15px 0', color: '#fff' }}>
                <p className={styles.bottom}>© 2025 KemGen Solutions. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
