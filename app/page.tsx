import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
        Career wins, organized.
      </p>

      <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
        Turn your engineering work into proof of impact.
      </h1>

      <p className="mb-10 max-w-2xl text-lg text-slate-600">
        DevWins helps engineers capture achievements, metrics, STAR stories,
        technologies, and outcomes before they get forgotten.
      </p>

      <Link
        href="/wins"
        className="rounded-xl bg-slate-950 px-6 py-3 font-medium text-white hover:bg-slate-800"
      >
        View Your Wins
      </Link>
    </main>
  );
}