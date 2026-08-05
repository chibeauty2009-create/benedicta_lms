import {
  Award,
  BarChart3,
  CalendarCheck,
  CheckSquare,
  ClipboardCheck,
  FilePlus2,
  LayoutDashboard,
  MessagesSquare,
  UploadCloud,
} from 'lucide-react'
import DashboardLayout, { SectionPlaceholder } from '@/components/dashboard/DashboardLayout'
import StatCard from '@/components/dashboard/StatCard'
import CapabilityCard from '@/components/dashboard/CapabilityCard'
import ActivityList from '@/components/dashboard/ActivityList'
import MiniBarChart from '@/components/dashboard/MiniBarChart'
import TakeAttendance from '@/components/dashboard/attendance/TakeAttendance'
import { teacherData } from '@/data/dashboardData'

const icons = [CalendarCheck, UploadCloud, FilePlus2, CheckSquare, ClipboardCheck, Award, BarChart3, MessagesSquare]

// navItems[0] is "Overview"; capability id 1 ("Digital Attendance")
// is navItems index 1 — that's the ATTENDANCE_INDEX below.
const ATTENDANCE_INDEX = 1

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  ...teacherData.capabilities.map((c, i) => ({ label: c.title, icon: icons[i % icons.length] })),
]

function Overview({ goTo }: { goTo: (index: number) => void }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teacherData.stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">
          Tools to teach, assess, and communicate
        </h2>
        <p className="mt-1 text-sm text-ink-500">Everything for your classes, in one place.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teacherData.capabilities.map((cap, i) => (
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
          <MiniBarChart {...teacherData.chart} />
        </div>
        <div className="lg:col-span-3">
          <ActivityList items={teacherData.activity} />
        </div>
      </div>
    </div>
  )
}

export default function TeacherDashboard() {
  return (
    <DashboardLayout roleLabel="Teacher" userName="Mr. Femi Adisa" navItems={navItems}>
      {(active, goTo) => {
        if (active === 0) return <Overview goTo={goTo} />
        if (active === ATTENDANCE_INDEX) return <TakeAttendance />
        return <SectionPlaceholder label={navItems[active].label} />
      }}
    </DashboardLayout>
  )
}
