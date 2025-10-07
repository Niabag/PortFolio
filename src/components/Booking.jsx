import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../LanguageContext.jsx';

export default function Booking({ onClose }) {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Créneaux horaires disponibles
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const emailData = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_KEY',
      subject: `Nouvelle demande de rendez-vous - ${formData.name}`,
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      message: formData.message,
      to_email: 'contact@siteonweb.fr'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Date minimum (aujourd'hui)
  const today = new Date().toISOString().split('T')[0];

  // Bloquer le scroll quand le modal est ouvert
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const modalContent = (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1200] flex items-center justify-center p-4">
      <div className="bg-card-bg rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-primary-red/30" style={{ padding: '100px' }}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-primary-red text-2xl"
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {lang === 'fr' ? '📅 Réserver un rendez-vous' : '📅 Book an Appointment'}
          </h2>
          <p className="text-gray-400">
            {lang === 'fr' 
              ? 'Choisissez une date et un créneau horaire pour échanger avec nous'
              : 'Choose a date and time slot to meet with us'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2 text-sm">
                {lang === 'fr' ? 'Nom complet *' : 'Full name *'}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-2 text-sm">
                {lang === 'fr' ? 'Email *' : 'Email *'}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none"
              />
            </div>
          </div>

          <div style={{ marginTop: '50px', marginBottom: '50px' }}>
            <label className="block text-white mb-2 text-sm">
              {lang === 'fr' ? 'Téléphone' : 'Phone'}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2 text-sm">
                {lang === 'fr' ? 'Date souhaitée *' : 'Desired date *'}
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                required
                className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-2 text-sm">
                {lang === 'fr' ? 'Horaire *' : 'Time *'}
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none"
              >
                <option value="">{lang === 'fr' ? 'Choisir un créneau' : 'Select a time'}</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white mb-2 text-sm">
              {lang === 'fr' ? 'Message (optionnel)' : 'Message (optional)'}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-primary-red focus:outline-none resize-none"
              placeholder={lang === 'fr' ? 'Décrivez brièvement votre projet ou vos besoins...' : 'Briefly describe your project or needs...'}
            ></textarea>
          </div>

          {status === 'success' && (
            <div className="bg-green-900/30 border border-green-600 rounded-lg p-4 text-green-400">
              {lang === 'fr' 
                ? '✅ Votre demande de rendez-vous a été envoyée ! Nous vous contacterons rapidement.'
                : '✅ Your appointment request has been sent! We will contact you soon.'}
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-900/30 border border-red-600 rounded-lg p-4 text-red-400">
              {lang === 'fr' 
                ? '❌ Erreur lors de l\'envoi. Veuillez réessayer.'
                : '❌ Error sending. Please try again.'}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' 
              ? (lang === 'fr' ? 'Envoi en cours...' : 'Sending...')
              : (lang === 'fr' ? 'Confirmer le rendez-vous' : 'Confirm Appointment')}
          </button>
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
