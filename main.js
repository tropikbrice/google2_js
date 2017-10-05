/*let test = document.querySelector('div');

test.style.display = 'none';
*/
function open_div(boutton, id) {
	// on recupere le id de la div qu'on veut cacher
	var div = document.getElementById(id);
//	var div = document.querySelector('id');

	if (div.style.display === "none" ){
		// si div cachee : on affiche et on change valeur du bouton
		div.style.display= "block";
		bouton.innerHTML = "masquer les elements centraux";
	} else{
		//sinon on masque et on change valeur du bouton
		div.style.display = "none";
		bouton.innerHTML = "afficher les elements centraux";
	}
}

