import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'
import Contact from '@/pages/Contact/Contact'
import Apply from '@/pages/Apply/Apply'
import Login from '@/pages/Login/Login'
import SuperAdminDashboard from '@/pages/dashboards/SuperAdminDashboard'
import TeacherDashboard from '@/pages/dashboards/TeacherDashboard'
import StudentDashboard from '@/pages/dashboards/StudentDashboard'
import ParentDashboard from '@/pages/dashboards/ParentDashboard'
import Analytics from '@/pages/modules/Analytics'
import NotificationsCenter from '@/pages/modules/NotificationsCenter'
import PaymentGateway from '@/pages/modules/PaymentGateway'
import VirtualClassrooms from '@/pages/modules/VirtualClassrooms'
import VideoConferencing from '@/pages/modules/VideoConferencing'
import BiometricAttendance from '@/pages/modules/BiometricAttendance'
import Library from '@/pages/modules/Library'
import Hostel from '@/pages/modules/Hostel'
import Transport from '@/pages/modules/Transport'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isBareLayout = pathname === '/login' || pathname.startsWith('/dashboard')

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      {!isBareLayout && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/admin" element={<SuperAdminDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/notifications" element={<NotificationsCenter />} />
          <Route path="/dashboard/payments" element={<PaymentGateway />} />
          <Route path="/dashboard/virtual-classrooms" element={<VirtualClassrooms />} />
          <Route path="/dashboard/video-conferencing" element={<VideoConferencing />} />
          <Route path="/dashboard/biometric-attendance" element={<BiometricAttendance />} />
          <Route path="/dashboard/library" element={<Library />} />
          <Route path="/dashboard/hostel" element={<Hostel />} />
          <Route path="/dashboard/transport" element={<Transport />} />
        </Routes>
      </main>
      {!isBareLayout && <Footer />}
    </div>
  )
}
