const recentProjects = [
  {
    slug: "ebara-elliott",
    title: "Ebara Elliott Energy Facility",
    sector: "Industrial",
    location: "SPARK, Saudi Arabia",
    role: "Lead Architecture & BIM Delivery",
    status: "Ongoing",
    perspective: "assets/projects/ebara-elliott/perspective.jpg",
    revit: "assets/projects/ebara-elliott/revit.jpg",
    pdf: "assets/projects/ebara-elliott/case-study.pdf",
    summary: "Master planning and multidisciplinary architectural delivery for an energy-sector industrial facility comprising production, office, service, utilities, security, and site-support buildings.",
    scope: ["Master planning", "Architectural design", "Revit / BIM coordination", "IFC documentation", "Authority coordination", "LEED-oriented design"]
  },
  {
    slug: "nupco",
    title: "NUPCO Warehouse & Pharmaceutical Facility",
    sector: "Industrial / Logistics",
    location: "Asir, Saudi Arabia",
    role: "Architectural BIM & Coordination",
    status: "Recent project",
    perspective: "assets/projects/nupco/perspective.jpg",
    revit: "assets/projects/nupco/revit.jpg",
    pdf: "assets/projects/nupco/case-study.pdf",
    summary: "Architectural and BIM development for a logistics and pharmaceutical warehouse environment, including building-envelope, operational, life-safety, and technical interfaces.",
    scope: ["LOD 300 modelling", "Warehouse planning", "Envelope coordination", "Drawing production", "Clash review"]
  },
  {
    slug: "qiddiya-camps",
    title: "Qiddiya Residential Camps",
    sector: "Residential",
    location: "Qiddiya, Saudi Arabia",
    role: "Architecture, BIM & Visualization",
    status: "Recent project",
    perspective: "assets/projects/qiddiya-camps/perspective.jpg",
    revit: "assets/projects/qiddiya-camps/revit.jpg",
    pdf: "assets/projects/qiddiya-camps/case-study.pdf",
    summary: "Design, BIM modelling, and visualization support for high-capacity residential camp developments, with attention to repeatable planning, resident experience, and coordinated delivery.",
    scope: ["Residential planning", "BIM modelling", "Interior studies", "Visualization", "Technical coordination"]
  }
];

const featuredProjects = [
  ["SCITRA / Zain Industrial Facility", "Lead Architect", "Industrial"],
  ["Ebara Pumps Office", "Lead Architect", "Workplace"],
  ["Toray Membrane Middle East", "Lead Architect", "Industrial"],
  ["Peugeot & Citroën Showroom", "Lead Architect", "Commercial"],
  ["L&T Solar Farm Facilities", "Assistant Architect", "Infrastructure"],
  ["L&T Wind Farm Facilities", "Assistant Architect", "Infrastructure"],
  ["Green Riyadh Nursery", "Assistant Architect", "Infrastructure"],
  ["NEOM High-Density Development", "Architectural BIM Support", "Residential"],
  ["Executive Office & Meeting Suite", "Interior Architecture & Visualization", "Interior"],
  ["VIP Waiting Lounge", "Interior Design", "Interior"],
  ["Tiran Island Development", "Architecture & Visualization Support", "Destination"],
  ["Professional Village", "Architecture & Visualization Support", "Residential"],
  ["UBI Ethanol Plant", "Quantity & Architectural Support", "Industrial"],
  ["Al Jomaih Beverage Facility", "Quantity & Architectural Support", "Industrial"],
  ["TAQA Well Services", "BOQ & Technical Support", "Industrial"],
  ["PEB Warehouse Technical Development", "Architectural Technical Design", "Industrial"],
  ["SPARK Utility Buildings", "Architecture & BIM Coordination", "Infrastructure"]
];

const projectGrid = document.querySelector("#project-grid");
const additionalGrid = document.querySelector("#additional-grid");
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
  button.className = `project-card${index === 0 ? " featured" : ""}`;
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
        <div><span>Status</span><strong>${project.status}</strong></div>
        <div><span>Portfolio</span><strong>Perspective · Revit · PDF</strong></div>
      </div>
      <p class="dialog-copy">${project.summary}</p>
      <div class="dialog-tags">${project.scope.map(item => `<span>${item}</span>`).join("")}</div>
      <div class="project-deliverables">
        ${mediaMarkup(project.perspective, `${project.title} perspective`, "deliverable-media", "Perspective to be added")}
        ${mediaMarkup(project.revit, `${project.title} Revit view`, "deliverable-media", "Revit view to be added")}
      </div>
      <a class="pdf-link" href="${project.pdf}" target="_blank" data-pdf>View project PDF ↗</a>
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

recentProjects.forEach((project, index) => projectGrid.appendChild(projectCard(project, index)));

featuredProjects.forEach((project, index) => {
  const article = document.createElement("article");
  article.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><h3>${project[0]}</h3><p>${project[1]}</p><small>${project[2]}</small>`;
  additionalGrid.appendChild(article);
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

document.querySelector(".menu-toggle").addEventListener("click", event => {
  const nav = document.querySelector("#site-nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("#site-nav a").forEach(link => {
  link.addEventListener("click", () => document.querySelector("#site-nav").classList.remove("open"));
});

document.querySelector("#year").textContent = new Date().getFullYear();
