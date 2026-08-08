export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
  technologies: string[];
  pricing?: { plan: string; price: string; features: string[] }[];
  faqs: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    slug: "school-management-system",
    name: "School Management System",
    tagline: "Streamline school administration from admissions to graduation.",
    description:
      "A complete software suite for managing students, staff, fees, timetables, exams, and communication. Designed for primary schools, high schools, and universities.",
    features: [
      { title: "Student Records", description: "Central database for personal, academic, and health records." },
      { title: "Attendance Tracking", description: "Automated daily attendance with SMS/email alerts to parents." },
      { title: "Grading & Exams", description: "Setup exams, enter scores, auto-calculate grades and GPAs." },
      { title: "Fee Management", description: "Invoice generation, payment tracking, and receipt printing." },
      { title: "Timetable Builder", description: "Drag-and-drop scheduling to avoid conflicts." },
      { title: "Parent Portal", description: "Real-time access to student performance and announcements." },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    pricing: [
      { plan: "Basic", price: "$500/year", features: ["Up to 200 students", "Core modules", "Email support"] },
      { plan: "Pro", price: "$1,200/year", features: ["Unlimited students", "All modules", "Priority support", "Custom reports"] },
      { plan: "Enterprise", price: "Contact us", features: ["Multi-campus", "API access", "Dedicated server", "Training"] },
    ],
    faqs: [
      { q: "Can I try before buying?", a: "Yes, we offer a free 14-day demo with sample data." },
      { q: "Is it cloud-based?", a: "It can be deployed on-premises or in the cloud, whichever you prefer." },
      { q: "Do you provide training?", a: "We include onboarding training for your staff with every plan." },
    ],
  },
  {
    slug: "hospital-management-system",
    name: "Hospital Management System",
    tagline: "Digital transformation for clinics and hospitals.",
    description:
      "Manage patient records, appointments, billing, pharmacy, lab results, and inventory in one integrated platform. Improves efficiency and patient care.",
    features: [
      { title: "Patient Registration", description: "Quick check-in with unique patient IDs." },
      { title: "Appointment Scheduling", description: "Online booking with automated reminders." },
      { title: "Billing & Insurance", description: "Generate bills, process insurance claims, track payments." },
      { title: "Lab Integration", description: "Order tests, capture results digitally, attach to patient file." },
      { title: "Pharmacy Management", description: "Stock control, expiry alerts, prescription dispensing." },
      { title: "Reports & Analytics", description: "Customizable dashboards for administrators and doctors." },
    ],
    technologies: ["Angular", "C#", ".NET", "SQL Server"],
    faqs: [
      { q: "Is it HL7/FHIR compliant?", a: "Yes, we support standard healthcare data exchange protocols." },
      { q: "Can it work offline?", a: "Yes, with local sync capability when internet is unavailable." },
    ],
  },
  {
    slug: "inventory-system",
    name: "Inventory Management System",
    tagline: "Track stock, automate ordering, and optimize your supply chain.",
    description:
      "A powerful tool for warehouses, retail stores, and manufacturing companies. Real‑time stock levels, barcode scanning, and intelligent reorder alerts.",
    features: [
      { title: "Stock Tracking", description: "Real-time quantities across multiple locations." },
      { title: "Barcode/QR Scanning", description: "Faster check-ins and check-outs with mobile scanners." },
      { title: "Reorder Automation", description: "Set minimum stock levels and auto-generate purchase orders." },
      { title: "Supplier Management", description: "Maintain supplier catalog, pricing, and lead times." },
      { title: "Reporting", description: "Inventory valuation, movement history, and forecasting." },
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    faqs: [
      { q: "Does it support multi-warehouse?", a: "Yes, you can manage unlimited warehouses and transfer stock between them." },
    ],
  },
  {
    slug: "point-of-sale",
    name: "Point of Sale (POS)",
    tagline: "Fast, reliable, and easy‑to‑use POS for retail and restaurants.",
    description:
      "A complete point-of-sale solution with inventory sync, customer management, sales reporting, and multi‑payment support. Works online and offline.",
    features: [
      { title: "Sales Screen", description: "Intuitive touch-friendly interface with barcode lookup." },
      { title: "Inventory Sync", description: "Automatically updates stock after every sale." },
      { title: "Receipts & Invoices", description: "Customizable templates, print or email receipts." },
      { title: "Customer Management", description: "Loyalty points, purchase history, credit accounts." },
      { title: "Multi‑payment", description: "Cash, card, mobile money, split payments." },
    ],
    technologies: ["Flutter", "Firebase", "Node.js"],
    faqs: [
      { q: "Can it work without internet?", a: "Yes, the app stores transactions locally and syncs when back online." },
    ],
  },
  {
    slug: "mining-erp",
    name: "Mining ERP",
    tagline: "Enterprise resource planning tailored for the mining industry.",
    description:
      "Manage exploration, production, logistics, workforce, and compliance in one unified system. Increase operational efficiency and reduce downtime.",
    features: [
      { title: "Production Tracking", description: "Monitor daily extraction, processing, and output." },
      { title: "Fleet Management", description: "Schedule maintenance, track fuel usage, GPS tracking." },
      { title: "HR & Payroll", description: "Shift scheduling, attendance, payroll linked to production." },
      { title: "Compliance & Safety", description: "Incident reporting, safety audits, environmental monitoring." },
      { title: "Financial Module", description: "Cost analysis, budgeting, and profitability per site." },
    ],
    technologies: ["Python", "Django", "PostgreSQL", "React"],
    faqs: [
      { q: "Is it customizable?", a: "Absolutely. We tailor the system to your specific mining operations." },
    ],
  },
  {
    slug: "loan-management-system",
    name: "Loan Management System",
    tagline: "Automate lending, from application to collection.",
    description:
      "Designed for microfinance institutions, banks, and credit unions. Streamline loan origination, approvals, disbursements, repayment tracking, and reporting.",
    features: [
      { title: "Loan Origination", description: "Digital applications with credit scoring integration." },
      { title: "Approval Workflow", description: "Customizable multi-level approval chains." },
      { title: "Disbursement", description: "Automated payouts to mobile wallets or bank accounts." },
      { title: "Repayment Tracking", description: "Real‑time payment monitoring, SMS reminders." },
      { title: "Collections", description: "Overdue management, penalty calculation." },
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Angular"],
    faqs: [
      { q: "Does it integrate with mobile money?", a: "Yes, we support Africell Money, Orange Money, and others." },
    ],
  },
{
  slug: "competition-management-system",
  name: "Competition Management System",
  tagline: "Manage competitions effortlessly – from online voting to judge scoring.",
  description:
    "A comprehensive platform for pageants, talent shows, and contests. Supports online voting, judge scoring, and real‑time results. Perfect for event organisers and media companies.",
  features: [
    { title: "Contestant Profiles", description: "Manage bios, photos, and social links for each contestant." },
    { title: "Online Voting", description: "Secure, auditable voting via web or mobile. Limit votes per user/IP." },
    { title: "Judge Scoring", description: "Customizable scorecards, multiple judges, automated averaging." },
    { title: "Real‑time Leaderboard", description: "Live ranking updates visible to audience and admins." },
    { title: "Ping/Connectivity", description: "Built-in connectivity tests and monitoring for smooth live events." },
    { title: "Results & Reports", description: "Exportable results, audit logs, and performance analytics." },
  ],
  technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
  pricing: [
    { plan: "Starter", price: "$300/event", features: ["Up to 10 contestants", "Online voting", "Basic results"] },
    { plan: "Professional", price: "$800/event", features: ["Unlimited contestants", "Judge scoring", "Live leaderboard", "Support"] },
    { plan: "Enterprise", price: "Custom", features: ["Multi‑event", "API access", "Dedicated server", "Training"] },
  ],
  faqs: [
    { q: "Can we customise the scoring criteria?", a: "Yes, you can define any number of categories and weightings." },
    { q: "Is it secure against vote manipulation?", a: "We implement rate limiting, CAPTCHA, and IP verification." },
    { q: "Does it support hybrid events (online + live)?", a: "Absolutely, results update in real time for both audiences." },
  ],
},

  {
    slug: "hr-management-system",
    name: "HR Management System",
    tagline: "Simplify HR processes from recruitment to retirement.",
    description:
      "A complete human resource information system. Manage employee records, leave, payroll, performance evaluations, and recruitment pipelines effortlessly.",
    features: [
      { title: "Employee Database", description: "Store all personal, contract, and salary information." },
      { title: "Leave Management", description: "Online requests, automated accruals, balance tracking." },
      { title: "Payroll", description: "Salary calculation, tax deductions, payslip generation." },
      { title: "Performance Reviews", description: "Set KPIs, schedule reviews, 360° feedback." },
      { title: "Recruitment", description: "Job posting, applicant tracking, onboarding checklist." },
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Vue.js"],
    faqs: [
      { q: "Can employees access their own data?", a: "Yes, we provide a self‑service portal for employees." },
    ],
  },
  
];