import type { Experience as ExperienceType } from "../types/profile";

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experience.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="experience-item"
          >
            <div className="experience-header">
              <div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <div className="experience-meta">
                <span>{exp.period}</span>
                {exp.location && <span>{exp.location}</span>}
              </div>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
