import React, { useState } from 'react';
import './Careers.css';
import Footer from '../Footer/Footer'; 
const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cv: null,
    coverLetter: '',
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Security Engineer',
      description: 'Lead the development of our security infrastructure',
      location: 'Remote',
      salary: '$140,000 - $180,000',
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        '7+ years of experience in cybersecurity',
        'Experience with HIPAA compliance',
        'Strong knowledge of cloud security',
      ],
    },
    {
      id: 2,
      title: 'Healthcare Security Consultant',
      description: 'Advise healthcare clients on security best practices',
      location: 'Remote',
      salary: '$120,000 - $150,000',
      requirements: [
        'Healthcare IT background',
        '5+ years consulting experience',
        'CISSP certification preferred',
        'Strong communication skills',
      ],
    },
    {
      id: 3,
      title: 'Security Operations Analyst',
      description: 'Monitor and respond to security threats',
      location: 'Remote',
      salary: '$90,000 - $120,000',
      requirements: [
        'Bachelor\'s degree in cybersecurity or related field',
        '3+ years SOC experience',
        'Experience with SIEM tools',
        'Incident response experience',
      ],
    },
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseForm = () => {
    setSelectedJob(null); // Close the form when the "Close" button is clicked
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'cv' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate an API here to handle form submission
    alert('Application submitted successfully!');
    setFormData({ name: '', email: '', cv: null, coverLetter: '' });
    setSelectedJob(null);
  };

  return (
    <div className="careers-container">
      <header className="careers-header">
        <h1>KemGen Careers</h1>
        <p>Join a fast-growing company and be part of something exciting!</p>
      </header>
   {!selectedJob ? (
        <section className="career-openings">
          <h2>Current Job Openings</h2>
          <div className="job-list">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="job-card"
                onClick={() => handleJobClick(job)}
              >
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <span className="job-location">{job.location}</span>
                <p className="job-salary">{job.salary}</p>
                <button className="apply-button" onClick={() => handleJobClick(job)}>
                  Apply
                </button>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="application-form">
          <h2>Apply for the {selectedJob.title}</h2>
          <p><strong>Location:</strong> {selectedJob.location}</p>
          <button className="close-button" onClick={handleCloseForm}>Close</button>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="cv">Upload CV</label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />

            <label htmlFor="coverLetter">Cover Letter</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="5"
              value={formData.coverLetter}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit Application</button>
          </form>
        </section>
      )}

      <Footer /> {/* Call the Footer component here */}
    </div>
  );
};

export default Careers;
