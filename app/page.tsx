import { cafes } from "@/data/cafes";
import { CafeCard } from "@/components/cafe-card";
import { Coffee } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Coffee className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Work-Friendly Cafes</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Discover the best cafes for remote work across Germany
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cafes.map((cafe) => (
            <CafeCard key={cafe.id} cafe={cafe} />
          ))}
        </div>
      </div>
    </main>
  );
}