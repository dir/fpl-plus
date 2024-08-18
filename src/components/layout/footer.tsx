import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto pb-6 text-center shadow-sm">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          href="https://luke.onl"
          className="text-sky-600 underline-offset-2 transition-colors hover:text-sky-700 hover:underline dark:text-sky-400 dark:hover:text-sky-300"
        >
          Luke Davis
        </Link>
      </p>
    </footer>
  );
}
