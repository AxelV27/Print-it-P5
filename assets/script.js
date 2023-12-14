const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const flechegauche = document.getElementById("left")
const flechedroite = document.getElementById("right")
const dot1 = document.getElementById("dot__1")
const dot2 = document.getElementById("dot__2")
const dot3 = document.getElementById("dot__3")
const dot4 = document.getElementById("dot__4")


let numslide = 0;

/*** Boucle ***/
function nbrslide(){
	if (numslide < 0) {
		numslide = 3;
	}

	if (numslide > 3) {
		numslide = 0;
	}
	return numslide
}
/*** Action lors du click sur l'une des deux flèches ***/
flechegauche.addEventListener('click', function(){
	numslide--;
	nbrslide()
	slide__dot()
	slide__changement()
	console.log(numslide)
})

flechedroite.addEventListener('click', function(){
	numslide++;
	nbrslide()
	slide__dot()
	slide__changement()
	console.log(numslide)
})

/*** Affichage des points en fonction de la slide ***/
function slide__dot() {
	if(numslide === 0){
		dot1.classList.add('dot_selected')
		dot2.classList.remove('dot_selected')
		dot3.classList.remove('dot_selected')
		dot4.classList.remove('dot_selected')
	}
	if(numslide === 1){
		dot1.classList.remove('dot_selected')
		dot2.classList.add('dot_selected')
		dot3.classList.remove('dot_selected')
		dot4.classList.remove('dot_selected')
	}
	if(numslide === 2){
		dot1.classList.remove('dot_selected')
		dot2.classList.remove('dot_selected')
		dot3.classList.add('dot_selected')
		dot4.classList.remove('dot_selected')
	}
	if(numslide === 3) {
		dot1.classList.remove('dot_selected')
		dot2.classList.remove('dot_selected')
		dot3.classList.remove('dot_selected')
		dot4.classList.add('dot_selected')
	}
}

/*** Changement de slide ***/
const urlprefix= "./assets/images/slideshow/"
function slide__changement(){
	const imagebanner = document.getElementById('banner__image')
	const text = document.getElementById('banner__text')
	let image = slides[numslide].image
	let tagLine = slides[numslide].tagLine
	imagebanner.src = urlprefix + image
	text.innerHTML=""
	const newtag = document.createElement("p")
	newtag.innerHTML = tagLine
	text.appendChild(newtag)
}