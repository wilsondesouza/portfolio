// Alterar idioma entre Português e Inglês
// Change language between Portuguese and English

// Captar ID das tags
// Captture tags ID
const btn = document.getElementById('btn');
const projects = document.getElementById('projects');
const python = document.getElementById('python2');
const react = document.getElementById('react2');
const flutter = document.getElementById('flutter2');
const contact = document.getElementById('contact');
const contactParagraph = document.getElementById('contactParagraph');
const footer = document.getElementById('footer');
const curriculum = document.getElementById('curriculum');
const subtitle = document.getElementById('subtitle');


// Captar ID dos botões de alterar idioma
// Capture buttons ID to change language
const botaoMudar = document.getElementById('english');
const botaoRestaurar = document.getElementById('portuguese');

// Guardar texto original (Em português)
// Save original text (In Portuguese)
const conteudoOriginal = [btn.textContent, projects.textContent, python.textContent, react.innerHTML, flutter.innerHTML, contact.textContent, contactParagraph.textContent, footer.textContent, curriculum.href, subtitle.innerHTML];

// Alterar conteúdo dos textos parar inglês
// Change texts content to English
function alterarConteudo() {
    btn.textContent = 'Idioma';
    projects.textContent = 'Projects';
    python.textContent = 'Code written in Python using the Custom Tkinter library to create the graphical interface. Therefore, the implementation of the POO was necessary. Dictionaries were used to search and return values ​​and lists to generate the buttons.';
    react.innerHTML = 'Website built to complete the Descomplica + Instituto Nu course challenge. Used React library to make the website reactive and interactive.<br> JavaScript was also used to apply some logic to the Shopping Cart and to change Themes.';
    flutter.innerHTML = 'Application made in Flutter for Android. Initially built to meet the needs of a local merchant, and later adapted for personal use. <br> Used dependencies such as Provider and Shared Preferences to take advantage of information on other pages and save them even after restarting the application. <br> Other dependencies such as Local Auth and Package Info were used to implement Biometrics in the login system and to expose the current version of the application';
    contactParagraph.textContent = 'I am available for contact, whether for professional opportunities or for a study and improvement team';
    footer.textContent = '2023 - Developed By @wilsondesouza. Hosted in Git Hub Pages';
    curriculum.href = "../assets/curriculum/wilsonsouzajunior_english.pdf";
    subtitle.innerHTML =  "• Rio de Janeiro/Brazil <br> • Computer Engineer";
}

// Retornar conteúdo dos textos parar português
// Return texts content to Portuguese
function restaurarConteudo() {
    btn.textContent = conteudoOriginal[0];
    projects.textContent = conteudoOriginal[1];
    python.textContent = conteudoOriginal[2];
    react.innerHTML = conteudoOriginal[3];
    flutter.innerHTML = conteudoOriginal[4];
    contact.textContent = conteudoOriginal[5];
    contactParagraph.textContent = conteudoOriginal[6];
    footer.textContent = conteudoOriginal[7];
    curriculum.href = conteudoOriginal[8];
    subtitle.innerHTML = conteudoOriginal[9];
}

botaoMudar.addEventListener('click', alterarConteudo);
botaoRestaurar.addEventListener('click', restaurarConteudo);

// Alterar o tema entre claro e escuro
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = getComputedStyle(document.documentElement).getPropertyValue('--background-light');

    // Tema Escuro
    if (currentTheme.trim() === '#CECECE') {

        document.documentElement.style.setProperty('--background-light', 'black');
        document.documentElement.style.setProperty('--text-light', '#CECECE');
        document.documentElement.style.setProperty('--background-dark', '#CECECE');
        document.documentElement.style.setProperty('--text-dark', 'black');
        document.documentElement.style.setProperty('--backgroundButton-light-hover', 'gold');
        document.documentElement.style.setProperty('--backgroundButton-dark-hover', 'green');
        document.documentElement.style.setProperty('--colorButton-light-hover', '#CECECE');
        document.documentElement.style.setProperty('--colorButton-dark-hover', 'black');
        /*document.documentElement.style.setProperty('--background-gradient-escuro', 'linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(66,70,72,1) 30%, rgba(233,238,240,1) 50%, rgba(66,70,72,1) 70%, rgba(0,0,0,1) 90%)');*/
    } else {
        // Tema Claro
        document.documentElement.style.setProperty('--background-light', '#CECECE');
        document.documentElement.style.setProperty('--text-light', 'black');
        document.documentElement.style.setProperty('--background-dark', 'black');
        document.documentElement.style.setProperty('--text-dark', '#CECECE');
        document.documentElement.style.setProperty('--backgroundButton-light-hover', 'green');
        document.documentElement.style.setProperty('--backgroundButton-dark-hover', 'gold');
        document.documentElement.style.setProperty('--colorButton-light-hover', 'black');
        document.documentElement.style.setProperty('--colorButton-dark-hover', '#CECECE');
        /*document.documentElement.style.setProperty('--background-gradient-escuro', 'linear-gradient(90deg, #CECECE 10%, rgba(66,70,72,1) 30%, rgba(0,0,0,1) 50%, rgba(66,70,72,1) 70%, #CECECE) 90%');*/
    }
});

//Transformar o cabeçalho de acordo com o scroll do mouse
// Change the header layout accordingly at the press of the scroll wheel

    // Obtendo o elementos
    // Getting the elements 
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const maincontent = document.getElementById('maincontent');
const sidebarScroll = document.querySelector('.sidebar.scroll');
const textos = ["Início", "Sobre Mim", "Contato", "Projetos"];
const lista = document.getElementById('minha-lista');
const myProjects = document.querySelector('.myProjects');
const aboutMe = document.querySelector('.about-me');



    // Função para verificar a posição de rolagem e adicionar/remover a classe 'scroll' e fazer outras pequenas mudanças
    // Function to verify the scroll wheel position and then add/remove the class 'scroll' and make other minor changes
function checkHeaderPosition() {
    if (window.scrollY > 0) {
        header.classList.add('scroll');
        sidebar.classList.add('scroll');
        maincontent.classList.add('scroll');
        myProjects.style.display = 'grid';
        lista.style.display = 'grid';
        aboutMe.href = '#';
        const paragrafos = sidebarScroll.querySelectorAll('p');
        paragrafos.forEach((paragrafo, index) => {
            if (textos[index]) {
                paragrafo.textContent = textos[index];
            }
        });
    } else {
        header.classList.remove('scroll');
        sidebar.classList.remove('scroll');
        maincontent.classList.remove('scroll');
        myProjects.style.display = 'none';
        lista.style.display = 'flex';
        aboutMe.href= "../index.html";
        const paragrafos = sidebarScroll.querySelectorAll('p');
        paragrafos.forEach(paragrafo => {
            paragrafo.textContent = '';
        }); 
    }
}

    // Ouça o evento 'scroll' para chamar a função quando o usuário rolar a página
    // Listen the 'scroll'' event to call the function when the user scrolls down/up
window.addEventListener('scroll', checkHeaderPosition);
checkHeaderPosition();

// Alterar a source das imagens de acordo com a largura da tela
// Change the image source according to screen width
function verificarLarguraDaTela() {
    const larguraDaTela = window.innerWidth; 
    const reactImage = document.getElementById("react-image");
    const flutterImage = document.getElementById("flutter-image");

    if (larguraDaTela < 1023) { 
        reactImage.src = "../assets/imgs/react/rm1.gif"
        flutterImage.src = "../assets/imgs/flutter/fm1.gif"
    } else {
        reactImage.src = "../assets/imgs/react/r1.gif"
        flutterImage.src = "../assets/imgs/flutter/f1.gif"
    }
}
  // Chamar função quando a página for carregada e quando a tela for redimensionada
  // Call the function when the page loads or when the screen size changes
    window.onload = verificarLarguraDaTela;
    window.onresize = verificarLarguraDaTela;