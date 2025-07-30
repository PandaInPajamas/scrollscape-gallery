import { useState, useEffect, useRef } from "react";
import ImageModal, { Photo } from "@/components/ImageModal";

// Import sample images
import sample1 from "@/assets/sample1.jpg";
import sample2 from "@/assets/sample2.jpg";
import sample3 from "@/assets/sample3.jpg";
import sample4 from "@/assets/sample4.jpg";
import sample5 from "@/assets/sample5.jpg";
import sample6 from "@/assets/sample6.jpg";


const initialPhotos: Photo[] = [
  {
    id: "1",
    src: sample1,
    title: "Modern Concrete Structure",
    description: "A minimalist architectural masterpiece featuring clean concrete lines and strategic natural lighting. This building represents the essence of contemporary design with its bold geometric forms and thoughtful integration with the surrounding environment.",
    width: 800,
    height: 600,
  },
  {
    id: "2",
    src: sample2,
    title: "Contemporary Glass Tower",
    description: "An urban landmark showcasing the marriage of steel and glass in modern architecture. The evening lighting creates a dramatic interplay of reflections and transparency, highlighting the building's sophisticated facade system.",
    width: 600,
    height: 800,
  },
  {
    id: "3",
    src: sample3,
    title: "Residential Modern Home",
    description: "A perfect example of residential architecture that seamlessly blends natural materials with contemporary design principles. The integration of wooden accents with clean white surfaces creates a warm yet sophisticated living environment.",
    width: 704,
    height: 512,
  },
  {
    id: "4",
    src: sample4,
    title: "Industrial Warehouse Conversion",
    description: "A stunning transformation of industrial heritage into modern living space. The exposed brick and steel elements are complemented by strategic skylights that flood the interior with natural light, creating a perfect urban loft atmosphere.",
    width: 900,
    height: 600,
  },
  {
    id: "5",
    src: sample5,
    title: "Modern Library Interior",
    description: "An innovative approach to public space design featuring curved wooden walls and carefully planned reading areas. The architecture promotes both individual study and community interaction through its thoughtful spatial organization.",
    width: 650,
    height: 750,
  },
  {
    id: "6",
    src: sample6,
    title: "Sustainable Green Building",
    description: "A pioneering example of environmentally conscious architecture, featuring living walls and natural ventilation systems. This building demonstrates how modern construction can work in harmony with nature to create truly sustainable spaces.",
    width: 550,
    height: 700,
  },
];

interface PhotoGalleryProps {
  uploadedPhotos?: Photo[];
}

const PhotoGallery = ({ uploadedPhotos = [] }: PhotoGalleryProps) => {
  const [zoom, setZoom] = useState(1.8); // Start heavily zoomed in on sample 2
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photos] = useState<Photo[]>([...initialPhotos, ...uploadedPhotos]);
  const [panOffset, setPanOffset] = useState({ x: -15, y: 0 }); // Center on sample 2 image
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.1;
      const newZoom = Math.max(0.5, Math.min(3, zoom + (e.deltaY > 0 ? -zoomSpeed : zoomSpeed)));
      setZoom(newZoom);
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Only allow panning if clicking on the background (not on images)
      const target = e.target as HTMLElement;
      if (target.closest('.photo-item')) return;
      
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const sensitivity = 0.05;
      const deltaX = (e.clientX - dragStart.x) * sensitivity;
      const deltaY = (e.clientY - dragStart.y) * sensitivity;
      setPanOffset(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));
      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      
      return () => {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [zoom, isDragging, dragStart, panOffset]);

  const calculateLayout = () => {
    const baseSize = 200;
    const padding = 20;
    const cols = 4;
    const rows = Math.ceil(photos.length / cols);

    return photos.map((photo, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      
      // Vary sizes to create visual interest
      const sizeMultiplier = [1.2, 0.8, 1.5, 1.0, 0.9, 1.3][index % 6];
      const width = baseSize * sizeMultiplier * zoom;
      const height = (baseSize * sizeMultiplier * zoom * photo.height) / photo.width;
      
      const x = col * (baseSize * 1.5 + padding) * zoom;
      const y = row * (baseSize * 1.2 + padding) * zoom;

      return {
        ...photo,
        style: {
          position: "absolute" as const,
          left: x,
          top: y,
          width,
          height,
        },
      };
    });
  };

  const layoutPhotos = calculateLayout();

  return (
    <>
      <div
        ref={containerRef}
        className="photo-gallery w-full h-screen overflow-hidden relative"
        style={{ 
          cursor: isDragging ? "grabbing" : "default"
        }}
      >
        <div className="relative" style={{ width: "200vw", height: "200vh" }}>
          <div 
            className="absolute inset-0 flex items-center justify-center" 
            style={{ 
              transform: `translate(${-10 + panOffset.x}%, ${-5 + panOffset.y}%)` 
            }}
          >
            {layoutPhotos.map((photo) => (
              <div
                key={photo.id}
                className="photo-item absolute rounded-lg overflow-hidden shadow-lg bg-white select-none"
                style={photo.style}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />
    </>
  );
};

export default PhotoGallery;