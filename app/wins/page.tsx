import Link from "next/link";
import { winController } from "@/controllers/winController";

export default async function WinsPage() {
  const wins = await winController.index();

  return (
    <main className="mx-auto max-w-4xl p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">DevWins</h1>

        <Link href="/wins/new" className="rounded bg-black px-4 py-2 text-white">
          Add Win
        </Link>
      </div>

      {wins.length === 0 ? (
        <p>No wins yet. Add your first one.</p>
      ) : (
        <div className="space-y-4">
          {wins.map((win) => (
            <Link
              key={win.id}
              href={`/wins/${win.id}`}
              className="block rounded border p-4 hover:bg-gray-50"
            >
              <h2 className="text-xl font-semibold">{win.title}</h2>
              <p className="text-sm text-gray-600">
                {win.category.replace("_", " ")}
              </p>

              {win.impactMetric && (
                <p className="mt-2 font-medium">{win.impactMetric}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}