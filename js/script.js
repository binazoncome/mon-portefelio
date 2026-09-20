// =====================================================
// PORTFOLIO - ZINSOU COME BINAZON
// JAVASCRIPT - VALIDATION DU FORMULAIRE
// =====================================================

// Récupération du formulaire
const formulaire = document.getElementById("contact-form");

// Fonction pour afficher une erreur
function afficherErreur(champ, message) {

    // Supprimer une ancienne erreur
    const ancienneErreur = champ.parentElement.querySelector(".erreur");

    if (ancienneErreur) {
        ancienneErreur.remove();
    }

    // Créer le message d'erreur
    const erreur = document.createElement("small");

    erreur.className = "erreur";
    erreur.textContent = message;

    // Ajouter le message sous le champ
    champ.parentElement.appendChild(erreur);

    // Ajouter une classe au champ
    champ.classList.add("champ-erreur");
}

// Fonction pour supprimer l'erreur
function supprimerErreur(champ) {

    const erreur = champ.parentElement.querySelector(".erreur");

    if (erreur) {
        erreur.remove();
    }

    champ.classList.remove("champ-erreur");
}

// Validation du formulaire
formulaire.addEventListener("submit", function (event) {

    // Empêcher l'envoi automatique du formulaire
    event.preventDefault();

    // Récupération des champs
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const email = document.getElementById("email");
    const contact = document.getElementById("contact");
    const objet = document.getElementById("objet");
    const message = document.getElementById("message");

    // Variable pour savoir si le formulaire est valide
    let formulaireValide = true;

    // ==================== NOM ====================

    supprimerErreur(nom);

    if (nom.value.trim() === "") {

        afficherErreur(
            nom,
            "Ce champ est obligatoire à remplir."
        );

        formulaireValide = false;

    } else if (!/^[A-Za-zÀ-ÿ\s'-]+$/.test(nom.value.trim())) {

        afficherErreur(
            nom,
            "Erreur : champ mal rempli."
        );

        formulaireValide = false;
    }

    // ==================== PRÉNOM ====================

    supprimerErreur(prenom);

    if (prenom.value.trim() === "") {

        afficherErreur(
            prenom,
            "Ce champ est obligatoire à remplir."
        );

        formulaireValide = false;

    } else if (!/^[A-Za-zÀ-ÿ\s'-]+$/.test(prenom.value.trim())) {

        afficherErreur(
            prenom,
            "Erreur : champ mal rempli."
        );

        formulaireValide = false;
    }

    // ==================== EMAIL ====================

    supprimerErreur(email);

    if (email.value.trim() === "") {

        afficherErreur(
            email,
            "Ce champ est obligatoire à remplir."
        );

        formulaireValide = false;

    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
    ) {

        afficherErreur(
            email,
            "Erreur : adresse email invalide."
        );

        formulaireValide = false;
    }

    // ==================== CONTACT ====================

    supprimerErreur(contact);

    if (contact.value.trim() === "") {

        afficherErreur(
            contact,
            "Ce champ est obligatoire à remplir."
        );

        formulaireValide = false;

    } else if (!/^[+]?[0-9\s()-]{8,20}$/.test(contact.value.trim())) {

        afficherErreur(
            contact,
            "Erreur : numéro de contact invalide."
        );

        formulaireValide = false;
    }

    // ==================== OBJET ====================

    supprimerErreur(objet);

    if (objet.value.trim() === "") {

        afficherErreur(
            objet,
            "Ce champ est obligatoire à remplir."
        );

        formulaireValide = false;
    }

    // ==================== MESSAGE ====================

    supprimerErreur(message);

    if (message.value.trim() === "") {

        afficherErreur(
            message,
            "Ce champ est obligatoire à remplir."
        );

        formulaireValide = false;

    } else if (message.value.trim().length < 10) {

        afficherErreur(
            message,
            "Erreur : message mal rempli. Minimum 10 caractères."
        );

        formulaireValide = false;
    }

    // ==================== RÉSULTAT ====================

    if (formulaireValide) {

        alert(
            "Merci " +
            prenom.value.trim() +
            " " +
            nom.value.trim() +
            " ! Votre message a été envoyé avec succès."
        );

        // Réinitialiser le formulaire
        formulaire.reset();

        // Supprimer les éventuels messages d'erreur
        document.querySelectorAll(".erreur").forEach(function (erreur) {
            erreur.remove();
        });

        document.querySelectorAll(".champ-erreur").forEach(function (champ) {
            champ.classList.remove("champ-erreur");
        });
    }

});

// ==================== SUPPRESSION DES ERREURS ====================

// Les erreurs disparaissent lorsque l'utilisateur recommence à saisir
document.querySelectorAll(
    "#contact-form input, #contact-form textarea"
).forEach(function (champ) {

    champ.addEventListener("input", function () {
        supprimerErreur(champ);
    });

});
