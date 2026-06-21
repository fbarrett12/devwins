import { loginAction } from "@/app/actions/authActions";
import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md p-8">
      <h1 className="mb-6 text-3xl font-bold">Log in</h1>

      <form action={loginAction} className="space-y-4">
        <input name="email" type="email" placeholder="Email" className="w-full rounded border p-3" />
        <input name="password" type="password" placeholder="Password" className="w-full rounded border p-3" />

        <button className="w-full rounded bg-black px-4 py-3 text-white">
          Log in
        </button>
      </form>

      <div className="mt-6 space-y-3">
        <form action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/wins" });
        }}>
          <button className="w-full rounded border px-4 py-3">Continue with GitHub</button>
        </form>

        <form action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/wins" });
        }}>
          <button className="w-full rounded border px-4 py-3">Continue with Google</button>
        </form>

        <form action={async () => {
          "use server";
          await signIn("linkedin", { redirectTo: "/wins" });
        }}>
          <button className="w-full rounded border px-4 py-3">Continue with LinkedIn</button>
        </form>
      </div>
    </main>
  );
}