import React from 'react';
import './pricing.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      planName: 'Essential Security',
      price: '$500 / assessment',
      description: 'Basic protection for small medical practices just starting with cybersecurity.',
      features: [
        'Vulnerability scanning for networks & systems',
        'Free initial penetration test (limited scope)',
        'Automated security assessment',
        'HIPAA compliance guidance',
        'Prioritized recommendations report',
        'Email support during business hours',
        'Quarterly security bulletins',
      ],
      isDefault: false,
    },
    {
      id: 2,
      planName: 'Advanced Protection',
      price: '$1000 / assessment',
      description: 'Recommended for medium-sized clinics with sensitive patient data.',
      features: [
        'Everything in Essential, plus:',
        'Manual penetration testing',
        'API security testing (for patient portals)',
        'Cloud security assessment',
        'Phishing simulations for staff',
        'HIPAA compliance validation',
        'Dark web monitoring for credentials',
        'Detailed technical reports',
        'Phone/email support',
      ],
      isDefault: true,  // Recommended plan
    },
    {
      id: 3,
      planName: 'Enterprise Security',
      price: '$1500 / assessment',
      description: 'Comprehensive protection for large medical groups and hospitals.',
      features: [
        'Everything in Advanced, plus:',
        'Continuous full-scope testing',
        'Advanced API pentesting',
        'Cloud security audits (AWS/Azure/GCP)',
        'Red Team exercises',
        'Threat intelligence monitoring',
        '24/7 incident response',
        'Executive summary reports',
        'Staff security training sessions',
        'Dedicated security consultant',
      ],
      isDefault: false,
    },
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header text-center">
        <h2>Choose Your Plan</h2>
        <p>Healthcare Cybersecurity Packages</p>
      </div>

      <div className="column">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`col-lg-12 mb-4 ${plan.isDefault ? 'default-plan' : ''}`}>
            <div className={`card pricing-card ${plan.isDefault ? 'default-card' : ''}`}>
              <div className="card-body text-center">
                <h5 className={`card-title ${plan.isDefault ? 'default-title' : ''}`}>{plan.planName}</h5>
                <p className="card-text">{plan.description}</p>
                <h4 className="price">{plan.price}</h4>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className={plan.isDefault ? 'tick' : 'cross'}>✔️</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={{
                    pathname: '/checkout',
                    state: {
                      planName: plan.planName,
                      price: plan.price,
                    },
                  }}
                  className={`pricing-link ${plan.isDefault ? 'default-plan-link' : 'border-link'} mt-2`}
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
