// Alterar o tema entre claro e escuro
// Switch between light mode and dark mode
const themeToggle = document.getElementById('toggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = getComputedStyle(document.documentElement).getPropertyValue('--background-light');
        // Tema Escuro
        // Dark mode
    if (currentTheme.trim() === 'white') {
        
        document.documentElement.style.setProperty('--background-light', '#24262a');
        document.documentElement.style.setProperty('--text-light', '#CECECE');
        document.documentElement.style.setProperty('--background-dark', 'white');
        document.documentElement.style.setProperty('--text-dark', '#24262a');
        document.documentElement.style.setProperty('--colorButton-light-hover', 'white');
        document.documentElement.style.setProperty('--colorButton-dark-hover', '#24262a');
        document.documentElement.style.setProperty('--split-background-white', '#2e3033');
        document.documentElement.style.setProperty('--theme-toggle-white', 'gold');

        /*document.documentElement.style.setProperty('--background-gradient-escuro', 'linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(66,70,72,1) 30%, rgba(233,238,240,1) 50%, rgba(66,70,72,1) 70%, rgba(0,0,0,1) 90%)');*/
    } else {
        // Tema Claro
        // Light mode
        document.documentElement.style.setProperty('--background-light', 'white');
        document.documentElement.style.setProperty('--text-light', '#24262a');
        document.documentElement.style.setProperty('--background-dark', '#24262a');
        document.documentElement.style.setProperty('--text-dark', '#CECECE');
        document.documentElement.style.setProperty('--colorButton-light-hover', '#24262a');
        document.documentElement.style.setProperty('--colorButton-dark-hover', 'white');
        document.documentElement.style.setProperty('--split-background-white', '#f7f9fb');
        document.documentElement.style.setProperty('--theme-toggle-white', 'white');

        /*document.documentElement.style.setProperty('--background-gradient-escuro', 'linear-gradient(90deg, #CECECE 10%, rgba(66,70,72,1) 30%, rgba(0,0,0,1) 50%, rgba(66,70,72,1) 70%, #CECECE) 90%');*/
    }
});
