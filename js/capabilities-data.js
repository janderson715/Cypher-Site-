/*
  CYPHER CAPABILITIES STATEMENT: ALL THE WORDS ARE IN THIS FILE.

  capabilities.html reads this file and lays out the six printed pages:
    1  Cover
    2  Cypher in focus  (summary, why Cypher, key figures, core competencies)
    3  Our goal  (adaptive services, company data)
    4  Offerings in detail
    5  Products
    6  Corporate capabilities  (customers, partners, contact)

  To change the statement, change the text between the quotes below, save,
  and reload capabilities.html in a browser. Then rebuild the PDF
  (see README.md, "Rebuild the PDF").

  Rules that keep this file working:
    - Keep every quote, comma and bracket. Text goes between "double quotes".
    - To use a double quote inside text, type \"  (backslash, quote).
    - A list is [ "one", "two", "three" ]. Add or remove items, keeping the commas.
    - Anything written as [EDIT: ...] is a placeholder. It shows as a small
      yellow "to fill in" tag so it cannot be missed. Replace it, or delete it.
    - Wrap words in **double stars** to print them in Cypher green.
    - Pictures are files in assets/img/. To change one, change the file name here.
    - If a page gets too full, capabilities.html shows a red warning on screen
      saying which page and which part. Shorten text until the warning goes away.
*/

window.CYPHER_STATEMENT = {

  // ---- Document ------------------------------------------------------------
  documentTitle: "Capabilities Statement",
  documentDate: "November 2026",            // change when you update the statement

  // ---- Page 1: cover --------------------------------------------------------
  cover: {
    photo: "assets/img/photos/world-map.jpg",
    titleLine1: "Corporate",
    titleLine2: "Capabilities",
    // One line under the title. Words in **double stars** print green.
    leadLine: "Technical staff for **cyber operations, intelligence, software and systems engineering** across the DoD, the Intelligence Community and civilian agencies."
  },

  // ---- Page 2: Cypher in focus ---------------------------------------------
  focus: {
    title: "Cypher in focus",
    tagline: "Secure, innovative, adaptive, mission critical IT solutions",
    photo: "assets/img/photos/network-constellation.jpg",
    badge: "Technical staff supporting customers onsite",
    // Three key figures under "Why Cypher": big text, then the small label.
    figures: [
      { big: "2009", small: "Founded" },
      { big: "6", small: "Service areas" },
      { big: "SDVOSB", small: "Service-disabled veteran-owned" }
    ]
  },

  // Summary paragraphs (one entry per paragraph)
  overview: [
    "Cypher, LLC is a Service-Disabled Veteran-Owned Small Business, founded in 2009. We are a service partner to the federal government. Our technical staff supports customers onsite, with decades of experience on enterprise programs for DoD, Intelligence Community and civilian customers.",
    "We provide key personnel in military intelligence, cyber security and operations, software engineering, DevOps, network and systems engineering, aviation safety, enterprise IT management, business process improvement, and agile coaching. We pair strategic planning with tactical execution and proven industry practice so that customer initiatives are delivered."
  ],

  // Core competencies (grey panel, page 2)
  competencies: [
    { title: "Aviation Safety",
      text: "Program management, engineering, analytics, software development, operations and maintenance, and training." },
    { title: "Cyber Operations",
      text: "Cyber planners, targeteers, operations engineers, intrusion and intelligence analysts, threat hunting, watch operations and network defense." },
    { title: "National Security and Intelligence",
      text: "HUMINT and SIGINT, analysis and production, cyber intelligence, knowledge management, and geospatial and space mission support." },
    { title: "Software Engineering",
      text: "Agile lifecycle design and development, independent testing, COTS integration, and open source and custom development for DoD architectures." },
    { title: "Systems Engineering and Integration",
      text: "AWS cloud architecture and migration, SELinux system administration, and database architecture design." },
    { title: "Enterprise IT Management",
      text: "Program planning, earned value management, risk mitigation, systems and network engineering, application security, and disaster recovery." }
  ],

  // Highly adaptive services (dark photo panel, page 3)
  adaptiveServices: [
    "Cyber Hunt",
    "High Value Asset (HVA) Assessments",
    "Incident Response",
    "Penetration Testing",
    "Risk and Vulnerability Assessment (RVA)"
  ],

  // Why Cypher (numbered, page 2). "lead" prints in bold.
  differentiators: [
    { lead: "Technical staff", text: "supporting customers onsite." },
    { lead: "Service-Disabled Veteran-Owned Small Business", text: "(SDVOSB), founded in 2009." },
    { lead: "Prime contractor", text: "on FAA eFAST and SeaPort NxG." },
        { lead: "Our own software,", text: "two separate products: C.O.S.M.O (threat intelligence) and G.H.O.S.T. (on-premises AI)." }
  ],

  // Company data (cover, page 3, footers and contact). Empty "" hides a row.
  company: {
    legalName: "Cypher, LLC",
    uei: "UVKETSQ7AQG3",
    cage: "6ZPW9",
    founded: "2009",
    businessSize: "Small business",
    socioEconomic: "SDVOSB",
    facilityClearance: "",
    addressLine1: "44679 Endicott Dr, Suite 336",
    addressLine2: "",
    phone: "(571) 206-1401",
    website: "cypher-llc.com"
  },

  // Aviation Safety programs
  aviation: {
    title: "Aviation Safety",
    text: "Cypher supports aviation safety programs for the Federal Aviation Administration, the Air Force and the Navy. We manage programs, build the software behind aviation safety data, analyze it, run operations and maintenance, and train the people who use it.",
    programsText: "For each program we provide program management, engineering, analytics, software development, operations and maintenance, and training.",
    programs: ["Federal Aviation Administration (FAA)", "Air Force IRIS MFOQA", "Navy NAVAIR"],
    items: ["Program management", "Engineering", "Analytics", "Software development", "Operations and maintenance", "Training"]
  },

  // ---- Page 3: Our goal (in the photo band) --------------------------------
  goalPhoto: "assets/img/photos/green-data-streams.jpg",
  adaptivePhoto: "assets/img/photos/world-map-grid.jpg",
  goal: "To form long-term partnerships with our customers based on trust and added value. We are committed to excellence, high ethical standards, completing deliverables, and aiding our customers in accomplishing their missions.",

  // ---- Page 4: Offerings in detail ------------------------------------------
  offeringsTitle: "Cypher's offerings",
  offeringsTagline: "",
  offeringsPhoto: "assets/img/photos/server-corridor.jpg",
  // Each area gets a dark bar and a bullet list. "columns" is how many
  // columns the list uses (1, 2 or 3). "width" is "full" or "half".
  offerings: [
    { area: "Aviation Safety", width: "half", columns: 1, items: [
      "Program management", "Engineering", "Analytics", "Software development",
      "Operations and maintenance", "Training" ] },
    { area: "Military Intelligence and Cyber Operations", width: "half", columns: 2, items: [
      "Cyber planners", "Cyber targeteers", "Cyber operations engineers", "Cyber intrusion analysts",
      "Cyber intelligence analysts", "Cyber threat hunting", "Cyber watch operations and CND",
      "Analysis and production", "Knowledge management", "HUMINT and SIGINT",
      "Incident response", "Cyber intelligence", "Malware" ] },
    { area: "Systems Engineering and Integration", width: "half", columns: 1, items: [
      "AWS cloud architecture", "Cloud migration support", "SELinux system administration support",
      "Database architecture designs" ] },
    { area: "Enterprise IT Management", width: "full", columns: 3, items: [
      "New concept development", "Program plans and schedules", "Project and program management",
      "Technical analysis", "Earned value management analysis", "Technical and programmatic risk mitigation",
      "Acceptance and qualification testing", "Performance management", "System demonstration",
      "Migrations", "On-demand, pay-as-you-go professional IT services", "Systems monitoring",
      "Proactive and preventive management", "Operating system patches and updates",
      "Systems and network engineering", "Remote access support", "Application administration",
      "Comprehensive IT services", "Application security", "Remote application management",
      "Disaster recovery and backup",
      "Communication and collaboration (Cisco Unified Communications, Microsoft Exchange and SharePoint)" ] },
    { area: "Software Engineering", width: "half", columns: 1, items: [
      "Agile lifecycle design and development",
      "Independent testing to validate software",
      "Integration of COTS",
      "Lifecycle maintenance of new and legacy systems",
      "Open source and custom solutions in DoD architectures",
      "Enterprise architecture and data modeling that surface authoritative data sources" ] },
    { area: "Geospatial and Space", width: "half", columns: 1, items: [
      "Mission systems and ground control support", "DevOps development", "Satellite support" ] }
  ],

  // ---- Page 5: Products -----------------------------------------------------
  productsPhoto: "assets/img/photos/circuit-board.jpg",
  productsFooterPhoto: "assets/img/photos/green-city-wireframe.jpg",
  // "logo" and "screenshot" are files in assets/img/. The screenshot is shown
  // inside a laptop drawing. "logoOnDark" is used if the logo sits on a dark panel.
  products: [
    { name: "G.H.O.S.T.", logo: "assets/img/ghost-logo-dark.png", screenshot: "assets/img/mock/ghost-home-macbook.webp",
      text: "**A modular agentic AI platform** for national security and enterprise missions. Mission-specific agents run multi-step workflows on-premises, in a private cloud or fully disconnected.",
      points: [
        "Modular agents with one-click automated workflows",
        "Runs on-premises, in private cloud or fully disconnected",
        "Cites the source document for every output",
        "More than 30 mission agents, from planning to network operations",
        "Encryption and containerization meeting DoD and IC requirements"
      ],
      linkText: "ghostplatform.ai", link: "https://ghostplatform.ai" },
    { name: "C.O.S.M.O", logo: "assets/img/cosmo-horizontal.png", screenshot: "assets/img/cosmo-overview.jpg",
      text: "Cognitive Operations & Security Monitoring Orchestrator. The **AI-driven cyber intelligence platform**: its AI does the heavy lifting of a security team, from the first alert to the fix, and analysts approve.",
      points: [
        "Auto-triages the whole alert queue: real, closed or needs checking",
        "Auto-assigns work to the right team and person",
        "Builds rapid-response playbooks, firewall blocks and detection rules",
        "Takes malware apart with a council of five AI analysts"
      ],
      linkText: "cosmoplatform.ai", link: "https://cosmoplatform.ai" }
  ],
  // One line under the products: how to buy.
  howToBuy: "",

  // ---- Page 6: Corporate capabilities ---------------------------------------
  corporatePhoto: "assets/img/photos/green-particle-field.jpg",

  customers: [
    "Federal Aviation Administration (FAA)", "Federal Transit Administration (FTA)",
    "USCYBERCOM J2 and J3", "USCENTCOM JIOC TAAS", "NIST Federal Labs Consortium",
    "Air Force IRIS MFOQA", "AWS GovCloud", "Northern Virginia agency", "FBI Cyber Center",
    "Navy NAVAIR", "GEOINT and Aerospace"
  ],

  // Partners (dark sidebar, page 6). "logo" is a picture in assets/img/;
  // "note" prints small under the logo; use "" for none.
  partners: [
    { name: "Carahsoft", logo: "assets/img/partners/carahsoft.png",
      note: "" },
        { name: "Raytheon", logo: "assets/img/partners/raytheon.png", note: "" },
    { name: "Palantir", logo: "assets/img/partners/palantir.svg", note: "" }, { name: "UTRS", logo: "assets/img/partners/utrs.png", note: "" }, { name: "GovSmart", logo: "assets/img/partners/govsmart.svg", note: "" }, { name: "Four Inc.", logo: "assets/img/partners/four-inc.png", note: "" }, { name: "Product Knowledge", logo: "assets/img/partners/product-knowledge.png", note: "" }
  ],

  // Contacts (dark sidebar, page 6)
  contacts: [
    { name: "Joseph Anderson", credentials: "MBA, MS, MISM, CSM", title: "Founder & CEO",
      email: "janderson@cypher-llc.com", phone: "(571) 449-1368" },
    { name: "Lisa Anderson", credentials: "", title: "Chief Operating Officer",
      email: "landerson@cypher-llc.com", phone: "(571) 206-1401" }
  ]
};
