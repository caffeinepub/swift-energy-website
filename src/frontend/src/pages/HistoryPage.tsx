import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, TrendingUp, Award, Rocket } from 'lucide-react';
import ImageSlider from '@/components/ImageSlider';

export default function HistoryPage() {
  const sliderImages = [
    {
      src: '/assets/Screenshot_20260124_142815_Gallery-1.jpg',
      alt: 'Swift Energy History Banner',
    },
    {
      src: '/assets/IMG-20260124-WA0020.jpg',
      alt: 'Competition Scene',
    },
    {
      src: '/assets/IMG-20260120-WA0066.jpg',
      alt: 'Swift Energy Team Photo',
    },
  ];

  const milestones = [
    {
      date: 'September 2023',
      title: 'Swift Energy was founded.',
      description: 'This is a mark of our legendary journey.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      date: 'March 2024',
      title: "Swift Energy's first competition.",
      description: "In this time Swift Energy was able to achieve 1st core values award in Indonesia's FLL competition; a few weeks later Swift Energy achieved 1st core values award again in Singapore's overseas FLL competition.",
      icon: Award,
      color: 'from-green-500 to-emerald-500',
    },
    {
      date: 'October 2024',
      title: "Swift Energy's comeback.",
      description: 'After 7 months of rest, Swift Energy came back to attend the 2025 FLL competition, but with a twist – now with 5 members (Nobell and Nevan).',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
    },
    {
      date: 'March 2025',
      title: "Swift Energy's second FLL competition.",
      description: "Swift Energy, now with new members, achieved Top 10 in Robot Game and Top 10 in Core Values at Singapore's overseas FLL competition.",
      icon: Award,
      color: 'from-orange-500 to-red-500',
    },
    {
      date: 'September 2025',
      title: "Swift Energy's greatest reformation.",
      description: 'Swift Energy is back greater than ever. With its bountiful knowledge and the newest and youngest member, Keenan, we are better than ever.',
      icon: Rocket,
      color: 'from-teal-500 to-green-500',
    },
    {
      date: 'February 2026',
      title: "Swift Energy's first Thailand experience.",
      description: "Swift Energy will be attending its first ever competition in Thailand – let's see what will happen next.",
      icon: TrendingUp,
      color: 'from-indigo-500 to-blue-500',
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
                Journey
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground lg:text-xl px-4">
              From our first robot build to national competitions—discover the milestones that shaped 
              Swift Energy into the competitive LEGO robotics team we are today.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container py-16 md:py-20 lg:py-24 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 md:space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-6 top-20 h-full w-0.5 bg-gradient-to-b from-primary/50 to-transparent md:left-24" />
                )}

                <Card className="border-transparent bg-card/50 backdrop-blur-sm transition-all hover:shadow-lg hover:bg-card">
                  <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                      {/* Icon Badge */}
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${milestone.color} text-white shadow-lg`}>
                          <milestone.icon className="h-6 w-6" />
                        </div>
                        <div className="text-base md:text-lg font-bold px-3 md:px-4 py-1.5 md:hidden text-primary">
                          {milestone.date}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="text-base md:text-lg font-bold px-3 md:px-4 py-1.5 hidden md:inline-flex text-primary">
                            {milestone.date}
                          </div>
                          <CardTitle className="text-lg md:text-2xl">{milestone.title}</CardTitle>
                        </div>
                        <CardDescription className="text-sm md:text-base leading-relaxed">
                          {milestone.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-y border-border/40">
        <div className="container py-16 md:py-20 lg:py-24 px-4">
          <div className="mx-auto max-w-3xl text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-3 md:mb-4">
              By the Numbers
            </h2>
            <p className="text-base md:text-lg text-muted-foreground px-4">
              Our growth and achievements over the years
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '3+', label: 'Years Active', icon: Calendar },
              { value: '4', label: 'Team Members', icon: TrendingUp },
              { value: '4', label: 'Competitions', icon: Rocket },
              { value: '2', label: 'Awards Won', icon: Award },
            ].map((stat, index) => (
              <Card key={index} className="text-center border-transparent bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <stat.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="container py-16 md:py-20 lg:py-24 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl mb-4 md:mb-6">
            Looking Ahead
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-4">
            As we continue to grow and innovate, our commitment to excellence in LEGO robotics remains unwavering. 
            We're excited about the future and the opportunity to inspire more students to explore STEM through 
            competitive robotics. Join us on this journey as we build, compete, and make a lasting impact.
          </p>
        </div>
      </section>
    </div>
  );
}
