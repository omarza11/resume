import { Home, PersonStanding, BookOpenText, BriefcaseBusiness, Mail } from "lucide-react"
import Image from 'next/image'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "About",
    url: "#about",
    icon: PersonStanding,
  },
  {
    title: "Resume",
    url: "#resume",
    icon: BookOpenText,
  },
  {
    title: "Portfolio",
    url: "#portfolio",
    icon: BriefcaseBusiness,
  },
  {
    title: "Contact",
    url: "#contact",
    icon: Mail,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader>
            <Image 
                  src="/Headshot.jpg"
                  width={200}
                  height={200}
                  alt="Omar Abdelqader Headshot"
                  className="rounded-full object-cover w-full h-full border-8 border-solid border-gray-300"
                  priority={true} 
            />
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Resume</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
