import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Droplet, Package } from 'lucide-react';
import ImageSlider from '@/components/ImageSlider';

export default function InnovationsPage() {
  const sliderImages = [
    {
      src: '/assets/Screenshot_20260124_142215_Instagram.jpg',
      alt: 'Swift Energy Innovations Banner',
    },
    {
      src: '/assets/Screenshot_20260124_142815_Gallery.jpg',
      alt: 'Innovation Showcase',
    },
  ];

  const innovations = [
    {
      icon: Lightbulb,
      title: 'Artifyer: The Canvas Experience',
      description: 'Artifyer: The Canvas Experience is a program created to help people who struggle with drawing or finding inspiration. Since everyone has different skill levels, this tool makes art more accessible by guiding users through simple choices. Users start by selecting a shape for their artwork, then choose a theme such as food, and the program generates visuals to inspire and support the creative process.',
      color: 'from-purple-500 to-pink-500',
      image: '/assets/Artifyer The Canvas Experience.png',
    },
    {
      icon: Droplet,
      title: 'Oil Spill Catcher (OSC)',
      description: 'The Oil Spill Catcher (OSC) is an innovation project designed to contain and reduce oil spills at sea by preventing oil from spreading into larger marine areas. It works by capturing and storing spilled oil in both small and large quantities, helping protect oceans, coral reefs, marine animals, and migration paths while reducing environmental and economic damage. OSC uses simple but effective methods such as booms to contain oil, skimmers to recover it, absorbent materials to soak it up, and dispersants to break it into smaller particles. The project was inspired by the serious global impact of oil spills on marine life and ecosystems, supported by research and expert discussions with professionals in oil transportation. Through testing, feedback, and continuous improvement, the team aims to create a cleaner ocean and a better future.',
      color: 'from-blue-500 to-cyan-500',
      image: '/assets/OSC.png',
    },
    {
      icon: Package,
      title: 'The GPR',
      description: 'The GPR is a simple device that allows a person to be able to scan artifacts even if they\'re underground. The GPR is very reliable — it has a small shape that allows it to be very flexible. This device has many parts that help it move and scan things in rapid succession. This device helps young archaeologists identify and search for artifacts, fossils, and rare metals easily and quickly.',
      color: 'from-green-500 to-emerald-500',
      image: '/assets/The GPR.jpg',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Image Slider */}
      <ImageSlider images={sliderImages} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background border-b border-border/40">
        <div className="container py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Innovations
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground lg:text-xl px-4">
              We made innovations to help the world and also help the younger generation understand different problems that people face with.
            </p>
          </div>
        </div>
      </section>

      {/* Innovations Section */}
      <section className="container py-16 md:py-20 lg:py-24 px-4">
        <div className="space-y-12 md:space-y-16">
          {innovations.map((innovation, index) => (
            <Card key={index} className="border-border/50 transition-all hover:shadow-lg hover:border-primary/50 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col">
                  <CardHeader>
                    <div className={`mb-4 inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-gradient-to-br ${innovation.color} text-white shadow-lg`}>
                      <innovation.icon className="h-7 w-7 md:h-8 md:w-8" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{innovation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm md:text-base leading-relaxed">
                      {innovation.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-y border-border/40">
        <div className="container py-16 md:py-20 lg:py-24 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-4 md:mb-6">
              Making a Difference
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-4">
              Each of our innovations represents our commitment to solving real-world problems through 
              creativity and technology. We believe that by addressing challenges faced by communities 
              and the environment, we can inspire the next generation to think critically and act 
              responsibly. Our projects demonstrate that young minds can make meaningful contributions 
              to society while learning valuable skills in STEM fields.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
