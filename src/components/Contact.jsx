import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16 text-white">
          Me <span className="text-primary-red">Contacter</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Informations de contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-primary-red text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base break-all">gabain.potelet-berry@protonmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-primary-red text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base">06 48 45 69 37</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fab fa-whatsapp text-primary-red text-lg sm:text-xl"></i>
                <a
                  href="https://wa.me/33648456937"
                  target="_blank"
                  className="text-sm sm:text-base hover:text-primary-red transition"
                >
                  WhatsApp: 06 48 45 69 37
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-primary-red text-lg sm:text-xl"></i>
                <span className="text-sm sm:text-base">France</span>
              </div>
            </div>
          </div>
          <form className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-3 sm:p-4 bg-card-bg border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none text-sm sm:text-base"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-3 sm:p-4 bg-card-bg border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none text-sm sm:text-base"
              />
            </div>
            <div>
              <textarea
                placeholder="Votre message"
                rows="5"
                className="w-full p-3 sm:p-4 bg-card-bg border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none resize-none text-sm sm:text-base"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-red py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition text-sm sm:text-base"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
