import EventCard from "@/components/general/EventCard";
import FeaturedEvent from "@/components/general/FeaturedEvent";
import SearchBar from "@/components/general/SearchBar";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const events = [
    {
      id: "1",
      title: "Summer Music Festival",
      date: "June 15, 2025",
      location: "Central Park, New York",
      imageUrl: "/api/placeholder/800/500",
      price: 89.99,
      category: "Music",
      availableTickets: 243,
    },
    {
      id: "2",
      title: "Tech Conference 2025",
      date: "April 22-24, 2025",
      location: "Convention Center, San Francisco",
      imageUrl: "/api/placeholder/800/500",
      price: 299,
      category: "Technology",
      availableTickets: 156,
    },
    {
      id: "3",
      title: "Comedy Night Special",
      date: "May 10, 2025",
      location: "The Laugh Factory, Los Angeles",
      imageUrl: "/api/placeholder/800/500",
      price: 49.99,
      category: "Entertainment",
      availableTickets: 87,
    },
    {
      id: "4",
      title: "Food & Wine Festival",
      date: "July 8-10, 2025",
      location: "Riverfront Park, Chicago",
      imageUrl: "/api/placeholder/800/500",
      price: 75,
      category: "Food",
      availableTickets: 320,
    },
    {
      id: "5",
      title: "International Film Festival",
      date: "August 15-22, 2025",
      location: "Multiple Venues, Toronto",
      imageUrl: "/api/placeholder/800/500",
      price: 120,
      category: "Film",
      availableTickets: 184,
    },
    {
      id: "6",
      title: "Marathon City Run",
      date: "September 5, 2025",
      location: "Downtown, Boston",
      imageUrl: "/api/placeholder/800/500",
      price: 65,
      category: "Sports",
      availableTickets: 412,
    },
  ];
  const featuredEvent = events[0];
  const regularEvents = events.slice(1);

  return (
    <>
      <div className="py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Find Your Next Experience</h1>
          <SearchBar />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Featured Event</h2>
          <FeaturedEvent event={featuredEvent} />
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regularEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Music", "Sports", "Arts", "Technology", "Food", "Business"].map(
              (category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition-colors"
                >
                  {category}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
