import Link from "next/link";
import { signupAction } from "@/app/actions/authActions";

export default function SignupPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-slate-500">
          Create your account
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Sign Up
        </h1>
      </div>

      <form
        action={signupAction}
        className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Name
          </label>

          <input
            name="name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

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
          Create Account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-slate-950"
        >
          Log In
        </Link>
      </p>
    </main>
  );
}