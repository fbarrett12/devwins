import { logoutAction } from "@/app/actions/authActions";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="text-sm font-medium text-slate-600 hover:text-slate-950"
      >
        Logout
      </button>
    </form>
  );
}