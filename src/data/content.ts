// Central place for site copy so pages stay easy to edit without touching JSX.

export const school = {
  name: 'The Benedicta College',
  tagline: 'Smart Learning. Smart Management. Smart Future.',
}

export const stats = [
  { label: 'Students Enrolled', value: 1240, suffix: '+' },
  { label: 'Qualified Teachers', value: 86, suffix: '' },
  { label: 'Years of Excellence', value: 18, suffix: '' },
  { label: 'Academic Programs', value: 12, suffix: '' },
]

export const news = [
  {
    id: 1,
    date: 'Jul 22, 2026',
    title: 'Second Term Examination Timetable Released',
    excerpt:
      'The full CBT and written examination schedule for all classes is now available on the student and parent dashboards.',
  },
  {
    id: 2,
    date: 'Jul 14, 2026',
    title: 'Benedicta College Wins Inter-School Science Fair',
    excerpt:
      'Our SS2 robotics team took first place at the regional science and innovation fair, earning a spot at nationals.',
  },
  {
    id: 3,
    date: 'Jul 03, 2026',
    title: 'New Digital Library Wing Now Open',
    excerpt:
      'Students now have access to over 4,000 e-books and journals through the newly launched digital library portal.',
  },
]

export const events = [
  { id: 1, day: '02', month: 'AUG', title: 'Inter-House Sports Competition', time: '9:00 AM · Main Field' },
  { id: 2, day: '09', month: 'AUG', title: 'Parent–Teacher Conference', time: '11:00 AM · School Hall' },
  { id: 3, day: '18', month: 'AUG', title: 'Third Term Resumption', time: '8:00 AM · All Classes' },
  { id: 4, day: '25', month: 'AUG', title: 'Founders Day Celebration', time: '10:00 AM · Auditorium' },
]

export const programs = [
  {
    id: 1,
    name: 'Early Years (Creche & Nursery)',
    description: 'A nurturing foundation built on play-based learning, phonics, and early numeracy.',
  },
  {
    id: 2,
    name: 'Primary School',
    description: 'A structured core curriculum in literacy, numeracy, science, and creative arts.',
  },
  {
    id: 3,
    name: 'Junior Secondary',
    description: 'Broad-based subjects preparing students for BECE with strong STEM emphasis.',
  },
  {
    id: 4,
    name: 'Senior Secondary',
    description: 'Science, Arts, and Commercial tracks with dedicated WASSCE/CBT exam preparation.',
  },
]

export const testimonials = [
  {
    id: 1,
    quote:
      'The dashboard keeps me close to my daughter\u2019s progress every single week, not just at the end of term.',
    name: 'Mrs. Adaeze Okonkwo',
    role: 'Parent, SS1',
  },
  {
    id: 2,
    quote:
      'Uploading assignments and marking online has cut my grading time in half this term.',
    name: 'Mr. Femi Adisa',
    role: 'Mathematics Teacher',
  },
  {
    id: 3,
    quote:
      'I can check my results and attendance the moment they are released, right from my phone.',
    name: 'Chidinma E.',
    role: 'SS3 Student',
  },
]

export const gallery = [
  { id: 1, label: 'Science Laboratory' },
  { id: 2, label: 'Founders Day 2026' },
  { id: 3, label: 'Inter-House Sports' },
  { id: 4, label: 'Digital Library Wing' },
  { id: 5, label: 'Graduation Ceremony' },
]

export const history = {
  founded: '2008',
  paragraphs: [
    'The Benedicta College was founded in 2008 by a small group of educators who believed Lagos families deserved a school that took both academic rigor and character formation seriously — not one at the expense of the other.',
    'What began as a single nursery block on Fountain Road has grown into a full creche-to-SS3 campus, now serving over a thousand students across Early Years, Primary, Junior Secondary, and Senior Secondary.',
    'Eighteen years on, the school\u2019s founding conviction hasn\u2019t changed: every learner does better when their teachers, parents, and school administration are working from the same page — which is the whole reason this platform exists.',
  ],
}

export const philosophy = {
  vision:
    'To raise confident, principled graduates equipped to lead in a fast-changing, digital world — grounded in strong character and academic excellence, and prepared for whatever comes after Benedicta, not just for their next exam.',
  mission:
    'To deliver a modern, secure, and accessible learning environment that keeps every student, teacher, and parent connected — through small class sizes, a curriculum that stretches every learner, and a school administration that treats communication as a duty, not an afterthought.',
}

export const coreValues = [
  { id: 1, title: 'Integrity', description: 'We say what we mean and follow through — in the classroom, on report cards, and in every conversation with families.' },
  { id: 2, title: 'Excellence', description: 'Good enough isn\u2019t. We hold high standards for students and staff alike, and give both the support to reach them.' },
  { id: 3, title: 'Community', description: 'A school is a shared project between teachers, parents, and students — we build for all three, together.' },
  { id: 4, title: 'Innovation', description: 'From CBT exams to digital report cards, we adopt new tools when they genuinely make learning better.' },
]

export const leadership = {
  name: 'Mrs. Chiamaka Nwosu',
  role: 'Principal, The Benedicta College',
  message:
    'Every child who walks through our gates is someone\u2019s whole world. Our job is to make sure they leave more capable, more curious, and more grounded than when they arrived — and to make sure their parents never have to wonder how they\u2019re doing.',
}

export const accreditations = [
  { id: 1, name: 'Lagos State Ministry of Education', note: 'Approved & Registered' },
  { id: 2, name: 'WAEC', note: 'Accredited Examination Centre' },
  { id: 3, name: 'NECO', note: 'Accredited Examination Centre' },
  { id: 4, name: 'Nigerian Educational Research and Development Council', note: 'Curriculum Aligned' },
]

export const contact = {
  address: '12 Fountain Road, Lekki, Lagos, Nigeria',
  phone: ['+234 801 234 5678', '+234 809 876 5432'],
  email: 'info@benedictacollege.edu.ng',
  hours: 'Mon – Fri, 8:00 AM – 4:00 PM',
  // Free embed, no API key required — swap the query in the src URL
  // in ContactFormMap.tsx if the school's address changes.
  mapEmbedSrc:
    'https://www.openstreetmap.org/export/embed.html?bbox=3.4200%2C6.4300%2C3.4900%2C6.4700&layer=mapnik&marker=6.4500%2C3.4550',
  mapLinkHref: 'https://www.openstreetmap.org/?mlat=6.4500&mlon=3.4550#map=14/6.4500/3.4550',
}

export const socialLinks = [
  { id: 1, platform: 'Facebook', href: 'https://facebook.com' },
  { id: 2, platform: 'Instagram', href: 'https://instagram.com' },
  { id: 3, platform: 'X (Twitter)', href: 'https://x.com' },
  { id: 4, platform: 'LinkedIn', href: 'https://linkedin.com' },
]

export const enquiryReasons = [
  'Admissions enquiry',
  'Existing student / parent',
  'Careers / staff enquiry',
  'General enquiry',
]

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const dashboards = [
  { role: 'Super Admin', path: '/dashboard/admin' },
  { role: 'Teacher', path: '/dashboard/teacher' },
  { role: 'Student', path: '/dashboard/student' },
  { role: 'Parent', path: '/dashboard/parent' },
]
