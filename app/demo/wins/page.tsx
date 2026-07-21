import Link from "next/link";
import { winController } from "@/controllers/winController";
import WinSearchList from "@/components/WinSearchList";

export default async function DemoWinsPage() {
  const wins = await winController.demoIndex();

  const searchableWins = wins.map((win) => ({
    id: win.id,
    title: win.title,
    category: win.category,
    impactMetric: win.impactMetric,
    result: win.result,
  }));

  const totalWins = searchableWins.length;

  const totalCategories = new Set(searchableWins.map((win) => win.category)).size;

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Public demo data
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">
            Demo Wins
          </h1>
        </div>

        <Link
          href="/signup"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
        >
          Create Your Own
        </Link>
      </div>

      <WinSearchList 
        wins={searchableWins} 
        basePath="/demo/wins"
        totalWins={totalWins}
        totalCategories={totalCategories} 
      />
    </main>
  );
}