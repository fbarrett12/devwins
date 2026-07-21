import Link from "next/link";

type DevWinsLogoProps = {
  href?: string;
  className?: string;
};

export default function DevWinsLogo({
  href = "/",
  className = "",
}: DevWinsLogoProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-xl font-bold tracking-tight text-slate-950 ${className}`}
    >
      Dev
      <span className="text-amber-500">Wins</span>
    </Link>
  );
}