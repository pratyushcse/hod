import React from 'react';
import './App.css'; // Adjust the path according to your folder structure
import heroBanner from './images/hero-banner.jpeg';
import aboutBanner from './images/about-banner.jpg';
import absoluteImage from './images/absolute-image.jpg';
import portfolio1 from './images/portfolio-1.jpg';
import portfolio2 from './images/portfolio-2.jpg';
import portfolio3 from './images/portfolio-3.jpg';
import portfolio4 from './images/portfolio-4.jpg';
import blog1 from './images/blog-1.jpg';
import blog2 from './images/blog-2.jpg';
import blog3 from './images/blog-3.jpg';

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header" data-header>
        <div className="container">
          <a href="#">
            <h1 className="logo">Parashuram D Talawar</h1>
          </a>

          <button className="nav-toggle-btn" aria-label="Toggle Menu" data-nav-toggle-btn>
            <ion-icon name="menu-outline" className="menu-icon"></ion-icon>
            <ion-icon name="close-outline" className="close-icon"></ion-icon>
          </button>

          <nav className="navbar container">
            <ul className="navbar-list">
              <li><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
              <li><a href="#about" className="navbar-link" data-nav-link>About</a></li>
              <li><a href="#portfolio" className="navbar-link" data-nav-link>Portfolio</a></li>
              <li><a href="#skills" className="navbar-link" data-nav-link>Skills</a></li>
              <li><a href="#blog" className="navbar-link" data-nav-link>Blog</a></li>
              <li><a href="#contact" className="navbar-link" data-nav-link>Contact</a></li>
              
              <li><a href="#" className="btn btn-primary">Download CV</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <article>
          {/* Hero Section */}
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-banner">
                <img src={heroBanner} width="800" height="864" loading="lazy" alt="Photo" className="img-cover" />
                <div className="elem elem-1">
                  <p className="elem-title">29</p>
                  <p className="elem-text">Years of Success</p>
                </div>
                <div className="elem elem-2">
                  <p className="elem-title">800+</p>
                  <p className="elem-text">Projects Completed</p>
                </div>
                <div className="elem elem-3">
                  <ion-icon name="trophy"></ion-icon>
                </div>
              </div>
              <div className="hero-content">
                <h2 className="hero-title">
                  <span>Hello I'm</span>
                  <strong>Parashuram D Talawar</strong> HOD of Computer Science in KPT, Mangalore
                </h2>
                <p className="hero-text">
                  In 2006-2007, I ranked 1st out of 100 in an SQL and PL/SQL training by Oracle and the Government of Karnataka, scoring 98%
                </p>
                <div className="btn-group">
                  <a href="#contact" className="btn btn-primary blue">Get a Quote</a>
                  <a href="#about" className="btn">About Me</a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="section about" id="about">
            <div className="container">
              <figure className="about-banner">
                <img src={aboutBanner} width="800" height="652" loading="lazy" alt="Ethan's Photo" className="img-cover" />
                <img src={absoluteImage} width="800" height="717" loading="lazy" alt="Ethan's Photo" className="abs-img" />
                <div className="abs-icon abs-icon-1">
                  <ion-icon name="logo-css3"></ion-icon>
                </div>
                <div className="abs-icon abs-icon-2">
                  <ion-icon name="logo-javascript"></ion-icon>
                </div>
                <div className="abs-icon abs-icon-3">
                  <ion-icon name="logo-angular"></ion-icon>
                </div>
              </figure>
              <div className="about-content">
                <p className="section-subtitle">I'm a Head of Department</p>
                <h2 className="h2 section-title">Leading Initiatives to Address Real-World Challenges</h2>
                <p className="section-text">
                  With a focus on innovation and academic excellence, I guide our department in developing cutting-edge applications and technologies. I am committed to advancing the field and enhancing educational outcomes.
                </p>
                <p className="section-text">
                  My leadership ensures the creation of impactful, user-centered solutions that address practical issues and enrich the learning experience. I strive to deliver high-quality projects that make a significant difference in both academic and real-world contexts.
                </p>
                <a href="#portfolio" className="btn btn-primary blue">View Portfolio</a>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="section portfolio" id="portfolio">
            <div className="container">
              <p className="section-subtitle">Portfolio</p>
              <h2 className="h2 section-title">My Amazing Works</h2>
              <p className="section-text">
                Showcasing a collection of projects where creativity meets functionality. Explore the work that reflects my dedication to delivering high-quality web solutions.
              </p>
              <ul className="portfolio-list">
                <li>
                  <a href="#" className="portfolio-card" style={{ backgroundImage: `url(${portfolio1})` }}>
                    <div className="card-content">
                      <p className="card-subtitle">Youtube</p>
                      <h3 className="h3 card-title">Web Application for Desiverse</h3>
                      <span className="btn-link">
                        <span>View Project</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="portfolio-card" style={{ backgroundImage: `url(${portfolio2})` }}>
                    <div className="card-content">
                      <p className="card-subtitle">Vimeo</p>
                      <h3 className="h3 card-title">Web Application for Desiverse</h3>
                      <span className="btn-link">
                        <span>View Project</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="portfolio-card" style={{ backgroundImage: `url(${portfolio3})` }}>
                    <div className="card-content">
                      <p className="card-subtitle">Soundcloud</p>
                      <h3 className="h3 card-title">Web Application for Desiverse</h3>
                      <span className="btn-link">
                        <span>View Project</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="portfolio-card" style={{ backgroundImage: `url(${portfolio4})` }}>
                    <div className="card-content">
                      <p className="card-subtitle">Details</p>
                      <h3 className="h3 card-title">Web Application for Desiverse</h3>
                      <span className="btn-link">
                        <span>View Project</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section className="section skills" id="skills">
            <div className="container">
              <p className="section-subtitle">My Skills</p>
              <h2 className="h2 section-title">I Develop Skills Regularly</h2>
              <p className="section-text">
                Continuously honing my abilities to stay ahead in the ever-changing world of web development. I embrace new challenges to enhance my expertise and deliver innovative solutions.
              </p>
              <ul className="skills-list">
                <li className="skills-item">
                  <div className="wrapper" style={{ width: '95%' }}>
                    <h3 className="skills-title">CSS</h3>
                    <data className="skills-data" value="95">95%</data>
                  </div>
                  <div className="skills-progress-box">
                    <div className="skills-progress" style={{ width: '95%' }}></div>
                  </div>
                </li>
                <li className="skills-item">
                  <div className="wrapper" style={{ width: '90%' }}>
                    <h3 className="skills-title">JavaScript</h3>
                    <data className="skills-data" value="90">90%</data>
                  </div>
                  <div className="skills-progress-box">
                    <div className="skills-progress" style={{ width: '90%' }}></div>
                  </div>
                </li>
                <li className="skills-item">
                  <div className="wrapper" style={{ width: '85%' }}>
                    <h3 className="skills-title">React</h3>
                    <data className="skills-data" value="85">85%</data>
                  </div>
                  <div className="skills-progress-box">
                    <div className="skills-progress" style={{ width: '85%' }}></div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Blog Section */}
          <section className="section blog" id="blog">
            <div className="container">
              <p className="section-subtitle">Latest Blog</p>
              <h2 className="h2 section-title">My Articles</h2>
              <ul className="blog-list">
                <li>
                  <a href="#" className="blog-card">
                    <img src={blog1} width="370" height="270" loading="lazy" alt="Blog 1" className="img-cover" />
                    <div className="card-content">
                      <p className="card-subtitle">Web Development</p>
                      <h3 className="h3 card-title">How to Become a Web Developer?</h3>
                      <span className="btn-link">
                        <span>Read More</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="blog-card">
                    <img src={blog2} width="370" height="270" loading="lazy" alt="Blog 2" className="img-cover" />
                    <div className="card-content">
                      <p className="card-subtitle">JavaScript</p>
                      <h3 className="h3 card-title">The Evolution of JavaScript</h3>
                      <span className="btn-link">
                        <span>Read More</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="blog-card">
                    <img src={blog3} width="370" height="270" loading="lazy" alt="Blog 3" className="img-cover" />
                    <div className="card-content">
                      <p className="card-subtitle">React</p>
                      <h3 className="h3 card-title">Understanding React Hooks</h3>
                      <span className="btn-link">
                        <span>Read More</span>
                        <ion-icon name="arrow-forward"></ion-icon>
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer" id="contact">
            <div className="container">
              <h2 className="h2 footer-title">Let's Work Together</h2>
              <p className="footer-text">
                I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a href="#contact" className="btn btn-primary">Contact Me</a>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default App;
