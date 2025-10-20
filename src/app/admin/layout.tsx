"use client";

export const iframeHeight = "800px";
export const description = "A sidebar with a header and a search form.";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {/* Хоёр багана: sidebar + main хэсэг */}
      <div className="grid grid-cols-[250px_1fr] h-screen w-full">
        {/* Зүүн талын sidebar */}
        <AppSidebar />

        {/* Баруун талын main хэсэг */}
        <div className="flex flex-col h-full w-full">
          {/* Header дээр */}
          <SiteHeader />
          {/* Доорх контент хэсэг */}
          <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
