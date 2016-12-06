function enfoco(caja){
   caja.className = 'enfoco';
   var padreli = caja.parentNode;

   var hijo = document.getElementById("ayuda");
   if(hijo != undefined){
   	 hijo.parentNode.removeChild(hijo);
   }

   padreli.innerHTML += "<div class='ayuda' id='ayuda'>Texto<div>";
}

function fuerafoco(caja){
	caja.className = '';
}

