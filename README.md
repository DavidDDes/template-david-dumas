# Template Electron-Vue3-TypeScript

**Auteur :** David Dumas
**Matricule :** 2445194

## Description du Template

Ce template est une base de départ réutilisable pour créer des applications de bureau avec **Electron**, **Vue.js 3** et **TypeScript**. 

Ce template vous fournit :
- Une structure de projet bien organisée et claire
- La configuration Electron et Vue.js prédéfinie
- Vue Router pour la gestion des routes (déjà configuré)
- Des composants squelettes (Home.vue et Form.vue) prêts à être personnalisés
- Une architecture permettant la communication entre le processus principal Electron et l'interface Vue.js

## Technologies Utilisées

- **Electron** ^40.2.1 - Framework pour créer des applications de bureau
- **Vue.js** ^3.5.27 - Framework JavaScript pour l'interface utilisateur
- **Vue Router** ^5.0.2 - Gestionnaire de routes pour Vue.js
- **TypeScript** ^5.9.3 - Langage typé basé sur JavaScript
- **Vite** ^7.3.1 - Build tool ultra-rapide
- **Electron Vite** ^5.0.0 - Plugin Vite pour Electron

## Installation
npm i
### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository** (ou créer un projet basé sur ce template)
   ```bash
   git clone <URL_DU_REPO>
   cd <NOM_DU_REPO>
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Vérifier que tout fonctionne** (optionnel)
   ```bash
   npm run build
   ```

## Commandes Disponibles

### Mode Développement
```bash
npm run dev
```
Lance l'application en mode développement avec hot-reload. Electron se relancera automatiquement à chaque modification du code.

### Build pour Production
```bash
npm run build
```
Crée une version optimisée de l'application prête pour le déploiement.

### Aperçu du Build
```bash
npm run preview
```
Affiche un aperçu de la version build construite.

## Structure des Dossiers

```
template-david-dumas/
├── src/
│   ├── main/                 # Processus principal Electron
│   │   └── main.ts          # Point d'entrée du processus principal
│   ├── preload/             # Scripts de préchargement (sécurité)
│   │   └── preload.ts       # Expose les APIs à l'interface
│   └── renderer/            # Interface utilisateur Vue.js
│       ├── main.ts          # Point d'entrée de l'applicat Vue
│       ├── router.ts        # Configuration de Vue Router
│       ├── App.vue          # Composant racine
│       ├── index.html       # Fichier HTML principal
│       ├── components/      # Composants réutilisables
│       │   ├── Home.vue    # Page d'accueil (squelette)
│       │   └── Form.vue    # Page formulaire (squelette)
│       └── styles/          # Fichiers CSS/styles globaux
│           └── styles.css
├── electron.vite.config.ts # Configuration Vite pour Electron
├── tsconfig.json           # Configuration TypeScript
├── package.json            # Dépendances et scripts npm
└── .gitignore              # Fichiers à ignorer par Git
```

### Détails des Dossiers Principaux

- **`src/main/`** : Contient le processus principal Electron. C'est ici que vous gérez les fenêtres, les événements Electron et la communication IPC avec l'interface.

- **`src/preload/`** : Scripts de préchargement qui s'exécutent dans un contexte protégé. Ils exposent une API sécurisée à l'interface Vue.

- **`src/renderer/`** : L'interface utilisateur construite avec Vue.js. C'est ici que vous créez vos pages et composants Vue.js.

- **`src/renderer/components/`** : Dossier idéal pour stocker tous vos composants réutilisables. Home.vue et Form.vue sont des squelettes à personnaliser.

## Utilisation du Template

### 1. Personnaliser les Composants

Modifiez `src/renderer/components/Home.vue` et `src/renderer/components/Form.vue` en fonction de vos besoins.

### 2. Ajouter de Nouvelles Routes

Éditez `src/renderer/router.ts` pour ajouter de nouvelles routes :
```typescript
const routes = [
    {path: '/', component: Home},
    {path: '/form', component: Form},
    {path: '/nouvelle-page', component: NouvellePage}, // Nouvelle route
];
```

### 3. Gérer la Communication IPC

Ajoutez des gestionnaires IPC dans `src/main/main.ts` pour la communication entre Electron et Vue.js :
```typescript
ipcMain.on('mon-event', (event, args) => {
    // Votre logique ici
    event.reply('mon-event-response', 'réponse');
});
```

## Prochaines Étapes

Une fois le template mis en place :
1. Personnalisez le titre et les icônes de l'application
2. Développez vos pages et composants spécifiques
3. Ajoutez les styles CSS à `src/renderer/styles/styles.css`
4. Implémentez la logique métier dans les composants Vue
5. Configurez la communication IPC selon vos besoins

## Ressources Utiles

- [Documentation Electron](https://www.electronjs.org/docs)
- [Documentation Vue.js 3](https://vuejs.org/)
- [Documentation Vue Router](https://router.vuejs.org/)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [Documentation Vite](https://vitejs.dev/)

## Licence

ISC

---

**Créé comme base réutilisable en 2026**
