import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Award, MapPin } from 'lucide-react';
import ImageSlider from '@/components/ImageSlider';

export default function AboutPage() {
  const sliderImages = [
    {
      src: '/assets/IMG-20251122-WA0048.jpg',
      alt: 'Swift Energy Team About Banner',
    },
    {
      src: '/assets/IMG-20251122-WA0048-1.jpg',
      alt: 'Team Collaboration',
    },
    {
      src: '/assets/IMG-20260120-WA0066.jpg',
      alt: 'Swift Energy Team Photo',
    },
    {
      src: '/assets/WhatsApp Image 2026-01-31 at 4.14.56 PM.jpeg',
      alt: 'Swift Energy Team Celebrating at Competition',
    },
  ];

  const sections = [
    {
      icon: Target,
      title: 'Our Goals',
      description: 'Our goals is not just to win FLL but our goal is also to receive many experiences that we get from FLL, like the people that we meet, the challenges and obstacles, and times where we are down and times where we are high and succeeding.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Our vision is to make a future where young talented creative minds can join Swift Energy and compete in international Lego robotic competitions to show their talents to the world.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Our team derives from basic values that we must follow and cherish which is teamwork, innovation, inclusion, impact, discovery, and fun which helps us understand and communicate with each other in harmony and form a solid bond which each member.',
    },
  ];

  const teamMembers = [
    {
      name: 'Keagan',
      role: 'Team Leader',
      bio: 'Team Leader of Swift Energy and is responsible for robot design and robot attachment development.',
    },
    {
      name: 'Damian',
      role: 'Team Builder and Deputy Team Leader',
      bio: 'Serves as the Deputy Team Leader and plays a role in robot design and development of team robot attachments.',
    },
    {
      name: 'Kevin',
      role: 'Team Coder and Innovation Handler',
      bio: 'Responsible for programming the robot so that it can work and run according to the team strategy and also manages the team\'s innovation project.',
    },
    {
      name: 'Keenan',
      role: 'Coordinator',
      bio: 'Serves as a coordinator that is able to do most roles on the team and is able to coordinate placements, attachment and etc.',
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
              About{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Swift Energy
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground lg:text-xl px-4">
              We're more than just a robotics team. We are a group of talented and brilliant people that are united with creativity to find solutions to problems and innovate creative innovations to help the world.
            </p>
          </div>
        </div>
      </section>

      {/* Goals, Vision & Values Section */}
      <section className="container py-16 md:py-20 lg:py-24 px-4">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          {sections.map((section, index) => (
            <Card key={index} className="border-border/50 transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <section.icon className="h-6 w-6 md:h-7 md:w-7" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  {section.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-y border-border/40">
        <div className="container py-16 md:py-20 lg:py-24 px-4">
          <div className="mb-10 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-3 md:mb-4">
              Meet Our Team
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              The dedicated builders, programmers, and innovators behind Swift Energy's success.
            </p>
          </div>

          {/* Team Photo */}
          <div className="mb-10 md:mb-12 flex justify-center">
            <div className="w-full max-w-4xl">
              <img
                src="/assets/WhatsApp Image 2026-01-24 at 6.24.53 PM.jpeg"
                alt="Swift Energy Team Photo"
                className="w-full h-auto rounded-lg shadow-lg border border-border/50"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border/50 transition-all hover:shadow-lg hover:border-primary/50 h-full">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl mb-1">{member.name}</CardTitle>
                  <CardDescription className="text-xs md:text-sm font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Story Section */}
      <section className="bg-muted/30 border-y border-border/40">
        <div className="container py-16 md:py-20 lg:py-24 px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-4 md:mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-sm md:text-base leading-relaxed">
                Swift Energy was founded by a group of students who shared a passion for building and creating robots. It was started by a group of 3 students who are Damian, Keagan and Kevin from CK Education, they were assigned for a task to compete in a competition called First Lego League or in short FLL. FLL is widely known as a competition where it guides youth through STEM learning and exploration at an early age. From Discover, to Explore and then to Challenge, students will understand the basics of STEM and apply their skills in an exciting competition while gaining productive learning habits, confidence, and teamwork skills along the way.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                In the beginning the team was struggling and needed help from many more experienced people. In these times our team was finding ways to complete missions and solve them in a rapid succession, but with the help of the coach we were able to improve and understand many things we wouldn't have thought to be possible. Even though our first year was hard and tough, we managed to pull it through and overcome a variety of obstacles and in thus winning our first ever FLL championship.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                After time to time our team improved using our experience we were able to evolve and become a better version then our previous. From the next to next we manage to meet many people from our home country and also from many other countries. Over the years, many people have known swift energy and many people have joined our team. With the help of our founders and new innovative members it is bound that succession is coming our way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-16 md:py-20 lg:py-24 px-4">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { value: '4', label: 'Team Members' },
            { value: '4', label: 'Competitions Entered' },
            { value: '3+', label: 'Years Active' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-t border-border/40">
        <div className="container py-16 md:py-20 lg:py-24 px-4">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-xl bg-primary/10 text-primary mb-4">
                <MapPin className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-3">
                Our Location
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Swift Energy is based in Banten, Java, Indonesia
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <img
                  src="/assets/generated/indonesia-banten-map.dim_600x400.png"
                  alt="Map of Indonesia showing Banten province in Java"
                  className="w-full h-auto rounded-lg shadow-lg border border-border/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
