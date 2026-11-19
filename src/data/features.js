import { 
  Server, Clock, Zap, FlaskConical, Scan, 
  Receipt, Home, Boxes, UserCog, Handshake, Landmark 
} from 'lucide-react';

export const valueProps = [
  { 
    icon: Server, 
    title: "0 Server Fees", 
    desc: "No expensive local servers, NAS boxes, or annual hardware maintenance contracts." 
  },
  { 
    icon: Clock, 
    title: "0 Setup Time", 
    desc: "Instantly cloud-ready. Onboard your lab and go live in hours, not weeks." 
  },
  { 
    icon: Zap, 
    title: "0 IT Headaches", 
    desc: "Automatic cloud backups, auto-updates, and enterprise bank-grade security." 
  }
];

export const comparisonData = [
  { f: "Server AMC", t: "₹10,000 - ₹50,000/yr", p: "₹0 (Included)" },
  { f: "Accessibility", t: "Local Lab Only", p: "Anywhere, Any Device" },
  { f: "Software Updates", t: "Manual, Paid & Delayed", p: "Free & Instant Cloud Updates" },
  { f: "Data Security", t: "Prone to local disk crashes", p: "Bank-Grade Redundant Cloud Backup" },
  { f: "WhatsApp Integration", t: "Expensive Add-on / Third-party", p: "Native, Unlimited & Automated" },
  { f: "Multi-branch Sync", t: "Complex VPN / Static IP setup", p: "Centralized Real-time Sync" }
];

export const platformFeatures = [
  {
    id: "lims-pathology",
    category: "Diagnostics",
    icon: FlaskConical,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50 border-blue-200/60 text-blue-600",
    gradient: "from-blue-500/5 via-sky-500/5 to-transparent",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "LIMS & Pathology",
    desc: "Advanced report templates, barcode support, delta checks, abnormal flagging, and smart AI result predictions.",
    microPill: "Δ Delta Check • Barcode",
    highlightStat: "99.8% AI Result Accuracy",
    highlights: ["Custom NABL templates", "Auto abnormal flags", "Barcode scanner sync"]
  },
  {
    id: "radiology-ris",
    category: "Diagnostics",
    icon: Scan,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50 border-emerald-200/60 text-emerald-600",
    gradient: "from-emerald-500/5 via-teal-500/5 to-transparent",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "Radiology (RIS)",
    desc: "Manage X-Ray, Ultrasound, and CT scan reports directly alongside pathology data with global macro templates.",
    microPill: "DICOM & Global Macros",
    highlightStat: "All Modalities in 1 Window",
    highlights: ["Global macro shortcuts", "X-Ray, USG & CT scan", "Unified patient history"]
  },
  {
    id: "b2b-billing",
    category: "Financials",
    icon: Receipt,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 border-amber-200/60 text-amber-600",
    gradient: "from-amber-500/5 via-orange-500/5 to-transparent",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "B2B & Billing",
    desc: "Instant GST invoicing, automated agency commissions, doctor referral tracking, and robust financial audits.",
    microPill: "Instant GST • Agency Audit",
    highlightStat: "100% Tax Compliant",
    highlights: ["Auto GST calculation", "Agency commission ledger", "Instant split invoices"]
  },
  {
    id: "home-collection",
    category: "Operations",
    icon: Home,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50 border-rose-200/60 text-rose-600",
    gradient: "from-rose-500/5 via-pink-500/5 to-transparent",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    title: "Home Collection",
    desc: "Assign phlebotomists for home visits, track real-time locations, and seamlessly manage sample transport logistics.",
    microPill: "Live GPS Tracking",
    highlightStat: "25min Average TAT",
    highlights: ["Live phlebotomist app", "Digital cash collection", "Barcode sample handover"]
  },
  {
    id: "inventory-management",
    category: "Operations",
    icon: Boxes,
    iconColor: "text-violet-500",
    iconBg: "bg-violet-50 border-violet-200/60 text-violet-600",
    gradient: "from-violet-500/5 via-purple-500/5 to-transparent",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
    title: "Inventory Management",
    desc: "Track reagents, automate stock deductions per test, and receive instant low-stock alerts to never run out of supplies.",
    microPill: "Per-Test Reagent Deduction",
    highlightStat: "Zero Reagent Wastage",
    highlights: ["Batch & expiry tracking", "Low stock alerts on WhatsApp", "Consumption reports"]
  },
  {
    id: "staff-management",
    category: "Operations",
    icon: UserCog,
    iconColor: "text-teal-500",
    iconBg: "bg-teal-50 border-teal-200/60 text-teal-600",
    gradient: "from-teal-500/5 via-cyan-500/5 to-transparent",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    title: "Staff Management",
    desc: "Easily manage technicians, pathologists, and receptionists with strict role-based access control and performance tracking.",
    microPill: "Granular RBAC Security",
    highlightStat: "Digital Signature Locks",
    highlights: ["Role-based access", "Audit log tracking", "Technician throughput metrics"]
  },
  {
    id: "dr-agent-referral",
    category: "Financials",
    icon: Handshake,
    iconColor: "text-fuchsia-500",
    iconBg: "bg-fuchsia-50 border-fuchsia-200/60 text-fuchsia-600",
    gradient: "from-fuchsia-500/5 via-rose-500/5 to-transparent",
    badgeColor: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
    title: "Dr/Agent Referral",
    desc: "Track referral sources effortlessly. Automate doctor commissions, agent payouts, and generate detailed referral analytics.",
    microPill: "Automated Payout Ledger",
    highlightStat: "Instant Monthly Cutoff",
    highlights: ["Doctor commission rates", "B2B agent accounts", "Referral growth trends"]
  },
  {
    id: "finance-management",
    category: "Financials",
    icon: Landmark,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 border-amber-200/60 text-amber-600",
    gradient: "from-amber-500/5 via-yellow-500/5 to-transparent",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "Finance Management",
    desc: "Monitor daily revenue, track pending dues, manage lab expenses, and export comprehensive financial reports with one click.",
    microPill: "1-Click P&L Reports",
    highlightStat: "Real-time Cash Register",
    highlights: ["Cashier day closing", "Pending dues recovery", "Export to Excel / Tally"]
  }
];

// Alias for backwards compatibility
export const ecosystemFeatures = platformFeatures;
