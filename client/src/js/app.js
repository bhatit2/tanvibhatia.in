import Typed from 'typed.js';
import 'bootstrap';
import '../styles/app.scss';
const bodymovin = require('bodymovin');

var options = {
  strings: ["A web developer", "A technology enthusiast", "An avid Reader"],
  typeSpeed: 80,
  loop: true,
  backDelay: 1100,
  backSpeed: 30,
  autoInsertCss: true,
}
const quotes = [
  "The sooner you start to code, the longer the program will take. - Roy Carlson",
  "So much complexity in software comes from trying to make one thing do two things.- Ryan Singer ",
  "The best programs are the ones written when the programmer is supposed to be working on something else. - Melinda Varian"

];
var index = 0;
var typed = new Typed(".element", options);
const sectionNames = ['#about', '#skills', '#blog', '#contact'];
let sectionOffsets = [];
let sectioninView = '';
//load animation
var animation = bodymovin.loadAnimation({
  container: document.querySelector('.anime-container'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './js/downloadAnimation.json'
});
let downloadLink = document.querySelector('.download-btn');
downloadLink.addEventListener('click', ()=>{
  animation.play();
  setTimeout(()=>{
    // downloadLink.setAttribute('download' , true);
    // downloadLink.setAttribute('href', '/src/assets/files/Tanvi_Bhatia_Resume.pdf');
    downloadLink.click();
  }, 1000)
})

var animation2 = bodymovin.loadAnimation({
  container: document.querySelector(".footer-img"),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './js/footer.json'
});

(function () {
    
  sectionNames.forEach((section) => {
    let ele = document.querySelector(section);
    sectionOffsets.push({
      start: ele.offsetTop,
      end: ele.offsetTop + ele.offsetHeight
    });
  });
}());

//add smooth scrolling to sections
document.querySelectorAll('a.nav-link').forEach(val => {
  val.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.target.hash).scrollIntoView({
      behavior: 'smooth'
    });
  })
});

document.addEventListener('scroll', function () {
  let scrollPosition = parseInt(window.scrollY);
  sectionOffsets.forEach((section, i)=>{
    if(section.start < scrollPosition && section.end > scrollPosition){
      sectioninView = sectionNames[i];
      removeActiveClass();
      let selector = `.nav-link.${sectioninView.substr(1)}`;
      document.querySelector(selector).classList.add('active');
    }
  })
})

function removeActiveClass(){
  sectionNames.forEach(section => {
    let selector = `.nav-link.${section.substr(1)}`;
    document.querySelector(selector).classList.remove('active');
  })
}

