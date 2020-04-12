document.addEventListener(`DOMContentLoaded`, function() {
const slides = document.querySelectorAll('#slides-service .slide-service');
const next = document.getElementById('next-service');
const previous = document.getElementById('previous-service');
const controls = document.querySelectorAll('.controls-service');


let currentSlide = 0;

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides[currentSlide].className = 'slide-service';
    currentSlide = (n+slides.length)%slides.length; // остаток от деления
    slides[currentSlide].className = 'slide-service showing';
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
    const serviceBtn = document.querySelector("#service__btnCtaBtn");
    const ourServiceBtn = document.querySelector("#our-serviceBtn");
    // const serviceBtn = document.querySelector("#serviceBtn");
    // const rentBtn = document.querySelector("#rentBtn");
    const buttonsArr = [serviceBtn, ourServiceBtn];

    const serviceHeroForm = document.querySelector("#serviceHeroForm");
    const ourServiceForm = document.querySelector("#ourServiceForm");
    // const serviceForm = document.querySelector("#serviceForm");
    // const rentForm = document.querySelector("#rentForm");
    const formArea = document.querySelector(".forms");
    const closeFormBtn = document.querySelectorAll(".forms__closeBtn");

    buttonsArr.forEach(item => {
      item.addEventListener("click", e => {
        
        let id = e.target.id;
        console.log(id);
        let body = document.querySelector("body");

        formArea.classList.add("active");
        body.style.overflow = "hidden";
        body.style.right = "12px";

        switch (id) {
          case "service__btnCtaBtn":
            serviceHeroForm.classList.add("active");
            break;
          case "our-serviceBtn":
            ourServiceForm.classList.add("active");
            break;
        }
      });

      closeFormBtn.forEach(item => {
        item.addEventListener("click", function() {
          let body = document.querySelector("body");

          serviceHeroForm.classList.remove("active");
          ourServiceForm.classList.remove("active");
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

          serviceHeroForm.classList.remove("active");
          ourServiceForm.classList.remove("active");
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
