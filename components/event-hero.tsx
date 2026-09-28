export function EventHero() {
  return (
    <header className="border-b border-border bg-muted">
      <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Texas Lutheran University
        </p>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Skills that Pay the Bills
        </h1>
        <p className="mt-3 text-pretty text-xl text-muted-foreground md:text-2xl">
          Career Essentials: Skills that Every Employer Wants
        </p>
        <a
          href="#rsvp"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          How to RSVP
        </a>
      </div>
    </header>
  )
}
