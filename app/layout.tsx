import "./globals.css";
import { AppSidebar } from "@/components/appSide/page";

import { ThemeProvider } from "./theme/themeProvider";

import GeneralProvider from "./provider/generalProvider";
import { SidebarTrigger } from "@/components/ui/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GeneralProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <AppSidebar />
            <main className="w-screen">
              <SidebarTrigger />
              {children}
            </main>
          </ThemeProvider>
        </GeneralProvider>
      </body>
    </html>
  );
}
