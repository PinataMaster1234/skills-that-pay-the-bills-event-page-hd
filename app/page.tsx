import { EventAbout } from '@/components/event-about'
import { EventDetails } from '@/components/event-details'
import { EventHero } from '@/components/event-hero'
import { EventRsvp } from '@/components/event-rsvp'

export default function Page() {
  return (
    <>
      <EventHero />
      <main>
        <EventDetails />
        <EventAbout />
        <EventRsvp />
      </main>
    </>
  )
}
