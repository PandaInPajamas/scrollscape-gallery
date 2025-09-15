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
import gsdInt from "@/assets/2025_MORETHANVIZ_GSD INT1.jpg";



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
    height: 600,
  },
  {
    id: "7",
    src: bench1,
    title: "MORETHANVIZ Bench Project 1",
    description: "Contemporary outdoor furniture design that merges functionality with artistic expression. The clean lines and material choices reflect our commitment to creating spaces that enhance human interaction with the environment.",
    width: 800,
    height: 600,
  },
  {
    id: "8",
    src: bench3,
    title: "MORETHANVIZ Bench Project 3",
    description: "An exploration of seating as sculptural intervention in public space. The design challenges traditional notions of urban furniture while maintaining comfort and accessibility.",
    width: 750,
    height: 800,
  },
  {
    id: "9",
    src: opera01,
    title: "MORETHANVIZ Opera House Study",
    description: "Architectural visualization exploring the dramatic interplay of light and space in performance venues. The design emphasizes the emotional impact of architectural form on the audience experience.",
    width: 900,
    height: 600,
  },
  {
    id: "10",
    src: opera07,
    title: "MORETHANVIZ Opera Interior",
    description: "Interior perspective showcasing the acoustic and visual considerations in performance space design. The careful balance of materials and geometry creates an optimal environment for both performers and audience.",
    width: 800,
    height: 650,
  },
  {
    id: "11",
    src: opera09,
    title: "MORETHANVIZ Opera Circulation",
    description: "Study of movement and circulation patterns within cultural buildings. The design facilitates natural flow while creating moments of pause and social interaction.",
    width: 700,
    height: 500,
  },
  {
    id: "12",
    src: opera13,
    title: "MORETHANVIZ Opera Facade",
    description: "External facade treatment that communicates the building's cultural significance to the urban context. The material choices and proportions create a dialogue between interior program and exterior expression.",
    width: 850,
    height: 600,
  },
  {
    id: "13",
    src: opera15,
    title: "MORETHANVIZ Opera Lobby",
    description: "Pre-performance gathering space designed to build anticipation and community. The architecture serves as a transitional realm between the everyday city and the transformative performance space.",
    width: 450,
    height: 500,
  },
  {
    id: "14",
    src: opera18,
    title: "MORETHANVIZ Opera Auditorium",
    description: "The heart of the performance venue where architecture and acoustics unite. Every surface and angle is carefully considered to enhance the relationship between performer and audience.",
    width: 900,
    height: 600,
  },
  {
    id: "15",
    src: opera21,
    title: "MORETHANVIZ Opera Night View",
    description: "Evening illumination strategy that transforms the building into a beacon for cultural activity. The lighting design extends the performance beyond the building's walls into the urban fabric.",
    width: 750,
    height: 600,
  },
  {
    id: "16",
    src: sherbourne,
    title: "MORETHANVIZ Sherbourne Project",
    description: "Urban residential development that prioritizes community building and environmental sustainability. The design creates private retreats within a connected neighborhood framework.",
    width: 600,
    height: 450,
  },
  {
    id: "17",
    src: treehouse,
    title: "MORETHANVIZ Treehouse",
    description: "Elevated living space that maintains intimate connection with the natural environment. The structure demonstrates how architecture can enhance rather than dominate its natural setting.",
    width: 650,
    height: 500,
  },
  {
    id: "18",
    src: ch3,
    title: "MORETHANVIZ CH3 Project",
    description: "Contemporary housing solution that balances individual privacy with community interaction. The design explores new models for urban living in dense environments.",
    width: 700,
    height: 550,
  },
  {
    id: "19",
    src: musicianHouse1,
    title: "MORETHANVIZ Musician House Interior",
    description: "Specialized residential design for creative professionals. The space integrates living and working areas while providing acoustic separation and inspiring environments for artistic practice.",
    width: 800,
    height: 600,
  },
  {
    id: "20",
    src: musicianHouse2,
    title: "MORETHANVIZ Musician House Exterior",
    description: "External expression of the creative life within. The building's form and materials reflect the rhythmic and harmonic principles that guide musical composition.",
    width: 750,
    height: 650,
  },
  {
    id: "21",
    src: cb2,
    title: "MORETHANVIZ CB2 Project",
    description: "Commercial building design that prioritizes human scale and environmental performance. The architecture creates a welcoming interface between private enterprise and public life.",
    width: 850,
    height: 600,
  },
  {
    id: "22",
    src: yaleBp,
    title: "MORETHANVIZ Yale BP 2023",
    description: "Academic building project exploring the future of educational environments. The design supports both traditional pedagogy and emerging collaborative learning methodologies.",
    width: 700,
    height: 500,
  },
  {
    id: "23",
    src: yaleDsr,
    title: "MORETHANVIZ Yale DSR",
    description: "Data science research facility that embodies the transparency and connectivity of contemporary academic research. The architecture facilitates interdisciplinary collaboration and knowledge sharing.",
    width: 650,
    height: 450,
  },
  {
    id: "24",
    src: studyAh,
    title: "MORETHANVIZ Study AH",
    description: "Residential study exploring the integration of living and learning spaces. The design creates environments that support both focused individual work and collaborative activities.",
    width: 800,
    height: 600,
  },
  {
    id: "25",
    src: gsdInt,
    title: "MORETHANVIZ GSD Interior",
    description: "Graduate School of Design interior that reflects the institution's commitment to design excellence. The space serves as both learning environment and showcase for architectural innovation.",
    width: 900,
    height: 650,
  },
];

interface PhotoGalleryProps {
  uploadedPhotos?: Photo[];
}

const PhotoGallery = ({ uploadedPhotos = [] }: PhotoGalleryProps) => {
  const [zoom, setZoom] = useState(1.8); // Start heavily zoomed in on sample 2
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [photos] = useState<Photo[]>([...initialPhotos, ...uploadedPhotos]);
  const [panOffset, setPanOffset] = useState({ x: -28.5, y: -30 }); // Center on sample 2 image. more negative x to left
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomSpeed = 0.1;
      const newZoom = Math.max(1.6, Math.min(1.8, zoom + (e.deltaY > 0 ? -zoomSpeed : zoomSpeed))); //zoom range
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
      setPanOffset(prev => {
        const newOffset = {
          x: Math.max(-80, Math.min(50, prev.x + deltaX)),
          y: Math.max(-120, Math.min(50, prev.y + deltaY)),
        };
        // Dispatch custom event for background parallax
        window.dispatchEvent(new CustomEvent('panUpdate', { detail: newOffset }));
        return newOffset;
      });
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
    const cols = 5; // Increased columns to accommodate more photos
    const rows = Math.ceil(photos.length / cols);

    return photos.map((photo, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      
      // Vary sizes to create visual interest
      const sizeMultipliers = [1, 0.8, 1.5, 1.0, 0.9, 0.9, 1.1, 0.7, 1.4, 0.95, 1.25, 0.85];
      const sizeMultiplier = sizeMultipliers[index % sizeMultipliers.length];
      const width = baseSize * sizeMultiplier * zoom;
      const height = (baseSize * sizeMultiplier * zoom * photo.height) / photo.width;
      
      // Base positions
      const baseX = col * (baseSize * 1.5 + padding) * zoom;
      const baseY = row * (baseSize * 1.2 + padding) * zoom;

      // Calculate distance from center for parallax effect
      const centerCol = (cols - 1) / 2;
      const centerRow = (rows - 1) / 2;
      const distanceFromCenterX = (col - centerCol) / centerCol;
      const distanceFromCenterY = (row - centerRow) / centerRow;

      // Parallax multipliers based on distance from center and image index
      const parallaxMultipliersX = [0.5, -0.3, 0.8, -0.6, 0.4, -0.7, 0.6, -0.4, 0.9, -0.5, 0.3, -0.8];
      const parallaxMultipliersY = [0.3, -0.5, 0.6, -0.4, 0.7, -0.2, 0.4, -0.6, 0.5, -0.3, 0.8, -0.7];
      const parallaxMultiplierX = parallaxMultipliersX[index % parallaxMultipliersX.length];
      const parallaxMultiplierY = parallaxMultipliersY[index % parallaxMultipliersY.length];

      // Apply parallax effect based on pan position
      const parallaxX = panOffset.x * parallaxMultiplierX * 0.5 * (1 + Math.abs(distanceFromCenterX) * 0.1);
      const parallaxY = panOffset.y * parallaxMultiplierY * 0.5 * (1 + Math.abs(distanceFromCenterY) * 0.1);

      const x = baseX + parallaxX - 0;
      const y = baseY + parallaxY + 0 - 0;

      return {
        ...photo,
        style: {
          position: "absolute" as const,
          left: x,
          top: y,
          width,
          height,
          transition: isDragging ? 'none' : 'left 0.3s ease-out, top 0.3s ease-out',
        },
      };
    });
  };

  const layoutPhotos = calculateLayout();
//line 378 adjust view port size
  return (
    <>
      <div
        ref={containerRef}
        className="photo-gallery w-full h-screen overflow-hidden relative"
        style={{ 
          cursor: isDragging ? "grabbing" : "default"
        }}
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