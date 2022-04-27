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
