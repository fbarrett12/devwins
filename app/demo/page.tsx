import ButtonLink from "@/components/ui/ButtonLink";

export default function DemoPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-medium text-slate-500">
          Public demo mode
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-950">
          Explore Dev<span className="text-amber-500">Wins</span> without creating an account
        </h1>

        <p className="mb-8 max-w-2xl text-slate-600">
          Browse sample wins across reliability, performance, cost savings,
          leadership, debugging, revenue, and architecture.
        </p>

        <ButtonLink
          href="/demo/wins"
          variant="achievement"
          size="lg"
        >
          View Demo Wins
        </ButtonLink>
      </section>
    </main>
  );
}