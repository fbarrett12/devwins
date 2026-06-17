import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-950">
          DevWins
        </Link>

        <div className="flex gap-4 text-sm font-medium text-slate-600">
          <Link href="/wins" className="hover:text-slate-950">
            Wins
          </Link>
          <Link href="/wins/new" className="hover:text-slate-950">
            New Win
          </Link>
        </div>
      </div>
    </nav>
  );
}