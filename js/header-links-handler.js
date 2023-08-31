document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (document.querySelector(`.t228__list_item a[href="${hash}"]`)) {
    let activeLink = document.querySelector(
      `.t228__list_item a[href="${hash}"]`
    );
    activeLink.classList.add("t-activelink");
  }

  const hashLinksArr = [
    'a[href="#advantages"]',
    'a[href="#products"]',
    'a[href="#news"]',
    'a[href="#rates"]',
    'a[href="#message"]',
  ];
  const hashLinks = document.querySelectorAll(hashLinksArr.join(","));
  const navLinks = document.querySelectorAll('.t228__list_item a[href^="#"]');

  hashLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetHash = event.target.hash;
      navLinks.forEach((navLink) => {
        navLink.classList.remove("t-activelink");
      });
      if (targetHash && targetHash != "#message") {
        
        const targetNavLink = document.querySelector(
          `.t228__list_item a[href="${targetHash}"]`
        );
        targetNavLink.classList.add("t-activelink");
      }
    });
  });
});
