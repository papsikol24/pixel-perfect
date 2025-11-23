import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CreditCard, Wallet, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Successful!",
      description: "Your payment has been processed successfully.",
    });
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-secondary">
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Make Payment</h1>
              <p className="text-sm text-muted-foreground">Complete your payment securely</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                  <CardDescription>Choose your payment method and complete the transaction</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-3">
                      <Label>Payment Method</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex flex-1 cursor-pointer items-center gap-3">
                            <CreditCard className="h-5 w-5 text-primary" />
                            <span>Credit/Debit Card</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50">
                          <RadioGroupItem value="ewallet" id="ewallet" />
                          <Label htmlFor="ewallet" className="flex flex-1 cursor-pointer items-center gap-3">
                            <Wallet className="h-5 w-5 text-accent" />
                            <span>E-Wallet (GCash, PayMaya)</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank" className="flex flex-1 cursor-pointer items-center gap-3">
                            <Building2 className="h-5 w-5 text-primary" />
                            <span>Bank Transfer</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" type="password" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Cardholder Name</Label>
                          <Input id="card-name" placeholder="John Doe" required />
                        </div>
                      </div>
                    )}

                    {paymentMethod === "ewallet" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="mobile">Mobile Number</Label>
                          <Input id="mobile" placeholder="09XX XXX XXXX" required />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          You will receive a notification on your mobile device to confirm the payment
                        </p>
                      </div>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="account">Account Number</Label>
                          <Input id="account" placeholder="Enter account number" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bank-name">Bank Name</Label>
                          <Input id="bank-name" placeholder="Enter bank name" required />
                        </div>
                      </div>
                    )}

                    <Button type="submit" className="w-full" size="lg">
                      Pay ₱2,000.00
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Fee Type</span>
                      <span className="font-medium">Miscellaneous Fee</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Student ID</span>
                      <span className="font-medium">2024-00123</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Due Date</span>
                      <span className="font-medium">Nov 30, 2024</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-primary">₱2,000.00</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-primary/5 p-4">
                    <p className="text-xs text-muted-foreground">
                      Your payment will be processed securely. You will receive a confirmation email and SMS once the transaction is complete.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
