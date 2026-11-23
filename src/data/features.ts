import { 
  Server, Clock, Zap, FlaskConical, Scan, 
  Receipt, Home, Boxes, UserCog, Handshake, Landmark 
} from 'lucide-react';

export const valueProps = [
  { 
    icon: Server, 
    title: "0₹ Server Fees", 
    desc: "No expensive local servers, NAS boxes, or annual hardware maintenance contracts." 
  },
  { 
    icon: Clock, 
    title: "0₹ Setup Time", 
    desc: "Instantly cloud-ready. Onboard your lab and go live in hours, not weeks." 
  },
  { 
    icon: Zap, 
    title: "0₹ IT Headaches", 
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
    iconColor: "text-accent",
    iconBg: "bg-sage/60 border-borderSubtle text-accent",
    gradient: "from-sage/30 to-transparent",
    badgeColor: "bg-sage/60 text-ink border-borderSubtle",
    title: "LIMS & Pathology",
    desc: "Custom NABL report templates, barcode support, and automated abnormal flagging.",
    microPill: "NABL Templates • Barcode",
    highlightStat: "NABL Format Ready",
    highlights: ["Custom NABL templates", "Auto abnormal flags", "Barcode scanner sync"]
  },
  {
    id: "radiology-ris",
    category: "Diagnostics",
    icon: Scan,
    iconColor: "text-accent",
    iconBg: "bg-sage/60 border-borderSubtle text-accent",
    gradient: "from-sage/30 to-transparent",
    badgeColor: "bg-sage/60 text-ink border-borderSubtle",
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
    iconColor: "text-accent",
    iconBg: "bg-sage/60 border-borderSubtle text-accent",
    gradient: "from-sage/30 to-transparent",
    badgeColor: "bg-sage/60 text-ink border-borderSubtle",
    title: "B2B & Billing",
    desc: "Instant GST invoicing, automated agency commissions, doctor referral tracking, and robust financial audits.",
    microPill: "Instant GST • Agency Audit",
    highlightStat: "100% Tax Compliant",
    highlights: ["Auto GST calculation", "Agency commission ledger"]
  },
  {
    id: "home-collection",
    category: "Operations",
    icon: Home,
    iconColor: "text-accent",
    iconBg: "bg-sage/60 border-borderSubtle text-accent",
    gradient: "from-sage/30 to-transparent",
    badgeColor: "bg-sage/60 text-ink border-borderSubtle",
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
    iconColor: "text-accent",
    iconBg: "bg-sage/60 border-borderSubtle text-accent",
    gradient: "from-sage/30 to-transparent",
    badgeColor: "bg-sage/60 text-ink border-borderSubtle",
    title: "Inventory Management",
    desc: "Track reagents, automate stock deductions per test, and monitor batch consumption.",
    microPill: "Per-Test Reagent Deduction",
    highlightStat: "Zero Reagent Wastage",
    highlights: ["Batch & expiry tracking", "Consumption reports"]
  },
  {
    id: "staff-management",
    category: "Operations",
    icon: UserCog,
    iconColor: "text-accent",
    iconBg: "bg-sage/60 border-borderSubtle text-accent",
    gradient: "from-sage/30 to-transparent",
    badgeColor: "bg-sage/60 text-ink border-borderSubtle",
    title: "Staff Management",
    desc: "Easily manage technicians, pathologists, and receptionists with strict role-based access control and audit tracking.",
    microPill: "Granular RBAC Security",
    highlightStat: "Digital Signature Locks",
    highlights: ["Role-based access", "Audit log tracking"]
  },
  {
    id: "dr-agent-referral",
    category: "Financials",
    icon: Handshake,
    iconColor: "text-accent",
    iconBg: "bg-sage/60 border-borderSubtle text-accent",
    gradient: "from-sage/30 to-transparent",
    badgeColor: "bg-sage/60 text-ink border-borderSubtle",
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
    iconColor: "text-accent",
    iconBg: "bg-sage/60 border-borderSubtle text-accent",
    gradient: "from-sage/30 to-transparent",
    badgeColor: "bg-sage/60 text-ink border-borderSubtle",
    title: "Finance Management",
    desc: "Monitor daily revenue, track pending dues, manage lab expenses, and export financial reports with one click.",
    microPill: "1-Click P&L Reports",
    highlightStat: "Real-time Cash Register",
    highlights: ["Pending dues recovery", "Export to Excel"]
  }
];

// Alias for backwards compatibility
export const ecosystemFeatures = platformFeatures;
