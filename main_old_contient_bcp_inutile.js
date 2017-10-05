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


function n_grid(){
	// demande a user nombre de grilles par affichage d un prompt

	nb_saisi= 100;

	while (nb_saisi >70 || nb_saisi< 1) {

		var nb_saisi = prompt("taille de ta grille entre 1 et 70 ? (c débile mais bon je dois apprendre)","t endors pas j ai autre chose à faire");

	};

	// on affiche dans la console pr debugger
	//console.log(nb_saisi);

	return nb_saisi;
};

let nb_saisi=n_grid();


let monTitre = document.querySelector('h3');
monTitre.textContent = 'Ta grille est de '+ nb_saisi ;


/*
//modifier la valeur de width
function modif_div(){
	var div = document.getElementById('gd_carre');

	div.style.width  = ""+nb_saisi+"px";
	div.style.height = ""+nb_saisi+"px";
};
modif_div();
*/
var div;
//creer grille avec div
function many_div(){
	div = document.getElementById('gd_carre');

	//nb_saisi=n_grid();
	console.log(nb_saisi);
/*
	w_petit_div = Math.floor(div.style.width /nb_saisi) +"px" ;
	h_petit_div = Math.floor(div.style.height /nb_saisi) +"px";
*/

	w_petit_div = Math.floor(300 /nb_saisi) +"px" ;
	h_petit_div = Math.floor(300 /nb_saisi) +"px";

	console.log(div.style.width);

	console.log(w_petit_div);
	console.log(h_petit_div);

/* 
	var petit_div = document.getElementById('petit_carre');
    petit_div.setAttribute("id","g0");
    petit_div.setAttribute("class","carre");
    petit_div.setAttribute("border-style","solid");
    petit_div.style.width = w_petit_div ;
    petit_div.style.height = h_petit_div ;
*/
    kmax = nb_saisi **2 ;

	for (var k=1; k=kmax; k++) {
		var petit_div = document.createElement("div");
		//var petit_div = document.getElementById('petit_carre');

	    //petit_div.setAttribute("id","g"+k);
	    petit_div.setAttribute("class","carre");
	    petit_div.setAttribute("border-style","solid");

	    //on parametre la taille des ti carres
	    petit_div.style.width = w_petit_div ;
	    petit_div.style.height = h_petit_div ;

	    gd_carre.appendChild(petit_div);

	}
};
many_div();

/*//modifier la valeur de width
function modif_canvas(){
	var canvas = document.getElementById('canvas1');

	canvas.width = nb_saisi;
	canvas.height=nb_saisi;
};
modif_canvas();






function dessin() {
	var c1=document.getElementById('canvas1');
	var pinceau=c1.getContext("2d");

	var ecart = 50; //largeur d'un côté des cases
	//lignes
	for(var h = ecart ; h < c1.height ; h += ecart) {
	   pinceau.moveTo(0, h); //déplacer le pinceau à (x,y) sans tracer
	   pinceau.lineTo(c1.width, h); //tracer jusqu'à (x,y)
	}
	//colonnes
	for(var w = ecart ; w < c1.width ; w += ecart) {
	   pinceau.moveTo(w, 0);
	   pinceau.lineTo(w, c1.height);
	}
	pinceau.stroke();

}
dessin()*/