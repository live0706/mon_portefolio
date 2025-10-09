Portfolio minimal — comment démarrer

Fichiers créés:
- index.html : page d'accueil avec photo, texte descriptif et 4 blocs (CV, Projets, Compétences, Contact)
- css/styles.css : styles principaux
- js/script.js : petit comportement (année, smooth scroll, formulaire simulé)
- assets/profile.svg : image de profil de remplacement (remplacez-la par votre photo jpg/png)

Pour voir le site localement :
1) Ouvrez `index.html` dans votre navigateur : double-cliquez dessus.

OU (serveur local recommandé pour certains navigateurs):
- Si vous avez Python installé ; ouvrez PowerShell dans le dossier du projet et lancez :
```powershell
python -m http.server 8000
```
Puis ouvrez http://localhost:8000 dans le navigateur.

Personnalisation recommandée :
- Remplacez `assets/profile.svg` par votre photo (par ex. `assets/profile.jpg`).
- Mettez à jour le texte, les titres et ajoutez vos projets et CV (assets/CV.pdf).
- Si vous voulez un envoi de formulaire réel, dites-moi quel backend ou service (Formspree, Netlify Forms, votre API) vous voulez utiliser et je l'intègre.

Ajout d'une vidéo de démonstration et captures pour un projet
---------------------------------------------------------

Si tu as une vidéo de démonstration et des captures d'écran pour un projet, place-les dans le dossier `assets/projects/` avec les noms ci-dessous, ou utilise un lien YouTube/GitHub :

- `assets/projects/demo.mp4` — vidéo MP4 locale (optionnel)
- `assets/projects/thumb1.jpg` — image poster pour la vidéo
- `assets/projects/shot1.png`, `shot2.png`, `shot3.png` — captures pleine taille
- `assets/projects/shot1-thumb.png`, `shot2-thumb.png`, `shot3-thumb.png` — miniatures pour la page

Alternatives :
- Héberge la vidéo sur YouTube et remplace le lien `https://youtu.be/ID_DE_TA_VIDEO` dans `index.html`.
- Met la vidéo dans les Releases GitHub et dépose les captures dans le repo (liens dans la page).

Lorsque tu as placé les fichiers, recharge `index.html` dans le navigateur et vérifie que la vidéo et les miniatures s'affichent correctement.
