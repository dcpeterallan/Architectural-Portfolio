const projects = [
  {
    title: "Ebara Elliott Energy Facility",
    sector: "industrial",
    location: "SPARK, Saudi Arabia",
    role: "Lead Architecture & BIM Delivery",
    featured: true,
    color: "#44564d",
    summary: "Master planning and multidisciplinary architectural delivery for an energy-sector industrial facility comprising production, office, service, utilities, security, and site-support buildings.",
    scope: ["Master planning", "Architectural design", "BIM coordination", "IFC documentation", "Authority coordination", "LEED-oriented design"]
  },
  {
    title: "NUPCO Warehouse & Pharmaceutical Facility",
    sector: "industrial",
    location: "Asir, Saudi Arabia",
    role: "Architectural BIM & Coordination",
    featured: true,
    color: "#72594b",
    summary: "Architectural and BIM development for a large logistics and pharmaceutical warehouse environment, including coordination of building envelope, storage operations, life-safety interfaces, and technical documentation.",
    scope: ["LOD 300 modelling", "Warehouse planning", "Envelope coordination", "Drawing production", "Clash review"]
  },
  {
    title: "Qiddiya Residential Camps",
    sector: "residential",
    location: "Qiddiya, Saudi Arabia",
    role: "Architecture, BIM & Visualization",
    featured: true,
    color: "#806a4e",
    summary: "Design, BIM modelling, and visualization support for high-capacity residential camp developments serving a major destination project, with attention to repeatable planning, resident experience, and buildable delivery.",
    scope: ["Residential planning", "BIM modelling", "Interior studies", "Visualization", "Technical coordination"]
  },
  {
    title: "SCITRA / Zain Industrial Facility",
    sector: "industrial",
    location: "Saudi Arabia",
    role: "Lead Architect",
    color: "#3c5059",
    summary: "Architectural leadership for an industrial development, coordinating functional planning, design progression, multidisciplinary inputs, and drawing package quality.",
    scope: ["Design leadership", "Industrial planning", "Coordination", "Technical documentation"]
  },
  {
    title: "Ebara Pumps Office",
    sector: "commercial",
    location: "Saudi Arabia",
    role: "Lead Architect",
    color: "#7b4e45",
    summary: "Workplace planning and architectural delivery for a corporate office environment, balancing operational requirements, professional identity, and technical coordination.",
    scope: ["Workplace design", "Space planning", "Material direction", "BIM documentation"]
  },
  {
    title: "Toray Membrane Middle East",
    sector: "industrial",
    location: "Saudi Arabia",
    role: "Lead Architect",
    color: "#53645a",
    summary: "Architectural planning and design coordination for an industrial facility supporting specialist membrane technology operations.",
    scope: ["Industrial architecture", "Planning", "BIM coordination", "Documentation"]
  },
  {
    title: "Peugeot & Citroën Showroom",
    sector: "commercial",
    location: "Saudi Arabia",
    role: "Lead Architect",
    color: "#39434b",
    summary: "Automotive retail and customer-experience planning developed around brand presentation, display flexibility, circulation, and operational support spaces.",
    scope: ["Retail architecture", "Showroom planning", "Brand integration", "Technical delivery"]
  },
  {
    title: "L&T Solar Farm Facilities",
    sector: "infrastructure",
    location: "Saudi Arabia",
    role: "Assistant Architect",
    color: "#6e6846",
    summary: "Architectural contribution to support buildings and coordinated site requirements for renewable-energy infrastructure.",
    scope: ["Support facilities", "Site coordination", "Documentation", "Multidisciplinary review"]
  },
  {
    title: "L&T Wind Farm Facilities",
    sector: "infrastructure",
    location: "Saudi Arabia",
    role: "Assistant Architect",
    color: "#4e6970",
    summary: "Design and documentation support for operational buildings and site elements within a large-scale wind-energy development.",
    scope: ["Infrastructure support", "Architectural modelling", "Coordination", "Drawing production"]
  },
  {
    title: "Green Riyadh Nursery",
    sector: "infrastructure",
    location: "Riyadh, Saudi Arabia",
    role: "Assistant Architect",
    color: "#526a43",
    summary: "Architectural assistance for nursery and landscape-support facilities connected to Riyadh's urban greening programme.",
    scope: ["Landscape support", "Facility planning", "Architectural documentation"]
  },
  {
    title: "UBI Ethanol Plant",
    sector: "industrial",
    location: "Saudi Arabia",
    role: "Quantity & Architectural Support",
    color: "#765f43",
    summary: "Quantity take-off and technical support for an industrial plant project, helping translate design information into measurable construction scope.",
    scope: ["Quantity take-off", "Drawing review", "Technical support"]
  },
  {
    title: "Al Jomaih Beverage Facility",
    sector: "industrial",
    location: "Saudi Arabia",
    role: "Quantity & Architectural Support",
    color: "#514e3f",
    summary: "Architectural quantity and documentation support for a beverage production development.",
    scope: ["Quantity take-off", "Documentation review", "Industrial scope analysis"]
  },
  {
    title: "TAQA Well Services",
    sector: "industrial",
    location: "Saudi Arabia",
    role: "BOQ & Technical Support",
    color: "#46535a",
    summary: "Bill-of-quantities and technical drawing support for well-services facilities serving the energy sector.",
    scope: ["BOQ preparation", "Quantity review", "Technical coordination"]
  },
  {
    title: "Tiran Island Development",
    sector: "commercial",
    location: "Saudi Arabia",
    role: "Architecture & Visualization Support",
    color: "#41656b",
    summary: "Architectural and visual development support for a destination-scale island project.",
    scope: ["Architectural modelling", "Visualization", "Design support"]
  },
  {
    title: "Professional Village",
    sector: "residential",
    location: "Saudi Arabia",
    role: "Architecture & Visualization Support",
    color: "#6f5548",
    summary: "Residential and community design support for a professional accommodation development, including modelling and presentation work.",
    scope: ["Residential design", "BIM modelling", "Visualization"]
  },
  {
    title: "NEOM High-Density Development",
    sector: "residential",
    location: "NEOM, Saudi Arabia",
    role: "Architectural BIM Support",
    color: "#545a67",
    summary: "BIM and architectural support for a high-density development within the NEOM programme.",
    scope: ["High-density planning", "BIM modelling", "Documentation support"]
  },
  {
    title: "Executive Office & Meeting Suite",
    sector: "commercial",
    location: "Saudi Arabia",
    role: "Interior Architecture & Visualization",
    color: "#624f46",
    summary: "Executive workplace and meeting-room studies incorporating bespoke joinery, lighting coordination, premium materials, acoustic partitions, and presentation visuals.",
    scope: ["Interior architecture", "Joinery design", "Lighting coordination", "Visualization"]
  },
  {
    title: "VIP Waiting Lounge",
    sector: "commercial",
    location: "Saudi Arabia",
    role: "Interior Design",
    color: "#695749",
    summary: "A hospitality-led VIP waiting environment developed through material, ceiling, furniture, and lighting studies.",
    scope: ["Interior concept", "Material selection", "Ceiling design", "Visualization"]
  },
  {
    title: "Data Centre Design Studies",
    sector: "industrial",
    location: "Saudi Arabia",
    role: "Architectural Technologist / BIM Focus",
    color: "#3d4b57",
    summary: "Mission-critical design studies focused on coordinated architectural systems, technical rooms, envelope interfaces, and precise BIM-led delivery.",
    scope: ["Mission-critical planning", "BIM coordination", "Technical rooms", "Detail development"]
  },
  {
    title: "PEB Warehouse Technical Development",
    sector: "industrial",
    location: "Saudi Arabia",
    role: "Architectural Technical Design",
    color: "#4f5852",
    summary: "Technical development for pre-engineered warehouse architecture, including life-safety interfaces, smoke-control coordination, floor and stair finishes, and construction details.",
    scope: ["PEB coordination", "Life safety", "Technical details", "Finish specifications"]
  },
  {
    title: "SPARK Utility Buildings",
    sector: "infrastructure",
    location: "SPARK, Saudi Arabia",
    role: "Architecture & BIM Coordination",
    color: "#5a624d",
    summary: "Coordinated architectural delivery for wastewater, water collection, irrigation, electrical, transformer, and generator support buildings within an industrial master plan.",
    scope: ["Utility buildings", "BIM coordination", "Technical documentation", "Site integration"]
  }
];

const grid = document.querySelector("#project-grid");
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");

function projectCard(project, index) {
  const button = document.createElement("button");
  button.className = `project-card${project.featured ? " featured" : ""}`;
  button.dataset.sector = project.sector;
  button.style.setProperty("--project-bg", project.color);
  button.setAttribute("aria-label", `Open ${project.title} project details`);
  button.innerHTML = `
    <div class="project-cover">
      <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="project-sector">${project.sector}</span>
    </div>
    <h3 class="project-title">${project.title}</h3>
    <div class="project-meta">${project.location} · ${project.role}</div>
  `;
  button.addEventListener("click", () => openProject(project));
  return button;
}

function openProject(project) {
  dialogContent.innerHTML = `
    <div class="dialog-hero" style="--dialog-bg:${project.color}">
      <span class="eyebrow light">${project.sector} · ${project.location}</span>
      <h2>${project.title}</h2>
    </div>
    <div class="dialog-body">
      <strong>${project.role}</strong>
      <p>${project.summary}</p>
      <div class="dialog-tags">${project.scope.map(item => `<span>${item}</span>`).join("")}</div>
      <p class="dialog-note">Portfolio note: Replace this abstract cover with approved project drawings, renders, diagrams, or photography. Confirm client confidentiality and image-use permission before publication.</p>
    </div>
  `;
  dialog.showModal();
}

projects.forEach((project, index) => grid.appendChild(projectCard(project, index)));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.sector !== filter;
    });
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

document.querySelector(".menu-toggle").addEventListener("click", event => {
  const nav = document.querySelector("#site-nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("#site-nav a").forEach(link => {
  link.addEventListener("click", () => document.querySelector("#site-nav").classList.remove("open"));
});

document.querySelector("#year").textContent = new Date().getFullYear();
