import { useState } from "react";

interface UploadedImage {
  id: string;
  src: string;
  title: string;
  description: string;
}

const UploadedGallery = () => {
  // For now, using sample uploaded images. In a real app, this would come from a database
  const [uploadedImages] = useState<UploadedImage[]>([
    {
      id: "1",
      src: "/src/assets/sample1.jpg",
      title: "Modern Architecture Study",
      description: "Contemporary building design with clean lines"
    },
    {
      id: "2", 
      src: "/src/assets/sample2.jpg",
      title: "Urban Photography",
      description: "Street photography capturing city life"
    },
    {
      id: "3",
      src: "/src/assets/sample3.jpg", 
      title: "Interior Design",
      description: "Minimalist interior space design"
    },
    {
      id: "4",
      src: "/src/assets/sample4.jpg",
      title: "Landscape Architecture", 
      description: "Outdoor space and garden design"
    },
    {
      id: "5",
      src: "/src/assets/sample5.jpg",
      title: "Industrial Design",
      description: "Modern industrial building exterior"
    },
    {
      id: "6",
      src: "/src/assets/sample6.jpg",
      title: "Residential Project",
      description: "Contemporary home design"
    }
  ]);

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Uploaded Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through all uploaded architectural and design images, organized in a clean grid layout.
          </p>
        </div>

        {uploadedImages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No images uploaded yet.</p>
            <p className="text-muted-foreground">Start by uploading your first image!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {uploadedImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-1 line-clamp-1">{image.title}</h3>
                  <p className="text-muted-foreground text-xs line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadedGallery;