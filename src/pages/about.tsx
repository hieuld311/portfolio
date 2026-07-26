import { careerOffices, type CareerTimelineRecord } from "@/data/career";

function TimelineList({ items }: { items: CareerTimelineRecord[] }) {
  return (
    <ol className="space-y-1">
      {items.map((item) => (
        <li key={item.id} className="bg-card p-6 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-8 sm:p-8">
          <p className="font-mono text-sm font-bold tracking-[0.1em] text-primary">
            {item.period}
          </p>
          <article className="mt-5 sm:mt-0">
            <p className="font-mono text-xs font-bold tracking-[0.14em] text-muted-foreground">
              {item.label}
            </p>
            <div className="mt-6 space-y-6">
              {item.projects.map((project) => (
                <section key={project.id}>
                  <h3 className="font-mono text-[11px] font-bold tracking-[0.1em] text-foreground">
                    {project.title}
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="relative pl-5 before:absolute before:left-0 before:top-[0.55rem] before:size-2 before:bg-primary">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="bg-secondary p-6 sm:p-8">
        <h1 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">Career</h1>
      </section>

      <div className="space-y-1">
        {careerOffices.map((office) => (
          <section key={office.id} className="grid gap-1 lg:grid-cols-[minmax(15rem,0.65fr)_minmax(0,1.35fr)]">
            <aside className="bg-foreground p-6 text-background sm:p-8">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">{office.name}</h2>
              <p className="mt-4 text-sm font-semibold text-background/85">{office.role}</p>
              <p className="mt-2 font-mono text-[10px] leading-relaxed tracking-[0.08em] text-background/60">
                {office.location}
              </p>
              <p className="mt-8 font-mono text-xs font-bold tracking-[0.12em] text-primary">
                {office.period}
              </p>
            </aside>

            <TimelineList items={office.timeline} />
          </section>
        ))}
      </div>

      <section className="grid gap-1 lg:grid-cols-[minmax(15rem,0.65fr)_minmax(0,1.35fr)]">
        <aside className="bg-foreground p-6 text-background sm:p-8">
          <h2 className="text-3xl font-bold leading-tight tracking-tight">FPT University</h2>
          <p className="mt-8 font-mono text-xs font-bold tracking-[0.12em] text-primary">
            2021 – 2025
          </p>
        </aside>

        <div className="bg-card p-6 sm:p-8">
          <p className="font-mono text-xs font-bold tracking-[0.14em] text-muted-foreground">
            EDUCATION
          </p>
          <h3 className="mt-4 text-2xl font-bold tracking-tight">
            Bachelor of Information Technology
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Major in Software Engineering
          </p>
        </div>
      </section>
    </div>
  );
}
