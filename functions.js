import {sideMenu,  mainDiv, description, info, footer, mail, searchBar} from './variables.js';

export function validateMail(){
    const mailSubmit=document.querySelector('.confirmar-mail')
    if(mail.value.length > 0 && mail.value.indexOf('@')!== -1 && mail.value.indexOf('.')!== -1 ){
        mailSubmit.disabled=false;
    } else {
        mailSubmit.disabled=true;
    }
}

export function validateSearch(){
    const searchSubmit=document.querySelector('.confirmar-busqueda');
    if (searchBar.value.length>1){
        searchSubmit.disabled=false;
    } else {
        searchSubmit.disabled=true;
    }
}


export function displayFooter(){
    footer.style.height='250px';
    info.style.opacity='0%';
}

export function closeFooter(){
    footer.style.height='0';
    info.style.opacity='100%';
}

export function openMenu() {
    sideMenu.style.width = '25%';
}

export function closeMenu() {
    sideMenu.style.width = '0px';
}

export function backToNormal() {
    mainDiv.style.backgroundImage = "url('/img/backgroundmujer.jpg')"
    const opcionHombres = document.querySelector('.hombres');
    const opcionChicos = document.querySelector('.chicos');
    description.textContent = `Explore this week's women collection`
    const htmlHombre = `<i class="fas fa-arrow-left"></i>
        <h3>HOMBRES</h3>`
    const htmlChico = `<i class="fas fa-arrow-right"></i>
         <h3>CHICOS</h3>`
    opcionHombres.innerHTML = "";
    opcionChicos.innerHTML = "";
    opcionHombres.insertAdjacentHTML('afterbegin', htmlHombre);
    opcionChicos.insertAdjacentHTML('afterbegin', htmlChico);
    const izquierda = opcionHombres.querySelector('.fa-arrow-left');
    const derecha = opcionChicos.querySelector('.fa-arrow-right');
    izquierda.addEventListener('click', goLeft);
    derecha.addEventListener('click', goRight);
}

export function goLeft() {
    if (description.textContent === `Explore this week's children collection`) {
        backToNormal();
    }
    else {
        mainDiv.style.backgroundImage = "url('/img/backgroundhombre.jpg')"
        description.textContent = `Explore this week's man collection`
        const opcionHombres = document.querySelector('.hombres');
        const textoMujer = document.querySelector('.chicos h3')
        opcionHombres.innerHTML = ""
        textoMujer.textContent = "MUJERES"
    }
}

export function goRight() {
    let description = document.querySelector('h4');
    if (description.textContent === `Explore this week's man collection`) {
        backToNormal();
    }
    else {
        mainDiv.style.backgroundImage = "url('/img/backgroundchicos.jpg')";
        description.textContent = `Explore this week's children collection`;
        const opcionChicos = document.querySelector('.chicos');
        opcionChicos.innerHTML = "";
        const textoMujer = document.querySelector('.hombres h3');
        textoMujer.textContent = "MUJERES";
    }
}
