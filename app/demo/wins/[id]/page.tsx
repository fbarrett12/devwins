import Link from "next/link";
import { notFound } from "next/navigation";
import { winController } from "@/controllers/winController";
import { getCategoryStyle } from "@/lib/categoryStyles";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function DemoWinDetailPage({ params }: PageProps) {
  const { id } = await params;
  const win = await winController.demoShow(id);

  if (!win) {
    notFound();
  }

  const categoryStyle = getCategoryStyle(win.category);

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/demo/wins"
        className="mb-6 inline-block text-sm font-medium text-slate-500 hover:text-slate-950"
      >
        ← Back to demo wins
      </Link>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <span className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            Demo Win
          </span>

          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${categoryStyle.badge}`}
          >
            {win.category.replace("_", " ")}
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950">
            {win.title}
          </h1>
        </div>

        {win.impactMetric && (
          <div
            className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${categoryStyle.impact}`}
          >
            <span
              aria-hidden="true"
              className={`h-2 w-2 rounded-full ${categoryStyle.dot}`}
            />

            <span>Impact: {win.impactMetric}</span>
          </div>
        )}

        <div className="space-y-5">
          {win.situation && <Section title="Situation" body={win.situation} />}
          {win.task && <Section title="Task" body={win.task} />}
          {win.action && <Section title="Action" body={win.action} />}
          {win.result && <Section title="Result" body={win.result} />}

          {win.technologies.length > 0 && (
            <section>
              <h2 className="mb-2 text-sm font-semibold text-slate-500">
                Technologies
              </h2>

              <div className="flex flex-wrap gap-2">
                {win.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="mt-8 rounded-xl bg-slate-50 p-4">
          <p className="mb-3 text-sm text-slate-600">
            This is sample demo data. Create an account to start tracking your
            own engineering wins.
          </p>

          <Link
            href="/signup"
            className="inline-block rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Create Your Own DevWins
          </Link>
        </div>
      </article>
    </main>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="mb-1 text-sm font-semibold text-slate-500">{title}</h2>
      <p className="leading-7 text-slate-700">{body}</p>
    </section>
  );
}