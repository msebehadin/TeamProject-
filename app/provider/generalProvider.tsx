"use client"



import { SidebarProvider } from "@/components/ui/sidebar"
import { QueryProviders } from "./QueryProvider"



export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Providers >
      <QueryProviders >
        <SidebarProvider>{children}</SidebarProvider>
      </QueryProviders>
    </Providers>
  )
}
