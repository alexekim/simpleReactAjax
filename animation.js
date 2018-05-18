$(document).ready(function() {
  $(".barStyle").attr("onclick", "$(this).next().slideToggle('fast'); $(this).toggleClass('selected'); $(this).find('span').toggleClass('flip')");
  $(".barStyle").attr("onkeypress", "if(event.keyCode == (13 || 32)){$(this).next().slideToggle('fast'); $(this).toggleClass('selected'); $(this).find('span').toggleClass('flip')}");
})

$(this).next().slideToggle('fast');
$(this).toggleClass('selected');
$(this).find('span').toggleClass('flip');


if (!this.classList.contains("selected") {
  this.nextElementSibling.style.height = "inherit"; //do this without jQuery
  this.classList.add("selected");
} else{
  this.nextElementSibling.style.height = "0";
}



if (event.keyCode == (13 || 32)) {
  $(this).next().slideToggle('fast');
  $(this).toggleClass('selected');
  $(this).find('span').toggleClass('flip')
}
