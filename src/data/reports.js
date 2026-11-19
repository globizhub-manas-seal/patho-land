// Clinical test report datasets for interactive sample viewer
export const defaultLabInfo = {
  name: 'Apex Super Specialty Diagnostics',
  accreditation: 'NABL Accredited Diagnostic Center',
  regNo: 'NABL/MC-48201',
  address: 'Plot 14, Main Diagnostic Avenue, Bengaluru - 560077',
  contact: 'Tel: +91 80 4920 1820 • Email: reports@patholabcloud.com',
  pathologist: {
    name: 'Dr. Neha Sen, MBBS, MD',
    title: 'Chief Consultant Pathologist • Reg: KMC/68412',
    hash: '7f8b9a2c...e14d (Verified at 09:14:22 AM)'
  }
};

export const samplePatient = {
  name: 'Rajesh Sharma',
  ageSex: '42 Y / Male',
  pid: 'PID-948210',
  barcode: 'BAR-829104',
  referredBy: 'Dr. V. K. Raman (MD, Internal Med)',
  collectedAt: 'Today, 07:45 AM (Fasting)',
  reportedAt: 'Today, 09:15 AM (Speed: 1h 30m)'
};

export const reportsData = {
  cbc: {
    id: 'cbc',
    tabLabel: 'CBC / Hemogram',
    name: 'Complete Blood Count (CBC) with Automated Differential',
    department: 'Department of Hematology',
    method: '5-Part Laser Flow Cytometry & Impedance',
    parameters: [
      { 
        name: 'Hemoglobin (Hb)', 
        valueNormal: '14.2', 
        valueAbnormal: '8.4', 
        unit: 'g/dL', 
        range: '13.0 - 17.0', 
        isAbnormal: true, 
        flag: 'LOW' 
      },
      { 
        name: 'Total Leukocyte Count (TLC)', 
        valueNormal: '7,400', 
        valueAbnormal: '14,800', 
        unit: 'cells/cu.mm', 
        range: '4,000 - 11,000', 
        isAbnormal: true, 
        flag: 'HIGH' 
      },
      { 
        name: 'RBC Count', 
        valueNormal: '4.85', 
        valueAbnormal: '4.85', 
        unit: 'mill/cu.mm', 
        range: '4.50 - 5.50', 
        isAbnormal: false, 
        flag: 'NORMAL' 
      },
      { 
        name: 'Packed Cell Volume (PCV)', 
        valueNormal: '42.0', 
        valueAbnormal: '28.5', 
        unit: '%', 
        range: '40.0 - 50.0', 
        isAbnormal: true, 
        flag: 'LOW' 
      },
      { 
        name: 'Platelet Count', 
        valueNormal: '240,000', 
        valueAbnormal: '95,000', 
        unit: 'cells/cu.mm', 
        range: '150,000 - 450,000', 
        isAbnormal: true, 
        flag: 'LOW' 
      },
      { 
        name: 'Neutrophils', 
        valueNormal: '62', 
        valueAbnormal: '78', 
        unit: '%', 
        range: '40 - 70', 
        isAbnormal: true, 
        flag: 'HIGH' 
      },
      { 
        name: 'Lymphocytes', 
        valueNormal: '30', 
        valueAbnormal: '18', 
        unit: '%', 
        range: '20 - 40', 
        isAbnormal: true, 
        flag: 'LOW' 
      }
    ],
    deltaNote: 'Previous Hb on 12-Oct-2026 was 13.8 g/dL (Delta check triggered automated pathologist review).'
  },
  lipid: {
    id: 'lipid',
    tabLabel: 'Lipid Profile',
    name: 'Comprehensive Lipid Profile',
    department: 'Department of Clinical Biochemistry',
    method: 'Spectrophotometric Enzymatic Assay',
    parameters: [
      { 
        name: 'Total Cholesterol', 
        valueNormal: '175', 
        valueAbnormal: '264', 
        unit: 'mg/dL', 
        range: '< 200 (Desirable)', 
        isAbnormal: true, 
        flag: 'HIGH' 
      },
      { 
        name: 'Triglycerides', 
        valueNormal: '130', 
        valueAbnormal: '280', 
        unit: 'mg/dL', 
        range: '< 150 (Normal)', 
        isAbnormal: true, 
        flag: 'HIGH' 
      },
      { 
        name: 'HDL Cholesterol (Good)', 
        valueNormal: '52', 
        valueAbnormal: '34', 
        unit: 'mg/dL', 
        range: '> 40 (Optimal)', 
        isAbnormal: true, 
        flag: 'LOW' 
      },
      { 
        name: 'LDL Cholesterol (Bad)', 
        valueNormal: '98', 
        valueAbnormal: '174', 
        unit: 'mg/dL', 
        range: '< 100 (Optimal)', 
        isAbnormal: true, 
        flag: 'HIGH' 
      },
      { 
        name: 'VLDL Cholesterol', 
        valueNormal: '25', 
        valueAbnormal: '56', 
        unit: 'mg/dL', 
        range: '10 - 30', 
        isAbnormal: true, 
        flag: 'HIGH' 
      },
      { 
        name: 'Cholesterol / HDL Ratio', 
        valueNormal: '3.3', 
        valueAbnormal: '7.7', 
        unit: 'Ratio', 
        range: '3.0 - 5.0', 
        isAbnormal: true, 
        flag: 'HIGH' 
      }
    ],
    deltaNote: 'Lipid panel automated formula verification complete. Low risk cardiac threshold flagged.'
  },
  thyroid: {
    id: 'thyroid',
    tabLabel: 'Thyroid (FT3/FT4/TSH)',
    name: 'Thyroid Function Test (FT3, FT4, TSH Ultra-Sensitive)',
    department: 'Department of Immunoassay & Endocrinology',
    method: 'Chemiluminescence Immunoassay (CLIA)',
    parameters: [
      { 
        name: 'Free Triiodothyronine (FT3)', 
        valueNormal: '3.1', 
        valueAbnormal: '1.8', 
        unit: 'pg/mL', 
        range: '2.0 - 4.4', 
        isAbnormal: true, 
        flag: 'LOW' 
      },
      { 
        name: 'Free Thyroxine (FT4)', 
        valueNormal: '1.25', 
        valueAbnormal: '0.62', 
        unit: 'ng/dL', 
        range: '0.93 - 1.70', 
        isAbnormal: true, 
        flag: 'LOW' 
      },
      { 
        name: 'Thyroid Stimulating Hormone (TSH)', 
        valueNormal: '2.45', 
        valueAbnormal: '12.80', 
        unit: 'uIU/mL', 
        range: '0.27 - 4.20', 
        isAbnormal: true, 
        flag: 'HIGH' 
      }
    ],
    deltaNote: 'Immunoassay calibrated against WHO Reference Standard 80/558. High TSH panic value auto-sent via SMS.'
  }
};
