// app/provider/generalProvider.tsx (or app/provider/Providers.tsx)
"use client";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
    <SidebarProvider>
      {children}
    </SidebarProvider>
    </Providers>

  );
}
