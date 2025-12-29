import wisdomLogo from '../assets/wisdom_logo_with_copy_horizontal.png';

export default function Footer() {
  return (
    <footer className="transition-opacity duration-300">
      <div className="max-w-7xl mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={wisdomLogo} alt="Wisdom" className="h-8" />
          </div>
          <div className="flex items-center gap-8">
            <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
              Contact Us
            </a>
            <span className="text-sm text-gray-600">
              Made with love
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
