import { Category } from "@prisma/client";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { createWinAction } from "@/app/actions/winActions";

export default async function NewWinPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-slate-500">
          Capture your impact
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Add a Win
        </h1>
      </div>

      <form action={createWinAction} className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Title
          </label>
          <input name="title" required className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" placeholder="Reduced cloud costs by 20%" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Category
          </label>
          <select name="category" required className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950">
            {Object.values(Category).map((category) => (
              <option key={category} value={category}>
                {category.replace("_", " ")}
              </option>
            ))}
          </select>
        </div>

        {["situation", "task", "action", "result"].map((field) => (
          <div key={field}>
            <label className="mb-2 block text-sm font-medium text-slate-700 capitalize">
              {field}
            </label>
            <textarea name={field} rows={4} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" />
          </div>
        ))}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Impact Metric
          </label>
          <input name="impactMetric" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" placeholder="20% cost reduction" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Technologies
          </label>
          <input name="technologies" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950" placeholder="Rails, AWS, PostgreSQL" />
          <p className="mt-2 text-sm text-slate-500">
            Separate technologies with commas.
          </p>
        </div>

        <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20">
          Save Win
        </button>
      </form>
    </main>
  );
}