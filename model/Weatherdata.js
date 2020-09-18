import {clothesDisplay, conditions } from "../view/results.js";
const apiKey = "c47df4296bf048078224d834ba90cc32";

export default class Weather {
  constructor(location) {
    this.location = location;
  }

  async getWeather() {
    try {
      const res = await fetch(
        `https://api.weatherbit.io/v2.0/current?city=${this.location}&key=${apiKey}`
      );
      const result = await res.json();
      this.all = result;
      this.data = result.data[0];
      this.temp = this.data.app_temp;
      this.city = this.data.city_name;
    } catch {
      clothesDisplay(conditions.error);
      console.log(error);
    }
  }
}
