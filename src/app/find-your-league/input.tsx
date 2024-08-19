"use client";

import { ScanSearchIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function LeagueSearchForm() {
  const [leagueCode, setLeagueCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leagueCode) {
      router.push(`/leagues/classic/${leagueCode}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input
        placeholder="League code..."
        className="mb-4 w-full"
        value={leagueCode}
        onChange={(e) => setLeagueCode(e.target.value)}
      />
      <div className="flex justify-center">
        <Button type="submit" className="inline-flex items-center bg-green-500">
          Find your league <ScanSearchIcon className="ml-2" />
        </Button>
      </div>
    </form>
  );
}
