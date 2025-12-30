import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero_image.png';
import ctaBackground from '../assets/artictic_backgournd.jpg';
import icon1 from '../assets/b_1.png';
import icon2 from '../assets/b_2png.png';
import icon3 from '../assets/b_3.png';
import icon4 from '../assets/b_4.png';
import icon5 from '../assets/b_5.png';
import bottomImage from '../assets/bottom_image_.png';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="bg-white -mt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] sm:min-h-[700px] lg:h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="relative h-full flex items-start pt-24 sm:pt-28 lg:pt-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-light text-gray-900 mb-1">
                Of the university
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-light text-gray-900 mb-1">
                By the professors
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-light text-gray-900 mb-4 sm:mb-6">
                For the students
              </h1>
              <p className="text-sm sm:text-base text-gray/90 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                <strong className="text-gray-900">Wisdom supports educators in creating more engaging, effective, and enduring learning experiences.</strong> We enable educators to translate their teaching materials and expertise into an AI-supported learning environment that provides students with ongoing, individualized guidance grounded in the instructor's pedagogy and course content. This deepens engagement, strengthens understanding through practice and reflection, and supports learning that endures beyond the course.
              </p>
              <a href="https://appt.link/meet-with-limor-segev-xfVfgMMV/wisdom-meeting-k3JFfydR-hvWX0fuJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-lg">
                Book A Meeting
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content with Artistic Background */}
      <section className="relative">
        {/* Artistic Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        >
          <div className="absolute inset-0 bg-white/80" />
        </div>

        {/* Revolutionary Teaching Tool Section */}
        <div className="relative py-12 sm:py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-4 sm:mb-6">
              A Revolutionary Teaching Tool
            </h2>

            <p className="text-sm sm:text-base text-gray-700 mb-8 sm:mb-12 lg:mb-16 leading-relaxed max-w-3xl">
              Echo is an immersive AI companion built directly from your course materials and teaching approach. When you provide students with their personalized Echo, you enable:
            </p>

            {/* Top 3-column Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
              <div className="space-y-3">
                <div className="mb-4">
                  <img src={icon1} alt="Real-time mentorship" className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Real-time mentorship</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  that responds instantly to student questions using your materials and methodology
                </p>
              </div>

              <div className="space-y-3">
                <div className="mb-4">
                  <img src={icon2} alt="Guided practice" className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Guided practice</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  sessions designed to help students apply core course principles through interactive exercises
                </p>
              </div>

              <div className="space-y-3">
                <div className="mb-4">
                  <img src={icon3} alt="24/7 accessibility" className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">24/7 accessibility</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  that extends your teaching impact beyond scheduled class time
                </p>
              </div>
            </div>

            {/* Bottom 2-column Grid */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <div className="space-y-3">
                <div className="mb-4">
                  <img src={icon4} alt="From Instant Knowledge to Long-Lasting Wisdom" className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  From Instant Knowledge to Long-Lasting Wisdom
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Wisdom creates a long-lasting vault of all the learnings and insights for each student that they can come back to later. This enforces a long-lasting relationship with the institute, turning momentary education into lifelong wisdom.
                </p>
              </div>

              <div className="space-y-3">
                <div className="mb-4">
                  <img src={icon5} alt="Let Your Teaching Expertise Meet AI" className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Let Your Teaching Expertise Meet AI
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Echo amplifies your unique teaching voice and methodology, creating a scalable learning experience that maintains the personal touch students need for deeper understanding and lasting knowledge retention.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section with Background Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            {/* Background Image */}
            <img src={bottomImage} alt="Echo Platform" className="w-full h-full object-cover absolute inset-0" />

            {/* CTA Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-2">
                Amplify your teaching expertise with AI
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white">
                For deeper student learning
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
