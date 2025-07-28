import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Import sample images
import sample1 from "@/assets/sample1.jpg";
import sample2 from "@/assets/sample2.jpg";
import sample3 from "@/assets/sample3.jpg";
import sample4 from "@/assets/sample4.jpg";
import sample5 from "@/assets/sample5.jpg";
import sample6 from "@/assets/sample6.jpg";

interface Photo {
  id: string;
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

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
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>
        
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

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedPhoto && (
            <ScrollArea className="max-h-[90vh]">
              <div className="p-6">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="w-full h-auto rounded-lg mb-6"
                />
                <h2 className="text-2xl font-bold mb-4">{selectedPhoto.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;