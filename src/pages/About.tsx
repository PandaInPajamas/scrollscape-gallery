const About = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        
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
        </div>
      </div>
    </div>
  );
};

export default About;