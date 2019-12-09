let ionLevel = 1;
let healthLevel = "Normal";
const ionText = document.getElementById("ionLevelText");
const healthText = document.getElementById("healthText");
const healthBG = document.querySelector(".healthIndicator");
const cellImg = document.querySelector(".cell-img");
const graphImg = document.getElementById("graph-img");

const increaseCounter = () => {
  if (ionLevel < 10) {
    ionLevel++;
    ionText.innerHTML = "Proton buildup level: " + ionLevel;
    graphImg.setAttribute("src", "./Assets/Protons " + ionLevel + ".png");
  }
  checkForHealthChange();
  placeProtons();
};

const decreaseCounter = () => {
  if (ionLevel > 1) {
    ionLevel--;
    ionText.innerHTML = "Hydrogen ion level: " + ionLevel;
    graphImg.setAttribute("src", "./Assets/Protons " + ionLevel + ".png");
  }
  checkForHealthChange();
  removeProtons();
};

const checkForHealthChange = () => {
  if (ionLevel > 0 && ionLevel < 5) {
    healthText.innerHTML = "Normal";
    healthBG.style.backgroundColor = "rgba(39, 245, 12, 0.842)";
  } else if (ionLevel > 4 && ionLevel < 8) {
    healthText.innerHTML = "High";
    healthBG.style.backgroundColor = "rgba(241, 140, 7, 0.842)";
  } else if (ionLevel > 7 && ionLevel < 11) {
    healthText.innerHTML = "Dangerous";
    healthBG.style.backgroundColor = "rgba(241, 15, 15, 0.842)";
  }
};

// Proton buildup
const bodyWidth = document.body.clientWidth;
const midPoint = bodyWidth / 2;
const imgWidth = cellImg.clientWidth;
const lowerBoundX = midPoint - imgWidth / 2 + 50;
const upperBoundX = midPoint + imgWidth / 2 - 150;
let x;

//  Y values
const imgHeight = cellImg.clientHeight;
const lowerBoundY =
  window.pageYOffset + cellImg.getBoundingClientRect().top + 50;
const upperBoundY = lowerBoundY + imgHeight - 150;
let y;
let img;
const placeImg = (xVal, yVal) => {
  img = document.createElement("img");
  img.setAttribute("style", "position: absolute;");
  img.setAttribute("src", "Assets/proton.png");
  img.style.width = 50 + "px";
  img.style.top = yVal + "px";
  img.style.left = xVal + "px";
  document.body.appendChild(img);
};

let normalIncreaseValue = 3;
let dangerousIncreaseValue = 27;

const placeProtons = () => {
  if (ionLevel < 8) {
    // Normal to High
    for (let i = 0; i < normalIncreaseValue; i++) {
      // x and y values must be in for loop to generate random values every proton
      x = Math.floor(
        Math.random() * (upperBoundX - lowerBoundX + 1) + lowerBoundX
      );

      y = Math.floor(
        Math.random() * (upperBoundY - lowerBoundY + 1) + lowerBoundY
      );

      placeImg(x, y);
    }
  } else {
    // Dangerous level
    for (let i = 0; i < dangerousIncreaseValue; i++) {
      // x and y values must be in for loop to generate random values every proton
      x = Math.floor(
        Math.random() * (upperBoundX - lowerBoundX + 1) + lowerBoundX
      );

      y = Math.floor(
        Math.random() * (upperBoundY - lowerBoundY + 1) + lowerBoundY
      );

      placeImg(x, y);
    }
  }
};

// Decrease Intensity
const removeProtons = () => {
  let child = document.body.lastElementChild;
  while (child) {
    document.body.removeChild(child);
    child = document.lastElementChild;
  }
};
