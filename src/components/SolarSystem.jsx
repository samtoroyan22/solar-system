import React, { useState, useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  MeshBuilder,
  Color3,
  GlowLayer,
  Layer,
  Vector3,
  StandardMaterial,
  ActionManager,
  ExecuteCodeAction,
} from "@babylonjs/core";
import { sunData, planetData } from "../utils/planetData";
import PlanetInfoModal from "./PlanetInfoModal";
import "./PlanetInfoModal.css";
import backgroundImage from "../images/space.jpeg";

const SolarSystem = ({ speed, planetSize, sunGlow }) => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const planetsRef = useRef([]);
  const sunRef = useRef(null);
  const glowLayerRef = useRef(null);
  const speedMultiplierRef = useRef(speed);
  const planetSizeMultiplierRef = useRef(planetSize);
  const sunGlowIntensityRef = useRef(sunGlow);

  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("renderCanvas");
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    engineRef.current = engine;
    sceneRef.current = scene;

    scene.clearColor = Color3.Black;
    new Layer("background", backgroundImage, scene, true);

    const camera = new ArcRotateCamera(
      "camera",
      Math.PI / 3,
      Math.PI / 3,
      128,
      Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, true);
    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    const sun = MeshBuilder.CreateSphere("sun", { diameter: 10 }, scene);
    sun.material = new StandardMaterial("sunMaterial", scene);
    sun.material.emissiveColor = sunData.color;
    sunRef.current = sun;

    const glowLayer = new GlowLayer("glow", scene);
    glowLayer.intensity = sunGlowIntensityRef.current;
    glowLayer.addIncludedOnlyMesh(sun);
    glowLayerRef.current = glowLayer;

    sun.actionManager = new ActionManager(scene);
    sun.actionManager.registerAction(
      new ExecuteCodeAction(ActionManager.OnPickTrigger, () => {
        setSelectedPlanet(sunData);
        setIsModalOpen(true);
      })
    );

    const planets = planetData.map(
      ({ name, size, diameter, distance, speed, color, description, img }) => {
        const planet = MeshBuilder.CreateSphere(
          name,
          { diameter: size * planetSizeMultiplierRef.current },
          scene
        );
        planet.material = new StandardMaterial(name + "Material", scene);
        planet.material.diffuseColor = color;
        planet.actionManager = new ActionManager(scene);

        planet.actionManager.registerAction(
          new ExecuteCodeAction(ActionManager.OnPickTrigger, () => {
            setSelectedPlanet({
              name,
              size,
              distance,
              diameter,
              speed,
              description,
              img,
            });
            setIsModalOpen(true);
          })
        );

        const orbitPoints = [];
        for (let i = 0; i <= 100; i++) {
          const theta = (i / 100) * 2 * Math.PI;
          orbitPoints.push(
            new Vector3(
              Math.cos(theta) * distance,
              0,
              Math.sin(theta) * distance
            )
          );
        }

        MeshBuilder.CreateLines(
          name + "Orbit",
          { points: orbitPoints },
          scene
        ).color = new Color3(1, 1, 1);

        return {
          mesh: planet,
          distance,
          speed,
          angle: Math.random() * Math.PI * 2,
          baseSize: size,
        };
      }
    );

    planetsRef.current = planets;

    engine.runRenderLoop(() => {
      planetsRef.current.forEach((planet) => {
        planet.angle += planet.speed * speedMultiplierRef.current;
        planet.mesh.position.x = Math.cos(planet.angle) * planet.distance;
        planet.mesh.position.z = Math.sin(planet.angle) * planet.distance;
      });
      scene.render();
    });

    window.addEventListener("resize", () => engine.resize());

    return () => {
      engine.dispose();
    };
  }, []);

  useEffect(() => {
    speedMultiplierRef.current = speed;
  }, [speed]);

  useEffect(() => {
    planetSizeMultiplierRef.current = planetSize;
    if (planetsRef.current.length > 0) {
      planetsRef.current.forEach((planet) => {
        planet.mesh.scaling = new Vector3(planetSize, planetSize, planetSize);
      });
    }
  }, [planetSize]);

  useEffect(() => {
    sunGlowIntensityRef.current = sunGlow;
    if (glowLayerRef.current) {
      glowLayerRef.current.intensity = sunGlow;
    }
  }, [sunGlow]);

  return (
    <>
      <canvas id="renderCanvas" style={{ width: "100%", height: "100vh" }} />
      <PlanetInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planet={selectedPlanet}
      />
    </>
  );
};

export default SolarSystem;
