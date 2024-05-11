// navbar start
const showMenuIcon = document.getElementById("show-icon");
const hideMenuIcon = document.getElementById("hide-icon");
const navbar = document.querySelector("header nav ul");

function showMenu() {
  navbar.style.display = "block";
  navbar.style.top = "50px";
  showMenuIcon.classList.add("d-none");
  hideMenuIcon.classList.remove("d-none");
}

function hideMenu() {
  navbar.style.display = "none";
  hideMenuIcon.classList.add("d-none");
  showMenuIcon.classList.remove("d-none");
}
// set navbar bg
const navigationBar = document.getElementById("full-navbar")
window.addEventListener( "scroll", ()=>
{
  if (window.scrollY >200){
    navigationBar.classList.add 
    ("set-nav-bg")
    }else{
      navigationBar.classList.remove("set-nav-bg")
    }

});




// go topbtn
const goTopBtn =document.getElementById("goTop");
window.addEventListener("scroll", ()=> {
  console.log(window.scrollY);
  if (window.scrollY > 500){
    goTopBtn.style.bottom = "20px";
  }else{
    goTopBtn.style.bottom ="1000px";
  }
});
// handle event bottom to  top button
goTopBtn.addEventListener("click",() => {
  window.scrollTo(0,0);
});




// why us sec progressbar
const meter = document.getElementById("progress--circle");
const meterProgress = document.getElementById("meter--progress");
const meterProgress = document.getElementById("meter--progress1");
const ranger = document.getElementById("meter--ranger");
const insideText = document.getElementById("progress--text");

ranger.addEventListener("input", e => {


  
  const rangeValue = e.target.value;
  
  meterProgress.innerText = `${rangeValue}%`;
  insideText.textContent = `${rangeValue}%`;
  meter.style.strokeDashoffset = 100 - rangeValue;
  
  if (rangeValue === "0") {
    meter.style.stroke = "none";
  } else {
    meter.style.stroke = "#28411B";
  }
});

ranger.addEventListener("wheel", e => {
  e.preventDefault();
  
  const isWheelPositive = () =>  e.deltaY > 0;
  
  if (isWheelPositive()) {
    let rangerValue = +ranger.value;
    ranger.value = rangerValue += 1;
  } else {
    ranger.value -= 1;
  }
  
  // Trigger the above (:6) event listener manually  
  ranger.dispatchEvent(new Event("input"));
});

document.addEventListener("DOMContentLoaded", () => {
  ranger.dispatchEvent(new Event("input"));
});

// counter sec
$(document).ready(function() {

  $('.counter').each(function () {
  $(this).prop('Counter',0).animate({
  Counter: $(this).text()
  }, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
  $(this).text(Math.ceil(now));
  }
  });
  });
  
  });