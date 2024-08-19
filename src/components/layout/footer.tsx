import Link from "next/link";

import Glow from "~/components/glow";

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center py-6 text-center shadow-sm">
      <div className="flex flex-row items-center text-muted-foreground">
        <p className="text-sm">&copy; {new Date().getFullYear()}</p>
        <span className="mx-1 text-sm">• Made by</span>
        <Link href="https://luke.onl">
          <Glow blur={"lg"}>Luke Davis</Glow>
        </Link>
      </div>
    </footer>
  );
}
