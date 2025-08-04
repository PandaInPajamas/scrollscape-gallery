import PhotoGallery from "@/components/PhotoGallery";
import { useState, useEffect } from "react";
import bgImage from "@/assets/morethanjizz-bg.jpg";

const Index = () => {
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });

  // Listen for custom pan events from PhotoGallery
  useEffect(() => {
    const handlePanUpdate = (event: CustomEvent) => {
      setPanOffset(event.detail);
    };

    window.addEventListener('panUpdate', handlePanUpdate as EventListener);
    return () => window.removeEventListener('panUpdate', handlePanUpdate as EventListener);
  }, []);

  return (
    <div 
      className="relative w-full h-screen"
      style={{
        backgroundColor: '#f0eee9',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
        transform: `translate(${panOffset.x * 0.5}px, ${panOffset.y * 0.5}px)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      <PhotoGallery />
    </div>
  );
};

export default Index;
