(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


})(jQuery);


const profiles = [{
    title: "David Maltais", content: `Curieux et touche-à-tout, David cumule les diplômes d’études dans des domaines variés. Technicien ambulancier
paramédical au service de la population durant plus de 15 ans, il complète d’abord un baccalauréat en biologie
axé sur la toxicologie de l’environnement. Il poursuit ensuite une maîtrise en génie chimique se spécialisant
sur les énergies renouvelables et le développement durable où il découvre un intérêt marqué pour la gestion et
la valorisation des déchets. Il poursuit son parcours universitaire en ajoutant une corde à son arc : un MBA
en gestion. C’est ainsi qu’il devient d’abord directeur général chez Gypse du Fjord, avant d’en faire
l’acquisition en juin 2022.`},
{ title: `Alexandre Benoît`, content: `Embauché par M. Jacques Laberge en 2017 alors que l’entreprise est en plein essor, Alexandre devient le pilier de Gypse du Fjord. Il s’occupe autant de la réception, du traitement de la matière et de la livraison que de l’entretien mécanique des équipements de l’entreprise. Fiable, ponctuel, et polyvalent, c’est à lui que l’entreprise doit son bon fonctionnement au quotidien. Son souci de réparer, réutiliser et revaloriser le matériel s’inscrit parfaitement dans les valeurs prônées par Gypse du Fjord. ` },
{ title: `Jean-David Coudé`, content: `Jean-David se joint à l’équipe de Gypse du Fjord en 2021 pour venir assister Alexandre aux opérations. Positif et travaillant, Jean-David permet à l’entreprise d’augmenter sa productivité et de mieux répondre aux besoins de sa clientèle. Ce mélomane à ses heures, autodidacte ayant un champ d’intérêt varié, aspire à poursuivre éventuellement ses études. Son caractère conciliant et facile à vivre est un atout pour l’ambiance de travail.`},
{ title: `Manon Gaudet`, content: `Manon intègre Gypse du Fjord en septembre 2022. Son mandat est d’assister M. Maltais dans ses tâches administratives. Sa créativité, sa rigueur et son souci du détail lui permettent de prendre en charge les communications de l’entreprise via le site web et les réseaux sociaux, entre autres. Souhaitant que l’entreprise se démarque dans le respect de ses valeurs environnementales, elle cherche des solutions durables aux problèmes du quotidien.`}]

const modalTitle = document.querySelector('.modal-title');
const modalContent = document.querySelector('.modal-body');
const profileElements = document.querySelectorAll("#bio");

for (let index = 0; index < profileElements.length; index++) {
    profileElements[index].addEventListener("click", () => {
        modalTitle.textContent = profiles[index].title;
        modalContent.textContent = profiles[index].content;
    }
    );
}

