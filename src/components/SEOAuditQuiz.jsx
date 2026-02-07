import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const SEOAuditQuiz = ({ onClose }) => {
  const { lang } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const translations = {
    fr: {
      title: '🔍 Audit SEO Gratuit',
      subtitle: 'Évaluez le référencement de votre site en 2 minutes',
      question: 'Question',
      of: 'sur',
      yes: 'Oui',
      no: 'Non',
      notSure: 'Je ne sais pas',
      next: 'Suivant',
      previous: 'Précédent',
      finish: 'Voir mes résultats',

      // Questions
      questions: [
        {
          question: 'Votre site est-il en HTTPS ?',
          description: 'Le protocole HTTPS sécurise les données et améliore le SEO'
        },
        {
          question: 'Avez-vous un sitemap.xml ?',
          description: 'Le sitemap aide Google à indexer toutes vos pages'
        },
        {
          question: 'Votre site se charge en moins de 3 secondes ?',
          description: 'La vitesse de chargement est un facteur SEO majeur'
        },
        {
          question: 'Votre site est-il mobile-friendly ?',
          description: 'Plus de 60% du trafic web vient du mobile'
        },
        {
          question: 'Vos balises meta (titre, description) sont-elles optimisées ?',
          description: 'Les balises meta influencent le taux de clic dans Google'
        },
        {
          question: 'Vos images ont-elles des balises alt et sont-elles compressées ?',
          description: 'Les images optimisées améliorent vitesse et accessibilité'
        },
        {
          question: 'Votre contenu est-il unique et de qualité ?',
          description: 'Le contenu dupliqué ou pauvre pénalise votre SEO'
        },
        {
          question: 'Avez-vous des backlinks de qualité ?',
          description: 'Les liens entrants renforcent votre autorité de domaine'
        },
        {
          question: 'Avez-vous configuré Google Business Profile ?',
          description: 'Essentiel pour le référencement local'
        },
        {
          question: 'Google Analytics et Search Console sont-ils installés ?',
          description: 'Indispensables pour mesurer vos performances'
        }
      ],

      // Results
      results_title: '📊 Votre Score SEO',
      results_score: 'Score',
      results_level_critical: '🔴 SEO Critique',
      results_level_medium: '🟡 SEO Moyen',
      results_level_good: '🟢 SEO Excellent',
      results_analysis: 'Analyse détaillée',

      analysis_critical: 'Votre site nécessite une optimisation SEO urgente. Plusieurs éléments essentiels sont manquants, ce qui limite fortement votre visibilité sur Google.',
      analysis_medium: 'Votre site a de bonnes bases SEO, mais plusieurs améliorations sont nécessaires pour maximiser votre visibilité et votre trafic organique.',
      analysis_good: 'Excellent travail ! Votre site respecte les meilleures pratiques SEO. Continuez à produire du contenu de qualité et à obtenir des backlinks.',

      recommendations_title: 'Recommandations prioritaires',
      email_title: 'Recevez votre rapport détaillé',
      email_subtitle: 'Nous vous enverrons un audit complet avec un plan d\'action personnalisé',
      emailPlaceholder: 'votre@email.com',
      submit: 'Recevoir mon audit gratuit',
      successTitle: '✅ Audit téléchargé !',
      successTitleNoPdf: '⚠️ Demande envoyée',
      successMessage: 'Votre rapport d\'audit SEO a été téléchargé. Nous vous contacterons sous 24h avec des recommandations personnalisées.',
      successMessageNoPdf: 'Votre demande a été envoyée. Nous vous enverrons votre rapport d\'audit par email sous 24h.',
      close: 'Fermer'
    },
    en: {
      title: '🔍 Free SEO Audit',
      subtitle: 'Evaluate your website SEO in 2 minutes',
      question: 'Question',
      of: 'of',
      yes: 'Yes',
      no: 'No',
      notSure: 'Not sure',
      next: 'Next',
      previous: 'Previous',
      finish: 'View Results',

      // Questions
      questions: [
        {
          question: 'Is your site HTTPS secured?',
          description: 'HTTPS protocol secures data and improves SEO'
        },
        {
          question: 'Do you have a sitemap.xml?',
          description: 'Sitemap helps Google index all your pages'
        },
        {
          question: 'Does your site load in less than 3 seconds?',
          description: 'Loading speed is a major SEO factor'
        },
        {
          question: 'Is your site mobile-friendly?',
          description: 'Over 60% of web traffic comes from mobile'
        },
        {
          question: 'Are your meta tags (title, description) optimized?',
          description: 'Meta tags influence click-through rate in Google'
        },
        {
          question: 'Do your images have alt tags and are they compressed?',
          description: 'Optimized images improve speed and accessibility'
        },
        {
          question: 'Is your content unique and high quality?',
          description: 'Duplicate or poor content penalizes your SEO'
        },
        {
          question: 'Do you have quality backlinks?',
          description: 'Inbound links strengthen your domain authority'
        },
        {
          question: 'Have you set up Google Business Profile?',
          description: 'Essential for local SEO'
        },
        {
          question: 'Are Google Analytics and Search Console installed?',
          description: 'Essential to measure your performance'
        }
      ],

      // Results
      results_title: '📊 Your SEO Score',
      results_score: 'Score',
      results_level_critical: '🔴 Critical SEO',
      results_level_medium: '🟡 Average SEO',
      results_level_good: '🟢 Excellent SEO',
      results_analysis: 'Detailed Analysis',

      analysis_critical: 'Your site needs urgent SEO optimization. Several essential elements are missing, severely limiting your visibility on Google.',
      analysis_medium: 'Your site has good SEO foundations, but several improvements are needed to maximize your visibility and organic traffic.',
      analysis_good: 'Excellent work! Your site follows SEO best practices. Keep producing quality content and acquiring backlinks.',

      recommendations_title: 'Priority Recommendations',
      email_title: 'Get Your Detailed Report',
      email_subtitle: 'We will send you a complete audit with a personalized action plan',
      emailPlaceholder: 'your@email.com',
      submit: 'Get My Free Audit',
      successTitle: '✅ Audit Downloaded!',
      successTitleNoPdf: '⚠️ Request Sent',
      successMessage: 'Your SEO audit report has been downloaded. We will contact you within 24h with personalized recommendations.',
      successMessageNoPdf: 'Your request has been sent. We will send your audit report by email within 24h.',
      close: 'Close'
    }
  };

  const t = translations[lang];
  const questions = t.questions;

  const calculateScore = () => {
    const yesCount = Object.values(answers).filter(a => a === 'yes').length;
    return (yesCount / questions.length) * 100;
  };

  const getScoreLevel = (score) => {
    if (score <= 40) return 'critical';
    if (score <= 70) return 'medium';
    return 'good';
  };

  const getRecommendations = () => {
    const recs = [];
    questions.forEach((q, index) => {
      if (answers[index] !== 'yes') {
        recs.push({
          question: q.question,
          description: q.description
        });
      }
    });
    return recs.slice(0, 5); // Top 5 priorités
  };

  const handleAnswer = (answer) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    console.log('🎬 Début handleSubmit');

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(lang === 'fr' ? 'Email invalide' : 'Invalid email');
      return;
    }

    console.log('✅ Email valide:', email);

    const score = calculateScore();
    console.log('📊 Score calculé:', score);

    const level = getScoreLevel(score);
    console.log('📈 Level:', level);

    const recommendations = getRecommendations();
    console.log('💡 Recommandations:', recommendations.length);

    // ========================================
    // 1️⃣ GÉNÉRER LE PDF ET LE TÉLÉCHARGER
    // ========================================
    console.log('🔄 Début génération du PDF Audit SEO...');
    console.log('📦 jsPDF disponible?', typeof jsPDF !== 'undefined');
    console.log('📦 autoTable disponible?', typeof autoTable !== 'undefined');

    try {
      console.log('🏗️ Création instance jsPDF...');
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      console.log('✅ jsPDF initialisé, dimensions:', pageWidth, 'x', pageHeight);

      // Charger le logo
      let logoData = null;
      try {
        const logoResponse = await fetch('/logo.png');
        if (logoResponse.ok) {
          const logoBlob = await logoResponse.blob();
          logoData = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(logoBlob);
          });
          console.log('✅ Logo chargé');
        }
      } catch (error) {
        console.warn('⚠️ Logo non chargé, continue sans logo:', error);
      }

      // Bannière noire en haut
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, pageWidth, 40, 'F');

      // Logo image + texte
      if (logoData) {
        doc.addImage(logoData, 'PNG', 15, 10, 20, 20);
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('SiteOnWeb', 40, 18);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Création de sites web professionnels', 40, 26);
      } else {
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('SiteOnWeb', 15, 18);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Création de sites web professionnels', 15, 26);
      }

      // Coordonnées en blanc (coin droit)
      doc.setFontSize(9);
      doc.text('contact@siteonweb.fr', pageWidth - 15, 18, { align: 'right' });
      doc.text('www.siteonweb.fr', pageWidth - 15, 24, { align: 'right' });

      // BADGE "AUDIT SEO" bien visible
      doc.setFillColor(37, 99, 235); // Bleu
      doc.roundedRect(15, 50, 70, 12, 3, 3, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text('AUDIT SEO', 18, 58);

      // Titre principal
      doc.setTextColor(37, 99, 235);
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('RAPPORT D\'AUDIT SEO', 15, 75);

      // Référence et date
      doc.setTextColor(100, 100, 100);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const refNumber = `SEO-${Date.now()}`;
      const dateStr = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
      doc.text(`Référence: ${refNumber}`, 15, 85);
      doc.text(`Date: ${dateStr}`, 15, 92);
      doc.text(`Client: ${email}`, 15, 99);

      // Ligne de séparation
      doc.setDrawColor(37, 99, 235);
      doc.setLineWidth(0.5);
      doc.line(15, 105, pageWidth - 15, 105);

      // ========== SCORE SEO (encadré) ==========
      let yPos = 115;

      // Couleur selon le niveau
      let scoreColor;
      if (score >= 70) scoreColor = [34, 197, 94]; // Vert
      else if (score >= 40) scoreColor = [250, 204, 21]; // Jaune
      else scoreColor = [239, 68, 68]; // Rouge

      doc.setFillColor(...scoreColor, 0.1);
      doc.roundedRect(15, yPos, pageWidth - 30, 35, 3, 3, 'F');

      doc.setTextColor(...scoreColor);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('VOTRE SCORE SEO', pageWidth / 2, yPos + 10, { align: 'center' });

      doc.setFontSize(32);
      doc.text(`${Math.round(score)}/100`, pageWidth / 2, yPos + 25, { align: 'center' });

      // Niveau
      doc.setFontSize(12);
      let levelText = score >= 70 ? 'SEO EXCELLENT' : score >= 40 ? 'SEO MOYEN' : 'SEO CRITIQUE';
      doc.text(levelText, pageWidth / 2, yPos + 32, { align: 'center' });

      yPos += 45;

      // ========== RÉPONSES AU QUIZ ==========
      doc.setFontSize(14);
      doc.setTextColor(37, 99, 235);
      doc.setFont('helvetica', 'bold');
      doc.text('RÉSULTATS DU QUIZ', 15, yPos);

      yPos += 10;

      // Tableau des réponses
      const tableData = questions.map((q, i) => {
        const answer = answers[i] || 'Non répondu';
        const status = answer === 'yes' ? 'OUI' : answer === 'no' ? 'NON' : 'PAS SUR';
        return [
          `${i + 1}. ${q.question}`,
          status
        ];
      });

      autoTable(doc, {
        startY: yPos,
        head: [['Critère SEO', 'Statut']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [37, 99, 235], textColor: 255, fontStyle: 'bold' },
        styles: { fontSize: 9, cellPadding: 3 },
        alternateRowStyles: { fillColor: [248, 248, 248] },
        margin: { left: 15, right: 15 },
        columnStyles: {
          0: { cellWidth: 130 },
          1: { cellWidth: 45, halign: 'center' }
        }
      });

      yPos = doc.lastAutoTable.finalY + 15;

      // Vérifier si on a besoin d'une nouvelle page
      if (yPos > pageHeight - 80) {
        doc.addPage();
        yPos = 20;
      }

      // ========== RECOMMANDATIONS PRIORITAIRES ==========
      doc.setFontSize(14);
      doc.setTextColor(37, 99, 235);
      doc.setFont('helvetica', 'bold');
      doc.text('RECOMMANDATIONS PRIORITAIRES', 15, yPos);

      yPos += 10;

      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');

      if (recommendations.length > 0) {
        recommendations.slice(0, 5).forEach((rec, i) => {
          // Vérifier si on a besoin d'une nouvelle page
          if (yPos > pageHeight - 40) {
            doc.addPage();
            yPos = 20;
          }

          doc.setFont('helvetica', 'bold');
          doc.text(`${i + 1}. ${rec.question}`, 20, yPos);
          yPos += 5;

          doc.setFont('helvetica', 'normal');
          const descLines = doc.splitTextToSize(rec.description, pageWidth - 45);
          doc.text(descLines, 25, yPos);
          yPos += descLines.length * 5 + 5;
        });
      } else {
        doc.text('Excellent ! Aucune recommandation prioritaire.', 20, yPos);
        yPos += 10;
      }

      // ========== FOOTER ==========
      doc.setFillColor(0, 0, 0);
      doc.rect(0, pageHeight - 25, pageWidth, 25, 'F');

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text('PRENDRE RENDEZ-VOUS POUR UN AUDIT COMPLET', pageWidth / 2, pageHeight - 16, { align: 'center' });

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('www.siteonweb.fr/#contact', pageWidth / 2, pageHeight - 10, { align: 'center' });

      // Télécharger le PDF
      const fileName = `Audit-SEO-SiteOnWeb-${refNumber}.pdf`;
      console.log('📥 Tentative de téléchargement du PDF:', fileName);
      doc.save(fileName);
      console.log('✅ PDF Audit SEO généré et téléchargé:', fileName);
      setPdfGenerated(true);
    } catch (error) {
      console.error('❌ ERREUR CRITIQUE - Génération PDF échouée:', error);
      console.error('❌ Message d\'erreur:', error.message);
      console.error('❌ Stack trace:', error.stack);
      setPdfGenerated(false);
    }

    // ========================================
    // 2️⃣ ENVOYER EMAIL À contact@siteonweb.fr UNIQUEMENT
    // ========================================
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

    if (accessKey) {
      try {
        const formData = new FormData();
        formData.append('access_key', accessKey);
        formData.append('subject', `🔍 Audit SEO - Score ${Math.round(score)}/100 (${level})`);
        formData.append('email', 'contact@siteonweb.fr'); // Uniquement l'agence
        formData.append('from_name', 'SiteOnWeb - Audit SEO');
        formData.append('message', `
═══════════════════════════════════════════════════════════
🔍 AUDIT SEO - SITEONWEB
═══════════════════════════════════════════════════════════

📋 Référence: SEO-${Date.now()}
📅 Date: ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
📧 Client: ${email}

═══════════════════════════════════════════════════════════
📊 SCORE SEO
═══════════════════════════════════════════════════════════

      ${Math.round(score)}/100 - ${level}

═══════════════════════════════════════════════════════════
✅ RÉPONSES AU QUIZ
═══════════════════════════════════════════════════════════

${questions.map((q, i) => {
  const answer = answers[i] || 'non répondu';
  const emoji = answer === 'yes' ? '✅' : answer === 'no' ? '❌' : '❓';
  return `${emoji} ${q.question}: ${answer === 'yes' ? 'Oui' : answer === 'no' ? 'Non' : 'Pas sûr'}`;
}).join('\n')}

─────────────────────────────────────────────────────────────
🎯 RECOMMANDATIONS PRIORITAIRES
─────────────────────────────────────────────────────────────

${recommendations.slice(0, 5).map((r, i) => `${i + 1}. ${r.question}\n   ${r.description}`).join('\n\n')}

─────────────────────────────────────────────────────────────
IMPORTANT - AUDIT INDICATIF
─────────────────────────────────────────────────────────────

Le client a téléchargé un PDF avec cet audit.
Cet audit est INDICATIF et basé sur les déclarations du client.
Un audit technique complet est recommandé.

─────────────────────────────────────────────────────────────
🚀 PROCHAINES ÉTAPES
─────────────────────────────────────────────────────────────

1. CONTACTER LE CLIENT sous 24h
2. AUDIT TECHNIQUE COMPLET
3. PLAN D'ACTION SEO personnalisé

═══════════════════════════════════════════════════════════
📞 CONTACT CLIENT
═══════════════════════════════════════════════════════════

📧 ${email}

═══════════════════════════════════════════════════════════
SITEONWEB - Audit SEO Automatique
═══════════════════════════════════════════════════════════
        `);

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        console.log('✅ Audit SEO envoyé à contact@siteonweb.fr');
      } catch (error) {
        console.error('❌ Erreur envoi Web3Forms:', error);
      }
    }

    // Tracking GTM
    if (window.gtag) {
      window.gtag('event', 'seo_audit_completed', {
        page_location: window.location.href,
        email_domain: email.split('@')[1],
        seo_score: Math.round(score),
        seo_level: level
      });
    }

    setIsSubmitted(true);
  };

  const score = showResults ? calculateScore() : 0;
  const level = showResults ? getScoreLevel(score) : '';
  const recommendations = showResults ? getRecommendations() : [];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 animate-fadeIn" style={{ zIndex: 999999 }}>
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-none sm:rounded-2xl max-w-full sm:max-w-2xl w-full h-full sm:h-auto p-4 sm:p-6 md:p-8 shadow-2xl border-0 sm:border border-primary-red/30 animate-slideUp max-h-full sm:max-h-[95vh] overflow-y-auto">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-2xl z-10"
          aria-label="Close"
        >
          ×
        </button>

        {!isSubmitted ? (
          <>
            {/* En-tête */}
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {t.title}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                {t.subtitle}
              </p>
              {!showResults && (
                <div className="mt-4 text-sm text-gray-400">
                  {t.question} {currentQuestion + 1} {t.of} {questions.length}
                </div>
              )}
            </div>

            {/* Progress bar */}
            {!showResults && (
              <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
                <div
                  className="bg-primary-red h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            )}

            {/* Question */}
            {!showResults && (
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {questions[currentQuestion].question}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">
                    {questions[currentQuestion].description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleAnswer('yes')}
                      className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
                        answers[currentQuestion] === 'yes'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-700 text-white hover:bg-green-600/50'
                      }`}
                    >
                      ✅ {t.yes}
                    </button>
                    <button
                      onClick={() => handleAnswer('no')}
                      className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
                        answers[currentQuestion] === 'no'
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-white hover:bg-red-600/50'
                      }`}
                    >
                      ❌ {t.no}
                    </button>
                    <button
                      onClick={() => handleAnswer('not_sure')}
                      className={`flex-1 py-4 px-6 rounded-lg font-semibold transition ${
                        answers[currentQuestion] === 'not_sure'
                          ? 'bg-yellow-600 text-white'
                          : 'bg-gray-700 text-white hover:bg-yellow-600/50'
                      }`}
                    >
                      ❓ {t.notSure}
                    </button>
                  </div>
                </div>

                {/* Navigation */}
                {currentQuestion > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                  >
                    {t.previous}
                  </button>
                )}
              </div>
            )}

            {/* Results */}
            {showResults && !isSubmitted && (
              <div className="space-y-6">
                {/* Score */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{t.results_title}</h3>
                  <div className="bg-gradient-to-r from-primary-red/20 to-primary-red/10 border border-primary-red/30 rounded-xl p-6 mb-4">
                    <div className="text-sm text-gray-400 mb-2">{t.results_score}</div>
                    <div className="text-5xl font-bold text-white mb-2">
                      {Math.round(score)}/100
                    </div>
                    <div className="text-lg font-semibold">
                      {level === 'critical' && t.results_level_critical}
                      {level === 'medium' && t.results_level_medium}
                      {level === 'good' && t.results_level_good}
                    </div>
                  </div>
                </div>

                {/* Analysis */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-3">{t.results_analysis}</h4>
                  <p className="text-gray-300 mb-4">
                    {level === 'critical' && t.analysis_critical}
                    {level === 'medium' && t.analysis_medium}
                    {level === 'good' && t.analysis_good}
                  </p>

                  {recommendations.length > 0 && (
                    <>
                      <h5 className="font-semibold text-white mb-2">{t.recommendations_title}</h5>
                      <ul className="space-y-2">
                        {recommendations.map((rec, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-primary-red">•</span>
                            <span>{rec.question}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                {/* Email Form */}
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h4 className="text-lg font-semibold text-white mb-2">{t.email_title}</h4>
                  <p className="text-sm text-gray-400 mb-4">{t.email_subtitle}</p>

                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-red transition mb-3"
                      required
                    />
                    {error && (
                      <p className="text-red-400 text-sm mb-3">{error}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
                    >
                      {t.submit}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Success */
          <div className="text-center py-8">
            <div className="text-6xl mb-4">{pdfGenerated ? '🎉' : '📧'}</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {pdfGenerated ? t.successTitle : t.successTitleNoPdf}
            </h3>
            <p className="text-gray-300 mb-6">
              {pdfGenerated ? t.successMessage : t.successMessageNoPdf}
            </p>
            <button
              onClick={onClose}
              className="bg-primary-red hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              {t.close}
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SEOAuditQuiz;
