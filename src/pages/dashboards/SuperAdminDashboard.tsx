import {
  Award,
  ClipboardList,
  Globe,
  LayoutDashboard,
  LayoutGrid,
  Megaphone,
  ScrollText,
  UserCheck,
  Users,
  Wallet,
} from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import StatCard from '@/components/dashboard/StatCard'
import CapabilityCard from '@/components/dashboard/CapabilityCard'
import ActivityList from '@/components/dashboard/ActivityList'
import MiniBarChart from '@/components/dashboard/MiniBarChart'
import { adminData } from '@/data/dashboardData'

const icons = [Users, LayoutGrid, UserCheck, Wallet, ClipboardList, ScrollText, Megaphone, Award, Globe]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  ...adminData.capabilities.map((c, i) => ({ label: c.title, icon: icons[i % icons.length] })),
]

export default function SuperAdminDashboard() {
  return (
    <DashboardLayout roleLabel="Super Admin" userName="Mrs. Chiamaka Nwosu" navItems={navItems}>
      {(goTo) => (
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {adminData.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">
              Full administrative control
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              Every part of the school system, in one place.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {adminData.capabilities.map((cap, i) => (
                <CapabilityCard
                  key={cap.id}
                  index={cap.id}
                  title={cap.title}
                  description={cap.description}
                  onOpen={() => goTo(i + 1)}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <MiniBarChart {...adminData.chart} />
            </div>
            <div className="lg:col-span-3">
              <ActivityList items={adminData.activity} />
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
