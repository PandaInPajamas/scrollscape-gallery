import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Photo {
  id: string;
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

interface ImageModalProps {
  photo: Photo | null;
  onClose: () => void;
}

const ImageModal = ({ photo, onClose }: ImageModalProps) => {
  return (
    <Dialog open={!!photo} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        {photo && (
          <ScrollArea className="max-h-[90vh]">
            <div className="p-6">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-auto rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold mb-4">{photo.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {photo.description}
              </p>
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;