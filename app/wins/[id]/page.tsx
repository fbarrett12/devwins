import { notFound } from "next/navigation";
import { winController } from "@/controllers/winController";
import { deleteWinAction } from "@/app/actions/winActions";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function WinDetailPage({ params }: PageProps) {
  const { id } = await params;
  const win = await winController.show(id);

  if (!win) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="mb-2 text-3xl font-bold">{win.title}</h1>

      <p className="mb-6 text-sm text-gray-600">
        {win.category.replace("_", " ")}
      </p>

      {win.impactMetric && (
        <section className="mb-6">
          <h2 className="font-semibold">Impact Metric</h2>
          <p>{win.impactMetric}</p>
        </section>
      )}

      {win.situation && (
        <section className="mb-4">
          <h2 className="font-semibold">Situation</h2>
          <p>{win.situation}</p>
        </section>
      )}

      {win.task && (
        <section className="mb-4">
          <h2 className="font-semibold">Task</h2>
          <p>{win.task}</p>
        </section>
      )}

      {win.action && (
        <section className="mb-4">
          <h2 className="font-semibold">Action</h2>
          <p>{win.action}</p>
        </section>
      )}

      {win.result && (
        <section className="mb-4">
          <h2 className="font-semibold">Result</h2>
          <p>{win.result}</p>
        </section>
      )}

      {win.technologies.length > 0 && (
        <section className="mb-6">
          <h2 className="font-semibold">Technologies</h2>
          <p>{win.technologies.join(", ")}</p>
        </section>
      )}

      <form action={deleteWinAction.bind(null, win.id)}>
        <button className="rounded bg-red-600 px-4 py-2 text-white">
          Delete Win
        </button>
      </form>
    </main>
  );
}