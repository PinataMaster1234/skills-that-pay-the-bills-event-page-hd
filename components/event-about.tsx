export function EventAbout() {
  return (
    <section
      aria-labelledby="about-heading"
      className="mx-auto max-w-3xl border-t border-border px-5 py-12"
    >
      <h2 id="about-heading" className="text-2xl font-semibold tracking-tight">
        What happens
      </h2>
      <div className="mt-4 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
        <p>
          According to NACE, employers are looking for graduates that have career readiness
          skills. This workshop will have students able to see what skills they already have
          and ones they need to work on.
        </p>
        <p>
          This event is a partnership with{' '}
          <span className="font-medium text-foreground">Sarah Westerfield</span>.
        </p>
      </div>
    </section>
  )
}
