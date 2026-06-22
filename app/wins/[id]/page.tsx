import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { winController } from "@/controllers/winController";
import { deleteWinAction } from "@/app/actions/winActions";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function WinDetailPage({ params }: PageProps) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const { id } = await params;
  const win = await winController.show(id, session.user.id);

  if (!win) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link href="/wins" className="mb-6 inline-block text-sm font-medium text-slate-500 hover:text-slate-950">
        ← Back to wins
      </Link>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <span className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {win.category.replace("_", " ")}
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950">
            {win.title}
          </h1>
        </div>

        {win.impactMetric && (
          <section className="mb-6 rounded-xl bg-slate-50 p-4">
            <h2 className="mb-1 text-sm font-semibold text-slate-500">
              Impact Metric
            </h2>
            <p className="text-xl font-semibold text-slate-950">
              {win.impactMetric}
            </p>
          </section>
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
                  <span key={technology} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        <form action={deleteWinAction.bind(null, win.id)} className="mt-8">
          <button className="rounded-xl border border-red-200 px-5 py-3 text-sm font-medium text-red-700 hover:bg-red-50">
            Delete Win
          </button>
        </form>
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