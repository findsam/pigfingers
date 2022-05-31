import sOne from "./Sound/1.wav";
import sTwo from "./Sound/2.wav";
import sThree from "./Sound/3.wav";
import sFour from "./Sound/4.wav";
import sFive from "./Sound/5.wav";
import sSix from "./Sound/6.wav";
import sSeven from "./Sound/7.wav";
import sEight from "./Sound/8.wav";
import sNine from "./Sound/9.wav";
import sTen from "./Sound/10.wav";
import sEleven from "./Sound/11.wav";
import sTwelve from "./Sound/12.wav";
import Data from "./Words";

export const sortData = (value, quote) => {
  const valueText = value.replace(/ /g, "");
  const quoteText = quote.replace(/ /g, "");
  return [valueText, quoteText];
};

export const calcCorrectSymbols = (value, quote) => {
  const text = quote.replace(" ", "");
  return value
    .replace(" ", "")
    .split("")
    .filter((s, i) => s === text[i]).length;
};

export const calcWPM = (value, seconds) => {
  const wpm = value / 5 / (seconds / 60);
  if (value !== 0 && seconds !== 0) {
    return Math.round(wpm);
  }
  return 0;
};

export const calcSpeed = (input, quote, time) => {
  const correctSymbols = calcCorrectSymbols(input, quote);
  const finalWPM = calcWPM(correctSymbols, time) | 0;
  return finalWPM;
};

export const playSound = () => {
  const audioOptions = [sOne, sTwo, sThree, sFour, sFive, sSix, sSeven, sEight, sNine, sTen, sEleven, sTwelve];
  const randomAudio = audioOptions[Math.floor(Math.random() * audioOptions.length)];
  let audio = new Audio(randomAudio);
  audio.volume = 0.6;
  audio.play();
};

export function getWords(wordLength) {
  const shuffled = Data.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, wordLength);
  const stringify = selected.join(" ");
  return stringify;
}

// .match(/[^_\W]+/g).join(' '); regex to remove punctuation add setting soonTM
export async function getQuote(quoteLength) {
  const res = await fetch(`${quoteLength}`);
  const { content } = await res.json();
  return content;
}

export const INITIAL_STATE = {
  mode: "quote",
  quoteLength: "https://api.quotable.io/random?minLength=10&maxLength=500",
  wordLength: 25,
  showWpm: true,
  letterProg: false,
  wordProg: false,
  showTime: false,
  audio: false,
  caretType: "stroke",
};

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
