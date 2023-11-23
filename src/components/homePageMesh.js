import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDPlane = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 1.8, window.innerHeight / 1.8);
    // Optional: Set clear color with 0 opacity for transparency
    renderer.setClearColor( 0x000000, 0 ); // Black background with 0 opacity

    mountRef.current.appendChild(renderer.domElement);

    // Plane geometry
    const geometry = new THREE.PlaneGeometry(30, 30, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xF34BB9, wireframe: true });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 30;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

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
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeDPlane;
