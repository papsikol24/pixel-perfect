import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CreditCard, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative mx-auto px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-background/10 px-4 py-2 backdrop-blur-sm">
            <Shield className="h-4 w-4 text-background" />
            <span className="text-sm font-medium text-background">Secure Payment Processing</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-background sm:text-6xl lg:text-7xl">
            Online Payment Management System
          </h1>
          
          <p className="mb-10 text-xl text-background/90 sm:text-2xl">
            Streamline school fee collection with a secure, automated platform for students, parents, and administrators
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-background/90"
              onClick={() => navigate('/portal')}
            >
              Student Portal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-background bg-background/10 text-background hover:bg-background/20 backdrop-blur-sm"
              onClick={() => navigate('/admin')}
            >
              Admin Dashboard
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-24 grid max-w-5xl gap-8 sm:grid-cols-3">
          <FeatureCard
            icon={<CreditCard className="h-8 w-8 text-background" />}
            title="Easy Payments"
            description="Multiple payment methods including cards, e-wallets, and bank transfers"
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-background" />}
            title="Secure Transactions"
            description="Bank-level encryption and secure payment gateway integration"
          />
          <FeatureCard
            icon={<BarChart3 className="h-8 w-8 text-background" />}
            title="Real-time Reports"
            description="Instant transaction tracking and comprehensive financial reports"
          />
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="rounded-2xl border border-background/20 bg-background/10 p-6 backdrop-blur-sm transition-transform hover:scale-105">
    <div className="mb-4">{icon}</div>
    <h3 className="mb-2 text-xl font-semibold text-background">{title}</h3>
    <p className="text-background/80">{description}</p>
  </div>
);

export default Hero;
