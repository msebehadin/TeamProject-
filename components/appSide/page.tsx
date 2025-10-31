import { FolderArchive, Home, Users } from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/app/theme/themeToogle"


// Menu items.
const items = [



  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "projects",
    url: "/projects",
    icon: FolderArchive,
  },
  {
    title:'team',
    url:'/app/team  ',
    icon:Users
  }
  
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel >
            TeamProject
          </SidebarGroupLabel>
      
          <SidebarGroupContent>
            <SidebarMenu>
            <ThemeToggle/>

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