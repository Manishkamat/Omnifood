// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  //   console.log(isSupported);
  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In view port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// HANDELING NAVIGATION
const header = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");
const navLinks = document.querySelectorAll(".main-nav-link");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", function () {
    header.classList.remove("nav-open");
  })
);
