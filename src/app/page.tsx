import { ScanSearch } from "lucide-react";
import React from "react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { BackgroundBeams } from "~/components/ui/special/background-beams";
import BoxReveal from "~/components/ui/special/box-reveal";

export default function HomePage() {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="z-40 justify-center">
        <Hero />
      </div>
      <BackgroundBeams />
    </div>
  );
}

function Hero() {
  return (
    <div className="z-10 h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#22c55e"} duration={0.5}>
        <BigLogo />
      </BoxReveal>

      <BoxReveal boxColor={"#22c55e"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
          A better dashboard for{" "}
          <Link
            className="font-semibold text-green-500 transition-colors hover:text-green-400"
            href="/"
          >
            premier league fantasy
          </Link>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#22c55e"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt;{" "}
            <span className="font-semibold text-green-500">Real time</span>{" "}
            league standings
            <br />
            -&gt; Improved user interface <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#22c55e"} duration={0.5}>
        <Button asChild className="mt-8 inline-flex items-center bg-green-500">
          <Link href="/find-your-league">
            Find your league <ScanSearch className="ml-2" />
          </Link>
        </Button>
      </BoxReveal>
    </div>
  );
}

function BigLogo() {
  return (
    <div className="-ml-1 flex flex-row">
      <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-center font-sans text-8xl font-bold text-transparent">
        FPL
      </h1>
      <sup className="translate-y-6 bg-gradient-to-b from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-center font-sans text-6xl font-bold text-transparent">
        +
      </sup>
    </div>
  );
}
