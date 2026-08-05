import { type ReactNode } from 'react'
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
import AcademicProgress from '@/components/dashboard/parent/AcademicProgress'
import ParentReportCards from '@/components/dashboard/parent/ParentReportCards'
import ExaminationResults from '@/components/dashboard/parent/ExaminationResults'
import ParentAttendanceRecords from '@/components/dashboard/parent/ParentAttendanceRecords'
import TeacherComments from '@/components/dashboard/parent/TeacherComments'
import SchoolNotifications from '@/components/dashboard/parent/SchoolNotifications'
import MessageTeachers from '@/components/dashboard/parent/MessageTeachers'
import PaySchoolFees from '@/components/dashboard/parent/PaySchoolFees'
import { parentData } from '@/data/dashboardData'

const icons = [TrendingUp, Award, ClipboardCheck, CalendarCheck, MessageCircle, Bell, MessagesSquare, CreditCard]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  ...parentData.capabilities.map((c, i) => ({ label: c.title, icon: icons[i % icons.length] })),
]

// navItems[0] is "Overview"; every item after that lines up 1:1 with
// parentData.capabilities by id (capability id 1 -> navItems index 1,
// and so on), so this map is just "capability id -> section component".
const sections: Record<number, ReactNode> = {
  1: <AcademicProgress />,
  2: <ParentReportCards />,
  3: <ExaminationResults />,
  4: <ParentAttendanceRecords />,
  5: <TeacherComments />,
  6: <SchoolNotifications />,
  7: <MessageTeachers />,
  8: <PaySchoolFees />,
}

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
        return sections[active] ?? <SectionPlaceholder label={navItems[active].label} />
      }}
    </DashboardLayout>
  )
}
