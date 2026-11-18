export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  visual:
    | "erp"
    | "finance"
    | "recruitment"
    | "web"
    | "nlp"
    | "campaign"
    | "bio";
  tech: string[];
  highlights: string[];
  problem: string;
  thinking: string;
  build: string;
  experience: string;
  result: string;
  learning: string;
};

export const projects: Project[] = [
  {
    id: "hostel-erp",
    index: "01",
    title: "HOSTEL ERP",
    subtitle: "A complete digital operating system for hostel management.",
    category: "Product • ERP • Android • Data",
    visual: "erp",
    tech: ["Kotlin", "Android", "MVVM", "Room Database", "SQLite", "PDF Generation", "CSV Export"],
    highlights: [
      "Dashboard",
      "Student management",
      "Hostel occupancy",
      "Attendance",
      "Revenue",
      "Pending fees",
      "Transactions",
      "Invoice generation",
      "Fee reminders",
      "Role-based access",
      "CSV export",
      "Student accounts",
    ],
    problem:
      "Hostel operations are usually spread across registers, spreadsheets and messages — occupancy, fees and attendance never live in one place.",
    thinking:
      "Model the hostel as a system first: rooms, students, transactions and roles. Every screen is a view over that same data model rather than an isolated feature.",
    build:
      "Native Android in Kotlin with an MVVM architecture, Room over SQLite for local persistence, and generation layers for PDF invoices and CSV exports.",
    experience:
      "An admin dashboard surfaces occupancy, revenue and pending fees; student management, attendance and transactions each drill down from it. Role-based access separates admin and student accounts.",
    result:
      "A working end-to-end ERP covering admissions, occupancy, attendance, fees, invoices and reminders in a single offline-capable application.",
    learning:
      "Designing data models before screens, and how much of product quality is really information architecture.",
  },
  {
    id: "finance-manager-ai",
    index: "02",
    title: "FINANCE MANAGER AI",
    subtitle: "An intelligent personal finance experience built around data and automation.",
    category: "AI • Finance • Product",
    visual: "finance",
    tech: ["Python", "Data Modelling", "Categorisation", "Dashboards", "AI Assistance"],
    highlights: [
      "Income",
      "Expenses",
      "Categories",
      "Budgets",
      "Transactions",
      "Financial insights",
      "Trends",
      "Dashboards",
      "AI assistance",
    ],
    problem:
      "Personal finance data is plentiful but unreadable — transactions alone say nothing about how money actually behaves.",
    thinking:
      "Treat every transaction as a data point. Categorise, aggregate, then let the interface emerge from the visualisation instead of the other way around.",
    build:
      "A structured transaction store with category and budget models, aggregation logic for trends, and an AI-assisted layer for querying and organising entries.",
    experience:
      "Income and expenses flow into categories, categories roll into budgets, and dashboards show trends over time with plain-language insights.",
    result:
      "A functioning finance manager covering transactions, categories, budgets, trends and dashboard insights.",
    learning:
      "Where automation genuinely helps and where it should stay out of the way of the user's own judgement.",
  },
  {
    id: "recruitment-intelligence",
    index: "03",
    title: "RECRUITMENT INTELLIGENCE",
    subtitle: "Workforce and recruitment MIS turned into a decision surface.",
    category: "Analytics • Dashboard • Workforce",
    visual: "recruitment",
    tech: ["Excel", "Power BI", "SQL", "Python", "Pandas"],
    highlights: [
      "Recruitment MIS",
      "Candidates",
      "Joining trends",
      "Recruiter performance",
      "Workforce deployment",
      "Company-wise data",
      "Attendance",
      "Reporting",
    ],
    problem:
      "Recruitment data arrives fragmented across trackers — candidate stages, joinings, recruiters and client deployment rarely reconcile.",
    thinking:
      "Define the pipeline as stages, make every record traceable through them, and report on movement rather than snapshots.",
    build:
      "Cleaned and consolidated MIS data with Excel and Python, modelled the pipeline, and built reporting views across recruiters, clients and time.",
    experience:
      "Applied → Selected → Joining → Joined, with cuts by recruiter, company and period, plus attendance and deployment reporting.",
    result: "A repeatable reporting workflow over live business recruitment data.",
    learning:
      "Business data is messy by nature; the analysis is only as good as the cleaning discipline behind it.",
  },
  {
    id: "param-social-foundation",
    index: "04",
    title: "PARAM SOCIAL FOUNDATION",
    subtitle: "An NGO's digital presence: design, development and communication.",
    category: "Web Development • Design • Digital Experience",
    visual: "web",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    highlights: [
      "Mission & Vision",
      "Outreach & Impact",
      "Partners",
      "People",
      "Media",
      "Contact",
      "Donation flow",
      "Volunteer interaction",
      "Impact visualization",
      "Responsive design",
    ],
    problem:
      "A social foundation needs credibility online — its mission, impact and ways to participate have to be legible in seconds.",
    thinking:
      "Lead with mission and impact, keep donation and volunteering one interaction away, and let visuals carry the story.",
    build: "A responsive multi-section website with structured content and clear conversion paths.",
    experience:
      "Mission and vision, outreach and impact, partners, people, media and contact — with donation and volunteer flows woven through.",
    result: "A complete, responsive public website for the foundation.",
    learning: "Designing and building the same thing teaches you where each discipline compromises.",
  },
  {
    id: "real-or-fake",
    index: "05",
    title: "REAL OR FAKE?",
    subtitle: "A news classification system built on classical NLP.",
    category: "Machine Learning • NLP",
    visual: "nlp",
    tech: ["Python", "Scikit-learn", "TF-IDF", "NLTK", "Pandas"],
    highlights: ["Text input", "Preprocessing", "TF-IDF", "Classification", "Prediction"],
    problem: "Misinformation spreads faster than verification. Can language alone signal it?",
    thinking:
      "Start simple and interpretable: clean the text, vectorise it, and let a classical classifier show what the language itself carries.",
    build:
      "Text preprocessing and tokenisation, TF-IDF vectorisation, and a supervised classifier trained on labelled news data.",
    experience:
      "An article enters, breaks into tokens, becomes vectors, passes through the model, and returns a prediction.",
    result: "A working end-to-end text classification pipeline from raw article to prediction.",
    learning: "Feature representation decides more than model choice.",
  },
  {
    id: "campaign-intelligence",
    index: "06",
    title: "CAMPAIGN INTELLIGENCE",
    subtitle: "Email marketing campaign outcome prediction.",
    category: "Machine Learning • Marketing Analytics",
    visual: "campaign",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    highlights: ["Dataset", "Feature engineering", "Exploration", "Model", "Prediction"],
    problem: "Campaign performance is treated as intuition when it is largely a modelling problem.",
    thinking:
      "Understand the dataset before touching a model — explore distributions, engineer features that reflect campaign behaviour, then evaluate.",
    build:
      "Exploratory data analysis, feature engineering over campaign attributes, and supervised models compared on held-out data.",
    experience: "Dataset → feature engineering → exploration → model → prediction.",
    result: "A complete modelling workflow over marketing campaign data.",
    learning: "Most of the signal is created during feature engineering, not training.",
  },
  {
    id: "data-x-biology",
    index: "07",
    title: "DATA × BIOLOGY",
    subtitle: "Computational analysis of biological sequence data.",
    category: "Bioinformatics • Data Science",
    visual: "bio",
    tech: ["Python", "RNA-Seq", "Statistics", "Visualization"],
    highlights: ["Sequence data", "Preprocessing", "Computational analysis", "Visualization"],
    problem: "Biological data is high-dimensional and noisy long before it becomes an insight.",
    thinking:
      "Bioinformatics is where computational thinking became instinct: structure the data, respect the biology, visualise the result.",
    build: "RNA-Seq oriented analysis workflows with Python-based processing and visualisation.",
    experience: "DNA sequence → biological data → computational analysis → visualisation.",
    result: "An academic foundation in applying computation to real biological datasets.",
    learning: "How to reason about data whose meaning lives outside the spreadsheet.",
  },
];