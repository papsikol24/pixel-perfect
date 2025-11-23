import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      
      <section id="about" className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-foreground">About the System</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Our Online Payment Management System is designed to modernize and streamline the collection
              of school fees. By providing a secure, web-based platform, we enable students and parents
              to make payments conveniently from anywhere, while giving administrators powerful tools
              for tracking and managing financial transactions.
            </p>
            <p className="text-lg text-muted-foreground">
              With integration to trusted payment gateways, real-time processing, and comprehensive
              reporting capabilities, our system helps educational institutions save time, reduce errors,
              and improve the overall payment experience.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 PayEdu - Online Payment Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
