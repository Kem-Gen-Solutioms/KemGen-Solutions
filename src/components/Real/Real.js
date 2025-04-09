import React, { useEffect, useState } from "react";
import styles from './Real.module.css';

const Real = () => {
    const [facilities, setFacilities] = useState(0);
    const [audits, setAudits] = useState(0);
    const [threats, setThreats] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFacilities((prev) => (prev < 500 ? prev + 10 : 500));
            setAudits((prev) => (prev < 1000 ? prev + 20 : 1000));
            setThreats((prev) => (prev < 1000000 ? prev + 50000 : 1000000));
        }, 50); // Adjust speed by changing this value (50ms)

        return () => clearInterval(intervalId);
    }, []);
 
    return (
        <div className="mb-5 overflow-hidden">
            <div className="row g-0 mt-5">
                <div className="col-md-4 text-center">
                    <div data-aos='fade-up' className={`${styles.statsBox} ${styles.hoverEffect}`}>
                        <p className={styles.statsNumber}>{facilities.toLocaleString()}+</p>
                        <p className={styles.statsLabel}>Protected Facilities</p>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div data-aos='fade-up' className={`${styles.statsBox} ${styles.hoverEffect}`}>
                        <p className={styles.statsNumber}>{audits.toLocaleString()}+</p>
                        <p className={styles.statsLabel}>Security Audits</p>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div data-aos='fade-up' className={`${styles.statsBox} ${styles.hoverEffect}`}>
                        <p className={styles.statsNumber}>{threats.toLocaleString()}+</p>
                        <p className={styles.statsLabel}>Threats Blocked</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Real;
