//resource: https://lukelowrey.com/css-variable-theme-switcher/

const toggleBtns = document.querySelectorAll('.toggle-theme__wrapper input[type=radio]');
docEl = document.documentElement
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme:dark)')

var storedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? "dark" : "light");
if (storedTheme)
   docEl.setAttribute('data-theme', storedTheme)


toggleBtns.forEach((btn) => {
    btn.addEventListener('click', _ => {
        let currentTheme = docEl.getAttribute("data-theme");
        let themeMode = "dark";

        if (currentTheme === 'dark') {
            themeMode = 'light'
        }

        docEl.setAttribute('data-theme', themeMode)
        localStorage.setItem('theme', themeMode);
    })
});