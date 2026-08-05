import {
  Award,
  Bell,
  CalendarCheck,
  ClipboardCheck,
  CreditCard,
  LayoutDashboard,
  MessageCircle,
  MessagesSquare,
  TrendingUp,
} from 'lucide-react'
import DashboardLayout, { SectionPlaceholder } from '@/components/dashboard/DashboardLayout'
import StatCard from '@/components/dashboard/StatCard'
import CapabilityCard from '@/components/dashboard/CapabilityCard'
import ActivityList from '@/components/dashboard/ActivityList'
import MiniBarChart from '@/components/dashboard/MiniBarChart'
import { parentData } from '@/data/dashboardData'

const icons = [TrendingUp, Award, ClipboardCheck, CalendarCheck, MessageCircle, Bell, MessagesSquare, CreditCard]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  ...parentData.capabilities.map((c, i) => ({ label: c.title, icon: icons[i % icons.length] })),
]

function Overview({ goTo }: { goTo: (index: number) => void }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {parentData.stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">
          Stay connected to your child's academic journey
        </h2>
        <p className="mt-1 text-sm text-ink-500">
          Progress, results, attendance, and communication in one view.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {parentData.capabilities.map((cap, i) => (
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
          <MiniBarChart {...parentData.chart} />
        </div>
        <div className="lg:col-span-3">
          <ActivityList items={parentData.activity} />
        </div>
      </div>
    </div>
  )
}

export default function ParentDashboard() {
  return (
    <DashboardLayout roleLabel="Parent" userName="Mrs. Adaeze Okonkwo" navItems={navItems}>
      {(active, goTo) => {
        if (active === 0) return <Overview goTo={goTo} />
        return <SectionPlaceholder label={navItems[active].label} />
      }}
    </DashboardLayout>
  )
}
