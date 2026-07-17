"use client";

type ComingSoonAuthButtonProps = {
  provider: "Google" | "LinkedIn";
};

export function ComingSoonAuthButton({
  provider,
}: ComingSoonAuthButtonProps) {
  function handleClick() {
    window.alert(`${provider} sign-in is coming soon.`);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-disabled="true"
      title={`${provider} sign-in coming soon`}
      className="
        flex w-full cursor-not-allowed items-center justify-center
        rounded-md border border-gray-300 px-4 py-2
        text-sm font-medium text-gray-500
        opacity-70 transition hover:bg-gray-50
      "
    >
      Continue with {provider}
      <span className="ml-2 text-xs">(Coming soon)</span>
    </button>
  );
}