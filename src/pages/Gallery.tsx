import { useState } from "react";
import ImageModal, { Photo } from "@/components/ImageModal";
import PageHeader from "@/components/PageHeader";

// Import sample images
import sample1 from "@/assets/sample1.jpg";
import sample2 from "@/assets/sample2.jpg";
import sample3 from "@/assets/sample3.jpg";
import sample4 from "@/assets/sample4.jpg";
import sample5 from "@/assets/sample5.jpg";
import sample6 from "@/assets/sample6.jpg";

// Import MORETHANVIZ project images
import bench1 from "@/assets/2020_MORETHANVIZ_BENCH_1_HQ.jpg";
import bench3 from "@/assets/2020_MORETHANVIZ_BENCH_3_HQ.jpg";
import opera1 from "@/assets/2020_MORETHANVIZ_OPERA_01_HQ.jpg";
import opera7 from "@/assets/2020_MORETHANVIZ_OPERA_07_HQ.jpg";
import opera9 from "@/assets/2020_MORETHANVIZ_OPERA_09_LQ.jpg";
import opera13 from "@/assets/2020_MORETHANVIZ_OPERA_13_HQ.jpg";
import opera15 from "@/assets/2020_MORETHANVIZ_OPERA_15_HQ.jpg";
import opera18 from "@/assets/2020_MORETHANVIZ_OPERA_18_HQ.jpg";
import opera21 from "@/assets/2020_MORETHANVIZ_OPERA_21_HQ.jpg";
import sherbourne from "@/assets/2020_MORETHANVIZ_SHERBOURNE_2_LQ.jpg";
import treehouse from "@/assets/2020_MORETHANVIZ_TREEHOUSE_1_LQ.jpg";
import ch3 from "@/assets/2021_MORETHANVIZ_CH_3_LQ.jpg";
import musician1 from "@/assets/2021_MORETHANVIZ_MUSICIANHOUSE_HQ_1.jpg";
import musician2 from "@/assets/2021_MORETHANVIZ_MUSICIANHOUSE_HQ_2.jpg";
import cb2 from "@/assets/2022_MORETHANVIZ_CB_2_HQ.jpg";
import yale2023 from "@/assets/2023_MORETHANVIZ_YALEBP2023_1_LQ.jpg";
import yaleDsr from "@/assets/2023_MORETHANVIZ_YALE_DSR_13_LQ.jpg";
import study from "@/assets/2024_MORETHANVIZ_STUDY_AH_01_HQ.png";
import gsdInt from "@/assets/2025_MORETHANVIZ_GSD INT1.jpg";
import icelandCoffee from "@/assets/2025_MORETHANVIZ_ICELAND COFFEE HOUSE_3.jpg";


const photos: Photo[] = [
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
    description: "A stunning transformation of industrial space into modern living. This project showcases how adaptive reuse can breathe new life into existing structures while preserving their industrial heritage and character.",
    width: 800,
    height: 600,
  },
  {
    id: "5",
    src: sample5,
    title: "Sustainable Office Complex",
    description: "An innovative approach to workplace design that prioritizes sustainability and employee wellbeing. The building features green terraces, natural ventilation systems, and energy-efficient technologies.",
    width: 600,
    height: 800,
  },
  {
    id: "6",
    src: sample6,
    title: "Cultural Center",
    description: "A public space designed to bring communities together through thoughtful architecture. The flowing forms and open spaces create an inviting environment for cultural events and social interaction.",
    width: 800,
    height: 600,
  },
  {
    id: "7",
    src: bench1,
    title: "Modern Bench Design",
    description: "A sleek architectural bench that demonstrates the beauty of functional design. The clean lines and material choice create a sophisticated seating solution that complements urban environments.",
    width: 800,
    height: 600,
  },
  {
    id: "8",
    src: bench3,
    title: "Sculptural Seating",
    description: "An innovative approach to public furniture that blurs the line between sculpture and functionality. This bench showcases how architectural elements can serve both practical and aesthetic purposes.",
    width: 800,
    height: 600,
  },
  {
    id: "9",
    src: opera1,
    title: "Opera House Interior",
    description: "The grand interior of a contemporary opera house featuring dramatic ceiling design and sophisticated lighting. The architecture creates an immersive cultural experience through thoughtful spatial design.",
    width: 800,
    height: 600,
  },
  {
    id: "10",
    src: opera7,
    title: "Opera House Corridor",
    description: "A striking corridor design that guides visitors through the cultural space. The interplay of light and shadow creates a sense of anticipation and reverence for the performing arts.",
    width: 800,
    height: 600,
  },
  {
    id: "11",
    src: opera9,
    title: "Opera House Facade",
    description: "The exterior design of a modern opera house that reflects the cultural significance of the institution. The architectural language speaks to both tradition and innovation in performing arts.",
    width: 800,
    height: 600,
  },
  {
    id: "12",
    src: opera13,
    title: "Cultural Venue Detail",
    description: "Detailed architectural elements that showcase the craftsmanship and attention to detail in cultural building design. Every component contributes to the overall aesthetic and functional experience.",
    width: 800,
    height: 600,
  },
  {
    id: "13",
    src: opera15,
    title: "Performance Space",
    description: "A modern performance venue designed to optimize acoustics and visual experience. The architecture supports the art while creating an memorable environment for audiences and performers alike.",
    width: 800,
    height: 600,
  },
  {
    id: "14",
    src: opera18,
    title: "Architectural Lighting",
    description: "Strategic lighting design that transforms architectural spaces during evening hours. The interplay between natural and artificial light creates dynamic visual experiences throughout the day.",
    width: 800,
    height: 600,
  },
  {
    id: "15",
    src: opera21,
    title: "Cultural Complex",
    description: "A comprehensive cultural facility that brings together multiple artistic disciplines under one architectural vision. The design facilitates both individual and community cultural experiences.",
    width: 800,
    height: 600,
  },
  {
    id: "16",
    src: sherbourne,
    title: "Sherbourne Residence",
    description: "A residential project that demonstrates how modern architecture can create intimate living spaces while maintaining connection to the surrounding environment. Privacy and openness are carefully balanced.",
    width: 800,
    height: 600,
  },
  {
    id: "17",
    src: treehouse,
    title: "Elevated Living",
    description: "An innovative treehouse design that elevates residential architecture both literally and figuratively. The structure demonstrates how buildings can coexist harmoniously with natural environments.",
    width: 800,
    height: 600,
  },
  {
    id: "18",
    src: ch3,
    title: "Contemporary House",
    description: "A modern residential design that prioritizes clean lines and functional beauty. The architecture creates comfortable living spaces while making a distinctive aesthetic statement.",
    width: 800,
    height: 600,
  },
  {
    id: "19",
    src: musician1,
    title: "Musician's House - Exterior",
    description: "A residence designed specifically for a musician, featuring acoustically optimized spaces and inspiring environments for creative work. The architecture supports both living and artistic pursuits.",
    width: 800,
    height: 600,
  },
  {
    id: "20",
    src: musician2,
    title: "Musician's House - Interior",
    description: "The interior spaces of the musician's residence showcase how architecture can enhance creativity. Natural light and carefully designed acoustics create the perfect environment for musical practice and composition.",
    width: 800,
    height: 600,
  },
  {
    id: "21",
    src: cb2,
    title: "CB Residence",
    description: "A contemporary residential project that demonstrates sophisticated material use and spatial organization. The design creates a refined living environment that responds to both site conditions and client needs.",
    width: 800,
    height: 600,
  },
  {
    id: "22",
    src: yale2023,
    title: "Yale Building Project",
    description: "An institutional building at Yale University that contributes to the campus's architectural legacy. The design respects historical context while providing modern functionality for academic programs.",
    width: 800,
    height: 600,
  },
  {
    id: "23",
    src: yaleDsr,
    title: "Yale DSR Building",
    description: "A specialized research facility at Yale designed to support cutting-edge academic work. The architecture creates flexible spaces that can adapt to evolving research needs and methodologies.",
    width: 800,
    height: 600,
  },
  {
    id: "24",
    src: study,
    title: "Study Space Design",
    description: "A thoughtfully designed study environment that promotes focus and learning. The architectural elements work together to create an atmosphere conducive to academic work and intellectual exploration.",
    width: 800,
    height: 600,
  },
  {
    id: "25",
    src: gsdInt,
    title: "GSD Interior",
    description: "An interior space at the Graduate School of Design featuring flexible learning environments. The design supports collaborative work while providing spaces for individual reflection and study.",
    width: 800,
    height: 600,
  },
  {
    id: "26",
    src: icelandCoffee,
    title: "Iceland Coffee House",
    description: "A coffee house in Iceland that creates a warm gathering space in a dramatic natural setting. The architecture provides shelter and comfort while celebrating the unique landscape and culture of Iceland.",
    width: 800,
    height: 600,
  },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <PageHeader title="Gallery" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {photo.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />
    </>
  );
};

export default Gallery;