"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock, Shield, Ban as Bank } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePlaidLink } from "react-plaid-link";
import { useEffect, useState } from "react";

export default function ConnectPage() {
  const router = useRouter();
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const createLinkToken = async () => {
      try {
        const response = await fetch("/api/plaid/create_link_token", {
          method: "POST",
        });
        const { link_token } = await response.json();
        setLinkToken(link_token);
      } catch (error) {
        console.error("Error creating link token:", error);
      }
    };

    createLinkToken();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token) => {
      setLoading(true);
      try {
        // Get the JWT token from localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await fetch("/api/plaid/exchange_public_token", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ public_token }),
        });

        if (response.ok) {
          router.push("/recommendation");
        } else {
          console.error("Failed to exchange public token");
        }
      } catch (error) {
        console.error("Error exchanging public token:", error);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleConnect = () => {
    if (ready) {
      open();
    }
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
                <h3 className="font-medium mb-4">Connect with Plaid</h3>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    onClick={handleConnect}
                    disabled={!ready || loading}
                  >
                    {loading ? "Connecting..." : "Connect Your Bank Account"}
                  </Button>
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