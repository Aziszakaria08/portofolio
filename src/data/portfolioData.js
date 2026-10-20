export const personalInfo = {
  name: "Azis Zakaria",
  degrees: "B.S. Information Systems",
  title: "Information Systems • Business Analyst • IT Specialist",
  tagline: "SYS.ARCH // BA-2026",
  affiliation: "Independent IT & Systems Practice",
  edition: "2026 / EDITION",
  bio: "Turning complex business requirements into high-impact, practical technology architectures and operational solutions. Bridging institutional stakeholders with engineering execution.",
  email: "azis.zakaria@domain.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  status: "Available for Q2 Projects",
  location: "Jakarta, Indonesia (UTC+7 / WIB)",
  metrics: [
    { value: "03+", label: "Years Practice", highlight: true },
    { value: "14+", label: "Delivered Systems", highlight: false },
    { value: "25+", label: "BPMN Workflows", highlight: false },
  ],
  tenureMetrics: [
    { label: "Professional Tenure", value: "3+ Years", icon: "Clock" },
    { label: "Enterprise Delivery", value: "14+ Projects", icon: "Layers" },
    { label: "Process Optimization", value: "25+ Workflows", icon: "GitBranch" },
  ],
  competencyChecklist: [
    "Requirements Engineering (BRD/FSD)",
    "BPMN 2.0 Process Modeling",
    "ERP Architecture & Data Migration",
    "User Acceptance Testing (UAT) Directorship",
    "RESTful API Contract & Schema Design",
    "Relational Database Query Optimization"
  ]
};

export const skillsData = [
  {
    id: "ba",
    title: "Business Analysis",
    badge: "CORE",
    badgeType: "primary",
    icon: "LineChart",
    description: "Deconstructing institutional complexity into actionable requirements and specifications.",
    focus: "Focus: Quality Engineering",
    skills: [
      "Requirements Gathering",
      "Process Mapping (BPMN 2.0)",
      "BRD & FSD Authoring",
      "User Stories & Acceptance Criteria",
      "UAT Protocol Design & Test Cases"
    ]
  },
  {
    id: "erp",
    title: "Systems & ERP",
    badge: "SYSTEMS",
    badgeType: "secondary",
    icon: "Network",
    description: "Enterprise application modeling, modular deployment, and cross-platform continuity.",
    focus: "Focus: Enterprise Operations",
    skills: [
      "Odoo 16/17 Deployment",
      "ERP Custom Workflow Routing",
      "Legacy System Integration",
      "Data Migration Strategy",
      "Master Data Governance"
    ]
  },
  {
    id: "tech",
    title: "Technical Skills",
    badge: "TECH",
    badgeType: "neutral",
    icon: "Code2",
    description: "Direct fluency in data architecture, relational query logic, and application frameworks.",
    focus: "Focus: Code-Literate BA",
    skills: [
      "SQL (PostgreSQL / MySQL)",
      "REST API Schema & Swagger",
      "React.js & Tailwind CSS",
      "Laravel & MVC Architecture",
      "Git / GitHub Versioning"
    ]
  },
  {
    id: "tools",
    title: "Tools & Methods",
    badge: "OPS",
    badgeType: "neutral",
    icon: "Wrench",
    description: "Industry standard tooling for discovery, rapid prototyping, and release coordination.",
    focus: "Focus: Sprint Execution",
    skills: [
      "Jira Software & Confluence",
      "Figma (UI/UX Prototyping)",
      "MS Excel (Advanced Models)",
      "Postman API Validation",
      "Cross-Functional Stakeholder Comms"
    ]
  }
];

export const projectsData = [
  {
    id: "erp-pdam",
    sysId: "SYS_01 // PUBLIC UTILITY",
    title: "ERP PDAM Utility Modernization",
    category: "Enterprise ERP",
    badge: "Enterprise Architecture • BA",
    role: "Lead Business Analyst & Systems Architect",
    diagramType: "pipeline",
    summary: "Spearheaded full digital transformation from legacy manual records to an automated meter-to-cash enterprise billing and ledger ecosystem.",
    problem: "Manual customer billing ledgers across regional municipal branches caused 14-day financial reconciliation lags, lost paperwork, and erratic debt audits.",
    solution: "Spearheaded complete BRD/FSD blueprinting, designed automated meter-to-cash BPMN logic, and coordinated cross-branch UAT acceptance cycles.",
    stack: ["BPMN 2.0", "PostgreSQL", "Postman", "Odoo / ERP", "REST APIs"],
    metrics: [
      { label: "Billing Cycle", value: "-78% Latency" },
      { label: "Audit Accuracy", value: "100% Traceable" },
      { label: "Reconciliation", value: "Real-time Sync" }
    ],
    deepDive: {
      client: "Municipal Water Utility (PDAM Regional)",
      timeline: "6 Months Implementation",
      stakeholders: ["Executive Board", "Branch Finance Officers", "IT Field Surveyors", "Software Vendors"],
      architectureHighlights: [
        "Constructed 18 comprehensive BPMN 2.0 diagrams covering registration, verification, meter logging, billing, and penalty calculation.",
        "Authored 120+ pages of audit-compliant BRD and FSD documents serving as binding specifications for development vendors.",
        "Facilitated 14 cross-branch User Acceptance Testing (UAT) sessions, resolving 95+ defect tickets before Go-Live."
      ]
    }
  },
  {
    id: "kpi-mgmt",
    sysId: "SYS_02 // ENTERPRISE HR",
    title: "Centralized KPI Management System",
    category: "Process / BPMN",
    badge: "Performance Assessment • UX",
    role: "Requirements & Workflow Designer",
    diagramType: "progress",
    summary: "Architected unified role-based KPI metrics matrix, wireframed high-density executive analytics, and oversaw multi-tier appraisal approvals.",
    problem: "Fragmented departmental evaluation matrices resulted in arbitrary reviews, missed strategic objectives, and manual spreadsheet consolidation.",
    solution: "Architected unified role-based KPI metrics matrix, wireframed high-density executive analytics, and oversaw multi-tier appraisal approvals.",
    stack: ["Figma", "SQL Analytics", "Jira", "BPMN 2.0", "React"],
    metrics: [
      { label: "Adoption Rate", value: "98.4%" },
      { label: "Q4 Alignment", value: "82% Done" },
      { label: "Appraisal Cycle", value: "-60% Time" }
    ],
    deepDive: {
      client: "Enterprise Consulting Firm (1,200+ employees)",
      timeline: "4 Months Design & Rollout",
      stakeholders: ["HR Directors", "Division Heads", "People Operations", "Engineering Leads"],
      architectureHighlights: [
        "Modeled multi-level appraisal workflows featuring automatic escalation rules and historical benchmark comparisons.",
        "Designed Figma design system containing 40+ atomic components for dashboard data density and review cards.",
        "Formulated weighted scoring formulas validated across 20 distinct corporate job families."
      ]
    }
  },
  {
    id: "odoo-inventory",
    sysId: "SYS_03 // LOGISTICS ERP",
    title: "Odoo Multi-Hub Inventory Optimization",
    category: "Enterprise ERP",
    badge: "Warehouse • Supply Chain",
    role: "ERP Functional Consultant",
    diagramType: "warehouse",
    summary: "Configured custom multi-step warehouse routes in Odoo, created barcode intake guidelines, and unified cross-hub replenishment triggers.",
    problem: "Recurrent stock discrepancies across 4 distributed logistics warehouses led to emergency reorders and severe inventory balance bloat.",
    solution: "Configured custom multi-step warehouse routes in Odoo 16, created barcode intake guidelines, and unified cross-hub replenishment triggers.",
    stack: ["Odoo 16", "Python", "PostgreSQL", "Data Migration", "Supply Chain"],
    metrics: [
      { label: "Loc Hub A", value: "99.8% Acc" },
      { label: "Loc Hub B", value: "99.4% Acc" },
      { label: "Holding Cost", value: "-34% Bloat" }
    ],
    deepDive: {
      client: "Regional FMCG Distributor",
      timeline: "5 Months Phased Migration",
      stakeholders: ["Supply Chain VP", "Warehouse Managers", "Logistics Fleet", "Procurement"],
      architectureHighlights: [
        "Implemented automated Minimum/Maximum stock replenishment rules preventing overstocking.",
        "Structured master item catalog cleansing, migrating 15,000+ SKUs with strict unit-of-measure mappings.",
        "Conducted physical stocktaking reconciliation scripts with zero ledger downtime."
      ]
    }
  },
  {
    id: "customer-portal",
    sysId: "SYS_04 // PORTAL PORTFOLIO",
    title: "Automated Customer Onboarding Portal",
    category: "Web & APIs",
    badge: "Full-Stack Web • Verification",
    role: "Full-Stack Developer & BA",
    diagramType: "terminal",
    summary: "Engineered a step-by-step lightweight client portal in React & Tailwind CSS backed by direct REST identity validation endpoints.",
    problem: "High drop-off rates during a multi-step registration flow plagued with redundant field requirements and ambiguous validation errors.",
    solution: "Engineered a step-by-step lightweight client portal in React/Laravel & Tailwind CSS backed by direct REST identity validation endpoints.",
    stack: ["React", "Laravel", "MySQL", "REST API", "Tailwind CSS"],
    metrics: [
      { label: "Drop-off Rate", value: "34% → 6.8%" },
      { label: "Endpoint Latency", value: "<150ms" },
      { label: "Submission Rate", value: "+45% Daily" }
    ],
    deepDive: {
      client: "Digital Services & Public Utilities",
      timeline: "3 Months Agile Sprints",
      stakeholders: ["Customer Service Lead", "Compliance Officers", "Front-end Engineering"],
      architectureHighlights: [
        "Built responsive, accessible 4-stage stepper with instant client-side validation feedback.",
        "Integrated asynchronous document verification with drag-and-drop OCR pre-check.",
        "Engineered secure session persistence allowing applicants to resume drafts seamlessly."
      ]
    }
  }
];

export const experienceData = [
  {
    id: "exp-1",
    role: "Lead Business Analyst & ERP Specialist",
    company: "Nexus Enterprise Solutions",
    location: "Jakarta & Remote",
    period: "2024 — PRESENT",
    active: true,
    description: "Lead functional architecture on mission-critical ERP migration programs. Author formal Functional Specification Documents (FSD) for development teams, define API payload schemas, and manage user acceptance milestones for over 2,500 active system users.",
    tags: [
      "Cycle Time Reduction: -32%",
      "12+ Published FSDs",
      "Cross-Functional Agile",
      "Stakeholder Governance"
    ]
  },
  {
    id: "exp-2",
    role: "Associate IT Business Analyst",
    company: "Horizon Digital Advisory",
    location: "Technology Practice",
    period: "2022 — 2024",
    active: false,
    description: "Facilitated 40+ stakeholder discovery sessions to identify digital transformation bottlenecks. Maintained the product backlog in Jira, structured user acceptance criteria with Given-When-Then syntax, and verified database schemas.",
    tags: [
      "Jira Sprint Ownership",
      "SQL Verification",
      "40+ Client Workshops",
      "Backlog Refinement"
    ]
  },
  {
    id: "exp-3",
    role: "Junior Systems Analyst Intern",
    company: "Metro Infrastructure Systems",
    location: "IT Division",
    period: "2021 — 2022",
    active: false,
    description: "Constructed As-Is and To-Be process workflows in BPMN, conducted relational database queries to audit data integrity prior to migration, and assisted technical leads with release smoke tests.",
    tags: [
      "BPMN 2.0 Audits",
      "UAT Test Logging",
      "Data Scrubbing",
      "Relational SQL"
    ]
  }
];
