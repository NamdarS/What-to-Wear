export const conditions = {
  extremeCold: `You should put on a coat, gloves, scarf and whatever else you've got!`,
  veryCold: `You should definetly grab a jacket!`,
  cold: `You should be fine with just a sweater. I think`,
  mild: `A hoodie or a sweatshirt is all you need!`,
  warm: `It's t-shirt weather! Enjoy it while it lasts`,
  hot: `Shorts. Oh and a tanktop!`,
  else: `Honestly you should just stay inside today`,
  error: `Sorry, either you mispelled very badly or we don't know where that is`,
};

export const clothesDisplay = (condition, temp) => {
  const html = `
  <div>
    <h2 class="results">
        ${Math.round(temp)}°C. ${condition}
    </h2>;
  </div>`;

  const altHtml = `
   <div>
    <h2 class="results">
        ${condition}
    </h2>;
  </div>`;

  document
    .querySelector(".text-line")
    .insertAdjacentHTML("afterend", temp ? html : altHtml);
};

export const iconsDisplay = (image) => {
  const html1 = `
    <div class="weatherIcons">
      <img class = "wIcon" src="../assets/${image}.png" />
    </div>
  `;
  const html2 = ` 
    <div class="weatherIcons2">
      <img class="wIcon2" src="../assets/${image}.png" />
    </div>
  `;

  document.querySelector(".searchUnit").insertAdjacentHTML("afterend", html1);
  document.querySelector(".searchUnit").insertAdjacentHTML("afterend", html2);
};

export const clearResults = () => {
  document.querySelector(".results").innerHTML = "";
  document.querySelector(".weatherIcons").innerHTML = "";
  document.querySelector(".weatherIcons2").innerHTML = "";
};
