import Link from "next/link";

import Glow from "~/components/glow";

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center pb-6 text-center shadow-sm">
      <div className="flex flex-row items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()}
        </p>
        <span className="mx-1">•</span>
        <Link href="https://luke.onl">
          <Glow blur={"lg"}>Luke Davis</Glow>
        </Link>
      </div>
    </footer>
  );
}
