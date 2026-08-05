import { type ReactNode } from 'react'
import {
  Award,
  Bell,
  BookOpen,
  CalendarCheck,
  Download,
  LayoutDashboard,
  ListChecks,
  MonitorCheck,
  UploadCloud,
} from 'lucide-react'
import DashboardLayout, { SectionPlaceholder } from '@/components/dashboard/DashboardLayout'
import StatCard from '@/components/dashboard/StatCard'
import CapabilityCard from '@/components/dashboard/CapabilityCard'
import ActivityList from '@/components/dashboard/ActivityList'
import MiniBarChart from '@/components/dashboard/MiniBarChart'
import SubjectsMaterials from '@/components/dashboard/student/SubjectsMaterials'
import AssignmentSubmission from '@/components/dashboard/student/AssignmentSubmission'
import OnlineQuizzes from '@/components/dashboard/student/OnlineQuizzes'
import CBTExaminations from '@/components/dashboard/student/CBTExaminations'
import AttendanceRecords from '@/components/dashboard/student/AttendanceRecords'
import ReportCardsResults from '@/components/dashboard/student/ReportCardsResults'
import NotificationsSection from '@/components/dashboard/student/NotificationsSection'
import LearningResources from '@/components/dashboard/student/LearningResources'
import { studentData } from '@/data/dashboardData'

const icons = [BookOpen, UploadCloud, ListChecks, MonitorCheck, CalendarCheck, Award, Bell, Download]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  ...studentData.capabilities.map((c, i) => ({ label: c.title, icon: icons[i % icons.length] })),
]

// navItems[0] is "Overview"; every item after that lines up 1:1 with
// studentData.capabilities by id (capability id 1 -> navItems index 1,
// and so on), so this map is just "capability id -> section component".
const sections: Record<number, ReactNode> = {
  1: <SubjectsMaterials />,
  2: <AssignmentSubmission />,
  3: <OnlineQuizzes />,
  4: <CBTExaminations />,
  5: <AttendanceRecords />,
  6: <ReportCardsResults />,
  7: <NotificationsSection />,
  8: <LearningResources />,
}

function Overview({ goTo }: { goTo: (index: number) => void }) {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {studentData.stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink-900">
          Everything for your learning, in one place
        </h2>
        <p className="mt-1 text-sm text-ink-500">Courses, assignments, exams, and results.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studentData.capabilities.map((cap, i) => (
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
          <MiniBarChart {...studentData.chart} />
        </div>
        <div className="lg:col-span-3">
          <ActivityList items={studentData.activity} />
        </div>
      </div>
    </div>
  )
}

export default function StudentDashboard() {
  return (
    <DashboardLayout roleLabel="Student" userName="Chidinma E." navItems={navItems}>
      {(active, goTo) => {
        if (active === 0) return <Overview goTo={goTo} />
        return sections[active] ?? <SectionPlaceholder label={navItems[active].label} />
      }}
    </DashboardLayout>
  )
}
