// Vars
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

 // If the key is being held down, don't play the note again
 
document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (e.repeat) {
    return;}

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});

function playNoteByKeyName(keyName) {
  let keyElement = whiteKeys[WHITE_KEYS.indexOf(keyName)] || blackKeys[BLACK_KEYS.indexOf(keyName)];
  if (!keyElement) return;

  const noteAudio = document.getElementById(keyElement.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();

  keyElement.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    keyElement.classList.remove('active');
  });
}

const maryTune = [
  { note: 'c', duration: 500 },
  { note: 'x', duration: 500 },
  { note: 'z', duration: 500 },
  { note: 'x', duration: 500 },
  { note: 'c', duration: 500 },
  { note: 'c', duration: 500 },
  { note: 'c', duration: 1000 },
  { note: 'x', duration: 500 },
  { note: 'x', duration: 500 },
  { note: 'x', duration: 1000 },
  { note: 'c', duration: 500 },
  { note: 'c', duration: 500 },
  { note: 'c', duration: 1000 },
  { note: 'c', duration: 500 },
  { note: 'x', duration: 500 },
  { note: 'z', duration: 500 },
  { note: 'x', duration: 500 },
  { note: 'c', duration: 500 },
  { note: 'c', duration: 500 },
  { note: 'c', duration: 1000 },
];

function playSong(tune) {
  let time = 0;

  tune.forEach(({ note, duration }) => {
    setTimeout(() => {
      playNoteByKeyName(note);
    }, time);
    time += duration;
  });
}


const maryButton = document.getElementById('play-mary');

maryButton.addEventListener('click', () => {
  maryButton.classList.add('active');
  playSong(maryTune);
  setTimeout(() => maryButton.classList.remove('active'), 300);
});

// select all keys
const keys = document.querySelectorAll('.key');

// -- listeners -- //
// add an event listener to all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});
 
// -- handlers -- //
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);

    noteAudio.currentTime = 0;

    noteAudio.play();

    key.classList.add('active');  

  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}
