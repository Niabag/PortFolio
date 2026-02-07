# 📊 Guide de Tracking - SiteOnWeb

## 🎯 Objectif
Suivre toutes les étapes de tes funnels pour optimiser tes campagnes marketing.

---

## 📈 ÉVÉNEMENTS GTM DÉJÀ CONFIGURÉS

### 1. Lead Magnet (Guide des Prix)
- **Événement** : `lead_magnet_submitted`
- **Données** : email domain, page location
- **Action** : Email soumis pour télécharger le guide

### 2. Calculateur de Prix
- **Événement** : `price_calculator_completed`
- **Données** : email domain, price estimate, page location
- **Action** : Devis téléchargé

### 3. Audit SEO
- **Événement** : `seo_audit_completed`
- **Données** : email domain, SEO score, SEO level
- **Action** : Audit SEO téléchargé

### 4. Exit-Intent Popup
- **Événement** : `exit_intent_shown` + `exit_intent_email_submitted`
- **Action** : Popup affiché et email capturé

---

## 🔧 CONFIGURATION DANS GTM

### Étape 1 : Créer les Balises Google Analytics 4 (GA4)

#### A. Balise de Configuration GA4
1. Va sur **Google Tag Manager** : https://tagmanager.google.com
2. Clique sur **Balises** → **Nouvelle**
3. **Type de balise** : Configuration Google Analytics : GA4
4. **ID de mesure** : Récupère ton ID GA4 (format : G-XXXXXXXXXX)
5. **Déclencheur** : All Pages

#### B. Balises d'Événements GA4

Pour **chaque événement** ci-dessous, crée une balise :

**1. Lead Magnet Submitted**
- Type : Événement Google Analytics : GA4
- Nom de l'événement : `lead_magnet_submitted`
- Déclencheur personnalisé :
  - Type : Événement personnalisé
  - Nom de l'événement : `lead_magnet_submitted`

**2. Price Calculator Completed**
- Type : Événement Google Analytics : GA4
- Nom de l'événement : `price_calculator_completed`
- Paramètres d'événement :
  - `email_domain` : {{dlv - email_domain}}
  - `price_min` : {{dlv - price_min}}
  - `price_max` : {{dlv - price_max}}

**3. SEO Audit Completed**
- Type : Événement Google Analytics : GA4
- Nom de l'événement : `seo_audit_completed`
- Paramètres d'événement :
  - `seo_score` : {{dlv - seo_score}}
  - `seo_level` : {{dlv - seo_level}}

**4. Exit Intent Email Submitted**
- Type : Événement Google Analytics : GA4
- Nom de l'événement : `exit_intent_email_submitted`

---

## 📱 TRACKING FACEBOOK/META ADS

### Étape 2 : Ajouter le Meta Pixel (Facebook Pixel)

#### A. Récupérer ton Pixel ID
1. Va sur **Meta Business Manager** : https://business.facebook.com
2. **Gestionnaire d'événements** → **Pixels**
3. Copie ton **ID Pixel** (format : 123456789012345)

#### B. Installer le Pixel dans GTM
1. Dans GTM, clique sur **Balises** → **Nouvelle**
2. **Type de balise** : HTML personnalisé
3. **Code** :
```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TON_PIXEL_ID_ICI');
fbq('track', 'PageView');
</script>
```
4. **Déclencheur** : All Pages

#### C. Créer les Événements Facebook
Pour chaque événement, crée une nouvelle balise :

**Lead Magnet** :
```javascript
<script>
fbq('track', 'Lead', {
  content_name: 'Guide Prix 2026',
  content_category: 'Lead Magnet'
});
</script>
```
- Déclencheur : Événement personnalisé `lead_magnet_submitted`

**Calculateur de Prix** :
```javascript
<script>
fbq('track', 'Lead', {
  content_name: 'Devis Calculateur',
  content_category: 'Price Calculator'
});
</script>
```
- Déclencheur : Événement personnalisé `price_calculator_completed`

**Audit SEO** :
```javascript
<script>
fbq('track', 'Lead', {
  content_name: 'Audit SEO',
  content_category: 'SEO Audit'
});
</script>
```
- Déclencheur : Événement personnalisé `seo_audit_completed`

---

## 🎯 TRACKING GOOGLE ADS

### Étape 3 : Ajouter les Conversions Google Ads

#### A. Créer une Conversion dans Google Ads
1. Va sur **Google Ads** : https://ads.google.com
2. **Outils et paramètres** → **Conversions**
3. **+ Nouvelle action de conversion** → **Site Web**
4. Configure pour chaque type de lead :
   - Lead Magnet
   - Calculateur de Prix
   - Audit SEO

#### B. Installer les Balises de Conversion dans GTM

Pour chaque conversion, Google Ads te donne :
- **ID de conversion** : AW-XXXXXXXXX
- **Libellé de conversion** : XXXXXXXXXXX

Crée une balise GTM :
1. **Type de balise** : Google Ads - Suivi des conversions
2. **ID de conversion** : AW-XXXXXXXXX
3. **Libellé de conversion** : XXXXXXXXXXX
4. **Déclencheur** : Événement personnalisé correspondant

---

## 📊 TABLEAU DE BORD GA4

### Métriques Clés à Suivre

#### Funnel Lead Magnet
1. **Vues du popup** → `lead_magnet_shown`
2. **Emails soumis** → `lead_magnet_submitted`
3. **Taux de conversion** = Soumis / Vues

#### Funnel Calculateur de Prix
1. **Ouvertures** → Sessions avec Calculator ouvert
2. **Complétions** → `price_calculator_completed`
3. **Taux de complétion**

#### Funnel Audit SEO
1. **Démarrages quiz** → Sessions avec Quiz ouvert
2. **Complétions** → `seo_audit_completed`
3. **Score moyen SEO**

### Créer des Rapports Personnalisés

Dans **GA4** :
1. **Explorer** → **Analyse en entonnoir**
2. Configure les étapes :
   - Étape 1 : Page vue
   - Étape 2 : Popup/Quiz ouvert
   - Étape 3 : Email soumis
   - Étape 4 : PDF téléchargé

---

## 🔥 ÉVÉNEMENTS SUPPLÉMENTAIRES À AJOUTER

### Micro-Conversions à Tracker

Je peux ajouter ces événements pour mieux comprendre le comportement :

1. **`calculator_opened`** - Calculateur ouvert
2. **`calculator_step_completed`** - Chaque étape du calculateur
3. **`seo_quiz_started`** - Quiz SEO démarré
4. **`seo_quiz_question_answered`** - Question répondue
5. **`whatsapp_button_clicked`** - Bouton WhatsApp cliqué
6. **`chat_button_clicked`** - Bouton chat cliqué
7. **`scroll_depth`** - Profondeur de scroll (25%, 50%, 75%, 100%)
8. **`time_on_page`** - Temps passé sur la page

---

## 🎨 HEATMAPS ET ENREGISTREMENTS

### Outils Recommandés

#### 1. **Microsoft Clarity** (GRATUIT ⭐)
- Heatmaps
- Enregistrements de sessions
- Installation : https://clarity.microsoft.com

#### 2. **Hotjar** (Freemium)
- Heatmaps avancées
- Sondages
- Formulaires d'abandon

---

## 📱 UTM PARAMETERS POUR CAMPAGNES

### Format UTM Standard

Pour tracker tes campagnes, utilise ces paramètres :

```
https://www.siteonweb.fr/?utm_source=facebook&utm_medium=cpc&utm_campaign=lead_magnet_jan2026&utm_content=guide_prix&utm_term=site_web
```

**Paramètres** :
- `utm_source` : facebook, google, instagram, linkedin
- `utm_medium` : cpc, email, social, referral
- `utm_campaign` : nom de ta campagne
- `utm_content` : variation de l'annonce
- `utm_term` : mot-clé (pour Google Ads)

### Générateur UTM
Utilise : https://ga-dev-tools.google/campaign-url-builder/

---

## ✅ CHECKLIST DE MISE EN PLACE

### Phase 1 : Configuration de Base
- [ ] Vérifier que GTM est installé (FAIT ✅)
- [ ] Créer un compte GA4
- [ ] Configurer la balise GA4 dans GTM
- [ ] Tester les événements existants

### Phase 2 : Meta Ads
- [ ] Créer un Meta Pixel
- [ ] Installer le Pixel dans GTM
- [ ] Configurer les événements de conversion
- [ ] Tester avec Meta Pixel Helper

### Phase 3 : Google Ads
- [ ] Créer les actions de conversion
- [ ] Installer les balises de conversion dans GTM
- [ ] Tester les conversions

### Phase 4 : Analytics Avancé
- [ ] Installer Microsoft Clarity
- [ ] Créer des rapports personnalisés GA4
- [ ] Configurer des audiences pour remarketing

---

## 🚀 PROCHAINES ÉTAPES

1. **Aujourd'hui** : Configuration GA4 + GTM
2. **Demain** : Meta Pixel + événements Facebook
3. **Après-demain** : Google Ads conversions
4. **Cette semaine** : Microsoft Clarity + rapports GA4

---

## 💡 BESOIN D'AIDE ?

Si tu veux que j'ajoute :
- ✅ Des événements supplémentaires dans le code
- ✅ Microsoft Clarity dans l'HTML
- ✅ Un dashboard de suivi personnalisé
- ✅ Des rapports automatiques

Dis-moi ce que tu veux que je configure !
