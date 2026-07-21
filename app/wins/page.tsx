import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { winController } from "@/controllers/winController";
import WinSearchList from "@/components/WinSearchList";

export default async function WinsPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const wins = await winController.index(session.user.id);

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
          <p className="text-sm font-medium text-slate-500">Your impact log</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">
            Dev<span className="text-amber-500">Wins</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/wins/new"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
          >
            Add Win
          </Link>
        </div>
      </div>

      {wins.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <h2 className="mb-2 text-xl font-semibold text-slate-950">
            No wins yet
          </h2>

          <p className="mb-6 text-slate-600">
            Start by capturing a project, achievement, or measurable impact.
          </p>

          <Link
            href="/wins/new"
            className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white"
          >
            Add your first win
          </Link>
        </div>
      ) : (
        <WinSearchList 
        wins={searchableWins}
        totalWins={totalWins}
        totalCategories={totalCategories}
         />
      )}
    </main>
  );
}