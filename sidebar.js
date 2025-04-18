let sidebarOpen = false;
let overlayOpen = false;

function toggleMenu() {
  const overlay = document.getElementById("overlay");
  if (overlayOpen) {
    closeOverlay();
  } else {
    sidebarOpen = !sidebarOpen;
    document.getElementById("sidebar").style.left = sidebarOpen ? "0" : "-260px";
    document.getElementById("cover")?.style.transform = sidebarOpen ? "translateX(240px)" : "none";
    document.getElementById("menuTrigger").style.transform = sidebarOpen ? "translateX(240px)" : "none";
  }
}

function openOverlay(sectionId) {
  const overlay = document.getElementById("overlay");
  overlayOpen = true;
  overlay.classList.remove("hide");
  overlay.classList.add("show");
  document.querySelectorAll(".overlay .content").forEach(div => div.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
  document.getElementById("menuTrigger").style.transform = "translateX(640px)";
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlayOpen = false;
  overlay.classList.remove("show");
  overlay.classList.add("hide");
  document.getElementById("menuTrigger").style.transform = "translateX(240px)";
}

function toggleGroup(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}
