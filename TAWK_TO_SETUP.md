# 🚀 Guide d'Installation Tawk.to

## Étape 1: Créer votre compte Tawk.to

1. Allez sur **https://www.tawk.to**
2. Cliquez sur **"Sign Up Free"**
3. Remplissez vos informations:
   - Nom
   - Email
   - Mot de passe
4. Validez votre compte par email

---

## Étape 2: Configurer votre site

### A. Créer une propriété

1. Une fois connecté, cliquez sur **"+ Add Property"**
2. Remplissez:
   - **Property Name**: SiteOnWeb
   - **Website URL**: https://www.siteonweb.fr
3. Cliquez sur **"Add Property"**

### B. Récupérer vos identifiants

1. Dans le dashboard, allez dans **"Administration"** (icône ⚙️)
2. Cliquez sur **"Channels"** → **"Chat Widget"**
3. Vous verrez une section **"Direct Chat Link"** avec une URL comme:
   ```
   https://tawk.to/chat/5f9a1b2c3d4e5f6g7h8i9j0k/1a2b3c4d5e6f
   ```

4. **Extrayez les deux IDs**:
   - **Property ID**: `5f9a1b2c3d4e5f6g7h8i9j0k` (premier ID long)
   - **Widget ID**: `1a2b3c4d5e6f` (second ID, peut être "default")

---

## Étape 3: Intégrer dans votre site

### Ouvrez le fichier `src/components/TawkToChat.jsx`

Modifiez les lignes 10-11:

```javascript
const TAWK_PROPERTY_ID = '5f9a1b2c3d4e5f6g7h8i9j0k'; // VOTRE Property ID
const TAWK_WIDGET_ID = '1a2b3c4d5e6f';              // VOTRE Widget ID
```

**⚠️ Remplacez par vos vrais IDs!**

---

## Étape 4: Personnaliser Tawk.to

### A. Messages de bienvenue

1. Dans Tawk.to dashboard: **"Administration"** → **"Chat Widget"**
2. Section **"Greeting Message"**:
   - **Français**: "Bonjour! 👋 Comment puis-je vous aider aujourd'hui?"
   - **Anglais**: "Hello! 👋 How can I help you today?"

### B. Message hors ligne

1. Section **"Offline Message"**:
   - **Français**: "Nous sommes actuellement hors ligne. Laissez-nous un message et nous vous répondrons rapidement!"
   - **Anglais**: "We are currently offline. Leave us a message and we'll get back to you soon!"

### C. Couleurs du widget

1. Section **"Widget Appearance"**
2. Choisissez:
   - **Couleur principale**: `#EF4444` (rouge de votre brand)
   - **Couleur secondaire**: `#0A0A0A` (noir de votre fond)

### D. Position du widget

1. Section **"Widget Settings"**
2. Position: **Bottom Right** (déjà configuré dans le code)
3. Décalage: 20px (desktop), 10px (mobile)

---

## Étape 5: Configurer les réponses automatiques (Chatbot)

### A. Créer un trigger

1. **"Administration"** → **"Automation"** → **"Triggers"**
2. Cliquez sur **"+ Add Trigger"**

**Exemple de trigger de qualification:**

**Nom**: Qualification Lead
**Condition**: When chat starts
**Action**: Send message

**Message**:
```
Bonjour! 👋 Je suis là pour vous aider.

Quel service vous intéresse?
1️⃣ Création de site web
2️⃣ SEO / Référencement
3️⃣ Marketing digital
4️⃣ E-commerce
5️⃣ Maintenance

Répondez avec le numéro qui vous correspond!
```

### B. Créer des réponses rapides

1. **"Administration"** → **"Shortcuts"**
2. Créez des raccourcis pour répondre vite:

| Raccourci | Message |
|-----------|---------|
| `/tarif` | "Nos tarifs varient selon vos besoins. Pouvez-vous me dire quel type de site vous intéresse?" |
| `/delai` | "Le délai dépend de la complexité du projet. Un site vitrine prend environ 2-4 semaines." |
| `/devis` | "Je vais vous créer un devis personnalisé. Puis-je avoir votre email?" |

---

## Étape 6: Intégration WhatsApp (Optionnel)

### A. Connecter WhatsApp Business

1. **"Administration"** → **"Channels"** → **"Messaging"**
2. Cliquez sur **"WhatsApp Business"**
3. Suivez les instructions pour connecter votre compte WhatsApp Business

### B. Activation

Une fois connecté:
- Les visiteurs pourront continuer la conversation sur WhatsApp
- Vous recevrez les notifications sur votre téléphone
- L'historique est synchronisé

---

## Étape 7: Notifications mobiles

### A. Télécharger l'app Tawk.to

**iOS**: https://apps.apple.com/app/tawk-to/id643315623
**Android**: https://play.google.com/store/apps/details?id=to.tawk.app

### B. Configurer les notifications

1. Connectez-vous avec votre compte
2. Activez les notifications push
3. Vous recevrez une alerte à chaque nouveau message

---

## Étape 8: Tester

### Test en local:

1. Buildez le projet: `npm run build`
2. Lancez le dev server: `npm run dev`
3. Ouvrez http://localhost:5173
4. Le widget Tawk.to devrait apparaître en bas à droite
5. Testez en envoyant un message

### Test en production:

1. Commitez et pushez les changements
2. Attendez le déploiement Vercel (2-5 min)
3. Visitez https://www.siteonweb.fr
4. Le widget devrait être visible

---

## Fonctionnalités Tawk.to Gratuites

✅ **Chat en direct illimité**
✅ **Chatbot avec réponses automatiques**
✅ **Multilingue (FR/EN)**
✅ **Notifications mobiles**
✅ **Historique des conversations**
✅ **Intégration WhatsApp**
✅ **Statistiques détaillées**
✅ **Formulaire de pré-chat**
✅ **Qualification des leads**
✅ **Application mobile**

---

## Support

- Documentation: https://help.tawk.to
- Support: support@tawk.to
- Communauté: https://community.tawk.to

---

## Alternative: Garder le bouton WhatsApp

Si vous préférez garder le bouton WhatsApp simple **ET** Tawk.to:

Dans `src/App.jsx` ligne 75, décommentez:
```javascript
<TawkToChat />
<WhatsAppButton />  {/* Les deux visibles */}
```

Le bouton WhatsApp sera à droite, Tawk.to à gauche automatiquement.
