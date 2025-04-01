console.log("gallery.js loaded successfully!");


const lightbox=document.createElement('div');
lightbox. id ='lightbox';
document.body.appendChild(lightbox);
const images =document.querySelectorAll('.flex-container img');
console.log("Number of images found:",images.length);
images.forEach(image =>{
    image.addEventListener('click', (e)=>{
        console.log("Image clicked:", e. target.src);
        lightbox.classList.add('active');
        console.log("Lightbox activated");
        const img =document.createElement('img');
        img.src = image.src;
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);
        
    }
        
    );
}

)
lightbox.addEventListener('click', (e)=>{
    if(e.target!==e.currentTarget) return
    lightbox.classList.remove('active');

}
);

