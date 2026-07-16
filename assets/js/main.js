// ======================================================
// 1. CHARGEMENT DES COMPOSANTS AVEC JQUERY
// ======================================================

$(document).ready(function () {
  // Fonction principale pour charger les éléments structurels
  function initLayout() {
    // --- Chargement de la barre de navigation (con ruta absoluta '/') ---
    // --- Chargement de la barre de navigation ---
    $('#main-navbar').load(basePath + 'pages/navbar.html', function (response, status, xhr) {
      if (status === 'error') {
        console.error('Erreur navbar : ' + xhr.status + ' ' + xhr.statusText);
      } else {
        console.log('Navbar chargée avec succès.');

        // CAPTURAMOS EL HEADER Y REVISAMOS SU ATRIBUTO
        var headerContainer = $('#main-navbar');

        if (headerContainer.attr('data-theme') === 'light') {
          // Si el header pide 'light', buscamos la navbar inyectada y cambiamos las clases
          headerContainer
            .find('#myNavbar')
            .removeClass('nav-theme-dark')
            .addClass('nav-theme-light');
        }

        // ======================================================
        // LOGIQUE DE LA NAVBAR (EFFET AU SCROLL)
        // ======================================================
        var navbar = $('.navbar-glass');
        $(window).scroll(function () {
          if ($(window).scrollTop() > 50) {
            navbar.addClass('scrolled');
          } else {
            navbar.removeClass('scrolled');
          }
        });
      }
    });

    // --- Chargement du pied de page (con ruta absoluta '/') ---
    $('#main-footer').load(basePath + 'pages/footer.html', function (response, status, xhr) {
      if (status === 'error') {
        console.error('Erreur footer : ' + xhr.status + ' ' + xhr.statusText);
      } else {
        console.log('Footer chargé avec succès.');
      }
    });

    // --- Chargement de la section prestations (con ruta absoluta '/') ---
    $('#section-prestations').load(
      basePath + 'pages/section-prestations.html',
      function (response, status, xhr) {
        if (status === 'error') {
          console.error('Erreur section prestation : ' + xhr.status + ' ' + xhr.statusText);
        } else {
          console.log('Section prestation chargé avec succès.');
        }
      }
    );

    // --- Chargement de la section galerie (con ruta absoluta '/') ---
    $('#section-galerie').load(
      basePath + 'pages/section-galerie.html',
      function (response, status, xhr) {
        if (status === 'error') {
          console.error('Erreur section galerie : ' + xhr.status + ' ' + xhr.statusText);
        } else {
          console.log('Section galerie chargé avec succès.');
        }
      }
    );

    // --- Chargement du bloc illustration/contact (con ruta absoluta '/') ---
    $('#buttons-prestations').load(
      basePath + 'pages/illustration-contact.html',
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
