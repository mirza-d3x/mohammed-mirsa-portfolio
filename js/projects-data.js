/**
 * MOHAMMED MIRSA — VERIFIED PROJECT CASE STUDY DATA
 * Source of Truth: Uploaded Resume
 */

const verifiedProjects = {
  "alfapay": {
    title: "AlfaPay Mobile App",
    domain: "FinTech & Cross-Border Remittance",
    platforms: "iOS · Android · Huawei",
    summary: "A comprehensive digital banking and cross-border remittance application based in the UAE, built natively across iOS, Android, and Huawei platforms.",
    contribution: "Architected and engineered high-security, scalable client flows in Flutter. Integrated secure localized payment processing ecosystems including UAE Pass authentication and Aani instant mobile transfers. Developed robust local utility billing settlements alongside prepaid travel card and Wages Protection System (WPS) card administration panels.",
    details: [
      "Engineered instant real-time international money transfers to over 100 countries featuring transparent fees and live exchange rate tracking.",
      "Integrated national digital identity via UAE Pass authentication for seamless, verified user sessions.",
      "Implemented Aani instant mobile transfers for real-time domestic peer-to-peer and merchant payments.",
      "Built administrative management panels for WPS payroll cards and multi-currency prepaid travel cards.",
      "Maintained native release pipelines targeting Google Play Store, Apple App Store, and Huawei AppGallery."
    ],
    technologies: ["Flutter", "Dart", "UAE Pass", "Aani Instant Transfers", "Huawei HMS", "REST APIs", "CI/CD", "FinTech Security"]
  },

  "snapp-pos": {
    title: "Snapp POS",
    domain: "Enterprise CRM, POS & ERP",
    platforms: "Android · Web",
    summary: "Cross-platform CRM, POS, and ERP system for end-to-end business operations like billing, inventory, and customer management.",
    contribution: "Built responsive and high-performance cross-platform applications targeting Android tablets and desktop web browsers. Used Bloc for predictable state management, integrated REST APIs, and enabled offline support with Hive to ensure zero downtime during connectivity drops.",
    details: [
      "Designed and delivered responsive layouts adapted for handheld Android tablets and wide desktop web viewports.",
      "Architected application state using the Bloc pattern to maintain deterministic transaction states.",
      "Enabled offline transaction resilience using Hive embedded key-value database, synchronizing records once connectivity is restored.",
      "Engineered interactive dashboards and operational reporting tools for business analytics and daily reconciliation."
    ],
    technologies: ["Flutter", "Dart", "Bloc", "Hive", "REST APIs", "Responsive Layouts (Figma)", "Android", "Web"]
  },

  "flip-geojit": {
    title: "Flip by Geojit",
    domain: "Financial Securities & Mobile Trading",
    platforms: "Android · iOS",
    summary: "High-performance mobile trading application available on Android and iOS for active securities trading and portfolio monitoring.",
    contribution: "Served as Developer and technical researcher, responsible for exploring new technologies, assessing feasibility, and advising on project solutions during the transition from legacy trading platforms.",
    details: [
      "Conducted technical research and feasibility studies to optimize application responsiveness during high-frequency market hours.",
      "Collaborated with product, design, and engineering teams to ensure real-time data integrity and functional accuracy.",
      "Paved the technical path for replacing legacy Objective-C and Java trading applications with a modern, high-performance Flutter codebase."
    ],
    technologies: ["Flutter", "Dart", "WebSockets", "Market Data Feeds", "Android", "iOS", "R&D"]
  },

  "hello-geojit": {
    title: "Hello Geojit",
    domain: "FinTech & Digital Onboarding",
    platforms: "Android · Web",
    summary: "Digital Client Onboarding application for paperless registration and account opening in Flutter framework.",
    contribution: "Played a key role in technical research and development by exploring new technologies, evaluating feasibility, proposing solutions, and actively contributing to the Hello Geojit app's codebase.",
    details: [
      "Built responsive onboarding workflows shared between mobile and web applications.",
      "Investigated and integrated document capture and verification mechanisms for KYC compliance.",
      "Refined client-side validation logic to eliminate onboarding drop-offs and enhance user experience."
    ],
    technologies: ["Flutter", "Dart", "Android", "Web", "Technical R&D", "Client Onboarding"]
  },

  "easy-card": {
    title: "Easy Card",
    domain: "Enterprise ePOS & Hardware Integration",
    platforms: "Android ePOS Hardware",
    summary: "Recharge card purchasing and payment application operating in Saudi Arabia, deployed on ePOS hardware machines.",
    contribution: "Lead Developer and ongoing system maintainer. Developed e-commerce purchasing flows and integrated hardware peripherals including Bluetooth thermal printers for on-site bill printing.",
    details: [
      "Engineered the application to run stably in commercial retail environments on dedicated ePOS terminals.",
      "Integrated Bluetooth thermal printer communication via Flutter platform channels to print receipts and transaction vouchers immediately upon purchase.",
      "Maintained transactional reliability and handled edge cases such as paper run-outs and printer disconnects."
    ],
    technologies: ["Flutter", "Dart", "ePOS Machines", "Bluetooth Printing", "Hardware Integration", "E-commerce"]
  },

  "sipo-pos": {
    title: "Sipo Cloud POS",
    domain: "F&B & Restaurant Administration",
    platforms: "Mobile · Web",
    summary: "Restaurant management application admin side for managing multi-store restaurants, staff operations, and inventory.",
    contribution: "Engineered administrative mobile and web applications using Flutter. Developed inventory tracking mechanisms and comprehensive business reporting views.",
    details: [
      "Built multi-outlet administrative tools allowing owners to oversee staff assignments, shifts, and table turnover.",
      "Implemented daily, weekly, monthly, and yearly reporting modules for revenue and performance analysis.",
      "Integrated real-time inventory management to monitor supply usage and reduce waste."
    ],
    technologies: ["Flutter", "Dart", "Mobile", "Web", "Inventory Management", "Analytics & Reporting"]
  },

  "selfie-geojit": {
    title: "Selfie Geojit",
    domain: "Native Mobile Trading",
    platforms: "iOS (Objective-C) · Android (Java)",
    summary: "Native mobile trading platform serving active brokerage clients.",
    contribution: "As the project's sole developer and maintainer after the main team's departure, ensured ongoing operations, including development and maintenance. The platform was later replaced by FLIP by Geojit.",
    details: [
      "Maintained native iOS (Objective-C) and Android (Java) codebases under strict production SLAs.",
      "Diagnosed and resolved critical platform bugs to prevent trading interruptions.",
      "Ensured regulatory compliance and supported live operations during the company's planned transition to Flutter."
    ],
    technologies: ["Objective-C", "Java", "iOS", "Android", "Native Maintenance", "Trading Systems"]
  },

  "homeegram": {
    title: "HomeeGram",
    domain: "Social Media & Home Design Marketplace",
    platforms: "Mobile (Flutter)",
    summary: "Social media application for home designs and construction materials.",
    contribution: "Developed mobile application features to showcase trending home designs and materials, locate nearest industry experts, and browse a marketplace for home needs.",
    details: [
      "Engineered content discovery feeds highlighting architectural projects and interior trends.",
      "Implemented location-based services to connect users with nearby design experts and contractors.",
      "Integrated a structured marketplace catalog for browsing and inquiring about home products."
    ],
    technologies: ["Flutter", "Dart", "Social Platform", "Marketplace", "Location Services"]
  },

  "retire-25years": {
    title: "25Years More",
    domain: "Community & Social Networking",
    platforms: "Mobile (Flutter)",
    summary: "Social media platform designed specifically for seniors and retirees.",
    contribution: "Developed mobile application enabling retirees to explore communities and discover social events within their circle.",
    details: [
      "Focused on clear typography, accessible navigation, and intuitive user flows suitable for senior demographics.",
      "Built community discovery features and calendar event tracking for local social circles."
    ],
    technologies: ["Flutter", "Dart", "Accessibility", "Community Building", "Mobile"]
  },

  "xtrade-uae": {
    title: "Xtrade By UAE Exchange",
    domain: "Financial Brokerage & Trading",
    platforms: "Android (Java) · iOS (Objective-C)",
    summary: "Mobile trading platform for the brokerage firm UAE Exchange.",
    contribution: "Served as developer and maintainer after the main development team left the company. Responsibilities included fixing bugs and implementing new features to enhance functionality.",
    details: [
      "Managed bug fixes and stability enhancements across both Android (Java) and iOS (Objective-C).",
      "Maintained reliable market communication channels for retail brokerage users."
    ],
    technologies: ["Java", "Objective-C", "Android", "iOS", "Brokerage Maintenance"]
  },

  "dbfs-inet": {
    title: "DBFS INET",
    domain: "Institutional & Retail Brokerage",
    platforms: "Android (Java) · iOS (Objective-C)",
    summary: "Mobile trading platform for Doha Brokerage and Financial Services (Qatar / India).",
    contribution: "Served as developer and maintainer following main development team departure. Fixed critical bugs and implemented new features to enhance trading stability.",
    details: [
      "Maintained cross-platform native applications supporting active trading on financial exchanges.",
      "Handled production patches, system diagnostics, and exchange-mandated updates."
    ],
    technologies: ["Java", "Objective-C", "Android", "iOS", "Financial Services"]
  },

  "drsar": {
    title: "DrSar",
    domain: "Healthcare & Doctor Appointments",
    platforms: "Mobile (Flutter)",
    summary: "Mobile application for booking clinical appointments with doctors.",
    contribution: "Lead Developer and project management. Handled requirement analysis directly from the client through to full application development and launch.",
    details: [
      "Conducted comprehensive requirements elicitation with healthcare stakeholders.",
      "Engineered doctor discovery, schedule viewing, and slot booking flows in Flutter.",
      "Delivered a production-ready application adhering to clinical booking rules."
    ],
    technologies: ["Flutter", "Dart", "Project Management", "Requirement Analysis", "Healthcare Tech"]
  }
};
