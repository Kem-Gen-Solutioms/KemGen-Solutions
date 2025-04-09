import React, { useState } from "react";
import styles from './ChoosingUs.module.css';

const ChoosingUs = () => {
    const [selectedPackage, setSelectedPackage] = useState(null); // Track the selected package
    const [packagePrice, setPackagePrice] = useState(null); // Track the price of the selected package

    // Define the packages
    const enterpriseServices = [
        'Continuous full-scope testing',
        'Advanced API pentesting',
        'Cloud security audit',
        'Free Penetration Testing',
        'Red Team testing',
        'Threat intelligence',
        '24/7 incident response',
        'Executive reports',
        'Security training'
    ];

    const advancedProtectionServices = [
        'Manual penetration testing',
        'API security testing',
        'Free Penetration Testing',
        'Cloud security assessment',
        'Phishing simulations',
        'Compliance validation',
        'Dark web monitoring',
        'Detailed test reports'
    ];

    const essentialSecurityServices = [
        'Vulnerability scanning',
        'Free Penetration Testing',
        'Automated assessment',
        'Compliance guidance',
        'Recommendations report'
    ];

    // Handle package click
    const handlePackageClick = (packageType, price) => {
        setSelectedPackage(packageType); // Set the selected package to show the payment form
        setPackagePrice(price); // Set the price for the selected package
    };

    // Handle closing the payment form
    const closePaymentForm = () => {
        setSelectedPackage(null);
        setPackagePrice(null);
    };

    // Payment form
    const PaymentForm = () => (
        <div style={{ marginTop: '30px', padding: '30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontSize: '24px', color: '#1e40af', marginBottom: '20px' }}>Payment Details</h3>
            <form>
                <label style={{ fontSize: '16px', color: '#333', margin: '10px 0' }}>
                    Card Number:
                    <input type="text" placeholder="Card Number" required style={{ width: '100%', padding: '15px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px' }} />
                </label>
                <label style={{ fontSize: '16px', color: '#333', margin: '10px 0' }}>
                    Expiry Date:
                    <input type="text" placeholder="MM/YY" required style={{ width: '100%', padding: '15px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px' }} />
                </label>
                <label style={{ fontSize: '16px', color: '#333', margin: '10px 0' }}>
                    CVV:
                    <input type="text" placeholder="CVV" required style={{ width: '100%', padding: '15px', margin: '10px 0', borderRadius: '5px', border: '1px solid #ddd', fontSize: '16px' }} />
                </label>
                <div style={{ fontSize: '18px', margin: '10px 0' }}>
                    <strong>Total: </strong><span style={{ color: '#38bdf8' }}>${packagePrice}</span>
                </div>
                <button type="submit" style={{ backgroundColor: '#38bdf8', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', fontWeight: 'bold', marginTop: '20px', cursor: 'pointer' }}>
                    Submit Payment
                </button>
                <button type="button" onClick={closePaymentForm} style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' }}>
                    Close Form
                </button>
            </form>
        </div>
    );

    return (
        <div style={{ backgroundColor: '#f0f9ff' }}> {/* Lighter blue for healthcare trust */}
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>
                    Why Choose KemGen Solutions?
                </p>
                <div className={`row ${styles.sub}`}>
                    {/* Card 1: HIPAA Focus */}
                    <div data-aos='fade-right' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>HIPAA-Compliant Security</p>
                            <p className={styles.logo_text}>
                                We specialize in helping small clinics and medical practices meet strict HIPAA requirements, avoiding costly fines and breaches.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Healthcare-Specific Testing */}
                    <div data-aos='fade' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Healthcare Penetration Testing</p>
                            <p className={styles.logo_text}>
                                Our ethical hackers simulate real-world attacks on EHR systems, patient portals, and networks to expose vulnerabilities before hackers do.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Affordable for SMBs */}
                    <div data-aos='fade-left' className="col-md-4 text-center">
                        <div className={styles.box}>
                            <p className={styles.logo_head}>Built for Small Practices</p>
                            <p className={styles.logo_text}>
                                We offer scalable, budget-friendly solutions tailored to the unique needs of independent clinics and regional healthcare providers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Packages Section */}
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>
                    Our Packages
                </p>
                <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Enterprise Package */}
                    <div data-aos='fade-right' className="col-md-4 text-center" onClick={() => handlePackageClick('enterprise', '1500')}>
                        <div className={`${styles.box} ${selectedPackage === 'enterprise' ? styles.selected : ''}`}>
                            <p className={styles.logo_head}>Enterprise Security</p>
                            <ul className={styles.servicesList} style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                {enterpriseServices.map((service, index) => (
                                    <li key={index} style={{ color: 'white', marginBottom: '10px' }}>{service}</li>
                                ))}
                            </ul>
                            <p className={styles.price} style={{ color: '#38bdf8' }}>$1500</p>
                            <button className={styles.packageButton}>Choose Package</button>
                        </div>
                    </div>

                    {/* Advanced Protection Package (Recommended) */}
                    <div data-aos='fade' className="col-md-4 text-center" onClick={() => handlePackageClick('advanced', '1000')}>
                        <div className={`${styles.box} ${selectedPackage === 'advanced' ? styles.selected : ''} ${styles.recommended}`}>
                            <p className={styles.logo_head}>Advanced Protection <span className={styles.recommendedTag}>Recommended</span></p>
                            <ul className={styles.servicesList} style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                {advancedProtectionServices.map((service, index) => (
                                    <li key={index} style={{ color: 'white', marginBottom: '10px' }}>{service}</li>
                                ))}
                            </ul>
                            <p className={styles.price} style={{ color: '#38bdf8' }}>$1000</p>
                            <button className={styles.packageButton}>Choose Package</button>
                        </div>
                    </div>

                    {/* Essential Security Package */}
                    <div data-aos='fade-left' className="col-md-4 text-center" onClick={() => handlePackageClick('essential', '1000')}>
                        <div className={`${styles.box} ${selectedPackage === 'essential' ? styles.selected : ''}`}>
                            <p className={styles.logo_head}>Essential Security</p>
                            <ul className={styles.servicesList} style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                {essentialSecurityServices.map((service, index) => (
                                    <li key={index} style={{ color: 'white', marginBottom: '10px' }}>{service}</li>
                                ))}
                            </ul>
                            <p className={styles.price} style={{ color: '#38bdf8' }}>$500</p>
                            <button className={styles.packageButton}>Choose Package</button>
                        </div>
                    </div>
                </div>

                {/* Show Payment Form if a package is selected */}
                {selectedPackage && <PaymentForm />}
            </div>
        </div>
    );
};

export default ChoosingUs;
