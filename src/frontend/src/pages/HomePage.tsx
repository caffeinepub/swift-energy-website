import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Lightbulb, Heart, Target, Compass, Smile } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function HomePage() {
  const coreValues = [
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Using teamwork we are able to tackle any obstacles that we come across.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Our innovative minds have help us to solve many problems that exist in the real world.',
    },
    {
      icon: Heart,
      title: 'Inclusion',
      description: 'In our team everybody is included and is treated equally to form a healthy bond.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Our work has made many people discover and learn problems that we have in the real world.',
    },
    {
      icon: Compass,
      title: 'Discovery',
      description: 'We have discovered many ways to solve many problems.',
    },
    {
      icon: Smile,
      title: 'Fun',
      description: 'Our team thrives on fun, fun is what helps our team bond and interact with each other in many different ways.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative py-20 md:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary w-fit">
                <img src="/assets/swift logo.png" alt="Swift Energy" className="h-5 w-5 object-contain" />
                LEGO Robotics Competition Team
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Swift Energy
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Swift Energy is an Indonesian robotics team that is committed to continuing to excel and innovate through national and international competitions. Using skills and our teamwork Swift Energy aims to help the new generation through innovative innovations to solve modern problems with modern solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/innovations">
                    Our Innovations
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl" />
              <img
                src="/assets/swift banner.jpeg"
                alt="Swift Energy Robotics Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Core Values of the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These values guide everything we do, from designing robots to competing in tournaments and supporting our community.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => (
            <Card key={index} className="border-border/50 transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-3">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <value.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Nation Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-y border-border/40">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Our Nation
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <img
                  src="/assets/indonesia.png"
                  alt="Map of Indonesia"
                  className="w-full h-auto rounded-lg shadow-lg border border-border/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-b border-border/40">
        <div className="container py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Our Goals
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our goals is not just to win FLL but our goal is also to receive many experiences that we get from FLL, like the people that we meet, the challenges and obstacles, and times where we are down and times where we are high and succeeding. Our hopes is to win FLL and also give a great impact to the world with our innovation.
            </p>
            <Button asChild size="lg" className="gap-2">
              <a href="https://swiftenergyfeedbackform-zbj.caffeine.xyz/" target="_blank" rel="noopener noreferrer">
                Feedback Form
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
