"use client"

import * as React from "react"
import {
  BookOpen,
  Command,
  UserCheckIcon,
  LockIcon,
  MessageCircleIcon,
  PieChart,
  LogOutIcon,
  SquareTerminal,
  MapIcon
} from "lucide-react"
import Image from 'next/image';
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Газрын зураг",
      url: "/admin/map",
      icon: MapIcon,
      isActive: true,
      items: [
        {
          title: "2D газрын зураг",
          url: "/admin/map/twoDmap",
        },
        {
          title: "3D газрын зураг",
          url: "/admin/map/threeDmap",
        },

      ],
    },
    {
      title: "Бүртгэл",
      url: "/admin/register",
      icon: SquareTerminal,
      items: [
        {
          title: "Меню ",
          url: "/admin/register/category",
        },
        {
          title: "Тоон үзүүлэлт",
          url: "/admin/register/statistic",
        },
         {
          title: "Түгээмэл асуулт хариулт",
          url: "/admin/register/statistic",
        },
      ],
    },
    {
      title: "Мэдээлэл",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Газрын зургын мэдээлэл",
          url: "/admin/info/map",
        },
        {
          title: "Бусад мэдээлэл",
          url: "/admin/info/other",
        },

      ],
    },
  ],
  navSecondary: [
    {
      title: "Нууц үг солих",
      url: "/admin/settings",
      icon: LockIcon,
    },
    {
      title: "Гарах",
      url: "/auth",
      icon: LogOutIcon,
    },
  ],
  projects: [
    {
      name: "Хэрэглэгчийн мэдээлэл",
      url: "/admin/user/users",
      icon: UserCheckIcon,
    },
    {
      name: "Санал хүсэлт",
      url: "/admin/user/comment",
      icon: MessageCircleIcon,
    },

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-(--header-height))!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Home">
              <div className="flex flex-col items-center justify-center gap-1">
                <a href="/admin" className="flex flex-col items-center gap-1">
                  {/* <div className="bg-[#306c12] text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Image src="/agro_log.png" width={50} height={50} alt="logo" />
                  </div> */}
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Agro City</span>
                    <span className="truncate text-xs">Эдийн засгийн тусгай бүс</span>
                  </div>
                </a>
              </div>
            </SidebarMenuButton>

            {/* <SidebarMenuButton size="lg" asChild>
              <a href="/admin">
                <div className="bg-[#306c12] text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                 
                    <Image src="/agro_log.png" width={50} height={50} alt="logo" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Agro City</span>
                  <span className="truncate text-xs">Эдийн засгийн тусгай бүс</span>
                </div>
              </a>
            </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}
