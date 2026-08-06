const recentProjects = [
  {
    slug: "ebara-elliott",
    title: "EBARA ELLIOT ENERGY DETAILED DESIGN DEVELOPMENT DAMMAM, SPARK",
    sector: "Industrial / Energy",
    location: "Dammam, SPARK, Saudi Arabia",
    role: "Lead Architecture & BIM Delivery",
    status: "Detailed design development",
    thumbnail: "assets/projects/ebara-elliott/perspective.jpg",
    description: [
      "EBARA Elliott Energy (EEE) is a global provider of advanced turbomachinery and energy solutions serving the oil and gas, petrochemical, refining, and power generation industries. The company designs, manufactures, and services technologically advanced equipment such as centrifugal and axial compressors, steam turbines, power recovery expanders, custom pumps, and cryogenic systems used in large-scale industrial facilities worldwide.",
      "EEE is part of EBARA Corporation, a Japanese multinational engineering company founded in 1912 that specializes in industrial machinery, pumps, and environmental and energy technologies.",
      "To strengthen its presence in the Middle East and support the region’s growing energy sector, EBARA Elliott Energy is expanding its operational capabilities in Saudi Arabia by establishing advanced facilities dedicated to turbomachinery packaging, testing, service, and maintenance."
    ],
    scope: ["Master planning", "Architectural design", "Revit / BIM coordination", "Detailed design development", "Complete architectural drawings", "Authority coordination"],
    media: [
      {
        type: "image",
        title: "Revit Model Screenshot",
        src: "assets/projects/ebara-elliott/revit.jpg",
        placeholder: "Revit model screenshot is being uploaded"
      },
      {
        type: "image",
        title: "Perspective View",
        src: "assets/projects/ebara-elliott/perspective.jpg",
        placeholder: "Perspective view"
      }
    ],
    documents: [
      {
        title: "Office Building – Complete Architectural Drawings",
        href: "assets/projects/ebara-elliott/office-building-complete-architectural-drawings.pdf"
      },
      {
        title: "Production Building – Complete Architectural Drawings",
        href: "assets/projects/ebara-elliott/production-building-complete-architectural-drawings.pdf"
      }
    ]
  },
  {
    slug: "nupco",
    title: "NUPCO Warehouse & Pharmaceutical Facility",
    sector: "Industrial / Logistics",
    location: "Asir, Saudi Arabia",
    role: "Architectural BIM & Coordination",
    status: "Portfolio content in preparation",
    thumbnail: "assets/projects/nupco/perspective.jpg",
    description: ["Architectural and BIM development for a logistics and pharmaceutical warehouse environment, including building-envelope, operational, life-safety, and technical interfaces."],
    scope: ["LOD 300 modelling", "Warehouse planning", "Envelope coordination", "Drawing production", "Clash review"],
    media: [
      { type: "image", title: "Revit Model Screenshot", src: "assets/projects/nupco/revit.jpg", placeholder: "Revit model screenshot to be added" },
      { type: "image", title: "Perspective View", src: "assets/projects/nupco/perspective.jpg", placeholder: "Perspective view to be added" }
    ],
    documents: []
  },
  {
    slug: "qiddiya-camps",
    title: "Qiddiya Residential Camps",
    sector: "Residential",
    location: "Qiddiya, Saudi Arabia",
    role: "Architecture, BIM & Visualization",
    status: "Portfolio content in preparation",
    thumbnail: "assets/projects/qiddiya-camps/perspective.jpg",
    description: ["Design, BIM modelling, and visualization support for high-capacity residential camp developments, with attention to repeatable planning, resident experience, and coordinated delivery."],
    scope: ["Residential planning", "BIM modelling", "Interior studies", "Visualization", "Technical coordination"],
    media: [
      { type: "image", title: "Revit Model Screenshot", src: "assets/projects/qiddiya-camps/revit.jpg", placeholder: "Revit model screenshot to be added" },
      { type: "image", title: "Perspective View", src: "assets/projects/qiddiya-camps/perspective.jpg", placeholder: "Perspective view to be added" }
    ],
    documents: []
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
  ["Tiran Island Development", "Architecture & Visualization Support", "Destination"],
  ["NEOM – Professional Village", "Architecture & Visualization Support", "Residential"],
  ["UBI Ethanol Plant", "Quantity & Architectural Support", "Industrial"],
  ["Al Jomaih Beverage Facility", "Quantity & Architectural Support", "Industrial"],
  ["TAQA Well Services", "BOQ & Technical Support", "Industrial"],
  ["Qiddiya Camps 1–4", "Architectural BIM & Visualization", "Residential"],
  ["Qiddiya Camps 5–8", "Architectural BIM & Visualization", "Residential"],
  ["NUPCO Warehouse and Pharmaceutical Facility", "Architectural BIM & Coordination", "Industrial / Logistics"],
  ["EBARA Elliott Energy Facility", "Lead Architecture & BIM Delivery", "Industrial / Energy"],
  ["NEOM High-Density Residential Development", "Architectural BIM Support", "Residential"],
  ["Professional and Residential Camp Developments", "Architecture, BIM & Visualization", "Residential"],
  ["Industrial and Utility Support Buildings", "Architectural Design & Coordination", "Infrastructure"]
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
    ${mediaMarkup(project.thumbnail, `${project.title} perspective thumbnail`, "project-media", "Perspective to be added")}
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

function projectMediaMarkup(project) {
  return project.media.map(item => `
    <article class="deliverable-card">
      ${mediaMarkup(item.src, `${project.title} ${item.title}`, "deliverable-media", item.placeholder)}
      <h3>${item.title}</h3>
    </article>`).join("");
}

function documentMarkup(project) {
  if (!project.documents.length) {
    return `<p class="asset-note">Complete architectural drawings will be added when the project material is finalized.</p>`;
  }

  return `<div class="document-list">
    ${project.documents.map((document, index) => `
      <a class="pdf-link document-link" href="${document.href}" target="_blank" rel="noreferrer" data-document-link>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${document.title}</strong>
        <em>View PDF ↗</em>
      </a>`).join("")}
  </div>`;
}

function openProject(project) {
  dialogContent.innerHTML = `
    <div class="dialog-media">
      <img src="${project.thumbnail}" alt="${project.title} perspective" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
      <div class="dialog-placeholder" hidden>Perspective to be added</div>
    </div>
    <div class="dialog-body">
      <p class="eyebrow">${project.sector}</p>
      <h2 class="dialog-title">${project.title}</h2>
      <div class="dialog-meta">
        <div><span>Location</span><strong>${project.location}</strong></div>
        <div><span>Role</span><strong>${project.role}</strong></div>
        <div><span>Status</span><strong>${project.status}</strong></div>
        <div><span>Portfolio</span><strong>Revit · Perspective · Architectural Drawings</strong></div>
      </div>
      <div class="dialog-copy project-description">${project.description.map(paragraph => `<p>${paragraph}</p>`).join("")}</div>
      <div class="dialog-tags">${project.scope.map(item => `<span>${item}</span>`).join("")}</div>
      <div class="project-deliverables">${projectMediaMarkup(project)}</div>
      ${documentMarkup(project)}
    </div>`;

  dialogContent.querySelectorAll("[data-document-link]").forEach(link => {
    fetch(link.href, { method: "HEAD" }).then(response => {
      if (!response.ok) throw new Error();
    }).catch(() => {
      link.classList.add("disabled");
      link.removeAttribute("href");
      link.querySelector("em").textContent = "PDF upload in progress";
    });
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
