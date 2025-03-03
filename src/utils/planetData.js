import { Color3 } from "@babylonjs/core";
import mercuryImg from "../images/mercury.png";
import venusImg from "../images/venus.png";
import earthImg from "../images/earth.png";
import marsImg from "../images/mars.png";
import jupiterImg from "../images/jupiter.png";
import saturnImg from "../images/saturn.png";
import uranusImg from "../images/uranus.png";
import neptuneImg from "../images/neptune.png";
import sunImg from "../images/sun.png";

export const sunData = {
  name: "Sun",
  diameter: 1391000,
  size: 10,
  distance: "Center",
  speed: "N/A",
  color: new Color3(1, 0.5, 0),
  img: sunImg,
  description:
    "The Sun is the star at the center of our solar system. It provides the necessary light and heat for life on Earth.",
};

export const planetData = [
  {
    name: "Mercury",
    diameter: 4879,
    size: 1,
    distance: 15,
    speed: 0.015,
    color: new Color3(0.7, 0.7, 0.7),
    img: mercuryImg,
    description:
      "Mercury is the smallest planet in our solar system and the closest to the Sun.",
  },
  {
    name: "Venus",
    diameter: 12104,
    size: 1.5,
    distance: 22,
    speed: 0.012,
    color: new Color3(1, 0.5, 0),
    img: venusImg,
    description:
      "Venus is known for its thick, toxic atmosphere and extreme surface temperatures, often called Earth's sister planet.",
  },
  {
    name: "Earth",
    diameter: 12742,
    size: 1.8,
    distance: 30,
    speed: 0.01,
    color: new Color3(0, 0, 1),
    img: earthImg,
    description:
      "Earth is the only known planet to support life, with oceans, diverse ecosystems, and a breathable atmosphere.",
  },
  {
    name: "Mars",
    diameter: 6792,
    size: 1.4,
    distance: 38,
    speed: 0.009,
    color: new Color3(1, 0, 0),
    img: marsImg,
    description:
      "Mars is known for its red color due to iron oxide (rust) on its surface and is a prime target for space exploration.",
  },
  {
    name: "Jupiter",
    diameter: 139820,
    size: 4,
    distance: 50,
    speed: 0.006,
    color: new Color3(1, 0.8, 0.2),
    img: jupiterImg,
    description:
      "Jupiter is the largest planet in our solar system, featuring a massive storm known as the Great Red Spot.",
  },
  {
    name: "Saturn",
    diameter: 116460,
    size: 3.5,
    distance: 65,
    speed: 0.005,
    color: new Color3(0.9, 0.7, 0.4),
    img: saturnImg,
    description:
      "Saturn is famous for its stunning ring system made of ice and rock particles, visible from Earth with a telescope.",
  },
  {
    name: "Uranus",
    diameter: 50724,
    size: 3,
    distance: 80,
    speed: 0.003,
    color: new Color3(0.4, 0.8, 1),
    img: uranusImg,
    description:
      "Uranus is an ice giant with a pale blue color due to methane in its atmosphere and a unique tilted axis of rotation.",
  },
  {
    name: "Neptune",
    diameter: 49244,
    size: 2.8,
    distance: 95,
    speed: 0.002,
    color: new Color3(0.2, 0.4, 1),
    img: neptuneImg,
    description:
      "Neptune is a deep blue ice giant, known for its strong winds and the Great Dark Spot, a massive storm system.",
  },
];
