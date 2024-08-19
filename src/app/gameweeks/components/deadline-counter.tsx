"use client";

import { useEffect, useState } from "react";

import { cn } from "~/lib/utils";

export default function DeadlineCounter({
  className,
  deadline,
}: {
  className?: string;
  deadline: string;
}) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const deadlineDate = new Date(deadline);
      const difference = deadlineDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("Deadline passed");
      }
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return <span className={cn(className)}>{timeLeft}</span>;
}
