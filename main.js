const sliderBar = document.querySelector(".slider-bar")
const priceNumber = document.querySelector(".price-number")
const toggleBall = document.querySelector(".toggle-ball")
const leftSide = document.querySelector(".left-side")
const toggle = document.querySelector(".toggle")

const mediaQueryMobile = window.matchMedia('(max-width: 800px)')
const mediaQueryDesktop = window.matchMedia('(min-width: 800px)')


let widhtValue;
let sliderMax = sliderBar.max;
let multiplier = 8;
if (mediaQueryMobile.matches) {
    sliderBar.addEventListener("input", (event) => {
        widhtValue = Math.floor(Number(event.target.value)/2);
        if(!toggle.classList.contains("toggle-bg")) {
            widhtValue = Math.ceil(Number(event.target.value)/2);
            multiplier = 8;
        }
        if(toggle.classList.contains("toggle-bg")) {
            widhtValue = Math.ceil(widhtValue - widhtValue/4);
            multiplier = 11;
        }
        priceNumber.textContent = widhtValue;
        leftSide.style.width = `${Number(Math.floor(widhtValue*multiplier))}px`;
    })
}
if (mediaQueryDesktop.matches) {
    sliderBar.addEventListener("input", (event) => {
        widhtValue = Math.floor(Number(event.target.value)/2);
        if(!toggle.classList.contains("toggle-bg")) {
            widhtValue = Math.ceil(Number(event.target.value)/2);
            multiplier = 20.2;
        }
        if(toggle.classList.contains("toggle-bg")) {
            widhtValue = Math.ceil(widhtValue - widhtValue/4);
            multiplier = 26.8;
        }
        priceNumber.textContent = widhtValue;
        leftSide.style.width = `${Number(Math.floor(widhtValue*multiplier))}px`;
    })
}
toggleBall.addEventListener('click', () => {
    toggleBall.classList.toggle("toggled-ball");
    toggle.classList.toggle("toggle-bg");
    if(toggle.classList.contains("toggle-bg")) {
        priceNumber.textContent = Math.floor(Number(priceNumber.innerHTML) - Number(priceNumber.innerHTML)/4);
    } 
    else if(!toggle.classList.contains("toggle-bg")){
        priceNumber.textContent = Math.ceil(Number(priceNumber.innerHTML) + Number(priceNumber.innerHTML)/3);
    }
})

