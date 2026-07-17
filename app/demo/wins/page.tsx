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
          className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
        >
          Create Your Own
        </Link>
      </div>

      <WinSearchList 
        wins={searchableWins} 
        basePath="/demo/wins" 
      />
    </main>
  );
}