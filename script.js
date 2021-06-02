let sortBtn = document.querySelector('.filtres-menu').children;
let sortItem = document.querySelector('.elements-portfolio').children;

for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener('click', function () {
        for (let j = 0; j < sortBtn.length; j++) {
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');


        let targetData = this.getAttribute('data-target');

        for (let k = 0; k < sortItem.length; k++) {
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if (sortItem[k].getAttribute('data-item') == targetData || targetData == "tout") {
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}

var slide = new Array("img/skins.jpg", "img/laschicasdelcable.jpg", "img/euphoria.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

const curseur = document.querySelector('.curseur');

document.addEventListener('mousemove', e => {
    curseur.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    curseur.classList.add("expand");

    setTimeout(() => {
        curseur.classList.remove("expand");
    }, 500)
})


/* Particules js */
particlesJS("particles-js",
    {
        "particles": {
            "number": { "value": 20, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#e0bad7" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.1843923869995351, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 126.26362266116361, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true
    });
