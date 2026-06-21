import { signupAction } from "@/app/actions/authActions";

export default function SignupPage() {
  return (
    <main className="mx-auto max-w-md p-8">
      <h1 className="mb-6 text-3xl font-bold">Create your account</h1>

      <form action={signupAction} className="space-y-4">
        <input name="name" placeholder="Name" className="w-full rounded border p-3" />
        <input name="email" type="email" placeholder="Email" className="w-full rounded border p-3" />
        <input name="password" type="password" placeholder="Password" className="w-full rounded border p-3" />

        <button className="w-full rounded bg-black px-4 py-3 text-white">
          Sign up
        </button>
      </form>
    </main>
  );
}