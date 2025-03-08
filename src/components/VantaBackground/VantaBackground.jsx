"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Required for Vanta.js

export default function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    import("vanta/dist/vanta.net.min").then((VANTA) => {
      setVantaEffect(
        VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3f8fff,
          backgroundColor: 0x0,
          THREE: THREE, // Ensure Three.js is used
        })
      );
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="vanta-bg" style={{ width: "50%", height: "100%", borderBottom:"2px solid rgba(198, 228, 255, 0.492)"}} />;
}
