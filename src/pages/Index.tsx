import PhotoGallery from "@/components/PhotoGallery";
import { useState, useEffect } from "react";
import bgImage from "@/assets/morethanjizz-bg.jpg";

const Index = () => {
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePanUpdate = (event: CustomEvent) => {
      setPanOffset(event.detail);
    };

    window.addEventListener('panUpdate', handlePanUpdate as EventListener);
    return () => window.removeEventListener('panUpdate', handlePanUpdate as EventListener);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background layer that moves */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate(${panOffset.x * 0.6}px, ${panOffset.y * 0.6}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Content layer that stays fixed */}
      <div className="relative z-10 w-full h-full">
        <PhotoGallery />
      </div>
    </div>
  );
};

export default Index;
