import React from "react";

import { Spotlight } from "~/components/ui/aceternity/spotlight";

export default function HomePage() {
  return <SpotlightPreview />;
}

export function SpotlightPreview() {
  return (
    <>
      <Spotlight className="-top-0 left-0 md:-top-20 md:left-60" fill="black" />
    </>
  );
}
