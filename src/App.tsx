import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'
import Contact from '@/pages/Contact/Contact'
import Login from '@/pages/Login/Login'
import SuperAdminDashboard from '@/pages/dashboards/SuperAdminDashboard'
import TeacherDashboard from '@/pages/dashboards/TeacherDashboard'
import StudentDashboard from '@/pages/dashboards/StudentDashboard'
import ParentDashboard from '@/pages/dashboards/ParentDashboard'

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
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/admin" element={<SuperAdminDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
        </Routes>
      </main>
      {!isBareLayout && <Footer />}
    </div>
  )
}
