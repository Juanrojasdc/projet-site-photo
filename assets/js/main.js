// ======================================================
// 1. CHARGEMENT DES COMPOSANTS AVEC JQUERY
// ======================================================

$(document).ready(function () {
  // Fonction principale pour charger les éléments structurels
  function initLayout() {
    // --- Chargement de la barre de navigation ---
    $('#main-navbar').load('pages/navbar.html', function (response, status, xhr) {
      if (status === 'error') {
        console.error('Erreur navbar : ' + xhr.status + ' ' + xhr.statusText);
      } else {
        console.log('Navbar chargée avec succès.');
      }
    });

    // --- Chargement du pied de page ---
    $('#main-footer').load('pages/footer.html', function (response, status, xhr) {
      if (status === 'error') {
        console.error('Erreur footer : ' + xhr.status + ' ' + xhr.statusText);
      } else {
        console.log('Footer chargé avec succès.');
      }
    });

    // --- Chargement de la section galerie ---
    $('#section-galerie').load('pages/section-galerie.html', function (response, status, xhr) {
      if (status === 'error') {
        console.error('Erreur section galerie : ' + xhr.status + ' ' + xhr.statusText);
      } else {
        console.log('Section galerie chargé avec succès.');
      }
    });

    // --- Chargement du bloc illustration/contact ---
    $('#buttons-prestations').load(
      'pages/illustration-contact.html',
      function (response, status, xhr) {
        if (status === 'error') {
          console.error('Erreur illustration-contact : ' + xhr.status + ' ' + xhr.statusText);
        } else {
          console.log('Illustration-contact chargée avec succès.');
        }
      }
    );
  }

  // Appel de la fonction de chargement
  initLayout();

  // ======================================================
  // 2. LOGIQUE DE LA NAVBAR (EFFET AU SCROLL)
  // ======================================================

  // On recharge la navbar pour s'assurer qu'elle existe avant d'appliquer le scroll
  $('#main-navbar').load('pages/navbar.html', function (response, status, xhr) {
    if (status === 'success') {
      console.log('Navbar cargada.');

      // Activation du listener de scroll
      $(window).scroll(function () {
        var navbar = $('.navbar-glass');

        // Ajout/retrait de la classe selon la position du scroll
        if ($(window).scrollTop() > 50) {
          navbar.addClass('scrolled');
        } else {
          navbar.removeClass('scrolled');
        }
      });
    } else {
      console.error('Error cargando navbar: ' + xhr.statusText);
    }
  });

  // // Chargement des autres composants (séparément)
  // $('#main-footer').load('pages/footer.html');
  // $('#buttons-prestations').load('pages/illustration-contact.html');
});

// ======================================================
// Ajout d'effet Gsap sur les photos
// ======================================================

gsap.registerPlugin(ScrollTrigger);

gsap.from('.menu__card', {
  duration: 1,
  opacity: 0,
  y: 60,
  ease: 'power2.out',
  stagger: 0.1,
  scrollTrigger: { trigger: '.menu__grid', start: 'top 80%' },
});
