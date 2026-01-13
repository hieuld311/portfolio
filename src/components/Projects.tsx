import type { Project } from "../types/profile";

interface ProjectsProps {
  projects: Project[];
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.name} className="project-item">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.name} on GitHub`}
              >
                <GitHubIcon />
              </a>
            </div>
            <div className="project-tech">
              {project.techStack.map((tech) => (
                <span key={tech} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="project-highlights">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
