// Explanation texts
let level1Text =
  "This is a normal proton buildup level. Not much activity is being done and the muscles are at rest.";
let level2Text =
  "This is a normal proton buildup level. Not much activity is being done and the muscles are at rest.";
let level3Text =
  "This is a normal proton buildup level. Not much activity is being done and the muscles are at rest.";
let level4Text =
  "This is a fairly normal proton buildup level. A little activity is being done but the muscles aren't strained.";
let level5Text =
  "This is a fairly high proton buildup level. A good amount of activity is being done and a lot is being asked from muscles.";
let level6Text =
  "This is a high proton buildup level. A lot of activity is being done and protons begin to increase exponentially.";
let level7Text =
  "This is a very high proton buildup level. This is where anaerobic threshold is reached and is generally where athletes want to be during interval workouts.";
let level8Text =
  "This is a dangerous proton buildup level. Proton buildup is exponential and muscles to feel very heavy.";
let level9Text =
  "This is a very dangerous proton buildup level. Proton buildup is exponential and muscles to feel extremely heavy.";
let level10Text =
  "This is a VERY dangerous proton buildup level. Scientists often call this pulling a 'Meshan'. It will cause you to collapse in your last cross country meet.";

let ionLevel = 1;
let healthLevel = "Normal";
const ionText = document.getElementById("ionLevelText");
const healthText = document.getElementById("healthText");
const healthBG = document.querySelector(".healthIndicator");
const cellImg = document.querySelector(".cell-img");
const graphImg = document.getElementById("graph-img");
const explanationText = document.querySelector(".explanation-text p");

// When + is pressed
const increaseCounter = () => {
  if (ionLevel < 10) {
    ionLevel++;
    ionText.innerHTML = "Proton buildup level: " + ionLevel;
    graphImg.setAttribute("src", "./Assets/Protons " + ionLevel + ".png");
    updateExplanation();
  }
  checkForHealthChange();
  placeProtons();
};

const updateExplanation = () => {
  if (ionLevel == 1) {
    explanationText.innerHTML = level1Text;
  } else if (ionLevel == 2) {
    explanationText.innerHTML = level2Text;
  } else if (ionLevel == 3) {
    explanationText.innerHTML = level3Text;
  } else if (ionLevel == 4) {
    explanationText.innerHTML = level4Text;
  } else if (ionLevel == 5) {
    explanationText.innerHTML = level5Text;
  } else if (ionLevel == 6) {
    explanationText.innerHTML = level6Text;
  } else if (ionLevel == 7) {
    explanationText.innerHTML = level7Text;
  } else if (ionLevel == 8) {
    explanationText.innerHTML = level8Text;
  } else if (ionLevel == 9) {
    explanationText.innerHTML = level9Text;
  } else if (ionLevel == 10) {
    explanationText.innerHTML = level10Text;
  }
};

// When - is pressed
const decreaseCounter = () => {
  if (ionLevel > 1) {
    ionLevel--;
    ionText.innerHTML = "Hydrogen ion level: " + ionLevel;
    graphImg.setAttribute("src", "./Assets/Protons " + ionLevel + ".png");
    updateExplanation();
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
// Generates DOM img
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
  console.log(child);
  while (child) {
    document.body.removeChild(child);
    child = document.lastElementChild;
  }
};
