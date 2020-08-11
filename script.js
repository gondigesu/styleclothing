const barMenu = document.querySelector('.menuicon');
const xMenu = document.querySelector('.closemenu');
const sideMenu = document.querySelector('.sidenav');
const arrowLeft = document.querySelector('.fa-arrow-left');
const arrowRight = document.querySelector('.fa-arrow-right');
const mainDiv = document.querySelector('.background');
const description = document.querySelector('h4')


function openMenu() {
    sideMenu.style.width = '25%';
}

function closeMenu() {
    sideMenu.style.width = '0px';
}

function backToNormal() {
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

function goLeft() {
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

function goRight() {
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


console.log(mainDiv.style.backgroundImage)
barMenu.addEventListener('click', openMenu);
xMenu.addEventListener('click', closeMenu);
arrowLeft.addEventListener('click', goLeft)
arrowRight.addEventListener('click', goRight)


// //situación default
