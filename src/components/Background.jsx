import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function Background() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = NET({
        el: vantaRef.current,
        THREE,
       mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x3f99ff,
  backgroundColor: 0x3c1515,
  points: 6.00,
  maxDistance: 18.00,
  spacing: 13.00
      });
    }
    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="h-screen w-full"></div>;
}
