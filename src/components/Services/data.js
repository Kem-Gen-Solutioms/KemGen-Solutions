import { 
    faShieldAlt, 
    faUserLock, 
    faLaptopMedical, 
    faFileShield 
  } from '@fortawesome/free-solid-svg-icons';
  
  const data = [
      {
          id: 1,
          heading: 'HIPAA Compliance Audits',
          content: 'Comprehensive risk assessments and policy development to ensure your medical practice meets all HIPAA Security Rule requirements.',
          to: '/hipaa-compliance',
          icon: faShieldAlt,
          contents: [
              {
                  heading: 'Risk Gap Analysis',
                  img: '/assets/services/hipaa-risk.jpg',
                  content: 'Identify vulnerabilities in your technical safeguards, physical security, and administrative controls.'
              },
              {
                  heading: 'Policy Documentation',
                  img: '/assets/services/hipaa-docs.jpg',
                  content: 'Customized HIPAA compliance manuals including breach notification procedures and staff training protocols.'
              },
          ]
      },
      {
          id: 2,
          heading: 'Healthcare Pen Testing',
          content: 'Simulated cyberattacks on EHR systems, patient portals, and network infrastructure to expose critical vulnerabilities.',
          to: '/penetration-testing',
          icon: faUserLock,
          contents: [
              {
                  heading: 'EHR Security Testing',
                  img: '/assets/services/ehr-test.jpg',
                  content: 'Specialized testing for Epic, Cerner, and Meditech systems to prevent data breaches.'
              },
              {
                  heading: 'Social Engineering',
                  img: '/assets/services/phishing-sim.jpg',
                  content: 'Controlled phishing campaigns to assess staff susceptibility to healthcare-targeted scams.'
              },
          ]
      },
      {
          id: 3,
          heading: 'Ransomware Protection',
          content: 'Multi-layered defense against ransomware with endpoint detection, encrypted backups, and incident response planning.',
          to: '/ransomware-protection',
          icon: faLaptopMedical,
          contents: [
              {
                  heading: 'Endpoint Security',
                  img: '/assets/services/endpoint-med.jpg',
                  content: '24/7 monitoring of all devices accessing PHI with behavioral threat detection.'
              },
              {
                  heading: 'Backup Verification',
                  img: '/assets/services/backup-check.jpg',
                  content: 'Automated testing of HIPAA-compliant backups to ensure recoverability.'
              },
          ]
      },
      {
          id: 4,
          heading: 'Staff Training',
          content: 'Healthcare-specific cybersecurity awareness programs that reduce phishing risks and improve HIPAA compliance.',
          to: '/security-training',
          icon: faFileShield,
          contents: [
              {
                  heading: 'Phishing Simulations',
                  img: '/assets/services/phish-train.jpg',
                  content: 'Interactive modules using real medical phishing templates with instant feedback.'
              },
              {
                  heading: 'HIPAA Workflows',
                  img: '/assets/services/hipaa-workflow.jpg',
                  content: 'Role-based training for clinicians, admin staff, and leadership on secure PHI handling.'
              },
          ]
      },
  ];
  
  export default data;