document.addEventListener(`DOMContentLoaded`, function() {
const slides = document.querySelectorAll('#slides .slide');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const controls = document.querySelectorAll('.controls');


let currentSlide = 0;

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length; // остаток от деления
    slides[currentSlide].className = 'slide showing';
}

// навешивает обработчики событий на элементы next и previous
function setupListners(){
    next.onclick = function(){
        goToSlide(currentSlide+1);
    }
    previous.onclick = function(){
        goToSlide(currentSlide-1);
    }
}

// показывает кнопки для навигации
function showButtons(){
    for(var i=0; i<controls.length; i++){
        controls[i].style.display = 'inline-block';
    }
}

// инициализация слайдера
function sliderInit(){
    if (slides.length !== 0){ // если на странице есть нужный html код
        setupListners();
        showButtons();
    }
}

sliderInit();

function showForm() {
    const installBtn = document.querySelector("#hero__btnCtaBtn");
    const fullBtn = document.querySelector("#fullBtn");
    // const serviceBtn = document.querySelector("#serviceBtn");
    // const rentBtn = document.querySelector("#rentBtn");
    const buttonsArr = [installBtn, fullBtn];

    const installHeroForm = document.querySelector("#installHeroForm");
    const fullForm = document.querySelector("#fullForm");
    // const serviceForm = document.querySelector("#serviceForm");
    // const rentForm = document.querySelector("#rentForm");
    const formArea = document.querySelector(".forms");
    const closeFormBtn = document.querySelectorAll(".forms__closeBtn");

    buttonsArr.forEach(item => {
      item.addEventListener("click", e => {
        console.log(e.target.id);
        
        let id = e.target.id;
        let body = document.querySelector("body");

        formArea.classList.add("active");
        body.style.overflow = "hidden";
        body.style.right = "12px";

        switch (id) {
          case "hero__btnCtaBtn":
            installHeroForm.classList.add("active");
            break;
          case "fullBtn":
            fullForm.classList.add("active");
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

          installHeroForm.classList.remove("active");
          fullForm.classList.remove("active");
        //   serviceForm.classList.remove("active");
        //   rentForm.classList.remove("active");
          body.style.overflow = "unset";
          body.style.right = "unset";
          formArea.classList.remove("active");
        });
      });

      formArea.addEventListener("click", function(e) {
        if (e.target.classList.value == "forms active") {
          let body = document.querySelector("body");

          installHeroForm.classList.remove("active");
          fullForm.classList.remove("active");
        //   serviceForm.classList.remove("active");
        //   rentForm.classList.remove("active");
          body.style.right = "unset";
          body.style.overflow = "unset";
          formArea.classList.remove("active");
        }
      });
    });
  }

  showForm();
});
