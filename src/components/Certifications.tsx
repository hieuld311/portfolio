interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="section-content">
        <div className="certifications-list">
          {certifications.map((cert) => (
            <div key={cert.name} className="certification-item">
              <h3 className="certification-name">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.name}
                </a>
              </h3>
              <p className="certification-meta">
                {cert.issuer} · {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
