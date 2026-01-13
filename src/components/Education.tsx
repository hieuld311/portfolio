import type { Education as EducationType } from "../types/profile";

interface EducationProps {
  education: EducationType;
}

export function Education({ education }: EducationProps) {
  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      <div className="section-content">
        <div className="education-item">
          <h3 className="education-degree">{education.degree}</h3>
          <p className="education-school">{education.school}</p>
          <p className="education-meta">
            {education.period} · {education.location}
          </p>
          <p className="education-details">{education.details}</p>
        </div>
      </div>
    </section>
  );
}
