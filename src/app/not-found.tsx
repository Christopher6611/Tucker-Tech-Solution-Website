import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-24 pb-20 text-center">
      <h1 className="font-display text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
      <p className="text-body text-[var(--text-body)] mb-6">Page not found. The page you're looking for doesn't exist.</p>
      <Link href="/" className="text-[var(--color-secondary)] hover:underline">Go back home</Link>
    </div>
  );
}