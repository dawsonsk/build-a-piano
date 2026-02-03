const keys = document.querySelectorAll('.key');

// -- listeners -- //
// add an event listener to all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// -- handlers -- //
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.play();
}
 
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');  
  }

  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
