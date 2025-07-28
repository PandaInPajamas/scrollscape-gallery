import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const file = formData.get("photo") as File;

    if (!file || !title || !description) {
      toast({
        title: "Error",
        description: "Please fill in all fields and select a photo.",
        variant: "destructive",
      });
      setUploading(false);
      return;
    }

    // Simulate upload delay
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your photo has been uploaded and will be added to the gallery.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      setPreviewUrl(null);
      setUploading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Upload Photo</h1>
        
        <div className="max-w-2xl mx-auto">
          <Card>
          <CardHeader>
            <CardTitle>Share Your Architecture</CardTitle>
            <p className="text-muted-foreground">
              Upload your architectural photography to be featured in our gallery
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="photo">Photo</Label>
                <Input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                {previewUrl && (
                  <div className="mt-4">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter a descriptive title for your photo"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe the architecture, location, design features, and any interesting details..."
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload Photo"}
              </Button>
            </form>
          </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;