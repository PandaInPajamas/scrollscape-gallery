import { useState, useEffect, useRef } from "react";
import ImageModal, { Photo } from "@/components/ImageModal";

// Import sample images
import sample1 from "@/assets/sample1.jpg";
import sample2 from "@/assets/2020_MORETHANVIZ_OPERA_15_HQ.jpg";
import sample3 from "@/assets/sample3.jpg";
import sample4 from "@/assets/sample4.jpg";
import sample5 from "@/assets/sample5.jpg";
import sample6 from "@/assets/sample6.jpg";

// Import MORETHANVIZ project images
import bench1 from "@/assets/2020_MORETHANVIZ_BENCH_1_HQ.jpg";
import bench3 from "@/assets/2020_MORETHANVIZ_BENCH_3_HQ.jpg";
import opera01 from "@/assets/2020_MORETHANVIZ_OPERA_01_HQ.jpg";
import opera07 from "@/assets/2020_MORETHANVIZ_OPERA_07_HQ.jpg";
import opera09 from "@/assets/2020_MORETHANVIZ_OPERA_09_LQ.jpg";
import opera13 from "@/assets/2020_MORETHANVIZ_OPERA_13_HQ.jpg";
import opera15 from "@/assets/sample2.jpg";
import opera18 from "@/assets/2020_MORETHANVIZ_OPERA_18_HQ.jpg";
import opera21 from "@/assets/2020_MORETHANVIZ_OPERA_21_HQ.jpg";
import sherbourne from "@/assets/2020_MORETHANVIZ_SHERBOURNE_2_LQ.jpg";
import treehouse from "@/assets/2020_MORETHANVIZ_TREEHOUSE_1_LQ.jpg";
import ch3 from "@/assets/2021_MORETHANVIZ_CH_3_LQ.jpg";
import musicianHouse1 from "@/assets/2021_MORETHANVIZ_MUSICIANHOUSE_HQ_1.jpg";
import musicianHouse2 from "@/assets/2021_MORETHANVIZ_MUSICIANHOUSE_HQ_2.jpg";
import cb2 from "@/assets/2022_MORETHANVIZ_CB_2_HQ.jpg";
import yaleBp from "@/assets/2023_MORETHANVIZ_YALEBP2023_1_LQ.jpg";
import yaleDsr from "@/assets/2023_MORETHANVIZ_YALE_DSR_13_LQ.jpg";
import studyAh from "@/assets/2024_MORETHANVIZ_STUDY_AH_01_HQ.png";
import gsdInt from "@/assets/2025_MORETHANVIZ_GSD_INT1.jpg";

const initialPhotos: Photo[] = [
  { id: "1", src: sample1, title: "Modern Concrete Structure", description: "...", width: 800, height: 600 },
  { id: "2", src: sample2, title: "Contemporary Glass Tower", description: "...", width: 600, height: 800 },
  { id: "3", src: sample3, title: "Residential Modern Home", description: "...", width: 704, height: 512 },
  { id: "4", src: sample4, title: "Industrial Warehouse Conversion", description: "...", width: 900, height: 600 },
  { id: "5", src: sample5, title: "Modern Library Interior", description: "...", width: 650, height: 750 },
  { id: "6", src: sample6, title: "Sustainable Green Building", description: "...", width: 550, height: 600 },
  { id: "7", src: bench1, title: "MORETHANVIZ Bench Project 1", description: "...", width: 800, height: 600 },
  { id: "8", src: bench3, title: "MORETHANVIZ Bench Project 3", description: "...", width: 750, height: 800 },
  { id: "9", src: opera01, title: "MORETHANVIZ Opera House Study", description: "...", width: 900, height: 600 },
  { id: "10", src: opera07, title: "MORETHANVIZ Opera Interior", description: "...", width: 800, height: 650 },
  { id: "11", src: opera09, title: "MORETHANVIZ Opera Circulation", description: "...", width: 700, height: 500 },
  { id: "12", src: opera13, title: "MORETHANVIZ Opera Facade", description: "...", width: 850, height: 600 },
  { id: "13", src: opera15, title: "MORETHANVIZ Opera Lobby", description: "...", width: 450, height: 500 },
  { id: "14", src: opera18, title: "MORETHANVIZ Opera Auditorium", description: "...", width: 900, height: 600 },
  { id: "15", src: opera21, title: "MORETHANVIZ Opera Night View", description: "...", width: 750, height: 600 },
  { id: "16", src: sherbourne, title: "MORETHANVIZ Sherbourne Project", description: "...", width: 600, height: 450 },
  { id: "17", src: treehouse, title: "MORETHANVIZ Treehouse", description: "...", width: 650, height: 500 },
  { id: "18", src: ch3, title: "MORETHANVIZ CH3 Project", description: "...", width: 700, height: 550 },
  { id: "19", src: musicianHouse1, title: "MORETHANVIZ Musician House Interior", description: "...", width: 800, height: 600 },
  { id: "20", src: musicianHouse2, title: "MORETHANVIZ Musician House Exterior", description: "...", width: 750, height: 650 },
  { id: "21", src: cb2, title: "MORETHANVIZ CB2 Project", description: "...", width: 850, height: 600 },
  { id: "22", src: yaleBp, title: "MORETHANVIZ Yale BP 2023", description: "...", width: 700, height: 500 },
  { id: "23", src: yaleDsr, title: "MORETHANVIZ Yale DSR", description: "...", width: 650, height: 450 },
  { id: "24", src: studyAh, title: "MORETHANVIZ Study AH", description: "...", width: 800, height: 600 },
  { id: "25", src: gsdInt, title: "MORETHANVIZ GSD Interior", description: "...", width: 900, height: 650 },
];

interface PhotoGalleryProps {
  uploadedPhotos?: Photo[];
}

const PhotoGallery = ({ uploadedPhotos = [] }: PhotoGalleryProps) => {
  const [zoom, setZoom] = useState(1.8);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photos] = useState<Photo[]>([...initialPhotos, ...uploadedPhotos]);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const centerOnInitial = () => {
      if (!containerRef.current) return;
      
      const targetId = "13"; // Centers on 'opera15'
      const targetIndex = photos.findIndex(p => p.id === targetId);
      if (targetIndex === -1) return;

      const baseSize = 200;
      const padding = 20;
      const cols = 5;
      const col = targetIndex % cols;
      const row = Math.floor(targetIndex / cols);

      const photoX = col * (baseSize * 1.5 + padding) * zoom;
      const photoY = row * (baseSize * 1.2 + padding) * zoom;

      const vw = containerRef.current.clientWidth;
      const vh = containerRef.current.clientHeight;

      const offsetX = (((vw / 2 - photoX) / (vw * 1.4)) * 100) + 2;
      const offsetY = (((vh / 2 - photoY) / (vh * 2.2)) * 100) - 6;

      setPanOffset({ x: offsetX, y: offsetY });
    };

    centerOnInitial();
    window.addEventListener('resize', centerOnInitial);
    return () => window.removeEventListener('resize', centerOnInitial);
  }, [zoom, photos]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.1;
      const newZoom = Math.max(1.6, Math.min(1.8, zoom + (e.deltaY > 0 ? -zoomSpeed : zoomSpeed)));
      setZoom(newZoom);
    };

    const handleMouseDown = (e: MouseEvent) => {
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
      setPanOffset(prev => {
        const newOffset = {
          x: Math.max(-100, Math.min(100, prev.x + deltaX)),
          y: Math.max(-150, Math.min(100, prev.y + deltaY)),
        };
        window.dispatchEvent(new CustomEvent('panUpdate', { detail: newOffset }));
        return newOffset;
      });
      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => setIsDragging(false);

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
  }, [zoom, isDragging, dragStart]);

  const calculateLayout = () => {
    const baseSize = 200;
    const padding = 20;
    const cols = 5;

    return photos.map((photo, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const sizeMultipliers = [1, 0.8, 1.5, 1.0, 0.9, 0.9, 1.1, 0.7, 1.4, 0.95, 1.25, 0.85];
      const sizeMultiplier = sizeMultipliers[index % sizeMultipliers.length];
      const width = baseSize * sizeMultiplier * zoom;
      const height = (baseSize * sizeMultiplier * zoom * photo.height) / photo.width;
      
      const baseX = col * (baseSize * 1.5 + padding) * zoom;
      const baseY = row * (baseSize * 1.2 + padding) * zoom;

      const parallaxMultipliersX = [0.5, -0.3, 0.8, -0.6, 0.4, -0.7, 0.6, -0.4, 0.9, -0.5, 0.3, -0.8];
      const parallaxMultipliersY = [0.3, -0.5, 0.6, -0.4, 0.7, -0.2, 0.4, -0.6, 0.5, -0.3, 0.8, -0.7];
      
      const parallaxX = panOffset.x * parallaxMultipliersX[index % parallaxMultipliersX.length] * 0.5;
      const parallaxY = panOffset.y * parallaxMultipliersY[index % parallaxMultipliersY.length] * 0.5;

      return {
        ...photo,
        style: {
          position: "absolute" as const,
          left: baseX + parallaxX,
          top: baseY + parallaxY,
          width,
          height,
          transition: isDragging ? 'none' : 'left 0.3s ease-out, top 0.3s ease-out',
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
        style={{ cursor: isDragging ? "grabbing" : "default" }}
      >
        <div className="relative" style={{ width: "140vw", height: "220vh" }}> 
          <div 
            className="absolute inset-0 flex items-center justify-center" 
            style={{ 
              transform: `translate(${-10 + panOffset.x}%, ${-5 + panOffset.y}%)` 
            }}
          >
            {layoutPhotos.map((photo) => (
              <div
                key={photo.id}
                className={`photo-item absolute overflow-hidden shadow-lg bg-white select-none ${
                  photo.id === '13' ? 'pointer-events-none' : 'cursor-pointer hover:brightness-75 hover:scale-105 transition-all duration-300'
                }`}
                style={photo.style}
                onClick={photo.id === '13' ? undefined : () => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="lazy"
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