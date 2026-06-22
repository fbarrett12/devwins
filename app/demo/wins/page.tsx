import Link from "next/link";
import { winController } from "@/controllers/winController";

export default async function DemoWinsPage() {
  const wins = await winController.demoIndex();

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

      <div className="grid gap-4">
        {wins.map((win) => (
          <Link
            key={win.id}
            href={`/demo/wins/${win.id}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold text-slate-950">
                {win.title}
              </h2>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {win.category.replace("_", " ")}
              </span>
            </div>

            {win.impactMetric && (
              <p className="mb-3 text-sm font-semibold text-slate-900">
                Impact: {win.impactMetric}
              </p>
            )}

            {win.result && (
              <p className="line-clamp-2 text-sm text-slate-600">
                {win.result}
              </p>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}