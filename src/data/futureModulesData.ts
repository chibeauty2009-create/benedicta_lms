// Mock data for the Phase 2 "Future Enhancements" modules from the
// page map. Each of these gets its own standalone dashboard (own
// route, own sidebar shell) rather than living inside an existing
// role dashboard. There's no backend, so this is illustrative data —
// wire each block up to a real API/service when one exists.

// 1. AI-Powered Student Analytics
export const analyticsData = {
  insights: [
    { id: 1, text: '12 students in SS2 show a declining trend in Mathematics over the last 3 CAs.', level: 'warning' },
    { id: 2, text: 'JSS1 attendance correlates strongly with performance this term — flag chronic absentees early.', level: 'info' },
    { id: 3, text: 'SS3 Mock WASSCE scores are trending 6% above last session\u2019s cohort at the same point.', level: 'positive' },
  ],
  atRisk: [
    { id: 1, name: 'Emeka Chukwu', cls: 'SS3', risk: 'High', reason: 'Score dropped 18pts across 2 terms' },
    { id: 2, name: 'Blessing Udo', cls: 'SS3', risk: 'High', reason: 'Attendance below 80% this term' },
    { id: 3, name: 'Fatima Suleiman', cls: 'SS2 Gold', risk: 'Medium', reason: 'Missed 2 of last 3 assignments' },
  ],
  improvers: [
    { id: 1, name: 'David Okon', cls: 'SS1 Silver', change: '+14%' },
    { id: 2, name: 'Kelechi Obi', cls: 'SS2 Gold', change: '+9%' },
  ],
  chart: {
    label: 'School-wide average score trend',
    data: [
      { label: 'CA1', value: 71 },
      { label: 'CA2', value: 73 },
      { label: 'CA3', value: 76 },
      { label: 'Exam', value: 78 },
    ],
  },
}

// 2. SMS & Email Notifications
export const notificationsCenterData = {
  stats: [
    { label: 'Sent This Week', value: '3,412' },
    { label: 'Delivery Rate', value: '98.4%' },
    { label: 'SMS Credits Left', value: '8,900' },
    { label: 'Failed', value: '54' },
  ],
  log: [
    { id: 1, audience: 'All Parents', channel: 'SMS + Email', recipients: 1240, status: 'Delivered', time: '2 hrs ago' },
    { id: 2, audience: 'SS3 Parents', channel: 'SMS', recipients: 71, status: 'Delivered', time: 'Yesterday' },
    { id: 3, audience: 'All Staff', channel: 'Email', recipients: 86, status: 'Delivered', time: '2 days ago' },
    { id: 4, audience: 'JSS1 Parents', channel: 'SMS', recipients: 96, status: 'Partial Failure', time: '3 days ago' },
  ],
}

// 3. Online Fee Payment Gateway
export const paymentGatewayData = {
  stats: [
    { label: 'Collected This Term', value: '₦42.6M' },
    { label: 'Success Rate', value: '96.8%' },
    { label: 'Pending', value: '₦1.2M' },
    { label: 'Failed Transactions', value: '9' },
  ],
  providers: [
    { id: 1, name: 'Paystack', status: 'Active' },
    { id: 2, name: 'Flutterwave', status: 'Active' },
    { id: 3, name: 'Bank Transfer (Manual)', status: 'Active' },
  ],
  transactions: [
    { id: 1, student: 'Tobi Alade', amount: '₦180,000', method: 'Paystack', status: 'Successful', ref: 'BC-TXN-88213', date: 'Aug 5, 2026' },
    { id: 2, student: 'Kelechi Obi', amount: '₦210,000', method: 'Flutterwave', status: 'Successful', ref: 'BC-TXN-88190', date: 'Aug 4, 2026' },
    { id: 3, student: 'Emeka Chukwu', amount: '₦195,000', method: 'Paystack', status: 'Failed', ref: 'BC-TXN-88177', date: 'Aug 3, 2026' },
    { id: 4, student: 'Blessing Udo', amount: '₦200,000', method: 'Bank Transfer', status: 'Pending', ref: 'BC-TXN-88165', date: 'Aug 2, 2026' },
  ],
}

// 4. Virtual Classrooms
export const virtualClassroomsData = [
  { id: 1, subject: 'Mathematics', teacher: 'Mr. Femi Adisa', cls: 'SS2 Gold', time: 'Today, 10:00 AM', status: 'Live' },
  { id: 2, subject: 'Biology', teacher: 'Mrs. Ibe', cls: 'SS1 Silver', time: 'Today, 1:00 PM', status: 'Scheduled' },
  { id: 3, subject: 'English Language', teacher: 'Mr. Okafor', cls: 'JSS3', time: 'Tomorrow, 9:00 AM', status: 'Scheduled' },
  { id: 4, subject: 'Chemistry', teacher: 'Mrs. Bello', cls: 'SS3', time: 'Aug 4, 2026', status: 'Ended' },
]

// 5. Video Conferencing (meetings, not subject classes)
export const videoConferencingData = [
  { id: 1, title: 'Parent–Teacher Conference — Chidinma Eze', type: 'Parent-Teacher', time: 'Aug 9, 2026, 11:00 AM', status: 'Scheduled' },
  { id: 2, title: 'Staff Meeting — Second Term Review', type: 'Staff Meeting', time: 'Aug 7, 2026, 4:00 PM', status: 'Scheduled' },
  { id: 3, title: 'Parent–Teacher Conference — Tobi Alade', type: 'Parent-Teacher', time: 'Aug 2, 2026, 3:00 PM', status: 'Completed' },
]

// 6. Biometric Attendance
export const biometricAttendanceData = {
  devices: [
    { id: 1, location: 'Main Gate', status: 'Online', lastSync: '2 min ago' },
    { id: 2, location: 'JSS Block', status: 'Online', lastSync: '5 min ago' },
    { id: 3, location: 'SS Block', status: 'Offline', lastSync: '3 hrs ago' },
    { id: 4, location: 'Staff Room', status: 'Online', lastSync: '1 min ago' },
  ],
  scans: [
    { id: 1, name: 'Chidinma Eze', device: 'Main Gate', time: '7:42 AM', result: 'Match' },
    { id: 2, name: 'Mr. Femi Adisa', device: 'Staff Room', time: '7:38 AM', result: 'Match' },
    { id: 3, name: 'Unknown', device: 'JSS Block', time: '7:35 AM', result: 'No Match' },
    { id: 4, name: 'Tobi Alade', device: 'Main Gate', time: '7:30 AM', result: 'Match' },
  ],
}

// 7. Library Management
export const libraryData = {
  stats: [
    { label: 'Total Titles', value: '2,140' },
    { label: 'Total Copies', value: '5,860' },
    { label: 'Currently Issued', value: '312' },
    { label: 'Overdue', value: '18' },
  ],
  books: [
    { id: 1, title: 'New General Mathematics SS2', author: 'M.F. Macrae', category: 'Mathematics', copies: 40, available: 22 },
    { id: 2, title: 'Things Fall Apart', author: 'Chinua Achebe', category: 'Literature', copies: 60, available: 35 },
    { id: 3, title: 'Essential Biology for Senior Secondary', author: 'A. Ndu', category: 'Biology', copies: 30, available: 14 },
  ],
  issued: [
    { id: 1, borrower: 'Chidinma Eze', book: 'Things Fall Apart', due: 'Aug 12, 2026', status: 'Issued' },
    { id: 2, borrower: 'David Okon', book: 'New General Mathematics SS2', due: 'Aug 3, 2026', status: 'Overdue' },
  ],
}

// 8. Hostel Management
export const hostelData = {
  hostels: [
    { id: 1, name: 'Fountain House (Boys)', capacity: 120, occupied: 108 },
    { id: 2, name: 'Grace House (Girls)', capacity: 120, occupied: 114 },
    { id: 3, name: 'Unity House (Boys)', capacity: 90, occupied: 76 },
  ],
  allocations: [
    { id: 1, student: 'Emeka Chukwu', hostel: 'Fountain House (Boys)', room: 'B-12', date: 'Sep 10, 2025' },
    { id: 2, student: 'Blessing Udo', hostel: 'Grace House (Girls)', room: 'G-04', date: 'Sep 10, 2025' },
  ],
}

// 9. Transport Management
export const transportData = [
  { id: 1, route: 'Lekki – Ajah', driver: 'Mr. Suleiman Bello', capacity: 30, assigned: 27, status: 'On Route' },
  { id: 2, route: 'Victoria Island – Lekki', driver: 'Mr. Chuka Eze', capacity: 25, assigned: 21, status: 'At School' },
  { id: 3, route: 'Ikoyi – VI', driver: 'Mrs. Bisi Fashola', capacity: 20, assigned: 18, status: 'On Route' },
]
