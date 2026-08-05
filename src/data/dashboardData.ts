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

// Student: Subjects & Materials.
export const studentSubjects = [
  { id: 1, name: 'Mathematics', teacher: 'Mr. Femi Adisa' },
  { id: 2, name: 'English Language', teacher: 'Mr. Okafor' },
  { id: 3, name: 'Biology', teacher: 'Mrs. Ibe' },
  { id: 4, name: 'Chemistry', teacher: 'Mrs. Bello' },
  { id: 5, name: 'Physics', teacher: 'Mr. Danladi' },
  { id: 6, name: 'Government', teacher: 'Mrs. Okonkwo' },
]

export const studentMaterials = [
  { id: 1, subject: 'Mathematics', title: 'Quadratic Equations — Worked Examples', type: 'Note', date: 'Aug 3, 2026' },
  { id: 2, subject: 'Mathematics', title: 'Introduction to Trigonometry', type: 'Note', date: 'Jul 29, 2026' },
  { id: 3, subject: 'Biology', title: 'Cell Structure Revision Notes', type: 'Note', date: 'Jul 27, 2026' },
  { id: 4, subject: 'English Language', title: 'Comprehension Passage Practice Set', type: 'Note', date: 'Jul 24, 2026' },
  { id: 5, subject: 'Chemistry', title: 'Periodic Table Trends Summary', type: 'Note', date: 'Jul 20, 2026' },
]

// Student: Assignment Submission.
export const studentAssignments = [
  { id: 1, subject: 'English Language', title: 'Essay: My Aspiration in Life', due: 'Aug 9, 2026', status: 'Not Submitted' },
  { id: 2, subject: 'Mathematics', title: 'Assignment 4: Simultaneous Equations', due: 'Aug 8, 2026', status: 'Not Submitted' },
  { id: 3, subject: 'Biology', title: 'Diagram Labelling — The Human Heart', due: 'Aug 3, 2026', status: 'Submitted' },
  { id: 4, subject: 'Chemistry', title: 'Assignment 2: Balancing Equations', due: 'Jul 28, 2026', status: 'Graded', score: '18/20' },
]

// Student: Online Quizzes — each with a small set of practice questions.
export const studentQuizzes = [
  {
    id: 1,
    subject: 'Mathematics',
    title: 'Second CA Quiz — Algebra',
    status: 'Available',
    questions: [
      { id: 1, text: 'Solve for x: 2x + 6 = 14', options: ['x = 2', 'x = 4', 'x = 6', 'x = 8'], answer: 1 },
      { id: 2, text: 'What is the value of 3² + 4²?', options: ['12', '25', '49', '7'], answer: 1 },
      { id: 3, text: 'Simplify: 5x - 2x + 3x', options: ['6x', '8x', '10x', '4x'], answer: 0 },
    ],
  },
  {
    id: 2,
    subject: 'Biology',
    title: 'Cell Structure Practice Quiz',
    status: 'Available',
    questions: [
      { id: 1, text: 'Which organelle is the "powerhouse of the cell"?', options: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Golgi body'], answer: 2 },
      { id: 2, text: 'Which structure controls what enters and leaves the cell?', options: ['Cell wall', 'Cell membrane', 'Cytoplasm', 'Vacuole'], answer: 1 },
    ],
  },
  { id: 3, subject: 'English Language', title: 'Comprehension Quiz 1', status: 'Completed', score: '8/10' },
]

// Student: CBT Examinations.
export const studentExams = [
  { id: 1, subject: 'All Subjects', title: 'Second Term Mid-Term Test', date: 'Aug 11, 2026', duration: 90, status: 'Upcoming' },
  {
    id: 2,
    subject: 'Mathematics',
    title: 'Mock WASSCE — Paper 1',
    date: 'Aug 6, 2026',
    duration: 60,
    status: 'Available',
    questions: [
      { id: 1, text: 'If y = 3x + 2 and x = 4, find y.', options: ['10', '12', '14', '16'], answer: 2 },
      { id: 2, text: 'What is 15% of 200?', options: ['20', '25', '30', '35'], answer: 2 },
      { id: 3, text: 'Which of these is a prime number?', options: ['21', '27', '29', '33'], answer: 2 },
      { id: 4, text: 'Convert 0.75 to a fraction.', options: ['3/5', '3/4', '4/5', '2/3'], answer: 1 },
    ],
  },
  { id: 3, subject: 'English Language', title: 'English Language CBT', date: 'Jul 30, 2026', duration: 60, status: 'Completed', score: '72%' },
]

// Student: Attendance Records — this term, day by day (most recent first).
export const studentAttendance = {
  summary: [
    { label: 'Attendance Rate', value: '96%' },
    { label: 'Days Present', value: '54' },
    { label: 'Days Absent', value: '2' },
    { label: 'Days Late', value: '1' },
  ],
  records: [
    { id: 1, date: 'Aug 4, 2026', status: 'Present' },
    { id: 2, date: 'Aug 3, 2026', status: 'Present' },
    { id: 3, date: 'Jul 31, 2026', status: 'Late' },
    { id: 4, date: 'Jul 30, 2026', status: 'Present' },
    { id: 5, date: 'Jul 29, 2026', status: 'Absent' },
    { id: 6, date: 'Jul 28, 2026', status: 'Present' },
    { id: 7, date: 'Jul 25, 2026', status: 'Present' },
  ],
}

// Student: Report Cards & Results.
export const studentReportCards = [
  {
    id: 1,
    term: 'Second Term, 2025/2026',
    average: 78,
    position: '4th of 71',
    status: 'Available',
    subjects: [
      { subject: 'Mathematics', score: 82 },
      { subject: 'English Language', score: 75 },
      { subject: 'Biology', score: 80 },
      { subject: 'Chemistry', score: 71 },
      { subject: 'Physics', score: 76 },
    ],
  },
  {
    id: 2,
    term: 'First Term, 2025/2026',
    average: 74,
    position: '7th of 70',
    status: 'Available',
    subjects: [
      { subject: 'Mathematics', score: 77 },
      { subject: 'English Language', score: 72 },
      { subject: 'Biology', score: 76 },
      { subject: 'Chemistry', score: 69 },
      { subject: 'Physics', score: 73 },
    ],
  },
]

// Student: Notifications.
export const studentNotifications = [
  { id: 1, title: 'New assignment posted — English Language', time: '20 min ago', read: false },
  { id: 2, title: 'CBT Mock Exam scheduled for Friday', time: '2 hrs ago', read: false },
  { id: 3, title: 'Mathematics quiz score released: 17/20', time: 'Yesterday', read: false },
  { id: 4, title: 'Second term report card is now available', time: '2 days ago', read: true },
  { id: 5, title: 'New resource: Biology revision notes', time: '3 days ago', read: true },
  { id: 6, title: 'Attendance marked present today', time: '4 days ago', read: true },
]

// Student: Learning Resources.
export const studentResources = [
  { id: 1, subject: 'Mathematics', title: 'Second Term Scheme of Work', fileType: 'PDF', size: '210 KB' },
  { id: 2, subject: 'Biology', title: 'Cell Structure Revision Pack', fileType: 'PDF', size: '1.4 MB' },
  { id: 3, subject: 'English Language', title: 'Essay Writing Guide', fileType: 'PDF', size: '640 KB' },
  { id: 4, subject: 'Chemistry', title: 'Periodic Table (Printable)', fileType: 'PDF', size: '180 KB' },
  { id: 5, subject: 'Physics', title: 'Formula Sheet — Mechanics', fileType: 'PDF', size: '95 KB' },
]

// Admin: school-wide attendance overview, one row per class.
export const adminAttendance = {
  date: 'Wednesday, August 5, 2026',
  summary: [
    { label: 'School-wide Rate', value: '93%' },
    { label: 'Present Today', value: '1,153' },
    { label: 'Absent Today', value: '87' },
    { label: 'Classes Yet to Submit', value: '2' },
  ],
  classes: [
    { id: 1, name: 'JSS1', teacher: 'Mrs. Bello', enrolled: 96, present: 92, rate: 96 },
    { id: 2, name: 'JSS2', teacher: 'Mr. Okafor', enrolled: 88, present: 81, rate: 92 },
    { id: 3, name: 'JSS3', teacher: 'Mrs. Ibe', enrolled: 90, present: 80, rate: 89 },
    { id: 4, name: 'SS1 Silver', teacher: 'Mr. Femi Adisa', enrolled: 74, present: 70, rate: 95 },
    { id: 5, name: 'SS2 Gold', teacher: 'Mrs. Okonkwo', enrolled: 68, present: 62, rate: 91 },
    { id: 6, name: 'SS3', teacher: 'Mr. Danladi', enrolled: 71, present: 69, rate: 97, submitted: false },
  ],
}

// Teacher: roster for the class currently being marked.
export const teacherClasses = ['SS1 Silver', 'SS2 Gold', 'JSS3 Blue', 'JSS2 Green']

export const teacherRoster = [
  { id: 1, name: 'Chidinma Eze' },
  { id: 2, name: 'Tobi Alade' },
  { id: 3, name: 'David Okon' },
  { id: 4, name: 'Amara Nwachukwu' },
  { id: 5, name: 'Kelechi Obi' },
  { id: 6, name: 'Fatima Suleiman' },
  { id: 7, name: 'Emeka Chukwu' },
  { id: 8, name: 'Blessing Udo' },
]

// Teacher: Notes & Assignments already shared with classes.
export const teacherMaterials = [
  { id: 1, title: 'Quadratic Equations — Worked Examples', type: 'Note', cls: 'SS2 Gold', date: 'Aug 3, 2026' },
  { id: 2, title: 'Assignment 4: Simultaneous Equations', type: 'Assignment', cls: 'SS1 Silver', date: 'Aug 1, 2026', due: 'Aug 8, 2026' },
  { id: 3, title: 'Introduction to Trigonometry', type: 'Note', cls: 'SS3', date: 'Jul 29, 2026' },
  { id: 4, title: 'Assignment 3: Algebraic Fractions', type: 'Assignment', cls: 'SS2 Gold', date: 'Jul 25, 2026', due: 'Aug 1, 2026' },
]

export const teacherMaterialClasses = ['SS1 Silver', 'SS2 Gold', 'SS3']

// Teacher: Quizzes & Exams the teacher has created.
export const teacherQuizzes = [
  { id: 1, title: 'Second CA Quiz — Algebra', cls: 'SS2 Gold', questions: 20, status: 'Published' },
  { id: 2, title: 'Trigonometry Practice Quiz', cls: 'SS3', questions: 15, status: 'Draft' },
  { id: 3, title: 'Mock WASSCE — Paper 1', cls: 'SS3', questions: 50, status: 'Published' },
  { id: 4, title: 'First CA Quiz — Number Bases', cls: 'SS1 Silver', questions: 10, status: 'Closed' },
]

// Teacher: exams awaiting online marking, each with student submissions.
export const teacherMarkingExams = [
  {
    id: 1,
    title: 'Mock WASSCE — Paper 1',
    cls: 'SS3',
    submissions: [
      { id: 1, name: 'Chidinma Eze', submitted: true, score: null as number | null },
      { id: 2, name: 'Emeka Chukwu', submitted: true, score: null as number | null },
      { id: 3, name: 'Blessing Udo', submitted: true, score: 78 as number | null },
      { id: 4, name: 'Fatima Suleiman', submitted: false, score: null as number | null },
    ],
  },
  {
    id: 2,
    title: 'Second CA Quiz — Algebra',
    cls: 'SS2 Gold',
    submissions: [
      { id: 5, name: 'Kelechi Obi', submitted: true, score: null as number | null },
      { id: 6, name: 'David Okon', submitted: true, score: 15 as number | null },
    ],
  },
]

// Teacher: assignment submissions awaiting grading + comments.
export const teacherGrading = [
  { id: 1, student: 'Chidinma Eze', assignment: 'Assignment 4: Simultaneous Equations', cls: 'SS1 Silver' },
  { id: 2, student: 'Tobi Alade', assignment: 'Assignment 4: Simultaneous Equations', cls: 'SS1 Silver' },
  { id: 3, student: 'Amara Nwachukwu', assignment: 'Assignment 3: Algebraic Fractions', cls: 'SS2 Gold' },
  { id: 4, student: 'David Okon', assignment: 'Assignment 3: Algebraic Fractions', cls: 'SS2 Gold' },
]

// Teacher: report cards for the teacher's own classes.
export const teacherReportClasses = [
  { id: 1, cls: 'SS1 Silver', term: 'Second Term, 2025/2026', generated: 74, total: 74, status: 'Ready' },
  { id: 2, cls: 'SS2 Gold', term: 'Second Term, 2025/2026', generated: 40, total: 68, status: 'Pending' },
  { id: 3, cls: 'SS3', term: 'Second Term, 2025/2026', generated: 0, total: 71, status: 'Not Started' },
]

// Teacher: performance analytics.
export const teacherPerformance = {
  bySubjectClass: {
    label: 'Average score by class, Mathematics',
    data: [
      { label: 'SS1 Silver', value: 74 },
      { label: 'SS2 Gold', value: 78 },
      { label: 'SS3', value: 69 },
    ],
  },
  top: [
    { id: 1, name: 'Chidinma Eze', cls: 'SS3', average: 92 },
    { id: 2, name: 'David Okon', cls: 'SS1 Silver', average: 89 },
    { id: 3, name: 'Kelechi Obi', cls: 'SS2 Gold', average: 87 },
  ],
  bottom: [
    { id: 1, name: 'Emeka Chukwu', cls: 'SS3', average: 51 },
    { id: 2, name: 'Blessing Udo', cls: 'SS3', average: 54 },
    { id: 3, name: 'Fatima Suleiman', cls: 'SS2 Gold', average: 58 },
  ],
}

// Teacher: parent messaging inbox.
export const teacherConversations = [
  {
    id: 1,
    parent: 'Mrs. Adaeze Okonkwo',
    student: 'Chidinma Eze',
    unread: true,
    messages: [
      { id: 1, from: 'parent', text: 'Good evening, how did Chidinma do in the last quiz?', time: '5:12 PM' },
      { id: 2, from: 'teacher', text: 'Good evening ma. She scored 18/20 — one of the best in class.', time: '5:20 PM' },
    ],
  },
  {
    id: 2,
    parent: 'Mr. Kunle Alade',
    student: 'Tobi Alade',
    unread: false,
    messages: [
      { id: 1, from: 'parent', text: 'Please can Tobi get extra practice sheets for algebra?', time: 'Yesterday' },
      { id: 2, from: 'teacher', text: 'Sure, I\u2019ll upload extra sheets to his class page today.', time: 'Yesterday' },
    ],
  },
  {
    id: 3,
    parent: 'Mrs. Ifeoma Obi',
    student: 'Kelechi Obi',
    unread: true,
    messages: [{ id: 1, from: 'parent', text: 'Kelechi missed the assignment deadline, can he still submit?', time: '2 days ago' }],
  },
]

// Admin: People — Students, Teachers & Parents.
export const peopleData = {
  students: [
    { id: 1, name: 'Chidinma Eze', cls: 'SS3', guardian: 'Mrs. Adaeze Okonkwo', status: 'Active' },
    { id: 2, name: 'Tobi Alade', cls: 'JSS1', guardian: 'Mr. Kunle Alade', status: 'Active' },
    { id: 3, name: 'David Okon', cls: 'SS1 Silver', guardian: 'Mrs. Grace Okon', status: 'Active' },
    { id: 4, name: 'Amara Nwachukwu', cls: 'JSS3', guardian: 'Mr. Peter Nwachukwu', status: 'Active' },
    { id: 5, name: 'Kelechi Obi', cls: 'SS2 Gold', guardian: 'Mrs. Ifeoma Obi', status: 'On Leave' },
  ],
  teachers: [
    { id: 1, name: 'Mr. Femi Adisa', subject: 'Mathematics', classes: 4, status: 'Active' },
    { id: 2, name: 'Mrs. Bello', subject: 'Chemistry', classes: 3, status: 'Active' },
    { id: 3, name: 'Mr. Okafor', subject: 'English Language', classes: 5, status: 'Active' },
    { id: 4, name: 'Mrs. Ibe', subject: 'Biology', classes: 3, status: 'Active' },
    { id: 5, name: 'Mr. Danladi', subject: 'Physics', classes: 2, status: 'On Leave' },
  ],
  parents: [
    { id: 1, name: 'Mrs. Adaeze Okonkwo', children: 'Chidinma Eze', contact: '+234 801 111 2222', status: 'Active' },
    { id: 2, name: 'Mr. Kunle Alade', children: 'Tobi Alade', contact: '+234 802 222 3333', status: 'Active' },
    { id: 3, name: 'Mrs. Grace Okon', children: 'David Okon', contact: '+234 803 333 4444', status: 'Active' },
    { id: 4, name: 'Mr. Peter Nwachukwu', children: 'Amara Nwachukwu', contact: '+234 804 444 5555', status: 'Active' },
  ],
}

// Admin: Classes & Subjects.
export const classesSubjectsData = {
  classes: [
    { id: 1, name: 'JSS1', teacher: 'Mrs. Bello', students: 96, subjects: 10 },
    { id: 2, name: 'JSS2', teacher: 'Mr. Okafor', students: 88, subjects: 10 },
    { id: 3, name: 'JSS3', teacher: 'Mrs. Ibe', students: 90, subjects: 11 },
    { id: 4, name: 'SS1 Silver', teacher: 'Mr. Femi Adisa', students: 74, subjects: 9 },
    { id: 5, name: 'SS2 Gold', teacher: 'Mrs. Okonkwo', students: 68, subjects: 9 },
    { id: 6, name: 'SS3', teacher: 'Mr. Danladi', students: 71, subjects: 8 },
  ],
  subjects: [
    { id: 1, name: 'Mathematics', department: 'Science', classes: 6, teachers: 3 },
    { id: 2, name: 'English Language', department: 'Arts', classes: 6, teachers: 2 },
    { id: 3, name: 'Chemistry', department: 'Science', classes: 4, teachers: 1 },
    { id: 4, name: 'Biology', department: 'Science', classes: 4, teachers: 1 },
    { id: 5, name: 'Government', department: 'Arts', classes: 3, teachers: 1 },
    { id: 6, name: 'Financial Accounting', department: 'Commercial', classes: 2, teachers: 1 },
  ],
}

// Admin: Teacher Assignments.
export const teacherAssignmentsData = [
  { id: 1, teacher: 'Mr. Femi Adisa', subject: 'Mathematics', classes: ['SS1 Silver', 'SS2 Gold', 'SS3'], periods: 18 },
  { id: 2, teacher: 'Mrs. Bello', subject: 'Chemistry', classes: ['SS1 Silver', 'SS2 Gold'], periods: 14 },
  { id: 3, teacher: 'Mr. Okafor', subject: 'English Language', classes: ['JSS1', 'JSS2', 'JSS3'], periods: 20 },
  { id: 4, teacher: 'Mrs. Ibe', subject: 'Biology', classes: ['SS1 Silver', 'SS3'], periods: 12 },
  { id: 5, teacher: 'Mr. Danladi', subject: 'Physics', classes: ['SS2 Gold', 'SS3'], periods: 12 },
]

// Admin: Admissions & Fees.
export const admissionsData = {
  pipeline: [
    { stage: 'Enquiry', count: 41 },
    { stage: 'Application', count: 24 },
    { stage: 'Interview', count: 13 },
    { stage: 'Offer Sent', count: 8 },
    { stage: 'Enrolled', count: 5 },
  ],
  recent: [
    { id: 1, name: 'Tobi Alade', cls: 'JSS1', stage: 'Enrolled', date: 'Aug 3, 2026' },
    { id: 2, name: 'Zainab Musa', cls: 'SS1', stage: 'Offer Sent', date: 'Aug 2, 2026' },
    { id: 3, name: 'Emeka Chukwu', cls: 'JSS2', stage: 'Interview', date: 'Jul 31, 2026' },
    { id: 4, name: 'Blessing Udo', cls: 'JSS1', stage: 'Application', date: 'Jul 29, 2026' },
  ],
  fees: [
    { id: 1, cls: 'JSS1', expected: '₦9.6M', collected: '₦9.1M', rate: 95 },
    { id: 2, cls: 'JSS2', expected: '₦8.8M', collected: '₦7.9M', rate: 90 },
    { id: 3, cls: 'SS1 Silver', expected: '₦8.1M', collected: '₦6.7M', rate: 83 },
    { id: 4, cls: 'SS2 Gold', expected: '₦7.4M', collected: '₦7.0M', rate: 95 },
    { id: 5, cls: 'SS3', expected: '₦7.9M', collected: '₦5.6M', rate: 71 },
  ],
}

// Admin: Examinations.
export const examinationsData = [
  { id: 1, name: 'Second Term Mid-Term Test', cls: 'All Classes', date: 'Aug 11, 2026', status: 'Scheduled' },
  { id: 2, name: 'Mathematics — SS3 Mock WASSCE', cls: 'SS3', date: 'Aug 14, 2026', status: 'Scheduled' },
  { id: 3, name: 'English Language CBT', cls: 'JSS1 – JSS3', date: 'Aug 6, 2026', status: 'Ongoing' },
  { id: 4, name: 'First Term Final Examination', cls: 'All Classes', date: 'Jul 20, 2026', status: 'Marking' },
  { id: 5, name: 'Chemistry Practical', cls: 'SS1, SS2', date: 'Jul 15, 2026', status: 'Completed' },
]

// Admin: Announcements.
export const announcementsData = [
  {
    id: 1,
    title: 'Second Term Examination Timetable Released',
    audience: 'All Students & Parents',
    date: 'Jul 22, 2026',
    excerpt: 'The full CBT and written examination schedule is now available on your dashboard.',
  },
  {
    id: 2,
    title: 'Founders Day Rehearsal — All Staff',
    audience: 'Teaching Staff',
    date: 'Jul 18, 2026',
    excerpt: 'Rehearsal holds Thursday, 3:00 PM at the school auditorium. Attendance required.',
  },
  {
    id: 3,
    title: 'Third Term Resumption Date Confirmed',
    audience: 'All Students & Parents',
    date: 'Jul 10, 2026',
    excerpt: 'Students are expected back on campus by 8:00 AM on the resumption date.',
  },
]

export const announcementAudiences = [
  'All Students & Parents',
  'Teaching Staff',
  'Non-Teaching Staff',
  'A Specific Class',
]

// Admin: Report Cards.
export const reportCardsData = [
  { id: 1, cls: 'JSS1', term: 'Second Term, 2025/2026', generated: 96, total: 96, status: 'Ready' },
  { id: 2, cls: 'JSS2', term: 'Second Term, 2025/2026', generated: 88, total: 88, status: 'Ready' },
  { id: 3, cls: 'JSS3', term: 'Second Term, 2025/2026', generated: 74, total: 90, status: 'Pending' },
  { id: 4, cls: 'SS1 Silver', term: 'Second Term, 2025/2026', generated: 0, total: 74, status: 'Not Started' },
  { id: 5, cls: 'SS2 Gold', term: 'Second Term, 2025/2026', generated: 68, total: 68, status: 'Ready' },
  { id: 6, cls: 'SS3', term: 'Second Term, 2025/2026', generated: 71, total: 71, status: 'Ready' },
]

// Admin: Website Content.
export const websiteContentData = [
  { id: 1, section: 'Home — Hero & Stats', page: 'Home', updated: '3 days ago' },
  { id: 2, section: 'News & Announcements', page: 'Home', updated: '1 day ago' },
  { id: 3, section: 'Upcoming Events', page: 'Home', updated: '5 days ago' },
  { id: 4, section: 'Academic Programs', page: 'Home', updated: '2 weeks ago' },
  { id: 5, section: 'Gallery & Testimonials', page: 'Home', updated: '2 weeks ago' },
  { id: 6, section: 'School History & Leadership', page: 'About', updated: '1 month ago' },
  { id: 7, section: 'Contact Details & Map', page: 'Contact', updated: '1 month ago' },
]

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

// Parent: the children linked to this parent account.
export const parentChildren = [
  { id: 1, name: 'Chidinma Eze', cls: 'SS3' },
  { id: 2, name: 'Ngozi Eze', cls: 'JSS2' },
]

// Parent: Academic Progress, keyed by child id.
export const parentAcademic: Record<number, { average: number; position: string; chart: { label: string; data: { label: string; value: number }[] } }> = {
  1: {
    average: 78,
    position: '4th of 71',
    chart: {
      label: 'Score trend this term',
      data: [
        { label: 'CA1', value: 68 },
        { label: 'CA2', value: 74 },
        { label: 'CA3', value: 79 },
        { label: 'Exam', value: 82 },
      ],
    },
  },
  2: {
    average: 71,
    position: '12th of 88',
    chart: {
      label: 'Score trend this term',
      data: [
        { label: 'CA1', value: 65 },
        { label: 'CA2', value: 69 },
        { label: 'CA3', value: 72 },
        { label: 'Exam', value: 74 },
      ],
    },
  },
}

// Parent: Report Cards & Results, keyed by child id.
export const parentReportCards: Record<number, typeof studentReportCards> = {
  1: studentReportCards,
  2: [
    {
      id: 1,
      term: 'Second Term, 2025/2026',
      average: 71,
      position: '12th of 88',
      status: 'Available',
      subjects: [
        { subject: 'Mathematics', score: 68 },
        { subject: 'English Language', score: 73 },
        { subject: 'Basic Science', score: 74 },
        { subject: 'Social Studies', score: 70 },
      ],
    },
  ],
}

// Parent: Examination Results, keyed by child id.
export const parentExamResults: Record<number, { id: number; exam: string; subject: string; score: string; date: string }[]> = {
  1: [
    { id: 1, exam: 'Mock WASSCE — Paper 1', subject: 'Mathematics', score: '78%', date: 'Aug 6, 2026' },
    { id: 2, exam: 'English Language CBT', subject: 'English Language', score: '82%', date: 'Jul 30, 2026' },
    { id: 3, exam: 'First Term Final Examination', subject: 'All Subjects', score: '74% avg.', date: 'Jul 20, 2026' },
  ],
  2: [
    { id: 1, exam: 'Basic Science Mid-Term Test', subject: 'Basic Science', score: '70%', date: 'Aug 4, 2026' },
    { id: 2, exam: 'First Term Final Examination', subject: 'All Subjects', score: '71% avg.', date: 'Jul 20, 2026' },
  ],
}

// Parent: Attendance Records, keyed by child id.
export const parentAttendance: Record<number, typeof studentAttendance> = {
  1: studentAttendance,
  2: {
    summary: [
      { label: 'Attendance Rate', value: '92%' },
      { label: 'Days Present', value: '51' },
      { label: 'Days Absent', value: '4' },
      { label: 'Days Late', value: '2' },
    ],
    records: [
      { id: 1, date: 'Aug 4, 2026', status: 'Present' },
      { id: 2, date: 'Aug 3, 2026', status: 'Late' },
      { id: 3, date: 'Jul 31, 2026', status: 'Present' },
      { id: 4, date: 'Jul 30, 2026', status: 'Absent' },
      { id: 5, date: 'Jul 29, 2026', status: 'Present' },
    ],
  },
}

// Parent: Teacher Comments, keyed by child id.
export const parentComments: Record<number, { id: number; teacher: string; subject: string; comment: string; date: string }[]> = {
  1: [
    { id: 1, teacher: 'Mr. Femi Adisa', subject: 'Mathematics', comment: 'Chidinma is excelling — consistently among the top scorers this term.', date: 'Aug 3, 2026' },
    { id: 2, teacher: 'Mrs. Ibe', subject: 'Biology', comment: 'Good grasp of concepts. Encourage more practice with diagrams.', date: 'Jul 28, 2026' },
  ],
  2: [
    { id: 1, teacher: 'Mr. Okafor', subject: 'English Language', comment: 'Ngozi participates well in class but should read more at home.', date: 'Aug 1, 2026' },
  ],
}

// Parent: School Notifications (school-wide, not child-specific).
export const parentNotifications = [
  { id: 1, title: 'Second Term Examination Timetable Released', time: '2 weeks ago', read: true },
  { id: 2, title: 'Founders Day Celebration — Aug 25', time: '3 days ago', read: false },
  { id: 3, title: 'Third Term Resumption Date Confirmed', time: '1 week ago', read: true },
  { id: 4, title: 'Parent–Teacher Conference — Aug 9', time: '4 days ago', read: false },
]

// Parent: Message Teachers — an inbox with the teachers of the parent's children.
export const parentConversations = [
  {
    id: 1,
    teacher: 'Mr. Femi Adisa',
    subject: 'Mathematics',
    unread: false,
    messages: [
      { id: 1, from: 'parent', text: 'Good evening, how did Chidinma do in the last quiz?', time: '5:12 PM' },
      { id: 2, from: 'teacher', text: 'Good evening ma. She scored 18/20 — one of the best in class.', time: '5:20 PM' },
    ],
  },
  {
    id: 2,
    teacher: 'Mrs. Ibe',
    subject: 'Biology',
    unread: true,
    messages: [{ id: 1, from: 'teacher', text: 'Please remind Chidinma to bring her lab coat on Thursday.', time: 'Yesterday' }],
  },
  {
    id: 3,
    teacher: 'Mr. Okafor',
    subject: 'English Language (Ngozi)',
    unread: false,
    messages: [
      { id: 1, from: 'parent', text: 'Could Ngozi get some extra reading materials?', time: '2 days ago' },
      { id: 2, from: 'teacher', text: 'Of course — I\u2019ll send a reading list home with her tomorrow.', time: '2 days ago' },
    ],
  },
]

// Parent: Pay School Fees, keyed by child id.
export const parentFees: Record<number, { term: string; expected: number; paid: number; history: { id: number; date: string; amount: number; method: string }[] }> = {
  1: {
    term: 'Second Term, 2025/2026',
    expected: 450000,
    paid: 450000,
    history: [
      { id: 1, date: 'Jul 2, 2026', amount: 450000, method: 'Bank Transfer' },
      { id: 2, date: 'Mar 28, 2026', amount: 420000, method: 'Card Payment' },
    ],
  },
  2: {
    term: 'Second Term, 2025/2026',
    expected: 380000,
    paid: 200000,
    history: [{ id: 1, date: 'Jul 15, 2026', amount: 200000, method: 'Bank Transfer' }],
  },
}
