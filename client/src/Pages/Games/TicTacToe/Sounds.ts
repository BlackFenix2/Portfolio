/* eslint-disable no-param-reassign */
import { circle, cross, game } from 'src/lib/audio';

let sounds: any = {};

// juryrig to catch SSR error for audio objects
try {
  sounds = {
    gameSound: new Audio(game),
    crossSound: new Audio(cross),
    circleSound: new Audio(circle)
  };
} catch (error) {
  // caught untill client code.
}

const status: any = {
  muted: false
};

export const checkMute = () => status.muted;

export const muteAll = () => {
  Object.values(sounds).map((audio: HTMLAudioElement) => {
    audio.load();
    audio.muted = false;
    return true;
  });
  status.mute = true;
};

export const unMuteAll = () => {
  Object.values(sounds).map((audio: HTMLAudioElement) => {
    audio.load();
    audio.muted = false;
    return true;
  });
  status.mute = false;
};

export const toggleMute = () => {
  if (status.mute) {
    unMuteAll();
    return status.mute;
  }
  muteAll();
  return status.mute;
};

export const playCircle = () => {
  sounds.circleSound.load();
  sounds.circleSound.play();
};

export const playCross = () => {
  sounds.crossSound.load();
  sounds.crossSound.play();
};

export const playGame = () => {
  sounds.gameSound.load();
  sounds.gameSound.play();
};
