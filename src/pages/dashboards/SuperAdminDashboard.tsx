import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Bus,
  ClipboardList,
  CreditCard,
  Fingerprint,
  Globe,
  LayoutDashboard,
  LayoutGrid,
  Megaphone,
  ScrollText,
  UserCheck,
  Users,
  Users2,
  Video,
  Wallet,
} from 'lucide-react'
import DashboardLayout, { SectionPlaceholder } from '@/components/dashboard/DashboardLayout'
import StatCard from '@/components/dashboard/StatCard'
import CapabilityCard from '@/components/dashboard/CapabilityCard'
import ActivityList from '@/components/dashboard/ActivityList'
import MiniBarChart from '@/components/dashboard/MiniBarChart'
import AttendanceOverview from '@/components/dashboard/attendance/AttendanceOverview'
import PeopleManagement from '@/components/dashboard/admin/PeopleManagement'
import ClassesSubjects from '@/components/dashboard/admin/ClassesSubjects'
import TeacherAssignments from '@/components/dashboard/admin/TeacherAssignments'
import AdmissionsFees from '@/components/dashboard/admin/AdmissionsFees'
import Examinations from '@/components/dashboard/admin/Examinations'
import Announcements from '@/components/dashboard/admin/Announcements'
import ReportCards from '@/components/dashboard/admin/ReportCards'
import WebsiteContent from '@/components/dashboard/admin/WebsiteContent'
import { adminData } from '@/data/dashboardData'

const icons = [Users, LayoutGrid, UserCheck, Wallet, ClipboardList, ScrollText, Megaphone, Award, Globe]

// Phase 2 modules — each is its own standalone dashboard (own route,
// own sidebar), linked from here rather than nested in this sidebar.
const futureModules = [
  { name: 'AI Student Analytics', path: '/dashboard/analytics', icon: BarChart3 },
  { name: 'SMS & Email Notifications', path: '/dashboard/notifications', icon: Bell },
  { name: 'Fee Payment Gateway', path: '/dashboard/payments', icon: CreditCard },
  { name: 'Virtual Classrooms', path: '/dashboard/virtual-classrooms', icon: Video },
  { name: 'Video Conferencing', path: '/dashboard/video-conferencing', icon: Users2 },
  { name: 'Biometric Attendance', path: '/dashboard/biometric-attendance', icon: Fingerprint },
  { name: 'Library Management', path: '/dashboard/library', icon: BookOpen },
  { name: 'Hostel Management', path: '/dashboard/hostel', icon: Building2 },
  { name: 'Transport Management', path: '/dashboard/transport', icon: Bus },
]

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  ...adminData.capabilities.map((c, i) => ({ label: c.title, icon: icons[i % icons.length] })),
]

// navItems[0] is "Overview"; every item after that lines up 1:1 with
// adminData.capabilities by id (capability id 1 -> navItems index 1,
// and so on), so this map is just "capability id -> section component".
const sections: Record<number, ReactNode> = {
  1: <PeopleManagement />,
  2: <ClassesSubjects />,
  3: <TeacherAssignments />,
  4: <AdmissionsFees />,
  5: <AttendanceOverview />,
  6: <Examinations />,
  7: <Announcements />,
  8: <ReportCards />,
  9: <WebsiteContent />,
}

function Overview({ goTo }: { goTo: (index: number) => void }) {
  return (
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
        <p className="mt-1 text-sm text-ink-500">Every part of the school system, in one place.</p>
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

      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-900">
              Future Enhancements <span className="text-ink-400">· Phase 2</span>
            </h2>
            <p className="mt-1 text-sm text-ink-500">
              Each of these has its own standalone dashboard, separate from the sections above.
            </p>
          </div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {futureModules.map((mod) => (
            <Link
              key={mod.path}
              to={mod.path}
              className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-paper p-5 transition-all hover:-translate-y-1 hover:border-brass-300 hover:shadow-seal"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-brass-300 transition-colors group-hover:bg-brass-400 group-hover:text-ink-900">
                <mod.icon size={16} />
              </div>
              <span className="font-display text-sm font-semibold text-ink-900">{mod.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SuperAdminDashboard() {
  return (
    <DashboardLayout roleLabel="Super Admin" userName="Mrs. Chiamaka Nwosu" navItems={navItems}>
      {(active, goTo) => {
        if (active === 0) return <Overview goTo={goTo} />
        return sections[active] ?? <SectionPlaceholder label={navItems[active].label} />
      }}
    </DashboardLayout>
  )
}
