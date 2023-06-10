import { getClient } from "@/api/client";
import FirstSection from "@/components/FirstSectTemplate";
import EventCard from "@/components/events/EventCard";
import { IEvent } from "@/interfaces/IEvent";
import { gql } from "@apollo/client";

const query = gql`
  query getAllEvents {
    getAllEvents {
      id
      updatedAt
      title
      description
      local
      date
      linkToSubscribe
    }
  }
`;

async function SecondSection() {
  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 60 }
      }
    }
  });
  const events: IEvent[] = await data.getAllEvents;
  
  return (
    <section className="bg-gray-200">
      {events.map((event) => {
        return (
          <EventCard key={event.id} event={event} />
        );
      })}
    </section>
  );
}

export default function Events() {
  return (
    <main>
      <FirstSection
        title="Eventos"
        content="
          Um dos objetivos da LAMF5 é o compartilhamento de conhecimento com o
          público externo, por conta disso, nós realizamos diversos eventos com
          diferentes profissionais da área, além de professores"
      />
      {/* @ts-expect-error Async Server Component */}
      <SecondSection />
    </main>
  );
}
