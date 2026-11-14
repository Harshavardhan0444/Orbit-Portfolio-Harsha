/**
 * Projects Data for Harshavardhan A V
 * Categories:
 * - "All"
 * - "AI / Machine Learning"
 * - "Big Data Analytics"
 * - "Full Stack Development"
 * - "Data Analytics"
 * - "Web Development"
 *
 * Strict Honesty Policy:
 * - No fabricated ML accuracy, precision, or F1 metrics.
 * - Distinct target vs processed dataset counts.
 * - Clear "In Progress / Concept" labels where appropriate.
 * - Editable placeholders for GitHub and Live Demo URLs.
 */

export const projectCategories = [
  "All",
  "AI / Machine Learning",
  "Big Data Analytics",
  "Full Stack Development",
  "Data Analytics",
  "Web Development"
];

export const projectsData = [
  {
    id: "attrition-prediction",
    title: "AI-Based Employee Attrition Prediction & HR Analytics System",
    category: "AI / Machine Learning",
    badge: "Featured AI/ML Project",
    status: "Project Under Development",
    statusType: "in-progress", // 'completed' | 'in-progress' | 'concept'
    featured: true,
    tagline: "Predictive workforce analytics utilizing Scikit-Learn to assess turnover risk and provide actionable HR intelligence.",
    description: "An employee attrition analytics application designed to analyze workforce information, identify patterns associated with employee turnover, and support HR decision-making through machine learning-based attrition prediction.",
    datasetInfo: {
      targetSize: "5,000 employee records (Target Benchmark)",
      processedCount: "Dataset integration & preprocessing in progress (Actual count to be updated upon model training)",
      note: "Model performance metrics (accuracy, precision, recall, F1-score) will be published upon verified validation."
    },
    keyModules: [
      { name: "Employee Dataset Management", desc: "Structured ingestion and schema mapping of multi-departmental employee records." },
      { name: "Dataset Exploration & Cleaning", desc: "Handling missing values, outlier detection, and categorical feature transformation." },
      { name: "Data Preprocessing Pipeline", desc: "Normalization, encoding, and training/testing split generation." },
      { name: "Exploratory Data Analysis (EDA)", desc: "Correlation heatmaps, tenure distribution, and satisfaction index mapping." },
      { name: "Employee Attrition Analysis", desc: "Identifying primary drivers of resignation (overtime, compensation, role stagnation)." },
      { name: "ML Prediction Module", desc: "Classification algorithms (Logistic Regression / Random Forest) to calculate individual attrition likelihood." },
      { name: "Employee Risk Analysis", desc: "High, medium, and low turnover risk segmentation for HR intervention." },
      { name: "Department-wise Analytics", desc: "Comparative turnover insights across Engineering, Sales, Support, and Operations." },
      { name: "HR Dashboard Interface", desc: "Intuitive interactive interface for talent leads to visualize risk indicators." },
      { name: "Model Evaluation Section", desc: "Benchmarking evaluation metrics strictly upon completion of empirical runs." }
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Visualization", "Matplotlib / Seaborn"],
    links: {
      github: "https://github.com", // Replace with your repository link
      demo: "" // Add live demo link if deployed
    },
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "urban-pulse",
    title: "UrbanPulse – Smart City Heat, Pollution & Environmental Intelligence Platform",
    category: "Big Data Analytics",
    badge: "Featured Big Data Project",
    status: "In Progress / Project Concept",
    statusType: "concept",
    featured: true,
    tagline: "Big data environmental platform concept for geospatial heat, air quality, and urban sustainability analytics.",
    description: "UrbanPulse is a smart-city environmental analytics project concept designed to explore large-scale environmental information, analyze urban temperature and pollution patterns, and identify areas that may require environmental attention.",
    datasetInfo: {
      targetSize: "Targeting large-scale city sensor & satellite records",
      processedCount: "Architecture & pipeline design phase (50,000 record test dataset planned for benchmarking)",
      note: "Proposed modules and data pipelines are presented in design architecture; integrations will be connected iteratively."
    },
    keyModules: [
      { name: "Environmental Data Ingestion", desc: "Streaming and batch ingestion framework designed for meteorological feeds." },
      { name: "Large-Scale Data Storage", desc: "Distributed storage concept leveraging Hadoop HDFS and Hive schemas." },
      { name: "Data Processing Engine", desc: "Distributed transformation pipelines designed for Apache Spark / PySpark." },
      { name: "Urban Temperature Analysis", desc: "Mapping heat island effects across dense concrete vs vegetated zones." },
      { name: "Pollution & AQI Analysis", desc: "Tracking particulate matter (PM2.5, PM10) patterns across traffic corridors." },
      { name: "Population-Density Analysis", desc: "Correlating resident exposure risks using census and density figures." },
      { name: "Geospatial Hotspot Analysis", desc: "Spatial clustering algorithms with Apache Sedona to pinpoint hazard zones." },
      { name: "Interactive Environmental Dashboard", desc: "Web-based analytical console for municipal decision-makers." },
      { name: "Map-Based Visualization", desc: "Geographic heatmaps utilizing Leaflet.js and Plotly layers." },
      { name: "Green-Space Analysis", desc: "Quantifying canopy cover buffer efficiency against localized air quality." }
    ],
    proposedDataSources: [
      "Landsat Satellite Temperature Data",
      "Copernicus ERA5 Weather Data",
      "OpenAQ Global Air-Quality Open Data",
      "WorldPop High-Resolution Population Data",
      "OpenStreetMap Geographical Information"
    ],
    technologies: ["Hadoop HDFS", "Apache Spark / PySpark", "Hive", "Python", "Apache Sedona", "MySQL", "Flask", "Plotly", "Leaflet.js"],
    links: {
      github: "https://github.com", // Replace with your repository link
      demo: ""
    },
    accentColor: "from-blue-600 to-indigo-600"
  },
  {
    id: "food-donation-system",
    title: "Food Donation Management System",
    category: "Full Stack Development",
    badge: "Full Stack Application",
    status: "Completed Academic Project",
    statusType: "completed",
    featured: false,
    tagline: "Java & Spring Boot platform bridging surplus food donors with registered NGOs to eliminate waste.",
    description: "A Java-based donation management application designed to connect donors and NGOs, manage food donations, and improve transparency in donation tracking.",
    keyModules: [
      { name: "Donor Registration & Profiles", desc: "Allows individual and corporate food donors to register, log donations, and schedule pickups." },
      { name: "NGO Verification & Management", desc: "Vetted NGO account onboarding with credential checking and coverage location mapping." },
      { name: "Donation Listing & Matching", desc: "Real-time listing of available perishable food supplies with expiration and pickup constraints." },
      { name: "Campaign Management", desc: "Dedicated charity drives organized for festivals, emergencies, and designated neighborhoods." },
      { name: "Real-time Donation Tracking", desc: "Status tracking from pickup request, dispatched driver, through delivery acknowledgement." },
      { name: "Role-Based Authentication", desc: "Granular access control separating Donors, NGOs, and Administrative auditors." },
      { name: "Relational Database Management", desc: "Normalized MySQL schema managing inventory, transactional logs, and delivery receipts." }
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    links: {
      github: "https://github.com",
      demo: ""
    },
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: "mining-resource-management",
    title: "Mining Resource Management System",
    category: "Full Stack Development",
    badge: "Enterprise Resource Software",
    status: "Completed Academic Project",
    statusType: "completed",
    featured: false,
    tagline: "Desktop & web-based industrial resource management software managing heavy equipment, yield scheduling, and compliance.",
    description: "A specialized application designed to manage mining resources, equipment allocation, extraction schedules, and compliance-related reports.",
    keyModules: [
      { name: "Equipment Allocation", desc: "Tracking heavy machinery deployment, maintenance schedules, and idle duration." },
      { name: "Extraction Scheduling", desc: "Shift-based resource extraction timetables and target tonnage monitors." },
      { name: "Safety & Compliance Reporting", desc: "Auditing regulatory compliance documents and environmental safety checklists." },
      { name: "Relational SQL Data Management", desc: "Centralized SQL database storing personnel logs, machinery telemetry, and inventory." }
    ],
    technologies: ["VB.NET", "SQL Server / SQL", "Relational Database Design"],
    links: {
      github: "https://github.com",
      demo: ""
    },
    accentColor: "from-amber-500 to-orange-600"
  },
  {
    id: "traffic-fine-management",
    title: "Traffic Fine Management System",
    category: "Web Development",
    badge: "Civic Portal",
    status: "Completed Academic Project",
    statusType: "completed",
    featured: false,
    tagline: "Web-based e-challan and traffic violation record management system with automated penalty calculation.",
    description: "An academic application designed to manage traffic violations, calculate fines, maintain payment records, and track challan status.",
    keyModules: [
      { name: "Violation Logging", desc: "Officer portal to log vehicle registration, violation type, photo proof, and location." },
      { name: "Automated Fine Calculation", desc: "Rule engine calculating penalties based on violation severity and repeat offences." },
      { name: "Challan Status Tracking", desc: "Public portal for motorists to look up pending challans via registration number." },
      { name: "Payment Record Ledger", desc: "Record reconciliation marking paid vs defaulted fines with transaction receipts." }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "SQL", "Relational Database"],
    links: {
      github: "https://github.com",
      demo: ""
    },
    accentColor: "from-violet-500 to-purple-600"
  },
  {
    id: "cinescope-movie-analytics",
    title: "CineScope: Movie Insights and Analytics",
    category: "Data Analytics",
    badge: "Data Visualization & BI",
    status: "Completed Project",
    statusType: "completed",
    featured: false,
    tagline: "Interactive analytical dashboard visualizing movie performance, genre revenue correlations, and audience reception trends.",
    description: "A movie analytics dashboard designed to explore movie information, ratings, genres, revenue, popularity, and trends through interactive data visualization.",
    keyModules: [
      { name: "Exploratory Movie Exploration", desc: "Multi-parameter slicing across release decade, genre, budget, and box-office gross." },
      { name: "Pivot Table Analytics", desc: "Aggregated metric matrices measuring ROI per studio and director." },
      { name: "Dynamic Slicer Controls", desc: "Interactive filtering enabling instant cross-filtering of rating brackets and year." },
      { name: "Trend Visualization", desc: "Comparative charts showing the evolution of runtime and audience score distributions." }
    ],
    technologies: ["Microsoft Excel", "Pivot Tables", "Advanced Charts", "Interactive Slicers", "Data Visualization"],
    links: {
      github: "https://github.com",
      demo: ""
    },
    accentColor: "from-pink-500 to-rose-600"
  },
  {
    id: "virtualverse-3d-museum",
    title: "VirtualVerse: 3D Virtual Museum",
    category: "Web Development",
    badge: "3D Web Experience",
    status: "In Progress / Concept",
    statusType: "concept",
    featured: false,
    tagline: "Browser-based 3D digital museum environment enabling interactive exploration of historical and scientific exhibits.",
    description: "An interactive 3D virtual museum concept designed to let users explore digital exhibits through a browser-based three-dimensional environment.",
    keyModules: [
      { name: "3D Spatial Gallery", desc: "Interactive Three.js scene featuring spatial lighting, floor physics, and camera controls." },
      { name: "Exhibit Hotspots", desc: "Interactive 3D mesh nodes that display curated metadata and multimedia upon focus." },
      { name: "Virtual Walkthrough Navigation", desc: "Intuitive orbit controls and first-person perspective transitions." },
      { name: "Web-Optimized 3D Assets", desc: "Lightweight GLTF/GLB models and procedural materials for high-FPS browser rendering." }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Three.js", "WebGL", "3D Modeling Principles"],
    links: {
      github: "https://github.com",
      demo: ""
    },
    accentColor: "from-cyan-400 to-indigo-500"
  }
];
