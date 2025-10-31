import "./globals.css";
import { AppSidebar } from "@/components/appSide/page";

import { ThemeProvider } from "./theme/themeProvider";


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Providers } from "./provider/storeProvider";
import { QueryProviders } from "./provider/QueryProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <QueryProviders>
            <SidebarProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
              >
                <AppSidebar />
                <main className="w-screen">
                  <SidebarTrigger />
                  {children}
                </main>
              </ThemeProvider>
            </SidebarProvider>
          </QueryProviders>
        </Providers>
      </body>
    </html>
  );
}
