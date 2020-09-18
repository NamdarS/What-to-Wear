import Weather from "../model/Weatherdata.js";
import * as Results from "../view/results.js";

const state = {};
let first = true;

const weatherProcessor = async (location) => {
  state.weather = new Weather(location);

  try {
    await state.weather.getWeather();
    clother();
    first = false;
    console.log(state.weather);
  } catch {
    console.log(error);
  }
};

const clother = (error) => {
  const temp = state.weather.temp;
  const conditions = Results.conditions;
  const clothesChoice = Results.clothesDisplay;
  const icon = Results.iconsDisplay;

  if (error) {
    clothesChoice(conditions.error);
  }

  if (temp < -10 && temp >= -20) {
    clothesChoice(conditions.extremeCold, temp);
    icon("cold");
  } else if (temp < 0 && temp >= -10) {
    clothesChoice(conditions.veryCold, temp);
    icon("cold");
  } else if (temp < 10 && temp >= 0) {
    clothesChoice(conditions.cold, temp);
    icon("cloudy");
  } else if (temp < 20 && temp >= 10) {
    clothesChoice(conditions.mild, temp);
    icon("cloudysunny");
  } else if (temp < 30 && temp >= 20) {
    clothesChoice(conditions.warm, temp);
    icon("sunnycloudy");
  } else if (temp < 40 && temp >= 30) {
    clothesChoice(conditions.hot, temp);
    icon("sunny");
  } else {
    clothesChoice(conditions.else, temp);
  }
};

const mainFunction = () => {
  if (!first) {
    Results.clearResults();
  }
};

document.querySelector(".text-line").addEventListener("keypress", (element) => {
  mainFunction();
  if (element.key == "Enter") {
    let text = document.querySelector(".text-line").value;
    weatherProcessor(text);
  }
});

document
  .querySelector(".searchPNG")
  .addEventListener("click" || "dblclick", () => {
    mainFunction();
    let text = document.querySelector(".text-line").value;
    if (text) {
      weatherProcessor(text);
    }
  });
