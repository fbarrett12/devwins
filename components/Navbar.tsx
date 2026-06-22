import Link from "next/link";
import { auth } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-950">
          DevWins
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/demo"
            className="text-sm font-medium text-slate-600 hover:text-slate-950"
          >
            Demo
          </Link>

          {session?.user?.id ? (
            <>
              <Link
                href="/wins"
                className="text-sm font-medium text-slate-600 hover:text-slate-950"
              >
                Wins
              </Link>

              <Link
                href="/wins/new"
                className="text-sm font-medium text-slate-600 hover:text-slate-950"
              >
                Add Win
              </Link>

              <span className="hidden text-sm text-slate-500 sm:inline">
                {session.user.name || session.user.email}
              </span>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-slate-600 hover:text-slate-950"
              >
                Log In
              </Link>

              <Link
                href="/signup"
                className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}