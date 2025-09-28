import PageHeader from "@/components/PageHeader";

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
                    src="/src/assets/about.jpg"
                    alt="CEO"
                    className="w-40 h-40 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-medium">diddy – CEO</h3>
                  <p className="text-muted-foreground mt-2">
                    he leads the vision of our studio with a passion for storytelling through architecture. With over 15 years in design and photography, she ensures every project speaks volumes.
                  </p>
                </div>

                {/* CTO */}
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/src/assets/about.jpg"
                    alt="CTO"
                    className="w-40 h-40 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-medium">bob marley – CTO</h3>
                  <p className="text-muted-foreground mt-2">
                    he oversees the technical direction of our platform, blending creativity with engineering to make architectural content accessible, scalable, and innovative.
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