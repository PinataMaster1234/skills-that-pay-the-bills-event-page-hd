import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const details = [
  { icon: Calendar, label: 'Date', value: 'Wednesday, October 7th, 2026' },
  { icon: Clock, label: 'Time', value: '4:00-5:00 PM' },
  {
    icon: MapPin,
    label: 'Location',
    value: 'ASC Conference Room, Texas Lutheran University',
  },
  { icon: Users, label: "Who it's for", value: 'Undergraduates' },
]

export function EventDetails() {
  return (
    <section aria-labelledby="details-heading" className="mx-auto max-w-3xl px-5 py-12">
      <h2 id="details-heading" className="sr-only">
        Event details
      </h2>
      <dl className="grid gap-4 sm:grid-cols-2">
        {details.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-start gap-4 rounded-lg border border-border p-5"
          >
            <Icon className="mt-0.5 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            <div>
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="mt-1 text-lg font-medium leading-snug">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}
