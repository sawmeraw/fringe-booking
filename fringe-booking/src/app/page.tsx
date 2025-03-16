import { prisma } from "./lib/prisma";

async function FetchEvents() {
  const data = prisma.event.findMany({
    select: {
      title: true,
      description: true,
    },
  });
}

export default function Home() {
  return (
    <>
      <div className="py-6">
        <h1 className="text-3xl font-semibold tracking-tight mb-8">
          Latest Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      </div>
    </>
  );
}
