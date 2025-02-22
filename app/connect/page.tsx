"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Lock, Shield, Ban as Bank } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ConnectPage() {
  const router = useRouter();

  const handleConnect = () => {
    // Simulate bank connection
    setTimeout(() => {
      router.push("/recommendation");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Connect Your Bank Account</CardTitle>
            <CardDescription>
              Securely connect your bank account to get personalized recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4">
                  <Lock className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-medium mb-2">Bank-Level Security</h3>
                  <p className="text-sm text-gray-500">
                    Your data is encrypted and securely stored
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <Shield className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-medium mb-2">Privacy Protected</h3>
                  <p className="text-sm text-gray-500">
                    We never share your personal information
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <Bank className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-medium mb-2">Read-Only Access</h3>
                  <p className="text-sm text-gray-500">
                    We can only view your transactions
                  </p>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-4">Select Your Bank</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Chase", "Bank of America", "Wells Fargo", "Citibank", "Capital One", "Other"].map(
                    (bank) => (
                      <Button
                        key={bank}
                        variant="outline"
                        className="h-20 flex flex-col gap-2"
                        onClick={handleConnect}
                      >
                        <Bank className="h-6 w-6" />
                        {bank}
                      </Button>
                    )
                  )}
                </div>
              </div>

              <div className="text-center text-sm text-gray-500">
                By connecting your account, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}