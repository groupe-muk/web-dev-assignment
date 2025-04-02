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

let index = 0;

const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

if(testimonials.length > 0){
    testimonials[0].classList.add("active");
}


function showTestimonial(){
    testimonials.forEach((testimonial) =>{
        testimonial.classList.remove("active");
        testimonial.style.display = "none";
    });
    testimonials[index].classList.add("active");
    testimonials[index].style.display = "block";
}

function nextTestimonial(){
    index = (index + 1)% testimonials.length;
    showTestimonial();
}

function prevTestimonial(){
    index = (index - 1 + testimonials.length)% testimonials.length;
    showTestimonial();
}

function autoMove(){
    nextTestimonial();
}

let autoMoveInterval = setInterval(autoMove,3000);


document.querySelector('.testimonial-carousel').addEventListener('mouseover', () => {
    clearInterval(autoMoveInterval);
});

// Resume auto-slide on mouse leave
document.querySelector('.testimonial-carousel').addEventListener('mouseleave', () => {
    autoMoveInterval = setInterval(autoMove, 3000);
});

document.getElementById("prevbtn").addEventListener("click", prevTestimonial);
document.getElementById("nextbtn").addEventListener("click", nextTestimonial);