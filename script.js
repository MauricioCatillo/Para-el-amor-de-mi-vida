function changeText(newText) {
    document.getElementById('text-box').innerHTML = `<p>${newText}</p>`;
}

function playAudioAndChangeText(newText, audioId) {
    changeText(newText);
    const audio = document.getElementById(audioId);
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic) {
        backgroundMusic.pause();
    }
    if (audio) {
        audio.play();
    }
    showBackButton();
}

function showBackButton() {
    document.getElementById('main-buttons').style.display = 'none';
    document.getElementById('back-button').style.display = 'flex';
}

function resetPage() {
    changeText('La distancia y el tiempo entre nosotros nunca cambiaría mi mente porque amor ... moriría por ti amor, moriría por ti ...');
    document.getElementById('main-buttons').style.display = 'flex';
    document.getElementById('back-button').style.display = 'none';

    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic) {
        backgroundMusic.play();
    }

    const audio1 = document.getElementById('audio1');
    const audio2 = document.getElementById('audio2');
    if (audio1) audio1.pause();
    if (audio2) audio2.pause();
    if (audio1) audio1.currentTime = 0;
    if (audio2) audio2.currentTime = 0;
}

// Para manejar la reproducción de música en navegadores modernos que requieren interacción del usuario
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    if (music) {
        document.body.addEventListener('click', function() {
            if (music.paused) {
                music.play();
            }
        }, { once: true });
    }
});
