import AppSidebar from "@/components/layout/app-sidebar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Property Management System",
  description: "A property management system",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppSidebar>{children}</AppSidebar>
}
