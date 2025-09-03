import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-primary-red/30 py-8 sm:py-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-red to-red-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-code text-white text-sm sm:text-lg"></i>
              </div>
              <span className="text-xl sm:text-2xl font-bold">SiteOnWeb</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
              Développeur web professionnel spécialisé dans les solutions modernes et performantes.
            </p>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Développement WordPress</li>
              <li>Applications React</li>
              <li>Backend Node.js</li>
              <li>Sites E-commerce</li>
            </ul>
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2 text-sm sm:text-base break-all">gabain.potelet-berry@protonmail.com</p>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">06 48 45 69 37</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/gabain-potelet-berry-162aa7257/"
                target="_blank"
                className="text-gray-400 hover:text-primary-red transition"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://github.com/Niabag"
                target="_blank"
                className="text-gray-400 hover:text-primary-red transition"
                title="GitHub"
              >
                <i className="fab fa-github text-lg sm:text-xl"></i>
              </a>
              <a
                href="https://wa.me/33648456937"
                target="_blank"
                className="text-gray-400 hover:text-primary-red transition"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp text-lg sm:text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} SiteOnWeb. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
