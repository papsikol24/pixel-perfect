import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, Download, Calendar, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const payments = [
    {
      id: "TXN001",
      description: "Tuition Fee - Semester 1",
      amount: 25000,
      status: "paid",
      date: "2024-11-15",
    },
    {
      id: "TXN002",
      description: "Laboratory Fee",
      amount: 3500,
      status: "paid",
      date: "2024-11-15",
    },
    {
      id: "TXN003",
      description: "Miscellaneous Fee",
      amount: 2000,
      status: "pending",
      date: "2024-11-30",
    },
  ];

  const totalPaid = payments
    .filter(p => p.status === "paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPending = payments
    .filter(p => p.status === "pending")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen bg-secondary">
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/portal')}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Student Dashboard</h1>
                <p className="text-sm text-muted-foreground">Student ID: 2024-00123</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => navigate('/portal')}>
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardDescription>Total Paid</CardDescription>
              <CardTitle className="text-3xl text-primary">
                ₱{totalPaid.toLocaleString()}
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-l-4 border-l-warning">
            <CardHeader className="pb-3">
              <CardDescription>Pending Payment</CardDescription>
              <CardTitle className="text-3xl text-warning">
                ₱{totalPending.toLocaleString()}
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardDescription>Total Transactions</CardDescription>
              <CardTitle className="text-3xl text-accent">
                {payments.length}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>View and manage your payment records</CardDescription>
              </div>
              <Button onClick={() => navigate('/payment')}>
                <CreditCard className="mr-2 h-4 w-4" />
                Make Payment
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      {payment.status === "paid" ? (
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      ) : payment.status === "pending" ? (
                        <Clock className="h-5 w-5 text-warning" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{payment.description}</h3>
                        <Badge
                          variant={payment.status === "paid" ? "default" : "secondary"}
                          className={
                            payment.status === "paid"
                              ? "bg-success text-success-foreground"
                              : "bg-warning text-warning-foreground"
                          }
                        >
                          {payment.status}
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(payment.date).toLocaleDateString()}
                        </span>
                        <span>ID: {payment.id}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-foreground">
                      ₱{payment.amount.toLocaleString()}
                    </span>
                    {payment.status === "paid" && (
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
