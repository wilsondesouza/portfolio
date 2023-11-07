// Alterar idioma entre Português e Inglês
// Change language between Portuguese and English

    // Captar ID das tags
    // Captture tags ID
const btn = document.getElementById('btn');
const hello = document.getElementById('hello');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const projectsParagraph = document.getElementById('projectsParagraph');
const python = document.getElementById('python');
const react = document.getElementById('react');
const flutter = document.getElementById('flutter');
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
const conteudoOriginal = [btn.textContent, hello.textContent, about.innerHTML , skills.textContent, projects.textContent, projectsParagraph.innerHTML, python.textContent, react.textContent, flutter.textContent, contact.textContent, contactParagraph.textContent, footer.textContent, curriculum.href, subtitle.innerHTML];

    // Alterar conteúdo dos textos parar inglês
    // Change texts content to English
function alterarConteudo() {
    btn.textContent = 'Idioma';
    hello.textContent = 'Hello, my name is Wilson';
    about.innerHTML  = 'Briefly, I can say that I consider myself an organized and systematic person, ethical and professional, investigative, conventional and realistic (References to the Holland test).<br><br> Because of this, I decided to make a career transition to one that better suits my profile, and so I decided to enter the IT area when I started my studies in Computer Engineering. <br><br> Since then, I have constantly sought new knowledge about the various technologies in the area, always qualifying myself through certificates. And to put the acquired skills into practice, I seek an internship, to also learn new skills and tools with the intention of developing my career.';
    skills.textContent = 'Skills/Tools';
    projects.textContent = 'Projects';
    projectsParagraph.innerHTML  = 'Below I will leave some projects that I have already developed. From simple, practical, functional projects to the most complex. <br><br> Some projects were created to serve as an assessment for some courses, and others were made to assimilate and solidify my knowledge and skills, these being personal projects.';
    python.textContent = 'Python was the first language I started learning, so I decided to create this repository where I was building, evolving and refining my first personal code, thus making it possible to check my own evolution in Python';
    react.textContent = 'Evolution of a HTML, CSS and Bootstrap project, applying some logic in JavaScript and functionality with React. Made to complete a challenge on the Descomplica/Instituto Nu course.';
    flutter.textContent = 'Application made in Flutter for Android. Initially built to meet the needs of a local merchant, and later adapted for personal use';
    contact.textContent = 'Contact';
    contactParagraph.textContent = 'I am available for contact, whether for professional opportunities or for a study and improvement team';
    footer.textContent = '2023 - Developed By @wilsondesouza. Hosted in Git Hub Pages';
    curriculum.href = "assets/curriculum/wilsonsouzajunior_english.pdf";
    subtitle.innerHTML =  "• Rio de Janeiro/Brazil <br> • Computer Engineer";

}

    // Retornar conteúdo dos textos parar português
    // Return texts content to Portuguese
function restaurarConteudo() {
    btn.textContent = conteudoOriginal[0];
    hello.textContent = conteudoOriginal[1];
    about.innerHTML = conteudoOriginal[2];
    skills.textContent = conteudoOriginal[3];
    projects.textContent = conteudoOriginal[4];
    projectsParagraph.innerHTML = conteudoOriginal[5];
    python.textContent = conteudoOriginal[6];
    react.textContent = conteudoOriginal[7];
    flutter.textContent = conteudoOriginal[8];
    contact.textContent = conteudoOriginal[9];
    contactParagraph.textContent = conteudoOriginal[10];
    footer.textContent  = conteudoOriginal[11];
    curriculum.href = conteudoOriginal[12];
    subtitle.innerHTML = conteudoOriginal[13];
}

botaoMudar.addEventListener('click', alterarConteudo);
botaoRestaurar.addEventListener('click', restaurarConteudo);


// Alterar o tema entre claro e escuro
// Switch between light mode and dark mode
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = getComputedStyle(document.documentElement).getPropertyValue('--background-light');

        // Tema Escuro
        // Dark mode
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
        // Light mode
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
const textos = ["Início", "Sobre Mim", "Projetos", "Contato"]
const lista = document.getElementById('minha-lista');
const home = document.querySelector('.home');

    // Função para verificar a posição de rolagem e adicionar/remover a classe 'scroll' e fazer outras pequenas mudanças
    // Function to verify the scroll wheel position and then add/remove the class 'scroll' and make other minor changes
function checkHeaderPosition() {
    if (window.scrollY > 0) {
        header.classList.add('scroll');
        sidebar.classList.add('scroll');
        maincontent.classList.add('scroll');  
        home.style.display = 'grid';
        lista.style.display = 'grid';
 
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
        home.style.display = 'none';
        lista.style.display = 'flex';

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

    if (larguraDaTela < 767) { 
        reactImage.src = "assets/imgs/react/rm6.png"
        flutterImage.src = "assets/imgs/flutter/fm1.png"
    } else {
        reactImage.src = "assets/imgs/react/r6.png"
        flutterImage.src = "assets/imgs/flutter/f1.png"
    }
}
  // Chamar função quando a página for carregada e quando a tela for redimensionada
  // Call the function when the page loads or when the screen size changes
    window.onload = verificarLarguraDaTela;
    window.onresize = verificarLarguraDaTela;

