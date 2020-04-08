document.addEventListener(`DOMContentLoaded`, function() {
  // Аналог $(document).ready(function(){

  // scroll Event
  window.addEventListener(`scroll`, function() {
    const header = document.querySelector(`.header`);
    const logo = document.querySelector(`.header__logo-link`);
    const phone = document.querySelector(`.header__phone-link`);
    const socials = document.querySelector(`.header__socials-list`);
    const hamburger = document.querySelector(`.hamb-btn`);
    const containerHead = document.querySelector(`.container--header`);
    const scrollHeight = window.pageYOffset;
    const hamburgerBtn = document.querySelector(`.hamburger`);

    if (scrollHeight >= 100 && !hamburgerBtn.classList.contains(`is-active`)) {
      header.classList.add(`active`);
      logo.classList.add(`active`);
      phone.classList.add(`active`);
      hamburger.classList.add(`active`);
      containerHead.classList.add(`active`);
      socials.classList.add(`disabled`);
    } else {
      header.classList.remove(`active`);
      logo.classList.remove(`active`);
      phone.classList.remove(`active`);
      hamburger.classList.remove(`active`);
      containerHead.classList.remove(`active`);
      socials.classList.remove(`disabled`);
      if (hamburgerBtn.classList.contains(`is-active`)) {
        hamburgerBtn.click();
      }
    }
  });

  // humburger click
  const hamburger = document.querySelector(`.hamb-btn`);
  hamburger.addEventListener(`click`, function() {
    const hamburgerBtn = document.querySelector(`.hamburger`);
    const nav = document.querySelector(`.header__navigation`);
    const header = document.querySelector(`.header`);
    const containerHead = document.querySelector(`.container--header`);
    const phone = document.querySelector(`.header__phone-link`);
    const socials = document.querySelector(`.header__socials-list`);
    const logo = document.querySelector(`.header__logo-link`);

    hamburgerBtn.classList.toggle(`is-active`);
    nav.classList.toggle(`hamb`);
    header.classList.toggle(`hamb`);
    containerHead.classList.toggle(`hamb`);
    logo.classList.toggle(`hamb`);
    phone.classList.toggle(`hamb`);
    socials.classList.toggle(`hamb`);
  });

  // function anchorLink() {
  //   const links = document.querySelectorAll(`[href^='#']`);
  //   const V = 0.2; // scrolling speed

  //   for (const iter of links) {
  //     iter.addEventListener(`click`, e => {
  //       e.preventDefault();

  //       const anchor = document.querySelector(iter.getAttribute(`href`));
  //       const coordAnchor = anchor.getBoundingClientRect().top;
  //       const windowY = window.pageYOffset;

  //       let start = null;

  //       requestAnimationFrame(step);

  //       function step(time) {
  //         if (start === null) {
  //           start = time;
  //         }
  //         const progress = time - start;

  //         const coordY =
  //           coordAnchor < 0
  //             ? Math.max(windowY - progress / V, windowY + coordAnchor)
  //             : Math.min(windowY + progress / V, windowY + coordAnchor);

  //         window.scrollTo(0, coordY);
  //         if (coordY !== windowY + coordAnchor) {
  //           requestAnimationFrame(step);
  //         }
  //       }
  //     });
  //   }
  // }
  // anchorLink();

  function showForm() {
    const installBtn = document.querySelector("#installBtn");
    const disinfBtn = document.querySelector("#disinfBtn");
    const serviceBtn = document.querySelector("#serviceBtn");
    const rentBtn = document.querySelector("#rentBtn");
    const buttonsArr = [installBtn, disinfBtn, serviceBtn, rentBtn];

    const installForm = document.querySelector("#installForm");
    const disinfForm = document.querySelector("#disinfForm");
    const serviceForm = document.querySelector("#serviceForm");
    const rentForm = document.querySelector("#rentForm");
    const formArea = document.querySelector(".forms");
    const closeFormBtn = document.querySelectorAll(".forms__closeBtn");

    buttonsArr.forEach(item => {
      item.addEventListener("click", e => {
        console.log("!!");
        
        let id = e.target.id;
        let body = document.querySelector("body");

        formArea.classList.add("active");
        body.style.overflow = "hidden";

        switch (id) {
          case "installBtn":
            installForm.classList.add("active");
            break;
          case "disinfBtn":
            disinfForm.classList.add("active");
            break;
          case "serviceBtn":
            serviceForm.classList.add("active");
            break;
          case "rentBtn":
            rentForm.classList.add("active");
            break;
        }
      });

      closeFormBtn.forEach(item => {
        item.addEventListener("click", function() {
          let body = document.querySelector("body");

          installForm.classList.remove("active");
          disinfForm.classList.remove("active");
          serviceForm.classList.remove("active");
          rentForm.classList.remove("active");
          body.style.overflow = "unset";
          formArea.classList.remove("active");
        });
      });

      formArea.addEventListener("click", function(e) {
        if (e.target.classList.value == "forms active") {
          let body = document.querySelector("body");

          installForm.classList.remove("active");
          disinfForm.classList.remove("active");
          serviceForm.classList.remove("active");
          rentForm.classList.remove("active");
          body.style.overflow = "unset";
          formArea.classList.remove("active");
        }
      });
    });
  }

  showForm();
});
