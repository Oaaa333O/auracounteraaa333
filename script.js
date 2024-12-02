let aura = null;
let nom = "";
let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];

function demanderAuraNom() {
    nom = prompt("Veuillez entrer un nom associé à l'aura :");
    aura = parseInt(prompt("Veuillez entrer une aura (nombre) :"));

    if (nom && aura !== null) {
        let utilisateur = { nom: nom, aura: aura };
        utilisateurs.push(utilisateur);
        localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

        mettreAJourMenu();
        afficherAuraUtilisateur();
    }
}

function modifierAura(valeur) {
    if (aura !== null) {
        aura += valeur;
        document.getElementById('affichageAura').textContent = `Aura : ${aura}`;
        // Mettre à jour l'aura de l'utilisateur dans localStorage
        let utilisateur = utilisateurs.find(u => u.nom === nom);
        utilisateur.aura = aura;
        localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
    }
}

function mettreAJourMenu() {
    const utilisateurSelect = document.getElementById('utilisateurSelect');
    utilisateurSelect.innerHTML = '<option value="">-- Choisir un utilisateur --</option>';  // Réinitialiser

    utilisateurs.forEach(utilisateur => {
        const option = document.createElement('option');
        option.value = utilisateur.nom;
        option.textContent = utilisateur.nom;
        utilisateurSelect.appendChild(option);
    });

    document.getElementById('selectionUtilisateur').classList.remove('hidden');
}

function afficherAuraUtilisateur() {
    const utilisateurSelect = document.getElementById('utilisateurSelect');
    const utilisateurNom = utilisateurSelect.value;

    if (utilisateurNom) {
        const utilisateur = utilisateurs.find(u => u.nom === utilisateurNom);
        if (utilisateur) {
            nom = utilisateur.nom;
            aura = utilisateur.aura;

            document.getElementById('nomUtilisateur').textContent = `Aura de : ${nom}`;
            document.getElementById('affichageAura').textContent = `Aura : ${aura}`;

            document.getElementById('actions').classList.remove('hidden');
        }
    }
}