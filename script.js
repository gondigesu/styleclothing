
import {barMenu, xMenu, arrowLeft, arrowRight, info, xFooter, mail, searchBar} from './variables.js';
import {validateMail, validateSearch, displayFooter, closeFooter, openMenu, closeMenu, goLeft, goRight} from './functions.js';


barMenu.addEventListener('click', openMenu);
xMenu.addEventListener('click', closeMenu);
arrowLeft.addEventListener('click', goLeft);
arrowRight.addEventListener('click', goRight);
info.addEventListener('click',displayFooter);
xFooter.addEventListener('click', closeFooter);
mail.addEventListener('input', validateMail)
searchBar.addEventListener('input', validateSearch)
// //situación default
