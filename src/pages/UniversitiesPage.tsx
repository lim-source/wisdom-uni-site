import { Brain, BookOpen, Edit3, TrendingUp, Layers, Users2, Sparkles, GraduationCap, BarChart3, Target, FileText, Heart, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import dashboardMockup from '../assets/dashboard copy.jpg';
import ctaBackground from '../assets/artictic_backgournd.jpg';
import bottomImage from '../assets/bottom_image_ copy.png';
import benefitsBg from '../assets/benefits_bg copy.png';

export default function UniversitiesPage() {
  const features = [
    {
      icon: Brain,
      title: 'Effective & Controlled AI Implementation',
      description: 'Deploy AI tools across your institution with complete oversight and control. Ensure academic integrity while empowering students with cutting edge learning technology.',
    },
    {
      icon: BarChart3,
      title: 'Deep Student Engagement Analytics',
      description: 'Gain unprecedented visibility into how students interact with course material, where they spend time, and how engaged they truly are with the learning process.',
    },
    {
      icon: Target,
      title: 'Identify Struggles & Comprehension Gaps',
      description: 'Understand exactly what students struggle with and what they fully grasp. Use these insights to provide targeted support and improve learning outcomes.',
    },
    {
      icon: GraduationCap,
      title: 'Understand Aspirations & Intent',
      description: 'Get insight into student career aspirations, and learning motivations. Align your programs and support services with what students truly need.',
    },
    {
      icon: FileText,
      title: 'Identify Course Gaps & Flaws',
      description: 'Discover weaknesses in course design and content through real student interaction data. Continuously improve curriculum quality and relevance.',
    },
    {
      icon: Heart,
      title: 'Build Lasting Relationships',
      description: 'Create a permanent vault of learnings and insights for each student. This ongoing connection strengthens alumni relationships and institutional loyalty long after graduation.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 xl:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-4 sm:mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                For Universities
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-gray-900 mb-6 leading-tight">
                Transform
                <Sparkles className="inline-block relative -top-1 sm:-top-2 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ml-1 text-gray-700" />
                <br />
                Your Institution
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Wisdom provides universities with a comprehensive platform to implement AI responsibly while gaining unprecedented insights into student learning and engagement.
              </p>
              <a
                href="https://appt.link/meet-with-limor-segev-xfVfgMMV/wisdom-meeting-k3JFfydR-hvWX0fuJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
              >
                Schedule a Meeting
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative lg:-mr-24 xl:-mr-48">
                <img
                  src={dashboardMockup}
                  alt="Wisdom Dashboard"
                  className="w-full h-auto rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Universities Choose Wisdom Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 xl:py-24"
        style={{
          backgroundImage: `url(${benefitsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-gray-900 mb-10 sm:mb-12 lg:mb-16">
            Why Universities Choose Wisdom
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
       className="bg-gradient-to-br from-teal-50/55 to-cyan-50/60 rounded-2xl p-8 border border-teal-100/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                  <feature.icon className="w-6 h-6 text-teal-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Bottom Image */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            {/* Background Image */}
            <img src={bottomImage} alt="Transform Your Institution" className="w-full h-full object-cover absolute inset-0" />

            {/* CTA Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">
                Ready to Transform
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white">
                Your Institution?
              </h2>
              <a href="https://appt.link/meet-with-limor-segev-xfVfgMMV/wisdom-meeting-k3JFfydR-hvWX0fuJ" target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-8 inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-900 text-white rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors shadow-lg">
                Schedule a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
