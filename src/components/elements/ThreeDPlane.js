import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeDPlane.css';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

const ThreeDPlane = ({ modelName }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 1.8, window.innerHeight / 1.8);
    // Optional: Set clear color with 0 opacity for transparency
    renderer.setClearColor(0x000000, 0); // Black background with 0 opacity

    mountRef.current.appendChild(renderer.domElement);

    let geometry
    let material
    let plane
    let object

    switch (modelName) {
      case "testimonials": {
        const loader = new OBJLoader();
        loader.load(
          'wine.obj', // Replace with the path to your OBJ file
          (objectLoaded) => {
            object = objectLoaded;
            // Wireframe material
            const material = new THREE.MeshBasicMaterial({ color: 0xF34BB9, wireframe: true });
            object.traverse((child) => {
              if (child.isMesh) child.material = material;
            });

            // Scale the model
            object.scale.set(3, 3, 3); // 0.1, 0.1, 0.1
            object.position.y -= 5;
            object.position.x -= 0;
            object.position.z -= -17;

            scene.add(object);
          },
          (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
          (error) => console.error('An error happened', error)
        );

        break;
      }

      case "blog": {
        const loader = new OBJLoader();
        loader.load(
          'radio.obj', // Replace with the path to your OBJ file
          (objectLoaded) => {
            object = objectLoaded;
            // Wireframe material
            const material = new THREE.MeshBasicMaterial({ color: 0xF34BB9, wireframe: true });
            object.traverse((child) => {
              if (child.isMesh) child.material = material;
            });

            // Scale the model
            object.scale.set(4, 4, 4); // 0.1, 0.1, 0.1
            object.position.y -= 1;
            object.position.x -= -1.9;
            object.position.z -= -20;

            scene.add(object);
          },
          (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
          (error) => console.error('An error happened', error)
        );

        break;
      }

      case "resume": {
        const loader = new OBJLoader();
        loader.load(
          'SuitCasePainted.obj', // Replace with the path to your OBJ file
          (objectLoaded) => {
            object = objectLoaded;
            // Wireframe material
            const material = new THREE.MeshBasicMaterial({ color: 0xF34BB9, wireframe: true });
            object.traverse((child) => {
              if (child.isMesh) child.material = material;
            });

            // Scale the model
            object.scale.set(2, 2, 2); // 0.1, 0.1, 0.1
            object.position.y -= -0.5;
            object.position.x -= -1.5;
            object.position.z -= -18;

            scene.add(object);
          },
          (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
          (error) => console.error('An error happened', error)
        );

        break;
      }

      case "portfolio": {
        const loader = new OBJLoader();
        loader.load(
          'box.obj', // Replace with the path to your OBJ file
          (objectLoaded) => {
            object = objectLoaded;
            // Wireframe material
            const material = new THREE.MeshBasicMaterial({ color: 0xF34BB9, wireframe: true });
            object.traverse((child) => {
              if (child.isMesh) child.material = material;
            });

            // Scale the model
            object.scale.set(3, 3, 3); // 0.1, 0.1, 0.1
            object.position.y -= 1.5;
            object.position.x -= 0;
            object.position.z -= -20;

            scene.add(object);
          },
          (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
          (error) => console.error('An error happened', error)
        );

        break;
      }

      case "about": {
        const loader = new OBJLoader();
        loader.load(
          'head.obj', // Replace with the path to your OBJ file
          (objectLoaded) => {
            object = objectLoaded;
            // Wireframe material
            const material = new THREE.MeshBasicMaterial({ color: 0xF34BB9, wireframe: true });
            object.traverse((child) => {
              if (child.isMesh) child.material = material;
            });

            // Scale the model
            object.scale.set(1.5, 1.5, 1.5); // 0.1, 0.1, 0.1
            object.position.y -= 15;
            object.position.x -= -4;

            scene.add(object);
          },
          (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
          (error) => console.error('An error happened', error)
        );

        break;
      }

      default: {
        geometry = new THREE.PlaneGeometry(30, 30, 16, 16);
        material = new THREE.MeshBasicMaterial({ color: 0xF34BB9, wireframe: true });
        plane = new THREE.Mesh(geometry, material);

        scene.add(plane);
        break
      }
    }

    camera.position.z = 30;

    let animationFrameId;

    // Animation function
    const animate = () => {
      // Update animation
      animationFrameId = requestAnimationFrame(animate);

      // ----------------------------
      // Update animation for loaded plane
      if (geometry) {
        const positions = geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const waveX1 = 5 * Math.sin(x * 2 + (performance.now() / 1000));
          const waveX2 = 4 * Math.sin(x * 3 + (performance.now() / 1000));
          const waveY1 = 3 * Math.sin(y + (performance.now() / 1000));
          positions[i + 2] = waveX1 + waveX2 + waveY1;
        }

        plane.rotation.x = 0.25 * Math.sin(plane.rotation.x + (performance.now() / 1000));
        plane.rotation.y = 0.25 * Math.sin(plane.rotation.y + (performance.now() / 1000));
        plane.rotation.z = 0.25 * Math.sin(plane.rotation.z + (performance.now() / 1000));

        geometry.attributes.position.needsUpdate = true;
      }

      // ----------------------------
      // Update animation for loaded object
      if (object) {
        object.rotation.x = 0.35 * Math.sin(object.rotation.x + (performance.now() / 1000));
        object.rotation.y = 0.5 * Math.sin(object.rotation.y + (performance.now() / 1000));
        object.rotation.z = 0.25 * Math.sin(object.rotation.z + (performance.now() / 1000));

        // Access and process the geometry of each mesh
        // object.traverse((child) => {
        //   if (child instanceof THREE.Mesh) {
        //       const geometry = child.geometry;
        //       const positions = geometry.attributes.position.array;

        //       for (let i = 0; i < positions.length; i += 3) {
        //         const x = positions[i];
        //         const y = positions[i + 1];
        //         const waveX1 = 0.2 * Math.sin(x * 2 + (performance.now() / 1000));
        //         const waveX2 = 0.1 * Math.sin(x * 3 + (performance.now() / 1000));
        //         const waveY1 = 0.3 * Math.sin(y + (performance.now() / 1000));
        //         positions[i + 2] = waveX1 + waveX2 + waveY1;
        //       }

        //       geometry.attributes.position.needsUpdate = true;
        //   }
        // });

      }

      // ----------------------------
      // Render scene
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Dispose of scene objects and renderer
      geometry && geometry.dispose();
      material && material.dispose();
      scene && scene.remove(plane);
      renderer && renderer.dispose();

      // Clean up
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div className="three-d-plane-container">
    <div ref={mountRef} />
  </div>;
};

export default ThreeDPlane;
