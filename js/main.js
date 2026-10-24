/**
 * MOHAMMED MIRSA — PORTFOLIO CONTROLLER
 * Minimalist, Accessible, Zero-Dependency JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
      mobileToggle.innerHTML = isOpen ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.innerHTML = "☰";
      });
    });
  }

  // Active Navigation Scrollspy
  setupScrollSpy();

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeResumeModal();
    }
  });

  // Close modal on clicking backdrop
  const modal = document.getElementById("detail-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  const resumeModal = document.getElementById("resume-modal");
  if (resumeModal) {
    resumeModal.addEventListener("click", (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }
});

// Scroll Spy to keep nav in sync
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

// Project Details Modal
function openProjectModal(id) {
  if (typeof verifiedProjects === "undefined" || !verifiedProjects[id]) return;
  const project = verifiedProjects[id];

  const modalBody = document.getElementById("modal-body");
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="hero-label">${project.domain}</span>
      <h3 style="font-size: 1.6rem; font-weight: 600; margin: 0.35rem 0 0.5rem 0; color: var(--text-primary);">${project.title}</h3>
      <span class="tag tag-accent">${project.platforms}</span>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.82rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-primary); margin-bottom: 0.5rem;">Overview</h4>
      <p style="font-size: 0.95rem; line-height: 1.65; color: var(--text-secondary);">${project.summary}</p>
    </div>

    <div style="margin-bottom: 1.5rem; padding: 1rem 1.15rem; background-color: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); border-left: 2px solid var(--accent);">
      <h4 style="font-size: 0.82rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-primary); margin-bottom: 0.4rem;">My Contribution</h4>
      <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">${project.contribution}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.82rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-primary); margin-bottom: 0.75rem;">Verified Engineering Details</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
        ${project.details.map(d => `
          <li style="position: relative; padding-left: 1.25rem; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
            <span style="position: absolute; left: 0; color: var(--accent);">—</span>
            ${d}
          </li>
        `).join("")}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.82rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-primary); margin-bottom: 0.5rem;">Technologies</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${project.technologies.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);">
      <button class="btn btn-secondary" onclick="closeModal()">Close</button>
      <a href="#contact" class="btn btn-primary" onclick="closeModal()">Discuss Project</a>
    </div>
  `;

  const modal = document.getElementById("detail-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const modal = document.getElementById("detail-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Resume Modal Controller
function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Print Handler
function triggerPrint() {
  window.print();
}

// Toggle Additional Projects Archive
function toggleArchive() {
  const content = document.getElementById("archive-content");
  const btn = document.getElementById("archive-toggle-btn");
  if (!content || !btn) return;

  const isOpen = content.classList.contains("open");
  if (isOpen) {
    content.classList.remove("open");
    btn.innerHTML = "View 6 additional verified projects from resume ↓";
  } else {
    content.classList.add("open");
    btn.innerHTML = "Hide additional projects ↑";
  }
}

// Clipboard Copy Utility with Toast
function copyText(text, label = "Item") {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard`);
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${label} copied to clipboard`);
  } catch (err) {
    showToast(`Failed to copy ${label}`);
  }
  document.body.removeChild(textArea);
}

// Toast Manager
function showToast(message) {
  let toast = document.getElementById("toast-msg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-msg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
