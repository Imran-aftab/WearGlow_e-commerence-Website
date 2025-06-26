console.log("javascript code running");
//  Working file index.html 

// Enabled Hamburger Menu
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

// Disabled Hamburger Menu
const close = document.getElementById('close');
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


// <!--  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& (* Slider Section *)&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& -->


const slides = document.querySelectorAll('.slide');
var counter = 0;
console.log(slides);

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`

        // slide.style.bottom = `${index * 100}%`
        // slide.style.top = `${index * 100}%`
        // slide.style.right = `${index * 100}%`
    }
)
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;

            // slide.style.transform = `translateY(${counter * 100}%)`
        }
    )
};

// const goPrev = () => {
//     counter--
//     slideImage();
//     stop()
// }
// const goNext = () => {
//     counter++
//     slideImage()

// }


// Updated Code for Clicking next button slide this expty slide Problem fixed it
const goPrev = () => {
    if (counter > 0) {
        counter--;
        slideImage();
    }
};

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
        slideImage();
    }
};

// <!-- &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& (* End Slider Section *)&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  -->
// <!-- &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& (* End Slider Section *)&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  -->

