"use client";

import { ScanSearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Spinner } from "~/components/ui/spinner";

export function LeagueSearchForm() {
  const [leagueCode, setLeagueCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      void router.push(`/leagues/${leagueCode}`);
    }
  }, [isLoading, leagueCode, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leagueCode) {
      setIsLoading(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input
        placeholder="12345"
        className="text-md mb-5 w-full font-mono [appearance:textfield] placeholder:text-muted-foreground/55 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        value={leagueCode}
        type="number"
        min={1}
        step={1}
        onChange={(e) => setLeagueCode(e.target.value)}
        disabled={isLoading}
      />
      <div className="flex justify-center">
        <Button
          type="submit"
          className="inline-flex items-center bg-green-500"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              Finding league{" "}
              <Spinner className="ml-2" color="green" size="sm" />
            </>
          ) : (
            <>
              Find your league <ScanSearchIcon className="ml-2" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
