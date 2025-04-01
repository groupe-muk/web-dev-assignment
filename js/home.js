// Attach the event listener to the theme toggle
themeToggle.addEventListener("click", changeTheme);


/*image slideshow on home page*/

const carousel = document.getElementById("carousel");
const previousbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");

const images = [

    '/assets/images/dining-hall.jpg',
    '/assets/images/Namagunga@75.jpg',
    '/assets/images/sports-day-2.jpg',
    '/assets/images/Admistrators.jpg'
];

let currentIndex = 0;

function updateBackground(){

    carousel.style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)),
      url('${images[currentIndex]}')`;

}

function nextSlide(){
    currentIndex = (currentIndex + 1)% images.length;
    updateBackground();
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + images.length)% images.length;
    updateBackground();
}

let autoSlide = setInterval(nextSlide, 3000);

updateBackground();
