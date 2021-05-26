export const speakerPressed = (sound) => {
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}