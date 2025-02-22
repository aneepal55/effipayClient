"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CreditCard, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-100 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Find Your Perfect Credit Card Match
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get personalized credit card recommendations based on your preferences
            and spending habits.
          </p>
          <div className="mt-10">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Process</h3>
              <p className="text-gray-600">
                Your financial data is protected with bank-level security and encryption.
              </p>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">
                AI-powered analysis to match you with the best credit cards for your needs.
              </p>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center">
              <CreditCard className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Rewards</h3>
              <p className="text-gray-600">
                Get rewards that match your lifestyle and spending patterns.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}