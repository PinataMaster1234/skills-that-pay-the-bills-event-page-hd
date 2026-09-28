export function EventRsvp() {
  return (
    <section id="rsvp" aria-labelledby="rsvp-heading" className="mx-auto max-w-3xl px-5 pb-16">
      <div className="rounded-lg bg-primary p-8 text-primary-foreground md:p-10">
        <h2 id="rsvp-heading" className="text-2xl font-semibold tracking-tight">
          RSVP
        </h2>
        <p className="mt-3 text-pretty text-lg leading-relaxed">
          {"RSVP for the event at TLU's event hub, "}
          <span className="font-semibold">connect@tlu</span>.
        </p>
        <a
          href="https://texaslutheran.campuslabs.com/engage/event/12734268"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary-foreground px-6 text-base font-medium text-primary transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground sm:w-auto"
        >
          RSVP on connect@tlu
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  )
}
