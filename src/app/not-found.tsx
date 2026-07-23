import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface px-6 text-center">
      <h1 className="text-6xl font-extrabold text-accent">404</h1>
      <p className="text-lg text-text-light">Cette page n&apos;existe pas.</p>
      <Link
        href="/"
        className="mt-4 text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        ← Retour à l&apos;accueil
      </Link>
    </main>
  );
}
