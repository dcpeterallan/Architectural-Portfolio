const featuredProjects = [
  {
    slug: "ebara-elliott",
    title: "Ebara Elliott Energy Facility",
    sector: "industrial",
    location: "SPARK, Saudi Arabia",
    role: "Lead Architecture & BIM Delivery",
    year: "Ongoing",
    featured: true,
    perspective: "assets/projects/ebara-elliott/perspective.jpg",
    revit: "assets/projects/ebara-elliott/revit.jpg",
    pdf: "assets/projects/ebara-elliott/case-study.pdf",
    summary: "Master planning and multidisciplinary architectural delivery for an energy-sector industrial facility comprising production, office, service, utilities, security, and site-support buildings.",
    scope: ["Master planning", "Architectural design", "BIM coordination", "IFC documentation", "Authority coordination", "LEED-oriented design"]
  },
  {
    slug: "nupco",
    title: "NUPCO Warehouse & Pharmaceutical Facility",
    sector: "industrial",
    location: "Asir, Saudi Arabia",
    role: "Architectural BIM & Coordination",
    year: "Professional work",
    featured: true,
    perspective: "assets/projects/nupco/perspective.jpg",
    revit: "assets/projects/nupco/revit.jpg",
    pdf: "assets/projects/nupco/case-study.pdf",
    summary: "Architectural and BIM development for a logistics and pharmaceutical warehouse environment, including building-envelope, operational, life-safety, and technical interfaces.",
    scope: ["LOD 300 modelling", "Warehouse planning", "Envelope coordination", "Drawing production", "Clash review"]
  },
  {
    slug: "qiddiya-camps",
    title: "Qiddiya Residential Camps",
    sector: "residential",
    location: "Qiddiya, Saudi Arabia",
    role: "Architecture, BIM & Visualization",
    year: "Professional work",
    perspective: "assets/projects/qiddiya-camps/perspective.jpg",
    revit: "assets/projects/qiddiya-camps/revit.jpg",
    pdf: "assets/projects/qiddiya-camps/case-study.pdf",
    summary: "Design, BIM modelling, and visualization support for high-capacity residential camp developments, with attention to repeatable planning, resident experience, and coordinated delivery.",
    scope: ["Residential planning", "BIM modelling", "Interior studies", "Visualization", "Technical coordination"]
  },
  {
    slug: "toray",
    title: "Toray Membrane Middle East",
    sector: "industrial",
    location: "Saudi Arabia",
    role: "Lead Architect",
    year: "Professional work",
    perspective: "assets/projects/toray/perspective.jpg",
    revit: "assets/projects/toray/revit.jpg",
    pdf: "assets/projects/toray/case-study.pdf",
    summary: "Architectural planning and design coordination for an industrial facility supporting specialist membrane-technology operations.",
    scope: ["Industrial architecture", "Planning", "BIM coordination", "Documentation"]
  },
  {
    slug: "peugeot-citroen",
    title: "Peugeot & Citroën Showroom",
    sector: "commercial",
    location: "Saudi Arabia",
    role: "Lead Architect",
    year: "Professional work",
    perspective: "assets/projects/peugeot-citroen/perspective.jpg",
    revit: "assets/projects/peugeot-citroen/revit.jpg",
    pdf: "assets/projects/peugeot-citroen/case-study.pdf",
    summary: "Automotive retail and customer-experience planning developed around brand presentation, display flexibility, circulation, and operational support spaces.",
    scope: ["Retail architecture", "Showroom planning", "Brand integration", "Technical delivery"]
  },
  {
    slug: "neom-high-density",
    title: "NEOM High-Density Development",
    sector: "residential",
    location: "NEOM, Saudi Arabia",
    role: "Architectural BIM Support",
    year: "Professional work",
    perspective: "assets/projects/neom-high-density/perspective.jpg",
    revit: "assets/projects/neom-high-density/revit.jpg",
    pdf: "assets/projects/neom-high-density/case-study.pdf",
    summary: "BIM and architectural support for a high-density development within the NEOM programme.",
    scope: ["High-density planning", "BIM modelling", "Documentation support"]
  },
  {
    slug: "green-riyadh",
    title: "Green Riyadh Nursery",
    sector: "infrastructure",
    location: "Riyadh, Saudi Arabia",
    role: "Assistant Architect",
    year: "Professional work",
    perspective: "assets/projects/green-riyadh/perspective.jpg",
    revit: "assets/projects/green-riyadh/revit.jpg",
    pdf: "assets/projects/green-riyadh/case-study.pdf",
    summary: "Architectural assistance for nursery and landscape-support facilities connected to Riyadh's urban greening programme.",
    scope: ["Landscape support", "Facility planning", "Architectural documentation"]
  },
  {
    slug: "executive-office",
    title: "Executive Office & Meeting Suite",
    sector: "commercial",
    location: "Saudi Arabia",
    role: "Interior Architecture & Visualization",
    year: "Professional work",
    perspective: "assets/projects/executive-office/perspective.jpg",
    revit: "assets/projects/executive-office/revit.jpg",
    pdf: "assets/projects/executive-office/case-study.pdf",
    summary: "Executive workplace and meeting-room studies incorporating bespoke joinery, lighting coordination, premium materials, acoustic partitions, and presentation visuals.",
    scope: ["Interior architecture", "Joinery design", "Lighting coordination", "Visualization"]
  }
];

const additionalProjects = [
  ["SCITRA / Zain Industrial Facility", "Lead Architect", "Industrial"],
  ["Ebara Pumps Office", "Lead Architect", "Workplace"],
  ["L&T Solar Farm Facilities", "Assistant Architect", "Infrastructure"],
  ["L&T Wind Farm Facilities", "Assistant Architect", "Infrastructure"],
  ["UBI Ethanol Plant", "Quantity & Architectural Support", "Industrial"],
  ["Al Jomaih Beverage Facility", "Quantity & Architectural Support", "Industrial"],
  ["TAQA Well Services", "BOQ & Technical Support", "Industrial"],
  ["Tiran Island Development", "Architecture & Visualization Support", "Destination"],
  ["Professional Village", "Architecture & Visualization Support", "Residential"],
  ["VIP Waiting Lounge", "Interior Design", "Interior"],
  ["PEB Warehouse Technical Development", "Architectural Technical Design", "Industrial"],
  ["SPARK Utility Buildings", "Architecture & BIM Coordination", "Infrastructure"]
];

const processItems = [
  { number: "01", title: "Perspectives", text: "Exterior and interior views that communicate design intent, materials, scale, and atmosphere.", image: "assets/process/01-perspective.jpg" },
  { number: "02", title: "Revit / BIM", text: "Model development, coordinated architectural information, documentation, and selected BIM views.", image: "assets/process/02-revit.jpg" },
  { number: "03", title: "PDF case studies", text: "Curated project documents combining perspectives, Revit views, project facts, scope, and selected technical outputs.", image: "assets/process/03-pdf.jpg" }
];

const projectGrid = document.querySelector("#project-grid");
const additionalGrid = document.querySelector("#additional-grid");
const processGrid = document.querySelector("#process-grid");
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");

function mediaMarkup(src, label, className = "project-media", placeholder = "Image to be added") {
  return `<div class="${className}">
    <img class="project-image" src="${src}" alt="${label}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
    <div class="project-placeholder" hidden><span>${placeholder}</span></div>
  </div>`;
}

function projectCard(project, index) {
  const button = document.createElement("button");
  button.className = `project-card${project.featured ? " featured" : ""}`;
  button.dataset.sector = project.sector;
  button.setAttribute("aria-label", `Open ${project.title} project details`);
  button.innerHTML = `
    ${mediaMarkup(project.perspective, `${project.title} perspective`, "project-media", "Perspective to be added")}
    <div class="project-info">
      <div>
        <h3 class="project-title">${project.title}</h3>
        <div class="project-meta">${project.location} · ${project.role}</div>
      </div>
      <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
    </div>`;
  button.addEventListener("click", () => openProject(project));
  return button;
}

function openProject(project) {
  dialogContent.innerHTML = `
    <div class="dialog-media">
      <img src="${project.perspective}" alt="${project.title} perspective" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
      <div class="dialog-placeholder" hidden>Perspective to be added</div>
    </div>
    <div class="dialog-body">
      <p class="eyebrow">${project.sector}</p>
      <h2 class="dialog-title">${project.title}</h2>
      <div class="dialog-meta">
        <div><span>Location</span><strong>${project.location}</strong></div>
        <div><span>Role</span><strong>${project.role}</strong></div>
        <div><span>Status</span><strong>${project.year}</strong></div>
        <div><span>Portfolio content</span><strong>Perspective · Revit · PDF</strong></div>
      </div>
      <p class="dialog-copy">${project.summary}</p>
      <div class="dialog-tags">${project.scope.map(item => `<span>${item}</span>`).join("")}</div>
      <div class="project-deliverables">
        ${mediaMarkup(project.perspective, `${project.title} perspective`, "deliverable-media", "Perspective to be added")}
        ${mediaMarkup(project.revit, `${project.title} Revit view`, "deliverable-media", "Revit view to be added")}
      </div>
      <a class="pdf-link" href="${project.pdf}" target="_blank" data-pdf>View project PDF ↗</a>
      <p class="asset-note">Upload files to <code>assets/projects/${project.slug}/</code> using <code>perspective.jpg</code>, <code>revit.jpg</code>, and <code>case-study.pdf</code>.</p>
    </div>`;
  const pdfLink = dialogContent.querySelector("[data-pdf]");
  fetch(project.pdf, { method: "HEAD" }).then(response => {
    if (!response.ok) throw new Error();
  }).catch(() => {
    pdfLink.classList.add("disabled");
    pdfLink.removeAttribute("href");
    pdfLink.textContent = "Project PDF to be added";
  });
  dialog.showModal();
}

featuredProjects.forEach((project, index) => projectGrid.appendChild(projectCard(project, index)));

additionalProjects.forEach((project, index) => {
  const article = document.createElement("article");
  article.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><h3>${project[0]}</h3><p>${project[1]}</p><small>${project[2]}</small>`;
  additionalGrid.appendChild(article);
});

processItems.forEach(item => {
  const article = document.createElement("article");
  article.innerHTML = `${mediaMarkup(item.image, item.title, "process-media", `${item.title} sample to be added`)}<div class="process-copy"><span>${item.number}</span><h3>${item.title}</h3><p>${item.text}</p></div>`;
  processGrid.appendChild(article);
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = button.dataset.filter !== "all" && card.dataset.sector !== button.dataset.filter;
    });
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.querySelector(".menu-toggle").addEventListener("click", event => {
  const nav = document.querySelector("#site-nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#site-nav a").forEach(link => link.addEventListener("click", () => document.querySelector("#site-nav").classList.remove("open")));
document.querySelector("#year").textContent = new Date().getFullYear();
