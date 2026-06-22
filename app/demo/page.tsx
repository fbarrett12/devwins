import Link from "next/link";

export default function DemoPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-medium text-slate-500">
          Public demo mode
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-950">
          Explore DevWins without creating an account
        </h1>

        <p className="mb-8 max-w-2xl text-slate-600">
          Browse sample wins across reliability, performance, cost savings,
          leadership, debugging, revenue, and architecture.
        </p>

        <Link
          href="/demo/wins"
          className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
        >
          View Demo Wins
        </Link>
      </section>
    </main>
  );
}