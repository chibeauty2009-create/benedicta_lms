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
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import StatCard from '@/components/dashboard/StatCard'
import CapabilityCard from '@/components/dashboard/CapabilityCard'
import ActivityList from '@/components/dashboard/ActivityList'
import MiniBarChart from '@/components/dashboard/MiniBarChart'
import { studentData } from '@/data/dashboardData'

const icons = [BookOpen, UploadCloud, ListChecks, MonitorCheck, CalendarCheck, Award, Bell, Download]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  ...studentData.capabilities.map((c, i) => ({ label: c.title, icon: icons[i % icons.length] })),
]

export default function StudentDashboard() {
  return (
    <DashboardLayout roleLabel="Student" userName="Chidinma E." navItems={navItems}>
      {(goTo) => (
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
      )}
    </DashboardLayout>
  )
}
