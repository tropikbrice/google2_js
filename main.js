/*let test = document.querySelector('div');

test.style.display = 'none';
*/
function open_div(bouton, id) {
	// on recupere le id de la div qu'on veut cacher
	var div = document.getElementById(id);
//	var div = document.querySelector('id');

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

