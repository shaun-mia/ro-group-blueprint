import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    {children}
  </TooltipProvider>
);
