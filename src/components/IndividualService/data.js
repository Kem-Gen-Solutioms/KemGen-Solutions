// Import the required images
import image1 from '../../assets/home/r1.jpeg';
import image2 from '../../assets/home/r2.jpeg';
import image3 from '../../assets/home/r3.jpeg';
import image4 from '../../assets/home/r4.jpeg';
import image5 from '../../assets/home/r5.jpeg';
import image6 from '../../assets/home/r6.jpeg';

const data = [
    {
        id: 1,
        heading: 'HIPAA Compliance Audits',
        content: 'Complete HIPAA Security Rule assessments for small/medium medical practices to prevent violations and protect patient data.',
        to: '/contact-us',  // Directs to contact page
        contents: [
            {
                heading: 'Risk Assessment',
                icon: image1,
                content: 'Identify security gaps in your technical safeguards, physical security, and administrative controls.'
            },
            {
                heading: 'Policy Development',
                icon: image2,
                content: 'Custom HIPAA compliance documentation including breach notification procedures.'
            },
        ]
    },
    {
        id: 2,
        heading: 'Healthcare Penetration Testing',
        content: 'Ethical hacking services tailored for medical facilities to test EHR systems and network vulnerabilities.',
        to: '/contact-us',
        contents: [
            {
                heading: 'EHR Security Testing',
                icon: image3,
                content: 'Specialized testing for Epic, Cerner, and Meditech systems to prevent data breaches.'
            },
            {
                heading: 'Phishing Simulations',
                icon: image4,
                content: 'Controlled campaigns to assess staff susceptibility to healthcare-targeted scams.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Ransomware Protection',
        content: 'Multi-layered defense against ransomware attacks with 24/7 monitoring and encrypted backups.',
        to: '/contact-us',
        contents: [
            {
                heading: 'Endpoint Security',
                icon: image5,
                content: 'Protection for all devices accessing PHI with behavioral threat detection.'
            },
            {
                heading: 'Backup Verification',
                icon: image6,
                content: 'Automated testing of HIPAA-compliant backups to ensure recoverability.'
            },
        ]
    },
    {
        id: 4,
        heading: 'Staff Cybersecurity Training',
        content: 'Healthcare-specific awareness programs to reduce phishing risks and improve HIPAA compliance.',
        to: '/contact-us',
        contents: [
            {
                heading: 'Phishing Education',
                icon: image1,
                content: 'Interactive modules using real medical phishing templates with instant feedback.'
            },
            {
                heading: 'HIPAA Workflows',
                icon: image2,
                content: 'Role-based training on secure PHI handling for clinicians and admin staff.'
            },
        ]
    }
];

export default data;