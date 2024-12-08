"use client";

import { Cafe } from "@/types/cafe";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Rating } from "./ui/rating";
import { Wifi, Power, Volume2 } from "lucide-react";
import Image from "next/image";

interface CafeCardProps {
  cafe: Cafe;
}

export function CafeCard({ cafe }: CafeCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={cafe.imageUrl}
          alt={cafe.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{cafe.name}</h3>
            <p className="text-sm text-muted-foreground">{cafe.city}</p>
          </div>
          <Rating value={cafe.rating} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{cafe.description}</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4" />
            <span className="text-sm">{cafe.wifiSpeed}</span>
          </div>
          <div className="flex items-center gap-2">
            <Power className="w-4 h-4" />
            <span className="text-sm">{cafe.powerOutlets}</span>
          </div>
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
            <span className="text-sm">{cafe.noiseLevel}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {cafe.features.map((feature) => (
            <span
              key={feature}
              className="px-2 py-1 text-xs bg-secondary rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}