import { Shield, MessageSquare, BarChart3, Sparkles, BookOpen, Clock, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import bottomImage from '../assets/bottom_proffesors.png';
import heroImage from '../assets/professors_hero_image.png';
import benefitsBg from '../assets/benefits_bg copy.png';

export default function ProfessorsPage() {
  const features = [
    {
      icon: Shield,
      title: 'Complete Control',
      description: 'You maintain full authority over AI responses and learning pathways',
    },
    {
      icon: BarChart3,
      title: 'Student Insights',
      description: 'Detailed analytics reveal where students struggle so you can intervene effectively',
    },
    {
      icon: Clock,
      title: 'Zero Overhead',
      description: 'No technical setup required—focus on teaching, not troubleshooting',
    },
    {
      icon: MessageSquare,
      title: 'Your Voice, Amplified',
      description: 'Echo speaks with your pedagogical approach, ensuring students receive guidance that aligns with your teaching philosophy. Your expertise becomes available 24/7 without diluting your unique teaching voice.',
    },
    {
      icon: Sparkles,
      title: 'A Safe Space to Learn',
      description: 'Create a judgment-free environment where students can ask questions, explore ideas, and make mistakes without fear. Echo provides the psychological safety needed for deeper learning.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-26">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-4 sm:mb-6">
                For Professors
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-6 sm:mb-8 leading-tight">
                Transform<br />your teaching
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
                With 92% of students using AI, professors lose visibility into learning struggles. Echo restores that feedback loop by providing complete control over AI responses, detailed student analytics, and accountability tools—with zero technical overhead.
              </p>
              <a
                href="https://appt.link/meet-with-limor-segev-xfVfgMMV/wisdom-meeting-k3JFfydR-hvWX0fuJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
              >
                Create Your Echo
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="w-full h-auto overflow-hidden">
                <img
                  src={heroImage}
                  alt="Transform Your Teaching"
                  className="w-full h-auto scale-105 sm:scale-110 lg:scale-125 origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professors Love It Section */}
      <section
        className="py-20 sm:py-24"
        style={{
          backgroundImage: `url(${benefitsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Why Professors Love It?
          </h2>

          <p className="text-base text-gray-700 leading-relaxed mb-16 max-w-4xl">
            Echo offers scalable course enrichment that positions universities as future-forward while maintaining academic quality. Key benefits include differentiated learning experiences, enhanced pedagogy, comprehensive student analytics, and cross-platform accessibility—all with complete professor control over AI alignment.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300"
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

      {/* What is an Echo Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mb-6 sm:mb-8">
            What is an Echo?
          </h2>

          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl italic text-gray-700 leading-relaxed mb-4 sm:mb-6">
              "An ongoing, practical, personalized tutor that is grounded in the professor's knowledge."
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Echo is not a replacement for you. It's an extension of your teaching that scales your impact, deepens student understanding, and creates more meaningful learning experiences grounded in your unique expertise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section with Bottom Image */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            {/* Background Image */}
            <img src={bottomImage} alt="Ready to Transform Your Teaching" className="w-full h-full object-cover absolute inset-0" />

            {/* CTA Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-2">
                Ready to Transform
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900">
                Your Teaching?
              </h2>
              <a href="https://appt.link/meet-with-limor-segev-xfVfgMMV/wisdom-meeting-k3JFfydR-hvWX0fuJ" target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-8 inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-teal-600 text-white rounded-full text-sm sm:text-base font-medium hover:bg-teal-700 transition-colors shadow-lg">
                Create Your Echo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
