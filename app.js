const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const navLIst = document.querySelector(".nav__list");
const headerTop = document.querySelector(".header__top");
const toggleLabel = document.querySelector(".toggle__label");
const profileView = document.querySelector(".profile__view");

// DSIPLAY MENU//

const displayMenu = function (e) {
  const menuTarget = e.target;
  if (menuTarget.classList.contains("menu-icon")) {
    nav.classList.toggle("nav-display");
    // nav.style.display = "none";
  }
};
headerTop.addEventListener("click", displayMenu);
// DSIPLAY USER PROFILE//

const displayProfile = function (e) {
  const navTarget = e.target;
  if (navTarget.classList.contains("nav__expand-icon")) {
    profileView.classList.toggle("profile-display");
  }
};

headerTop.addEventListener("click", displayProfile);

// SMOOTH SCROLLING//

navLIst.addEventListener("click", function (e) {
  const linkTarget = e.target.getAttribute("href");
  if (e.target.classList.contains("nav__link")) {
    e.preventDefault();
    document.querySelector(linkTarget).scrollIntoView({ behavior: "smooth" });
  }
  if (e.type === "click") {
    // nav.style.display = "none";
    nav.classList.toggle("nav-display");
  }
});
///

// SHOW ELEMENT ON SCROLL//

const allSection = document.querySelectorAll(".section");

const showSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// SLIDER

// const sliderHandler = function () {
//   // const slider = document.querySelector(".slider");
//   const slides = document.querySelectorAll(".slide");
//   const dotContainer = document.querySelector(".panel__dot");
//   const btnLeft = document.querySelector(".btn-slide-left");
//   const btnRight = document.querySelector(".btn-slide-right");

//   let curSlide = 0;
//   const maxSlide = slides.length;
//   const activeDot = function (slide) {
//     document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("dot-active"));
//     // document.querySelector(`.dot[data-dot="${slide}"]`).classList.add("dot-active");
//   };
//   activeDot();
//   const goToSlide = function (slide) {
//     slides.forEach((eachSlide, index) => {
//       eachSlide.style.transform = `translateX(${100 * (index - slide)}%)`;
//     });
//   };
//   goToSlide(0);

//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }
//     goToSlide(curSlide);
//     activeDot(curSlide);
//   };
//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     goToSlide(curSlide);
//     activeDot(curSlide);
//   };
//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);
//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dot")) {
//       const { dot } = e.target.dataset;
//       goToSlide(dot - 1);
//       activeDot(dot);
//     }
//   });
//   // window.addEventListener("keyup", nextSlide);
// };

// sliderHandler();

//SCROLL TO TOP

const backTopBtn = document.querySelector(".back-to-top");
const skillSection = document.querySelector(".skills");
const windowHieght = skillSection.getBoundingClientRect().height;
const topScrollHandler = function () {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

backTopBtn.addEventListener("click", topScrollHandler);
const btnScrollHandler = function () {
  if (window.scrollY > windowHieght) {
    backTopBtn.classList.add("show-back--top");
  } else {
    backTopBtn.classList.remove("show-back--top");
  }
};

window.addEventListener("scroll", btnScrollHandler);

// PREVENT LINK DEFAULT RELOAD

const defaultHandler = function (action) {
  const portfolioBox = document.querySelector(".portfolio__card-box");
  const defaultAction = function (e) {
    e.preventDefault();
    console.log(e.target);
  };

  portfolioBox.addEventListener("click", defaultAction);
};

defaultHandler();
