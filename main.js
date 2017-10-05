/*let test = document.querySelector('div');

test.style.display = 'none';
*/
function open_div(bouton, id) {
	// on recupere le id de la div qu'on veut cacher
	var div = document.getElementById(id);

	if (div.style.display === "none" ){
		// si div cachee : on affiche et on change valeur bouton
		div.style.display= "block";
		bouton.innerHTML = "masquer les elements centraux";
	} else{
		//sinon on masque et on change valeur du bouton
		div.style.display = "none";
		bouton.innerHTML = "afficher les elements centraux";
	}
};

function send_google(id) {
	// fonction qui va retourner le texte entre dans la barre recherceh
	//ds une nouvelle fenetre avec la recherche google correspondante

	// recuper le texte de la barre recherche du parametre id
	var texte_entre = document.getElementById(id).value ;

	// il faut aller a cette adresse via return :
	return window.location.href=( 'https://www.google.fr/search?source=hp&q='+ texte_entre) ;
}

function popup(){
	// affiche une alerte
		alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please');
}

//affiche au bout de ... ms de la fonction en parametre cad popup() !!
setTimeout("popup();", 8000);



/******************************************
		Generateur de grille
*/

function n_grid(){
	// demande a user nombre de grilles par affichage d un prompt

	nb_saisiii= 100;

/*	On verifie que la valeur est toujours comprise entre 1 et 70*/
	while (nb_saisiii >70 || nb_saisiii< 1) {

		var nb_saisiii = prompt("taille de ta grille entre 1 et 70 ? (c débile mais bon je dois apprendre)","t endors pas j ai autre chose à faire");

	};

	// on affiche dans la console pr debugger
	//console.log(nb_saisiii);

	return nb_saisiii;
};

// on definit en variable globale pour etre utilisee ds fonction
let nb_saisi=n_grid();


// on affiche la valeur saisie en titre html
let monTitre = document.querySelector('h3');
monTitre.textContent = 'Ta grille est de '+ nb_saisi ;



var div;
//creer grille avec div
function many_div(){

	/* initialisation de div*/
	div = document.getElementById('gd_carre');

	console.log(div.style.width);
	console.log(div.style.height );

	// on calcule les dimensions des petits carres
	w_petit_div = Math.floor(300 /nb_saisi) +"px" ;
	h_petit_div = Math.floor(300 /nb_saisi) +"px";


	// on doit realiser N*N petits carres
    kmax = nb_saisi**2 ;
    console.log(kmax);

    kmax= 6;

	for (var k=1; k=kmax; k++) {

		//initialisation d un div en html:
		var petit_div = document.createElement("div");

		//on definit qques unes de ces proprietes,
		//meme classe pour tous, utile pour le CSS :
	    //petit_div.setAttribute("id","g"+k);
	    petit_div.setAttribute("class","carre");

	    // ci dessous inutile car on le fait avec CSS
	    //petit_div.setAttribute("border-style","solid");

	    //on fixe la taille des ti carres
	    petit_div.style.width = w_petit_div ;
	    petit_div.style.height = h_petit_div ;

	    // on append chacun au grad carre initial
	    gd_carre.appendChild(petit_div);

	}
};
many_div();
