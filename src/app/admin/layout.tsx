"use client";
export const iframeHeight = "800px"
export const description = "A sidebar with a header and a search form."
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"; // ← нэмнэ

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (

    <SidebarProvider className="flex flex-col ">
      <div className="[--header-height:calc(--spacing(14))] w-full">
        <SiteHeader />
      </div>
      <div className="flex flex-1 ">
        <AppSidebar />
        <SidebarInset >
          Main content
          <main className="flex-1 overflow-y-auto bg-gray-50 p-2">
            {children}
          </main>

        </SidebarInset>
      </div>
    </SidebarProvider >

    // <div className="[--header-height:calc(--spacing(14))] w-full">
    //   <SidebarProvider className="flex flex-col ">
    //     <SiteHeader />
    //     <div className="flex flex-1">
    //       {/* Sidebar */}

    //       <AppSidebar />

    //       {/* Main content */}
    //       <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
    //         {children}
    //       </main>
    //     </div>
    //   </SidebarProvider>
    // </div>
  );
}
