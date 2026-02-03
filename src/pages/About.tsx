import PageHeader from "@/components/PageHeader";
import chunkphoto from "@/assets/chunkywunky.jpg";
import melonphoto from "@/assets/alvinbgpp.jpg";


const About = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              We are passionate about architectural photography and design, dedicated to capturing 
              the essence of built environments that shape our world.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To showcase the beauty and innovation in contemporary architecture through 
                  stunning visual documentation. We believe that great architecture has the 
                  power to inspire and transform communities.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground">
                  To create a comprehensive archive of architectural excellence, making 
                  inspiring design accessible to architects, students, and design enthusiasts 
                  around the world.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Document exceptional architectural projects</li>
                <li>• Curate collections of innovative design solutions</li>
                <li>• Provide a platform for architectural discourse</li>
                <li>• Support emerging architects and photographers</li>
              </ul>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">The Team</h2>
              <div className="grid md:grid-cols-2 gap-12">
                {/* CEO */}
                <div className="flex flex-col items-center text-center">
                  <img
                    src={chunkphoto}
                    alt="Architect1"
                    className="w-40 h-40 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-medium">Byron Cai</h3>
                  <p className="text-muted-foreground mt-2">
                    Byron Cai is an architectural designer from Canada and currently based in USA. He has two years of professional experience working at internationally renowned architecture firms including OMA, Diller Scofidio + Renfro, 3XN, and KPMB. Byron holds a Bachelor of Architectural Studies from University of Waterloo [2022] and a Master of Architecture from Yale University [2025] where he was awarded the Gertraud A. Wood Fellowship. Byron is currently a designer at REX Architecture in New York City.
                  </p>
                </div>

                {/* CTO */}
                <div className="flex flex-col items-center text-center">
                  <img
                    src={melonphoto}
                    alt="Architect2"
                    className="w-40 h-40 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-medium">Alvin Huang</h3>
                  <p className="text-muted-foreground mt-2">
                    Alvin JY Huang is an architectural designer born in Toronto, Ontario, Canada and is recognized for his achievements in the academic realm and professional industry experience. With numerous awards/publications  recognizing his excellence in visualization and academics along with over three years of experience in both visualization studios and architectural design offices, he has developed a comprehensive understanding of the industry and craft of architecture. Holding a Bachelor of Architectural Science with Distinction from Toronto Metropolitan University and currently pursuing a Masters of Architecture at Harvard University (GSD), Alvin is poised to make significant contributions to the architectural realm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
