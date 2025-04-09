import React, { useState } from 'react';
import './blog.css';
import Footer from "../Footer";

const Blog = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: "HIPAA Compliance for Small Medical Practices",
      content: "Learn how small healthcare providers can achieve HIPAA compliance without breaking their budget. We cover essential security controls and cost-effective solutions.",
      author: "Dr. Sarah Johnson",
      date: "May 15, 2023",
      category: "Compliance",
      likes: 42,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Ransomware Attacks on Healthcare: Prevention Strategies",
      content: "Healthcare organizations are prime targets for ransomware. Discover the latest defense strategies to protect patient data and maintain operations during an attack.",
      author: "Mark Williams",
      date: "June 2, 2023",
      category: "Security",
      likes: 28,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Securing Patient Portals: Best Practices",
      content: "Patient portals are vulnerable entry points. Learn how to implement multi-factor authentication, encryption, and activity monitoring to secure sensitive health data.",
      author: "Lisa Chen",
      date: "June 18, 2023",
      category: "Technology",
      likes: 35,
      image: "https://images.unsplash.com/photo-1581093450021-3a7535e72952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Cybersecurity Training for Healthcare Staff",
      content: "Your staff is your first line of defense. Effective training programs that reduce phishing susceptibility and improve security awareness in medical environments.",
      author: "Robert Taylor",
      date: "July 5, 2023",
      category: "Training",
      likes: 19,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "Cloud Security for Healthcare Data",
      content: "Migrating to the cloud? Understand the specific security considerations for protected health information (PHI) in cloud environments and how to maintain compliance.",
      author: "Emily Rodriguez",
      date: "July 22, 2023",
      category: "Technology",
      likes: 31,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openShareModal = (blog) => {
    setSelectedBlog(blog);
    setShareModalOpen(true);
  };

  const closeShareModal = () => {
    setShareModalOpen(false);
    setSelectedBlog(null);
  };

  const shareOnPlatform = (platform) => {
    const url = window.location.href; 
    const text = encodeURIComponent(`Check out this blog: ${selectedBlog.title} at ${url}`);
    let shareUrl;

    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(selectedBlog.title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
    closeShareModal();
  };

  return (
    <>
      <section className="hero-section">
        <h1>KemGen Cybersecurity Insights</h1>
        <p>Expert knowledge for protecting healthcare organizations</p>
      </section>

      <div className="blog-container">
        <div className="blog-list">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="blog-post">
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <h2>{blog.title}</h2>
              <p>{blog.content.substring(0, 100)}... <a href={`/blog/${blog.id}`}>Read More</a></p>
              <div className="blog-info">
                <span><i className="fas fa-user"></i> {blog.author}</span>
                <span><i className="fas fa-calendar"></i> {blog.date}</span>
                <span><i className="fas fa-tag"></i> {blog.category}</span>
              </div>
              <div className="blog-actions">
                <button>
                  <i className="fas fa-thumbs-up"></i> {blog.likes} Likes
                </button>
                <button onClick={() => openShareModal(blog)}>
                  <i className="fas fa-share-alt"></i> Share
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {shareModalOpen && selectedBlog && (
        <div className="share-modal">
          <div className="share-modal-content">
            <h3>Share "{selectedBlog.title}"</h3>
            <button onClick={() => shareOnPlatform('twitter')}>
              <i className="fab fa-twitter"></i> Twitter
            </button>
            <button onClick={() => shareOnPlatform('linkedin')}>
              <i className="fab fa-linkedin"></i> LinkedIn
            </button>
            <button onClick={() => shareOnPlatform('facebook')}>
              <i className="fab fa-facebook"></i> Facebook
            </button>
            <button className="close-btn" onClick={closeShareModal}>
              <i className="fas fa-times"></i> Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Blog;