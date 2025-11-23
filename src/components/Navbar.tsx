import { Button } from "@/components/ui/button";
import { CreditCard, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div 
            className="flex cursor-pointer items-center gap-2"
            onClick={() => navigate('/')}
          >
            <div className="rounded-lg bg-gradient-primary p-2">
              <CreditCard className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">PayEdu</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button 
              variant="outline"
              onClick={() => navigate('/portal')}
            >
              Login
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 flex flex-col gap-4">
                <a href="#features" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#about" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <Button 
                  className="w-full"
                  onClick={() => navigate('/portal')}
                >
                  Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
