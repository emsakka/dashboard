/* ============================================================
   SLIDE-IN PANEL COMPONENT
============================================================ */

export function openPanel(htmlContent) {
    const panel = document.getElementById("slidePanel");
    const content = document.getElementById("panelContent");

    content.innerHTML = htmlContent;
    panel.classList.add("open");
}

export function closePanel() {
    document.getElementById("slidePanel").classList.remove("open");
}
