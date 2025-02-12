// Seleziona l'immagine e l'elemento audio
const catImage = document.getElementById('catImage');
const catSound = document.getElementById('catSound');

// Aggiungi un evento di clic all'immagine
catImage.addEventListener('click', function() {
    catSound.play(); // Riproduce il suono
});
