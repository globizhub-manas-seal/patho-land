// Clinical test report datasets for interactive sample viewer
// Anonymized sample data based on real diagnostic report format

export const defaultLabInfo = {
  name: 'John Duo Diagnostic CENTRE',
  tagline: 'Science for Life',
  accreditation: 'NABL & ISO 15189 Certified Diagnostic Laboratory',
  regNo: 'AS-1830500988',
  address: 'Hospital Road, Near Medical Enclave, Guwahati, Assam, PIN-78200',
  phone: '+91 84020 1587',
  email: 'reports@patholab.cloud',
  technician: {
    name: 'B. Bora',
    title: 'Senior Medical Lab Technician (DMLT)'
  },
  pathologist: {
    name: 'Dr. S. K. Das',
    degrees: 'MBBS, MD ( Pathology )',
    regNo: 'REG. NO. - 24551 ( AMC )',
    title: 'Consultant Pathologist'
  }
};

export const samplePatient = {
  name: 'PRIYA SHARMA',
  ageSex: '45 Years / FEMALE',
  uhid: 'PL-00310',
  referredBy: 'DR. A. K. SEN, MBBS, MD',
  sampleCollected: '17/11/2026, 10:42:00 am',
  reportReleased: '17/11/2026, 01:15:30 pm',
  barcode: '171126-0010-9CD5'
};

export const widalMatrix = [
  { antigen: '"O"', t20: '+', t40: '+', t80: '-', t160: '-', t320: '-' },
  { antigen: '"H"', t20: '+', t40: '-', t80: '-', t160: '-', t320: '-' },
  { antigen: '"A(H)"', t20: '-', t40: '-', t80: '-', t160: '-', t320: '-' },
  { antigen: '"B(H)"', t20: '-', t40: '-', t80: '-', t160: '-', t320: '-' },
];

export const reportsData = {
  cbc: {
    id: 'cbc',
    tabLabel: 'Complete Blood Count (CBC)',
    name: 'COMPLETE BLOOD COUNT (CBC)',
    department: 'Department of Hematology',
    method: 'Fully Automated 5-Part Cell Counter & Impedance',
    parameters: [
      { name: 'Hemoglobin (Hb)', valueNormal: '13.0', valueAbnormal: '9.4', unit: 'g/dL', range: '12.0 - 16.5', isAbnormal: true, flag: 'LOW *' },
      { name: 'Total WBC Count', valueNormal: '8800', valueAbnormal: '14500', unit: '/cumm', range: '4000 - 11000', isAbnormal: true, flag: 'HIGH *' },
      { name: 'Neutrophils', valueNormal: '68', valueAbnormal: '82', unit: '%', range: '40 - 80', isAbnormal: true, flag: 'HIGH *' },
      { name: 'Lymphocytes', valueNormal: '22', valueAbnormal: '14', unit: '%', range: '20 - 40', isAbnormal: true, flag: 'LOW *' },
      { name: 'Monocytes', valueNormal: '06', valueAbnormal: '06', unit: '%', range: '2 - 10', isAbnormal: false, flag: 'NORMAL' },
      { name: 'Eosinophils', valueNormal: '04', valueAbnormal: '04', unit: '%', range: '1 - 6', isAbnormal: false, flag: 'NORMAL' },
      { name: 'Basophils', valueNormal: '00', valueAbnormal: '00', unit: '%', range: '0 - 2', isAbnormal: false, flag: 'NORMAL' },
      { name: 'Platelet Count', valueNormal: '3.30', valueAbnormal: '1.20', unit: 'lakhs/cumm', range: '1.5 - 4.5', isAbnormal: true, flag: 'LOW *' },
      { name: 'Total RBC Count', valueNormal: '4.77', valueAbnormal: '4.77', unit: 'mill/cumm', range: '4.5 - 5.5', isAbnormal: false, flag: 'NORMAL' },
      { name: 'Packed Cell Volume (PCV)', valueNormal: '37.1', valueAbnormal: '29.0', unit: '%', range: '36 - 46', isAbnormal: true, flag: 'LOW *' },
      { name: 'Mean Corpuscular Volume (MCV)', valueNormal: '88.0', valueAbnormal: '78.0', unit: 'fL', range: '80 - 100', isAbnormal: true, flag: 'LOW *' },
      { name: 'Mean Corpuscular Hb (MCH)', valueNormal: '27.3', valueAbnormal: '27.3', unit: 'pg', range: '27 - 32', isAbnormal: false, flag: 'NORMAL' },
      { name: 'Mean Corpuscular Hb Conc (MCHC)', valueNormal: '33.2', valueAbnormal: '35.0', unit: 'g/dL', range: '31.5 - 34.5', isAbnormal: true, flag: 'HIGH *' },
      { name: 'Red Cell Distribution Width (RDW-CV)', valueNormal: '13.4', valueAbnormal: '16.2', unit: '%', range: '11.6 - 14', isAbnormal: true, flag: 'HIGH *' },
      { name: 'Erythrocyte Sedimentation Rate (ESR)', valueNormal: '20', valueAbnormal: '48', unit: 'mm/hr', range: '0 - 20', isAbnormal: true, flag: 'HIGH *' }
    ]
  },
  widal: {
    id: 'widal',
    tabLabel: 'Widal & Serology',
    name: 'WIDAL & SEROLOGICAL PROFILE',
    department: 'Department of Serology & Immunology',
    method: 'Tube & Slide Agglutination / Nephelometry',
    parameters: [
      { name: 'Widal Titre', valueNormal: 'INSIGNIFICANT', valueAbnormal: 'POSITIVE (> 1:160)', unit: 'Titre', range: 'Non-Reactive (< 1:80)', isAbnormal: true, flag: 'REACTIVE *' },
      { name: 'RA FACTOR (Rheumatoid Arthritis)', valueNormal: '8.2', valueAbnormal: '34.5', unit: 'IU/ML', range: '< 20 (Negative)', isAbnormal: true, flag: 'HIGH *' },
      { name: 'PBS FOR MP (Malaria Parasite)', valueNormal: 'NOT SEEN', valueAbnormal: 'P. VIVAX SEEN', unit: '', range: 'Nil / Negative', isAbnormal: true, flag: 'POSITIVE *' },
    ]
  },
  biochem: {
    id: 'biochem',
    tabLabel: 'Biochemistry & Thyroid',
    name: 'CLINICAL BIOCHEMISTRY & ENDOCRINOLOGY',
    department: 'Department of Clinical Biochemistry',
    method: 'Automated Photometric & CLIA Immunoassay',
    parameters: [
      { name: 'Random Blood Sugar (RBS)', valueNormal: '120', valueAbnormal: '215', unit: 'mg/dL', range: '70 - 140', isAbnormal: true, flag: 'HIGH *' },
      { name: 'S. Creatinine', valueNormal: '0.6', valueAbnormal: '2.4', unit: 'mg/dL', range: '0.6 - 1.4', isAbnormal: true, flag: 'HIGH *' },
      { name: 'TSH (Ultrasensitive)', valueNormal: '1.59', valueAbnormal: '8.75', unit: 'uIU/mL', range: '0.4 - 4.2', isAbnormal: true, flag: 'HIGH *' },
    ]
  }
};

export const importantNotes = [
  'Laboratory results should be interpreted in conjunction with clinical findings and medical history.',
  'Please consult your treating physician for interpretation of the test results.',
  'Any discrepancy or doubt regarding the report should be brought to the laboratory\'s notice promptly.',
  'This report is valid only for the sample received and tested by the laboratory.'
];
