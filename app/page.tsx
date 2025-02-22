"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CreditCard, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FF5757] flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold tracking-tight text-white mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
              effipay
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your AI-powered payment optimizer that maximizes rewards by intelligently splitting payments across your cards
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Link href="/login">
              <Button size="lg" variant="secondary" className="gap-2 text-[#FF5757] hover:text-[#FF5757]/90">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" className="gap-2 bg-white text-[#FF5757] hover:bg-white/90 hover:text-[#FF5757]/90">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-16">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Smart Splits</h3>
              <p className="text-white/80">
                ML-powered payment optimization that automatically splits transactions to maximize your rewards
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <CreditCard className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Card Recommendations</h3>
              <p className="text-white/80">
                Get personalized card suggestions based on your spending patterns and reward preferences
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Secure Analysis</h3>
              <p className="text-white/80">
                Bank-level security while we analyze your transactions to optimize rewards
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}