 import './styles.css';
 import template from "./templates/main.hbs";    
import data from "./menu.json";
 

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const refs = {
      cardsMenu: document.querySelector('.js-menu'),
      themeBtn: document.querySelector(".theme-switch__toggle"),
      body: document.querySelector('body'),
  }

// 1.Добавлена разметка

window.onload = () => {
     refs.cardsMenu.innerHTML = template(data);
 }
 
// 2.Изменение темы.


const changeTheme = (e) => {
    if (!e.currentTarget.checked) {
        if (refs.body.classList.contains(Theme.DARK)) {
            refs.body.classList.remove(Theme.DARK);
        }
        refs.body.classList.add(Theme.LIGHT);
        if (localStorage.getItem('pageTheme') === "true") {
            localStorage.removeItem('pageTheme');;
        }
        return;
    }
    refs.body.classList.add(Theme.DARK);
    saveToLocalStorage(e);
}

const saveToLocalStorage = (e) =>
{
    e.preventDefault();
    
    const checkedThemeDark = e.currentTarget.checked;
    if (e.currentTarget.checked) {
        localStorage.setItem('pageTheme', checkedThemeDark);
    }
    
}
refs.themeBtn.addEventListener("change", changeTheme);

// 3. Использование Local Storage
const getThemeFromLocalStorage = () => {
    const savedTheme = localStorage.getItem('pageTheme');
    if (savedTheme) {
        refs.body.classList.add(Theme.DARK);    
    }
}
getThemeFromLocalStorage();