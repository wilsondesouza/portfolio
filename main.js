// Carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    // Define o tempo de exibição da tela de carregamento em milissegundos (5000 = 5 segundos)
    const tempoExibicao = 2000;

    // Adiciona a classe 'loaded' ao 'body' após o tempo definido
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, tempoExibicao);
});

// Função para exibir o texto letra por letra
function typeText(texto) {
    const typingTextElement = document.getElementById("typing-text");
    let index = 0;

    if (typingTextElement.textContent === texto) {
        return; // Sai da função se o texto já estiver completo
    }

    // Função para adicionar o texto letra por letra
    function addText() {
        if (index < texto.length) {
            typingTextElement.textContent += texto.charAt(index);
            index++;
            setTimeout(addText, 100);
        }
    }
    if (typingTextElement.textContent !== texto) {
        setTimeout(addText, 3000);
    }
}
typeText("Desenvolvedor Mobile & Front-End   |   Engenheiro da Computação.");

// Alterar idioma entre Português e Inglês
// Change language between Portuguese and English

// Captar ID das tags
// Captture tags ID
const inicioNav = document.getElementById('inicio-nav');
const sobreNav = document.getElementById('sobre-nav');
const projetosNav = document.getElementById('projetos-nav');
const contatoNav = document.getElementById('contato-nav');
const curriculum = document.getElementById('curriculum');
const hello = document.getElementById('hello');
const aboutParagraph = document.getElementById('about-paragraph');
const freelance = document.getElementById('freelance');
const education = document.getElementById('education');
const certificates = document.getElementById('certificates');
const engenharia = document.getElementById('engenharia');
const logistica = document.getElementById('logistica');
const devJava = document.getElementById('dev-java');
const devFlutter = document.getElementById('dev-flutter');
const projectsTitle = document.getElementById('projects-title');
const projectsParagraph = document.getElementById('projects-paragraph');
const pythonDetails = document.getElementById('python-details');
const reactDetails = document.getElementById('react-details');
const flutterDetails = document.getElementById('flutter-details');
const othersProjects = document.getElementById('others-projects');
const unityDetails = document.getElementById('unity-details');
const javascriptDetails = document.getElementById('javascript-details');
const chatDetails = document.getElementById('chat-details');
const maisProjetos = document.getElementById('mais-projetos');
const contactParagraph = document.getElementById('contact-paragraph');
const developer = document.getElementById('developer');
const host = document.getElementById('host');


// Guardar texto original (Em português)
// Save original text (In Portuguese)
const conteudoOriginal = [inicioNav.textContent, sobreNav.textContent, projetosNav.textContent, contatoNav.textContent, curriculum.href, hello.textContent, aboutParagraph.innerHTML, freelance.textContent, education.textContent, certificates.textContent, engenharia.textContent, logistica.textContent, devJava.textContent, devFlutter.textContent, projectsTitle.textContent, projectsParagraph.innerHTML, pythonDetails.textContent, reactDetails.textContent, flutterDetails.textContent, othersProjects.textContent, unityDetails.textContent, javascriptDetails.textContent, chatDetails.textContent, maisProjetos.textContent, contactParagraph.textContent, developer.textContent, host.textContent,];

// Alterar conteúdo dos textos parar inglês
// Change texts content to English
function alterarConteudo() {
    const typingTextElement = document.getElementById("typing-text");
    typingTextElement.textContent = "";
    typeText("Mobile & Front-End Developer   |   Computer Engineer.");

    inicioNav.textContent = 'Home';
    sobreNav.textContent = 'About';
    projetosNav.textContent = 'Projects';
    contatoNav.textContent = 'Contact';
    curriculum.href = 'assets/curriculum/wilsonsouzajunior_english.pdf';
    hello.textContent = 'Hello, my name is Wilson';
    aboutParagraph.innerHTML = 'Briefly, I can say that I consider myself an organized and systematic person, ethical and professional, investigative, conventional and realistic (References to the Holland test).<br><br> Because of this, I decided to make a career transition to one that better suits my profile, and so I decided to enter the IT area when I started my studies in Computer Engineering. <br><br> Since then, I have constantly sought new knowledge about the various technologies in the area, always qualifying myself through certificates. And to put the acquired skills into practice, I seek an internship, to also learn new skills and tools with the intention of developing my career.';
    freelance.textContent = 'Working on my own personal projects and for small entrepreneur in the region';
    education.textContent = 'Education';
    certificates.textContent = 'Certificates';
    engenharia.textContent = 'Computer Engineering';
    logistica.textContent = 'Logistics';
    devJava.textContent = 'Java development with Cloud';
    devFlutter.textContent = 'Mobile Development with Flutter';
    projectsTitle.textContent = 'Projects';
    projectsParagraph.innerHTML = 'Below I will leave some projects that I have already developed. From simple, practical, functional projects to the most complex. <br> Some projects were created to serve as an assessment for some courses, and others were made to assimilate and solidify my knowledge and skills, these being personal projects.';
    pythonDetails.textContent = 'Desktop application programmed in Python using the Custom Tkinter library for the creation of the graphical interface. Dictionaries were used to search for and return values and lists for the generation of buttons.';
    reactDetails.textContent = 'Website built to complete the Nu Institute course. Used React library to make the site responsive and interactive. Vanilla JavaScript was also used to apply some logic to the Shopping Cart and Theme change.';
    flutterDetails.textContent = 'Flutter app for Android. Initially built to meet the needs of a local entrepreneur, and later adapted for personal use. It uses some dependencies such as local-auth for biometrics, shared-preferences for data persistence, and provider for reusing widgets.';
    othersProjects.textContent = 'Others Projects';
    unityDetails.textContent = "Game developed in Unity with C#. It's a simple 3D shooter game with a character who can jump, move, pick up items, and destroy enemies. The game has a simple menu and a 'game over' screen";
    javascriptDetails.textContent = 'Webgame with simple HTML construction, some CSS stylings and JavaScript programming to interact with the user.';
    chatDetails.textContent = 'Application using React to consume the Open Ai API to simulate a generative AI of texts.';
    maisProjetos.textContent = 'More Projects';
    contactParagraph.textContent = 'I am available for contact, whether for professional opportunities or for a study and improvement team.';
    developer.textContent = '2023-2024 • Developed by @wilsondesouza';
    host.textContent = 'Hosted in GitHub Pages';
}

// Retornar conteúdo dos textos parar português
// Return texts content to Portuguese
function restaurarConteudo() {
    const typingTextElement = document.getElementById("typing-text");
    typingTextElement.textContent = "";
    typeText("Desenvolvedor   /   Engenheiro da Computação.");

    inicioNav.textContent = "Início";
    sobreNav.textContent = conteudoOriginal[1];
    projetosNav.textContent = conteudoOriginal[2];
    contatoNav.textContent = conteudoOriginal[3];
    curriculum.href = conteudoOriginal[4];
    hello.textContent = conteudoOriginal[5];
    aboutParagraph.innerHTML = conteudoOriginal[6];
    freelance.textContent = conteudoOriginal[7];
    education.textContent = conteudoOriginal[8];
    certificates.textContent = conteudoOriginal[9];
    engenharia.textContent = conteudoOriginal[10];
    logistica.textContent = conteudoOriginal[11];
    devJava.textContent = conteudoOriginal[12];
    devFlutter.textContent = conteudoOriginal[13];
    projectsTitle.textContent = conteudoOriginal[14];
    projectsParagraph.innerHTML = conteudoOriginal[15];
    pythonDetails.textContent = conteudoOriginal[16];
    reactDetails.textContent = conteudoOriginal[17];
    flutterDetails.textContent = conteudoOriginal[18];
    othersProjects.textContent = conteudoOriginal[19];
    unityDetails.textContent = conteudoOriginal[20];
    javascriptDetails.textContent = conteudoOriginal[21];
    chatDetails.textContent = conteudoOriginal[22];
    maisProjetos.textContent = conteudoOriginal[23];
    contactParagraph.textContent = conteudoOriginal[24];
    developer.textContent = conteudoOriginal[25];
    host.textContent = conteudoOriginal[26];
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

