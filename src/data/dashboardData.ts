// Mock data powering the 4 role dashboards. There's no backend yet —
// replace these arrays with real API calls/results once one exists;
// every dashboard component reads only from here, so that's the one
// place to change per dashboard.

export const adminData = {
  stats: [
    { label: 'Total Students', value: '1,240' },
    { label: 'Total Staff', value: '86' },
    { label: 'Pending Admissions', value: '24' },
    { label: 'Fees Collected (Term)', value: '₦48.2M' },
  ],
  capabilities: [
    { id: 1, title: 'Students, Teachers & Parents', description: 'Central records for every person in the school.' },
    { id: 2, title: 'Classes & Subjects', description: 'Set up the academic structure for the session.' },
    { id: 3, title: 'Teacher Assignments', description: 'Allocate staff to subjects and classes.' },
    { id: 4, title: 'Admissions & Fees', description: 'From enquiry to enrolment, plus billing.' },
    { id: 5, title: 'Attendance & Reports', description: 'School-wide attendance oversight.' },
    { id: 6, title: 'Examinations', description: 'Set up and oversee school exams.' },
    { id: 7, title: 'Announcements', description: 'Broadcast messages to all users.' },
    { id: 8, title: 'Report Cards', description: 'Produce results across the school.' },
    { id: 9, title: 'Website Content', description: 'Control over the public site content.' },
  ],
  activity: [
    { id: 1, title: 'New admission application — Tobi Alade (JSS1)', time: '12 min ago', tag: 'Admissions' },
    { id: 2, title: 'Term fees payment received — SS2 Gold, 14 students', time: '1 hr ago', tag: 'Fees' },
    { id: 3, title: 'Mrs. Bello assigned to SS1 Chemistry', time: '3 hrs ago', tag: 'Staffing' },
    { id: 4, title: 'School-wide announcement sent: Exam timetable', time: 'Yesterday', tag: 'Announcement' },
    { id: 5, title: '18 report cards generated for Primary 4', time: 'Yesterday', tag: 'Report Cards' },
  ],
  chart: {
    label: 'Attendance rate by class this week',
    data: [
      { label: 'JSS1', value: 96 },
      { label: 'JSS2', value: 92 },
      { label: 'JSS3', value: 89 },
      { label: 'SS1', value: 94 },
      { label: 'SS2', value: 91 },
      { label: 'SS3', value: 97 },
    ],
  },
}

export const teacherData = {
  stats: [
    { label: 'My Classes', value: '4' },
    { label: 'Students Taught', value: '186' },
    { label: 'Assignments to Grade', value: '12' },
    { label: 'Avg. Attendance', value: '94%' },
  ],
  capabilities: [
    { id: 1, title: 'Digital Attendance', description: 'Take class-by-class attendance.' },
    { id: 2, title: 'Notes & Assignments', description: 'Share learning materials with your classes.' },
    { id: 3, title: 'Quizzes & Exams', description: 'Build assessments for your subjects.' },
    { id: 4, title: 'Online Marking', description: 'Grade submitted exams digitally.' },
    { id: 5, title: 'Grading & Comments', description: 'Score assignments and leave feedback.' },
    { id: 6, title: 'Report Cards', description: 'Produce results for your classes.' },
    { id: 7, title: 'Performance Analytics', description: 'Track how each class is doing.' },
    { id: 8, title: 'Parent Messaging', description: 'Message parents directly.' },
  ],
  activity: [
    { id: 1, title: 'Ifeoma A. submitted Mathematics Assignment 4', time: '8 min ago', tag: 'Submission' },
    { id: 2, title: 'SS2 Gold — Second CA quiz closed, 28 entries', time: '45 min ago', tag: 'Quiz' },
    { id: 3, title: 'Attendance marked for SS1 Silver, Period 2', time: '2 hrs ago', tag: 'Attendance' },
    { id: 4, title: 'Comment added to David O.\u2019s report card', time: 'Yesterday', tag: 'Report Card' },
    { id: 5, title: 'Message from Mrs. Okonkwo (parent) — Chidinma E.', time: 'Yesterday', tag: 'Message' },
  ],
  chart: {
    label: 'Average score by subject, this term',
    data: [
      { label: 'Math', value: 78 },
      { label: 'English', value: 82 },
      { label: 'Physics', value: 71 },
      { label: 'Chemistry', value: 75 },
    ],
  },
}

export const studentData = {
  stats: [
    { label: 'Attendance Rate', value: '96%' },
    { label: 'Assignments Due', value: '3' },
    { label: 'Overall Average', value: '78%' },
    { label: 'Unread Notifications', value: '5' },
  ],
  capabilities: [
    { id: 1, title: 'Subjects & Materials', description: 'Access your course content.' },
    { id: 2, title: 'Assignment Submission', description: 'Upload completed work online.' },
    { id: 3, title: 'Online Quizzes', description: 'Practice assessments for each subject.' },
    { id: 4, title: 'CBT Examinations', description: 'Sit computer-based tests.' },
    { id: 5, title: 'Attendance Records', description: 'Your personal attendance history.' },
    { id: 6, title: 'Report Cards & Results', description: 'View grades and performance.' },
    { id: 7, title: 'Notifications', description: 'Real-time updates as they happen.' },
    { id: 8, title: 'Learning Resources', description: 'Download materials for offline use.' },
  ],
  activity: [
    { id: 1, title: 'New assignment posted — English Language', time: '20 min ago', tag: 'Assignment' },
    { id: 2, title: 'CBT Mock Exam scheduled for Friday', time: '2 hrs ago', tag: 'Exam' },
    { id: 3, title: 'Mathematics quiz score released: 17/20', time: 'Yesterday', tag: 'Result' },
    { id: 4, title: 'Second term report card is now available', time: '2 days ago', tag: 'Report Card' },
    { id: 5, title: 'New resource: Biology revision notes', time: '3 days ago', tag: 'Resource' },
  ],
  chart: {
    label: 'Your score trend this term',
    data: [
      { label: 'CA1', value: 68 },
      { label: 'CA2', value: 74 },
      { label: 'CA3', value: 79 },
      { label: 'Exam', value: 82 },
    ],
  },
}

export const parentData = {
  stats: [
    { label: 'Children Linked', value: '2' },
    { label: 'Avg. Attendance', value: '95%' },
    { label: 'Latest Result', value: 'B+ Avg.' },
    { label: 'Outstanding Fees', value: '₦0' },
  ],
  capabilities: [
    { id: 1, title: 'Academic Progress', description: 'Ongoing performance tracking.' },
    { id: 2, title: 'Report Cards & Results', description: 'Grades and outcomes each term.' },
    { id: 3, title: 'Examination Results', description: 'Exam-specific scores.' },
    { id: 4, title: 'Attendance Records', description: 'Your child\u2019s attendance history.' },
    { id: 5, title: 'Teacher Comments', description: 'Feedback from teachers.' },
    { id: 6, title: 'School Notifications', description: 'School-wide updates.' },
    { id: 7, title: 'Message Teachers', description: 'Direct messaging with staff.' },
    { id: 8, title: 'Pay School Fees', description: 'Check balance and pay online.' },
  ],
  activity: [
    { id: 1, title: 'Chidinma E. — Attendance marked present today', time: '1 hr ago', tag: 'Attendance' },
    { id: 2, title: 'New comment from Mr. Adisa (Mathematics)', time: '3 hrs ago', tag: 'Comment' },
    { id: 3, title: 'Second term report card published', time: 'Yesterday', tag: 'Report Card' },
    { id: 4, title: 'School notification: Founders Day, Aug 25', time: '2 days ago', tag: 'Notification' },
    { id: 5, title: 'Fee payment confirmed — Second Term', time: '5 days ago', tag: 'Fees' },
  ],
  chart: {
    label: 'Child\u2019s attendance by month',
    data: [
      { label: 'Apr', value: 94 },
      { label: 'May', value: 97 },
      { label: 'Jun', value: 93 },
      { label: 'Jul', value: 96 },
    ],
  },
}
