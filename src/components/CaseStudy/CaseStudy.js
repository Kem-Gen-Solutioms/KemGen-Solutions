import React from 'react';
import styles from './CaseStudy.module.css';
import { Link } from 'react-router-dom';

// Import case study images
import img1 from '../../assets/caseStudy/k1.jpeg'; // HIPAA Compliance
import img2 from '../../assets/caseStudy/case4.jpeg'; // Pen Testing
import img3 from '../../assets/caseStudy/k2.jpeg'; // Ransomware Recovery
import img4 from '../../assets/caseStudy/k3.jpeg'; // Staff Training


const CaseStudy = () => {
    const caseStudies = [
        {
            id: 1,
            designation: 'HIPAA Compliance',
            title: 'Helping a 50-Provider Clinic Pass HIPAA Audit',
            img: img1,
            category: 'COMPLIANCE'
        },
        {
            id: 2,
            designation: 'Penetration Testing',
            title: 'Exposing Critical Flaws in a Hospital EHR System',
            img: img2,
            category: 'SECURITY TESTING'
        },
        {
            id: 3,
            designation: 'Ransomware Protection',
            title: 'Preventing a $500K Attack on a Rural Clinic',
            img: img3,
            category: 'THREAT PREVENTION'
        },
        {
            id: 4,
            designation: 'Staff Training',
            title: 'Reducing Phishing Risks by 92% at a Dental Chain',
            img: img4,
            category: 'HUMAN FACTORS'
        },
    ];

    return (
        <div className={`container ${styles.contain} overflow-hidden`}>
            <div data-aos='slide-left'>
                <p className={styles.study}>KEMGEN SOLUTIONS CASE STUDIES</p>
            </div>

            {/* Case Studies Grid */}
            <div className='row mb-2'>
                {caseStudies.map((study) => (
                    <div 
                        key={study.id} 
                        className={`col-md-3 col-sm-6 mt-4 ${styles.serviceContainer}`} 
                        data-aos='fade'
                    >
                        <Link to={`/case-studies/${study.id}`} style={{ textDecoration: "none" }}>
                            <div className={styles.img}>
                                <img 
                                    src={study.img} 
                                    alt={study.title} 
                                    className={styles.caseImage}
                                />
                                <div className={styles.overlay}>
                                    <p className={styles.imgTitle}>{study.designation}</p>
                                    <p className={styles.serviceDescription}>
                                        {study.title}
                                    </p>
                                    <span className={styles.categoryTag}>
                                        {study.category}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CaseStudy;