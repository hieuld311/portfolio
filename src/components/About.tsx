interface AboutProps {
  summary: string;
}

export function About({ summary }: AboutProps) {
  return (
    <section className="section">
      <h2 className="section-title">About</h2>
      <div className="section-content">
        <p className="about-text">{summary}</p>
      </div>
    </section>
  );
}
