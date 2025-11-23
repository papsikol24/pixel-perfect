import { CheckCircle2, Bell, FileText, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CheckCircle2 className="h-10 w-10 text-success" />,
      title: "Instant Confirmation",
      description: "Real-time payment processing with immediate confirmation and receipt generation",
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Automated Notifications",
      description: "Email and SMS alerts for payment confirmations, due dates, and reminders",
    },
    {
      icon: <FileText className="h-10 w-10 text-accent" />,
      title: "Comprehensive Reports",
      description: "Detailed financial reports, transaction history, and analytics for administrators",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Multi-User Access",
      description: "Separate portals for students, parents, cashiers, and administrators",
    },
  ];

  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground">System Features</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to manage school payments efficiently and securely
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-card p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
