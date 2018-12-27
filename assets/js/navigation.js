let navContainer = document.querySelectorAll('nav');
let navLinks = document.querySelectorAll('nav ul li a');

let lastId;
let cur = [];

let scrollThrottle = false;
window.addEventListener('scroll', (event) => {
  if (scrollThrottle) {
    return;
  }

  scrollThrottle = true;

  // This is our current scroll position, measured in pixels from the top of the page.
  const fromTop = window.scrollY;

  // We also want to measure our navbar height, and subtract that from our calculations.
  const navbarHeight = navContainer[0].offsetHeight;

  navLinks.forEach((link) => {
    const section = document.querySelectorAll(link.hash)[0];

    if (
      section.offsetTop <= fromTop + navbarHeight &&
      section.offsetTop + section.offsetHeight > fromTop  + navbarHeight
    ) {
      link.classList.add('current');
    } else {
      link.classList.remove('current');
    }
  });

  setTimeout(() => {
    scrollThrottle = false;
  }, 150)
});
