$(document).ready(function() {
  $(".barStyle").attr("onclick", "$(this).next().slideToggle('fast'); $(this).toggleClass('selected'); $(this).find('span').toggleClass('flip')");
  $(".barStyle").attr("onkeypress", "if(event.keyCode == (13 || 32)){$(this).next().slideToggle('fast'); $(this).toggleClass('selected'); $(this).find('span').toggleClass('flip')}");
})

$(this).next().slideToggle('fast');
$(this).toggleClass('selected');
$(this).find('span').toggleClass('flip');

if (!this.classList.contains('selected')) {
  this.nextElementSibling.style.height = 'inherit';
  this.nextElementSibling.style.display = 'block';
  this.classList.add('selected');
  this.find('span').classList.add('flip');
} else {
  this.nextElementSibling.style.display = 'none';
  this.nextElementSibling.style.height = '0';
  this.classList.remove('selected');
  this.find('span').classList.remove('flip');
}

function(e) {
  if (!e.currentTarget.classList.contains('selected')) {
    e.currentTarget.nextElementSibling.style.height = 'inherit';
    e.currentTarget.nextElementSibling.style.display = 'block';
    e.currentTarget.classList.add('selected');
    e.currentTarget.querySelector('span').classList.add('flip');
  } else {
    e.currentTarget.nextElementSibling.style.display = 'none';
    e.currentTarget.nextElementSibling.style.height = '0';
    e.currentTarget.classList.remove('selected');
    e.currentTarget.querySelector('span').classList.remove('flip');
  }
}

function(e) {
  if (e.keyCode == (13 || 32)) {
    if (!e.currentTarget.classList.contains('selected')) {
      e.currentTarget.nextElementSibling.style.height = 'inherit';
      e.currentTarget.nextElementSibling.style.display = 'block';
      e.currentTarget.classList.add('selected');
      e.currentTarget.querySelector('span').classList.add('flip');
    } else {
      e.currentTarget.nextElementSibling.style.display = 'none';
      e.currentTarget.nextElementSibling.style.height = '0';
      e.currentTarget.classList.remove('selected');
      e.currentTarget.querySelector('span').classList.remove('flip');
    }
  }
}

// END WORKING CODE --------------------------
// START EDITED AND/OR MINIFIED SECTION ---------------------

(e) => {
  if (!e.currentTarget.classList.contains('selected')) {
    e.currentTarget.nextElementSibling.style.height = 'inherit';
    e.currentTarget.nextElementSibling.style.display = 'block';
    e.currentTarget.classList.add('selected');
    e.currentTarget.querySelector('span').classList.add('flip')
  } else {
    e.currentTarget.nextElementSibling.style.display = 'none';
    e.currentTarget.nextElementSibling.style.height = '0';
    e.currentTarget.classList.remove('selected');
    e.currentTarget.querySelector('span').classList.remove('flip')
  }
}

(e)=>{if(!e.currentTarget.classList.contains('selected')){e.currentTarget.nextElementSibling.style.height='inherit';e.currentTarget.nextElementSibling.style.display='block';e.currentTarget.classList.add('selected');e.currentTarget.querySelector('span').classList.add('flip')}else{e.currentTarget.nextElementSibling.style.display='none';e.currentTarget.nextElementSibling.style.height='0';e.currentTarget.classList.remove('selected');e.currentTarget.querySelector('span').classList.remove('flip')}}

(e) => {
  if (e.keyCode == (13 || 32)) {
    if (!e.currentTarget.classList.contains('selected')) {
      e.currentTarget.nextElementSibling.style.height = 'inherit';
      e.currentTarget.nextElementSibling.style.display = 'block';
      e.currentTarget.classList.add('selected');
      e.currentTarget.querySelector('span').classList.add('flip')
    } else {
      e.currentTarget.nextElementSibling.style.display = 'none';
      e.currentTarget.nextElementSibling.style.height = '0';
      e.currentTarget.classList.remove('selected');
      e.currentTarget.querySelector('span').classList.remove('flip')
    }
  }
}

(e)=>{if(e.keyCode==(13||32)){if(!e.currentTarget.classList.contains('selected')){e.currentTarget.nextElementSibling.style.height='inherit';e.currentTarget.nextElementSibling.style.display='block';e.currentTarget.classList.add('selected');e.currentTarget.querySelector('span').classList.add('flip')}else{e.currentTarget.nextElementSibling.style.display='none';e.currentTarget.nextElementSibling.style.height='0';e.currentTarget.classList.remove('selected');e.currentTarget.querySelector('span').classList.remove('flip')}}}
