import { type ReactNode } from 'react'
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
import NotesAssignments from '@/components/dashboard/teacher/NotesAssignments'
import QuizzesExams from '@/components/dashboard/teacher/QuizzesExams'
import OnlineMarking from '@/components/dashboard/teacher/OnlineMarking'
import GradingComments from '@/components/dashboard/teacher/GradingComments'
import TeacherReportCards from '@/components/dashboard/teacher/TeacherReportCards'
import PerformanceAnalytics from '@/components/dashboard/teacher/PerformanceAnalytics'
import ParentMessaging from '@/components/dashboard/teacher/ParentMessaging'
import { teacherData } from '@/data/dashboardData'

const icons = [CalendarCheck, UploadCloud, FilePlus2, CheckSquare, ClipboardCheck, Award, BarChart3, MessagesSquare]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  ...teacherData.capabilities.map((c, i) => ({ label: c.title, icon: icons[i % icons.length] })),
]

// navItems[0] is "Overview"; every item after that lines up 1:1 with
// teacherData.capabilities by id (capability id 1 -> navItems index 1,
// and so on), so this map is just "capability id -> section component".
const sections: Record<number, ReactNode> = {
  1: <TakeAttendance />,
  2: <NotesAssignments />,
  3: <QuizzesExams />,
  4: <OnlineMarking />,
  5: <GradingComments />,
  6: <TeacherReportCards />,
  7: <PerformanceAnalytics />,
  8: <ParentMessaging />,
}

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
        return sections[active] ?? <SectionPlaceholder label={navItems[active].label} />
      }}
    </DashboardLayout>
  )
}
