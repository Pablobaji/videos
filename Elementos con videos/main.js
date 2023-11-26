let video = document.querySelector('.vd');


video.addEventListener('play',function (){
    
    console.log('Di play al video');
    ponerColorbody();
});
video.addEventListener('seeking', function () {
    console.log('se esta viendo una parte del video', this.currentTime);
});

video.addEventListener('pause', function () {
    console.log('di pause al video')
});
video.addEventListener('ended', function () {
    console.log('Se termino el video')
    alert('Se acabo');
    let decision = confirm('¿Desea ver el video de nuevo?');
    if (decision){
        video.play();
    }else{
        window.location = 'http://ww.google.com'
    }
    console.log(decision);
});

// timer
// setInterval
// setTimeout

let temporizador = setInterval(function () {
    ponerColorbody()
}, 2000);

setTimeout(function(){
    ponerColorbody();
}, 3000);

function ponerColorbody() {
    let pantalla = document.body;
    pantalla.style.background = pantalla.style.background == "blue" ? "green" : "blue";
}

// arreglos, array, vectores

let array = ['uno', 'dos', 'tres'];

let array2 = ['cuatro', 'cinco', 'seis'];

array2[1];

let multidimensional = [array, array2];

multidimensional[0][1];