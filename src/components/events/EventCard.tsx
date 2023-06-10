"use client";
import {IEvent} from "@/interfaces/IEvent";
import {Card} from "antd";
import Link from "next/link";

export default function EventCard({event}: {event: IEvent}) {
	return (
		<Link href={`/events/${event.id}`}>
			<Card
				className="w-1/2 max-w-4xl"
			>
				<h2>{event.title}</h2>
				<p>{event.data}</p>
				<p>{event.description}</p>
			</Card>
		</Link>
	);
}
