const pButton = document.getElementById("pButton");
const audio = document.getElementById("sound");

let isPlay = false;

pButton.addEventListener('click', ()=>{
    isPlay = !isPlay
    pButton.classList.toggle('play');
    pButton.classList.toggle('pause');
    if (isPlay === true){
        audio.play();
    }
    if (isPlay === false){
        audio.pause();
    }
});