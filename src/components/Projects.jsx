import React from 'react'

export default function Projects() {
 return (
<div className="projects-section">
  <section id="projects" className="container py-lg-5">

    <div className="text-center mb-5">
      <h6 className="text-primary fw-bold">MY PROJECTS</h6>
      <h2 className="fw-bold text-white">Featured Projects</h2>
      <p className="text-secondary">
        Some of the projects I have built while learning and working with
        React, JavaScript and Node.js.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-md-6 col-lg-4">
        <div className="card bg-dark border-secondary h-100 p-4">
          <h4 className="text-white">Authentication System</h4>

          <p className="text-secondary">
            Login & Register application with LocalStorage, form validation
            and protected routing using React.
          </p>

          <div className="mb-3">
            <span className="badge bg-primary me-2">React</span>
            <span className="badge bg-secondary me-2">JavaScript</span>
            <span className="badge bg-success">LocalStorage</span>
          </div>

          <a
            href="https://github.com/nitin30-code/react-authentication"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light mt-auto"
          >
            View on GitHub →
          </a>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card bg-dark border-secondary h-100 p-4">
          <h4 className="text-white">Portfolio Website</h4>

          <p className="text-secondary">
            Personal portfolio built with React showcasing skills,
            experience and projects with a responsive UI.
          </p>

          <div className="mb-3">
            <span className="badge bg-primary me-2">React</span>
            <span className="badge bg-warning text-dark me-2">Bootstrap</span>
            <span className="badge bg-info text-dark">CSS</span>
          </div>

          <a
            href="https://github.com/YourUsername"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light mt-auto"
          >
            View on GitHub →
          </a>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="card bg-dark border-secondary h-100 p-4">
          <h4 className="text-white">REST API</h4>

          <p className="text-secondary">
            REST API developed using Node.js and Express implementing CRUD
            operations and routing.
          </p>

          <div className="mb-3">
            <span className="badge bg-success me-2">Node.js</span>
            <span className="badge bg-danger me-2">Express</span>
            <span className="badge bg-primary">REST API</span>
          </div>

          <a
            href="https://github.com/YourUsername"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light mt-auto"
          >
            View on GitHub →
          </a>
        </div>
      </div>

    </div>

  </section>
    </div>
);
}
