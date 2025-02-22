"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Plane,
  ShoppingBag,
  Utensils,
  Car,
  ArrowRight,
  Percent,
  Gift,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PreferencesPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/connect");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Select Your Reward Preferences</CardTitle>
            <CardDescription>
              Help us understand what matters most to you in a credit card
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Label>What type of rewards do you prefer?</Label>
                <RadioGroup defaultValue="cashback" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Label
                    htmlFor="cashback"
                    className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
                  >
                    <RadioGroupItem value="cashback" id="cashback" />
                    <Percent className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Cash Back</div>
                      <div className="text-sm text-gray-500">
                        Get money back on your purchases
                      </div>
                    </div>
                  </Label>
                  <Label
                    htmlFor="points"
                    className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
                  >
                    <RadioGroupItem value="points" id="points" />
                    <Gift className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Points</div>
                      <div className="text-sm text-gray-500">
                        Earn points for flexible redemption
                      </div>
                    </div>
                  </Label>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Which spending categories are most important to you?</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Plane,
                      title: "Travel",
                      description: "Flights, hotels, and car rentals",
                    },
                    {
                      icon: ShoppingBag,
                      title: "Shopping",
                      description: "Retail purchases and online shopping",
                    },
                    {
                      icon: Utensils,
                      title: "Dining",
                      description: "Restaurants and food delivery",
                    },
                    {
                      icon: Car,
                      title: "Transportation",
                      description: "Gas, ride-sharing, and transit",
                    },
                  ].map((category) => (
                    <Label
                      key={category.title}
                      className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:border-primary transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-primary rounded border-gray-300"
                      />
                      <category.icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{category.title}</div>
                        <div className="text-sm text-gray-500">
                          {category.description}
                        </div>
                      </div>
                    </Label>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full gap-2">
                Continue <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}