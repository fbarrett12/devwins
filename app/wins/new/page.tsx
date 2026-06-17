import { Category } from "@prisma/client";
import { createWinAction } from "@/app/actions/winActions";

export default function NewWinPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">Add a DevWin</h1>

      <form action={createWinAction} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            name="title"
            required
            className="w-full rounded border p-2"
            placeholder="Reduced cloud costs by 20%"
          />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <select name="category" required className="w-full rounded border p-2">
            {Object.values(Category).map((category) => (
              <option key={category} value={category}>
                {category.replace("_", " ")}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium">Situation</label>
          <textarea name="situation" className="w-full rounded border p-2" />
        </div>

        <div>
          <label className="block font-medium">Task</label>
          <textarea name="task" className="w-full rounded border p-2" />
        </div>

        <div>
          <label className="block font-medium">Action</label>
          <textarea name="action" className="w-full rounded border p-2" />
        </div>

        <div>
          <label className="block font-medium">Result</label>
          <textarea name="result" className="w-full rounded border p-2" />
        </div>

        <div>
          <label className="block font-medium">Impact Metric</label>
          <input
            name="impactMetric"
            className="w-full rounded border p-2"
            placeholder="20% cost reduction"
          />
        </div>

        <div>
          <label className="block font-medium">Technologies</label>
          <input
            name="technologies"
            className="w-full rounded border p-2"
            placeholder="Rails, AWS, PostgreSQL"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Save Win
        </button>
      </form>
    </main>
  );
}