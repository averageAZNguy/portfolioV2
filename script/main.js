function toggle_drawer() {//toggle collapse menu is-visible
  var drawer = document.getElementsByClassName('mdl-layout__drawer')[0];
  var header = document.getElementsByClassName('mdl-layout__header')[0];
  var obfuscator = document.getElementsByClassName('mdl-layout__obfuscator')[0]
  drawer.classList.toggle("is-visible");
  header.classList.toggle("is-casting-shadow");
  obfuscator.classList.toggle('is-visible');
  if(drawer.getAttribute('aria-hidden') === false){
  	drawer.setAttribute('aria-hidden',true)
  }
}
$(document).ready(function () {
	$('nav a').on("click",function(e){
		toggle_drawer(); 

	});
	
});
