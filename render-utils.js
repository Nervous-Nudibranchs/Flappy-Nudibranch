import Constants from "./Constants.js";

export function renderObstacle(kelpType) {
  const obstacleContainer = document.createElement("div");

  const octopus = document.createElement("div");
  octopus.classList.add("octopus");
  octopus.setAttribute("id", "octopus");
  const octopusImg = document.createElement("img");
  octopusImg.classList.add("octopus-image");

  const kelp = document.createElement("div");
  kelp.classList.add("kelp");
  kelp.setAttribute("id", "kelp");
  const kelpImg = document.createElement("img");
  kelpImg.classList.add("kelp-image");

  if (kelpType == "short") {
    octopusImg.src = Constants.OCTOPUS_LONG_URL;
    octopusImg.classList.add(Constants.OCTOPUS_LONG_CLASS);
    kelpImg.src = Constants.KELP_SHORT_URL;
    kelpImg.classList.add(Constants.KELP_SHORT_CLASS);
    octopus.classList.add(Constants.OCTOPUS_LONG_CLASS);
    kelp.classList.add(Constants.KELP_SHORT_CLASS);
  }
  if (kelpType == "medium") {
    octopusImg.src = Constants.OCTOPUS_MEDIUM_URL;
    octopusImg.classList.add(Constants.OCTOPUS_MEDIUM_CLASS);
    kelpImg.src = Constants.KELP_MEDIUM_URL;
    kelpImg.classList.add(Constants.KELP_MEDIUM_CLASS);
    octopus.classList.add(Constants.OCTOPUS_MEDIUM_CLASS);
    kelp.classList.add(Constants.KELP_MEDIUM_CLASS);
  }
  if (kelpType == "long") {
    octopusImg.src = Constants.OCTOPUS_SHORT_URL;
    octopusImg.classList.add(Constants.OCTOPUS_SHORT_CLASS);
    kelpImg.src = Constants.KELP_LONG_URL;
    kelpImg.classList.add(Constants.KELP_LONG_CLASS);
    octopus.classList.add(Constants.OCTOPUS_SHORT_CLASS);
    kelp.classList.add(Constants.KELP_LONG_CLASS);
  }

  octopus.append(octopusImg);
  kelp.append(kelpImg);
  obstacleContainer.append(octopus, kelp);

  return obstacleContainer;
}
