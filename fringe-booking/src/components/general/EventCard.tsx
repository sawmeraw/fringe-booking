import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-40">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg mb-1">{event.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {event.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-1">{event.date}</p>
        <p className="text-gray-600 text-sm mb-3">{event.location}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">${event.price}</p>
          <p className="text-sm text-gray-500">
            {event.availableTickets} tickets left
          </p>
        </div>
        <Link
          href={`/event/${event.id}`}
          className="mt-3 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
