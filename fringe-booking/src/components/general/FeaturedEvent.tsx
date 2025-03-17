import Image from "next/image";
import Link from "next/link";

export default function FeaturedEvent({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/2 relative h-60 md:h-auto">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-2xl">{event.title}</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {event.category}
            </span>
          </div>
          <p className="text-gray-600 mb-2">{event.date}</p>
          <p className="text-gray-600 mb-4">{event.location}</p>
          <p className="mb-4">
            Don't miss this incredible event! Join thousands of attendees for an
            unforgettable experience.
          </p>
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold text-xl">${event.price}</p>
            <p className="text-gray-500">
              {event.availableTickets} tickets left
            </p>
          </div>
          <Link
            href={`/event/${event.id}`}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-colors"
          >
            Get Tickets Now
          </Link>
        </div>
      </div>
    </div>
  );
}
