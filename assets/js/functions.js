$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});


const navLinks = [...document.querySelectorAll(".nav a")];
const sections = [...document.querySelectorAll(".section-nav")];

let sectionsPosition;

function positionCalculation() {
  sectionsPosition = sections.map(section => section.offsetTop)
};

document.addEventListener("DOMContentLoaded", () => {
  positionCalculation();
  console.log(sectionsPosition);
});

navLinks.forEach(link => link.addEventListener("click", addScrollSmooth));

function addScrollSmooth(e) {
  const linkIndex = navLinks.indexOf(e.target);
  console.log(linkIndex);
  window.scrollTo({
    top: sectionsPosition[linkIndex],
    behavior: "smooth"
  });
};









const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

slides.forEach(function(slide, index){
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

prev.addEventListener('click', function(){
  counter--;
  carousel();
});

next.addEventListener('click', function(){
  counter++;
  carousel();
});

function carousel(){
  if(counter === slides.length){
    counter = 0; 
  }
  if(counter < 0){
    counter = slides.length - 1; 
  }

  slides.forEach(function(slide){
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};







var map = L.map('map').setView([51.505, -0.09], 6);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);





	