import Link from "next/link";
import { loginAction } from "@/app/actions/authActions";
import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-slate-500">Welcome back</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Log In
        </h1>
      </div>

      <form
        action={loginAction}
        className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-950 px-5 py-3 text-white"
        >
          Log In
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs font-medium uppercase text-slate-400">
          or
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-3">
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/wins" });
          }}
        >
          <button className="w-full rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Continue with GitHub
          </button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/wins" });
          }}
        >
          <button className="w-full rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Continue with Google
          </button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("linkedin", { redirectTo: "/wins" });
          }}
        >
          <button className="w-full rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Continue with LinkedIn
          </button>
        </form>
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        Need an account?{" "}
        <Link href="/signup" className="font-medium text-slate-950">
          Sign Up
        </Link>
      </p>
    </main>
  );
}