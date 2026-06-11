$(document).ready(function () {
  // Chargement des composants structurels de la page
  function initLayout() {
    // Injection de la barre de navigation (depuis le dossier pages)
    $('#main-navbar').load('pages/navbar.html', function (response, status, xhr) {
      if (status === 'error') {
        console.error('Erreur navbar : ' + xhr.status + ' ' + xhr.statusText);
      } else {
        console.log('Navbar chargée avec succès.');
      }
    });

    // Injection du pied de page (depuis le dossier pages)
    $('#main-footer').load('pages/footer.html', function (response, status, xhr) {
      if (status === 'error') {
        console.error('Erreur footer : ' + xhr.status + ' ' + xhr.statusText);
      } else {
        console.log('Footer chargé avec succès.');
      }
    });
  }

  // Initialisation du site
  initLayout();
});
