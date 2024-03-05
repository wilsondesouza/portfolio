/* Description: Custom JS file */


(function ($) {
    "use strict";

    /* Navbar Scripts */
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function () {
        if ($(".navbar").offset().top > 60) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $(document).on('click', 'a.page-scroll', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })


    // Carregamento da página
    document.addEventListener("DOMContentLoaded", function() {
        // Define o tempo de exibição da tela de carregamento em milissegundos (5000 = 5 segundos)
        const tempoExibicao = 2000;
    
        // Adiciona a classe 'loaded' ao 'body' após o tempo definido
        setTimeout(function() {
            document.body.classList.add("loaded");
        }, tempoExibicao);
    });
    
    
    // Função para exibir o texto letra por letra
    function typeText() {
        const texto = "Desenvolvedor   /   Engenheiro da Computação.";
        const typingTextElement = document.getElementById("typing-text");
        let index = 0;

        // Função  para limpar o texto
        function clearText() {
            typingTextElement.textContent = "";
            setTimeout(typeText, 1000); 
        }

        // Função para adicionar o texto letra por letra
        function addText() {
            if (index < texto.length) {
                typingTextElement.textContent += texto.charAt(index);
                index++;
                setTimeout(addText, 100);
            } else {
                setTimeout(clearText, 3000); // Limpa o texto após 3 segundos
            }
        }
        setTimeout(addText, 3000);
    }
    typeText();


    // hover in desktop mode
    function toggleDropdown(e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function () {
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
        .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
        .on('click', '.dropdown-menu a', toggleDropdown);


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function () {
        if ($(this).val() != '') {
            $(this).addClass('notEmpty');
        } else {
            $(this).removeClass('notEmpty');
        }
    });


    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


    /* Removes Long Focus On Buttons */
    $(".button, a, button").mouseup(function () {
        $(this).blur();
    });

})(jQuery);




