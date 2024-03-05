// Alterar o tema entre claro e escuro
// Switch between light mode and dark mode
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = getComputedStyle(document.documentElement).getPropertyValue('--background-light');

        // Tema Escuro
        // Dark mode
    if (currentTheme.trim() === 'white') {
        
        document.documentElement.style.setProperty('--background-light', 'black');
        document.documentElement.style.setProperty('--text-light', '#CECECE');
        document.documentElement.style.setProperty('--background-dark', 'white');
        document.documentElement.style.setProperty('--text-dark', 'black');
        document.documentElement.style.setProperty('--colorButton-light-hover', '#CECECE');
        document.documentElement.style.setProperty('--colorButton-dark-hover', 'black');
        /*document.documentElement.style.setProperty('--background-gradient-escuro', 'linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(66,70,72,1) 30%, rgba(233,238,240,1) 50%, rgba(66,70,72,1) 70%, rgba(0,0,0,1) 90%)');*/
    } else {
        // Tema Claro
        // Light mode
        document.documentElement.style.setProperty('--background-light', 'white');
        document.documentElement.style.setProperty('--text-light', 'black');
        document.documentElement.style.setProperty('--background-dark', '#24262a');
        document.documentElement.style.setProperty('--text-dark', 'white');
        document.documentElement.style.setProperty('--colorButton-light-hover', 'black');
        document.documentElement.style.setProperty('--colorButton-dark-hover', '#CECECE');
        /*document.documentElement.style.setProperty('--background-gradient-escuro', 'linear-gradient(90deg, #CECECE 10%, rgba(66,70,72,1) 30%, rgba(0,0,0,1) 50%, rgba(66,70,72,1) 70%, #CECECE) 90%');*/
    }
});