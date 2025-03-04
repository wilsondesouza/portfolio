// Carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    // Define o tempo de exibição da tela de carregamento em milissegundos (5000 = 5 segundos)
    const tempoExibicao = 2000;

    // Adiciona a classe 'loaded' ao 'body' após o tempo definido
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, tempoExibicao);
});

const images = document.querySelectorAll("img");
images.forEach((img) => {
    img.setAttribute("loading", "lazy");
});

// Alternar entre seções `Sobre Mim` e `Habilidades
// Toggle between `About Me` and `Skills` sections

// Capturar os botões
const aboutButton = document.getElementById('aboutme123');
const skillsButton = document.getElementById('skills123');

// Capturar as seções
const aboutSection = document.getElementById('about-section');
const detailsSection = document.getElementById('details-section');

// Função para alternar visibilidade
function toggleSections(showSection, hideSection) {
    showSection.style.display = 'block';
    hideSection.style.display = 'none';
}

// Adicionar eventos de clique aos botões
aboutButton.addEventListener('click', () => {
    toggleSections(aboutSection, detailsSection);
});

skillsButton.addEventListener('click', () => {
    toggleSections(detailsSection, aboutSection);
});

// Alterar idioma entre Português e Inglês
// Change language between Portuguese and English

// Captar ID das tags
// Captture tags ID
const inicioNav = document.getElementById('inicio-nav');
const sobreNav = document.getElementById('sobre-nav');
const projetosNav = document.getElementById('projetos-nav');
const contatoNav = document.getElementById('contato-nav');
const engineer = document.getElementById('engineer');
const engineer2 = document.getElementById('engineer2');
const iot = document.getElementById('iot');
const webDev = document.getElementById('web-dev');
const pythonDev = document.getElementById('python-dev');
const curriculum = document.getElementById('curriculum');
const hello = document.getElementById('hello');
const aboutParagraph = document.getElementById('about-paragraph');
const freelance = document.getElementById('freelance');
const education = document.getElementById('education');
const certificates = document.getElementById('certificates');
const certifications = document.getElementById('certifications');
const engenharia = document.getElementById('engenharia');
const logistica = document.getElementById('logistica');
const devFlutter = document.getElementById('dev-flutter');
const projectsTitle = document.getElementById('projects-title');
const projectsParagraph = document.getElementById('projects-paragraph');
const pythonDetails = document.getElementById('python-details');
const pythonDetails2 = document.getElementById('python-details-2');
const flutterDetails = document.getElementById('flutter-details');
const othersProjects = document.getElementById('others-projects');
const javascriptDetails = document.getElementById('javascript-details');
const reactDetails = document.getElementById('react-details');
const homeDetails = document.getElementById('home-details');
const javascriptDetailClass = document.querySelector('.javascript-details');
const reactDetailClass = document.querySelector('.react-details');
const homeDetailClass = document.querySelector('.home-details');
const maisProjetos = document.getElementById('mais-projetos');
const contactParagraph = document.getElementById('contact-paragraph');
const developer = document.getElementById('developer');
const host = document.getElementById('host');

// Guardar texto original (Em português)
// Save original text (In Portuguese)
const conteudoOriginal = [inicioNav.textContent, sobreNav.textContent, projetosNav.textContent, contatoNav.textContent, engineer.textContent, engineer2.textContent,
iot.textContent, webDev.textContent, pythonDev.textContent, curriculum.href, hello.textContent, aboutParagraph.innerHTML, freelance.textContent, education.textContent,
certificates.textContent, certifications.textContent, engenharia.textContent, logistica.textContent, devFlutter.textContent, projectsTitle.textContent, projectsParagraph.innerHTML,
pythonDetails.textContent, pythonDetails2.textContent, flutterDetails.textContent, othersProjects.textContent, javascriptDetails.textContent, reactDetails.textContent,
homeDetails.textContent, javascriptDetailClass.textContent, reactDetailClass.textContent, homeDetailClass.textContent, maisProjetos.textContent, contactParagraph.textContent, developer.textContent, host.textContent];

// Alterar conteúdo dos textos parar inglês
// Change texts content to English
function alterarConteudo() {
    inicioNav.textContent = 'Home';
    sobreNav.textContent = 'About';
    projetosNav.textContent = 'Projects';
    contatoNav.textContent = 'Contact';
    engineer.textContent = 'Computer Engineer';
    engineer2.textContent = 'Computer Engineer';
    iot.textContent = 'IoT Engineer';
    webDev.textContent = 'Web Developer';
    pythonDev.textContent = 'Python Developer';
    curriculum.href = 'assets/curriculum/wilsonsouzajunior_english.pdf';
    hello.textContent = 'Hello, my name is Wilson';
    aboutParagraph.innerHTML = 'Briefly, I can say that I consider myself an organized and systematic person, ethical and professional, investigative, conventional and realistic (References to the Holland test).<br><br> Because of this, I decided to make a career transition to one that better suits my profile, and so I decided to enter the IT area when I started my studies in Computer Engineering. <br><br> Since then, I have constantly sought new knowledge about the various technologies in the area, always qualifying myself through certificates. And to put the acquired skills into practice, I seek an internship, to also learn new skills and tools with the intention of developing my career.';
    freelance.textContent = 'Working on my own personal projects and for small entrepreneur in the region';
    education.textContent = 'Education';
    certificates.textContent = 'Certificates';
    certifications.textContent = 'Certifications';
    engenharia.textContent = 'Computer Engineering';
    logistica.textContent = 'Logistics';
    devFlutter.textContent = 'Mobile Development with Flutter';
    projectsTitle.textContent = 'Projects';
    projectsParagraph.innerHTML = 'Below I will leave some projects that I have already developed. From simple, practical, functional projects to the most complex. <br> Some projects were created to serve as an assessment for some courses, and others were made to assimilate and solidify my knowledge and skills, these being personal projects.';
    pythonDetails.textContent = 'Desktop application programmed in Python using the Custom Tkinter library for the creation of the graphical interface. Dictionaries were used to search for and return values and lists for the generation of buttons.';
    pythonDetails2.textContent = 'A small but powerful application capable of downloading videos from the main social networks such as Youtube, Instagram and Twitter. Contains graphical interface built with the customtkinter lib';
    flutterDetails.textContent = 'Flutter app for Android. Initially built to meet the needs of a local entrepreneur, and later adapted for personal use. It uses some dependencies such as local-auth for biometrics, shared-preferences for data persistence, and provider for reusing widgets.';
    othersProjects.textContent = 'Others Projects';
    javascriptDetails.textContent = 'Set of websites developed with academic objectives to apply knowledge in HTML, CSS and JS';
    reactDetails.textContent = 'Used React library to leave the site reactive and interactive. Pure JS to apply some logic in the Shopping Cart and changing Themes.';
    homeDetails.textContent = 'Website built to be the home page of your browser, containing space to save your bookmarks.';
    javascriptDetailClass.textContent = 'Set of websites developed with academic objectives to apply knowledge in HTML, CSS and JS';
    reactDetailClass.textContent = 'Used React library to leave the site reactive and interactive. Pure JS to apply some logic in the Shopping Cart and changing Themes.';
    homeDetailClass.textContent = 'Website built to be the home page of your browser, containing space to save your bookmarks';
    maisProjetos.textContent = 'More Projects';
    contactParagraph.textContent = 'I am available for contact, whether for professional opportunities or for a study and improvement team.';
    developer.textContent = '2023-2024 • Developed by @wilsondesouza';
    host.textContent = 'Hosted in GitHub Pages';
}

// Retornar conteúdo dos textos parar português
// Return texts content to Portuguese
function restaurarConteudo() {
    inicioNav.textContent = "Início";
    sobreNav.textContent = conteudoOriginal[1];
    projetosNav.textContent = conteudoOriginal[2];
    contatoNav.textContent = conteudoOriginal[3];
    engineer.textContent = conteudoOriginal[4];
    engineer2.textContent = conteudoOriginal[5];
    iot.textContent = conteudoOriginal[6];
    webDev.textContent = conteudoOriginal[7];
    pythonDev.textContent = conteudoOriginal[8];
    curriculum.href = conteudoOriginal[9];
    hello.textContent = conteudoOriginal[10];
    aboutParagraph.innerHTML = conteudoOriginal[11];
    freelance.textContent = conteudoOriginal[12];
    education.textContent = conteudoOriginal[13];
    certificates.textContent = conteudoOriginal[14];
    certifications.textContent = conteudoOriginal[15];
    engenharia.textContent = conteudoOriginal[16];
    logistica.textContent = conteudoOriginal[17];
    devFlutter.textContent = conteudoOriginal[18];
    projectsTitle.textContent = conteudoOriginal[19];
    projectsParagraph.innerHTML = conteudoOriginal[20];
    pythonDetails.textContent = conteudoOriginal[21];
    pythonDetails2.textContent = conteudoOriginal[22];
    flutterDetails.textContent = conteudoOriginal[23];
    othersProjects.textContent = conteudoOriginal[24];
    javascriptDetails.textContent = conteudoOriginal[25];
    reactDetails.textContent = conteudoOriginal[26];
    homeDetails.textContent = conteudoOriginal[27];
    javascriptDetailClass.textContent = conteudoOriginal[28];
    reactDetailClass.textContent = conteudoOriginal[29];
    homeDetailClass.textContent = conteudoOriginal[30];
    maisProjetos.textContent = conteudoOriginal[31];
    contactParagraph.textContent = conteudoOriginal[32];
    developer.textContent = conteudoOriginal[33];
    host.textContent = conteudoOriginal[34];
}

// Captar ID dos botões de alterar idioma
// Capture buttons ID to change language
const botaoMudar = document.getElementById('english');
const botaoRestaurar = document.getElementById('portuguese');
const botaoIdioma = document.getElementById('botãoIdioma');
const botãoTranslate = document.getElementById('botãoTranslate');

const svg = document.getElementById('meu-svg');
const svg2 = document.getElementById('meu-svg2');
const path = svg.getElementById('meu-path');
const path2 = svg2.getElementById('meu-path2');

// Botão Mudar
botaoMudar.addEventListener('click', function () {
    if (inicioNav.textContent === "Início") {
        path.setAttribute('fill', 'url(#gradiente-2)');
        botaoIdioma.setAttribute('data-social', 'translate2');
        path2.setAttribute('fill', 'url(#gradiente-4)');
        botãoTranslate.setAttribute('class', 'translate2');

        alterarConteudo();
    }
});

// Botão Restaurar
botaoRestaurar.addEventListener('click', function () {
    if (inicioNav.textContent !== "Início") {
        path.setAttribute('fill', 'url(#gradiente-1)');
        botaoIdioma.setAttribute('data-social', 'translate');
        path2.setAttribute('fill', 'url(#gradiente-3)');
        botãoTranslate.setAttribute('class', 'translate');

        restaurarConteudo();
    }
});

// Botão Idioma e Botão Translate
function alternarIdioma() {
    if (inicioNav.textContent === "Início") {
        path.setAttribute('fill', 'url(#gradiente-2)');
        path2.setAttribute('fill', 'url(#gradiente-4)');
        atualizarBotaoIdioma('translate2');
        atualizarBotaoTranslate('translate2');

        alterarConteudo();
    } else {
        path.setAttribute('fill', 'url(#gradiente-1)');
        path2.setAttribute('fill', 'url(#gradiente-3)');
        atualizarBotaoIdioma('translate');
        atualizarBotaoTranslate('translate');
        restaurarConteudo();
    }
}

function atualizarBotaoIdioma(classe) {
    botaoIdioma.setAttribute('data-social', classe);
}

function atualizarBotaoTranslate(classe) {
    botãoTranslate.setAttribute('class', classe);
}

botaoIdioma.addEventListener('click', alternarIdioma);
botãoTranslate.addEventListener('click', alternarIdioma);


/* Enviar Mensagem */
//create show form button
const showForm = document.getElementById('show-form');
const svgForm = document.getElementById('svg-form');

const svgForm1 = `<svg id="show-form_svg" class="feather feather-message-square" fill="none" height="60" stroke="#0d6efd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        viewBox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
const svgForm2 = `<svg id="show-form_svg class="feather feather-x-square" fill="none" height="60" stroke="#0d6efd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
    viewBox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"/><line x1="9" x2="15" y1="9" y2="15"/><line x1="15" x2="9" y1="9" y2="15"/></svg>`;

showForm.addEventListener('click', function () {
    if (svgForm.innerHTML.includes('path')) {
        svgForm.innerHTML = svgForm2;
        document.querySelector('.form-container').style.display = "flex";
    }
    else if (svgForm.innerHTML.includes('rect')) {
        svgForm.innerHTML = svgForm1;
        document.querySelector('.form-container').style.display = "none";
    }
});

// create the send mail button
const btn_mail = document.getElementById('button-mail');
const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    btn_mail.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_gjog8lf';

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            btn_mail.value = 'Enviado';
            btn_mail.disabled = true;
            btn_mail.style.cursor = 'no-drop'
            setTimeout(() => {
                form.reset()
                btn_mail.value = 'Enviar';
                btn_mail.disabled = false;
                btn_mail.style.cursor = 'pointer'
            }, 4000);
        }, (err) => {
            btn_mail.value = 'Erro';
            btn_mail.disabled = true;
            btn_mail.style.cursor = 'no-drop'
            setTimeout(() => {
                form.reset()
                btn_mail.value = 'Enviar';
                btn_mail.disabled = false;
                btn_mail.style.cursor = 'pointer'
            }, 4000);
        });
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

