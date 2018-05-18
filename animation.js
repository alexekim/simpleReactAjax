$(document).ready(function() {
  $(".barStyle").attr("onclick", "$(this).next().slideToggle('fast'); $(this).toggleClass('selected'); $(this).find('span').toggleClass('flip')");
  $(".barStyle").attr("onkeypress", "if(event.keyCode == (13 || 32)){$(this).next().slideToggle('fast'); $(this).toggleClass('selected'); $(this).find('span').toggleClass('flip')}");
})

$(this).next().slideToggle('fast');
$(this).toggleClass('selected');
$(this).find('span').toggleClass('flip');


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

(e) => {
  if (e.key=='Enter') {
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
    e.currentTarget.nextElementSibling.classList.add('show');
    e.currentTarget.nextElementSibling.classList.remove('hide');
    e.currentTarget.classList.add('selected');
    e.currentTarget.querySelector('span').classList.add('flip');
  } else {
    e.currentTarget.nextElementSibling.classList.remove('show');
    e.currentTarget.nextElementSibling.classList.add('hide');
    e.currentTarget.classList.remove('selected');
    e.currentTarget.querySelector('span').classList.remove('flip');
  }
}

(e)=>{if(!e.currentTarget.classList.contains('selected')){e.currentTarget.nextElementSibling.classList.add('show');e.currentTarget.nextElementSibling.classList.remove('hide');e.currentTarget.classList.add('selected');e.currentTarget.querySelector('span').classList.add('flip')}else{e.currentTarget.nextElementSibling.classList.remove('show');e.currentTarget.nextElementSibling.classList.add('hide');e.currentTarget.classList.remove('selected');e.currentTarget.querySelector('span').classList.remove('flip')}}



(e) => {
  if (e.key=='Enter') {
    if (!e.currentTarget.classList.contains('selected')) {
      e.currentTarget.nextElementSibling.classList.add('show');
      e.currentTarget.nextElementSibling.classList.remove('hide');
      e.currentTarget.classList.add('selected');
      e.currentTarget.querySelector('span').classList.add('flip');
    } else {
      e.currentTarget.nextElementSibling.classList.remove('show');
      e.currentTarget.nextElementSibling.classList.add('hide');
      e.currentTarget.classList.remove('selected');
      e.currentTarget.querySelector('span').classList.remove('flip');
    }
  }
}

(e)=>{if(e.key=='Enter'){if(!e.currentTarget.classList.contains('selected')){e.currentTarget.nextElementSibling.classList.add('show');e.currentTarget.nextElementSibling.classList.remove('hide');e.currentTarget.classList.add('selected');e.currentTarget.querySelector('span').classList.add('flip')}else{e.currentTarget.nextElementSibling.classList.remove('show');e.currentTarget.nextElementSibling.classList.add('hide');e.currentTarget.classList.remove('selected');e.currentTarget.querySelector('span').classList.remove('flip')}}}

// JUST ONE

(e) => {
  if (!e.currentTarget.classList.contains('selected')) {
    e.currentTarget.nextElementSibling.classList.add('showA');
    e.currentTarget.nextElementSibling.classList.add('showB');
    e.currentTarget.classList.add('selected');
    e.currentTarget.querySelector('span').classList.add('flip');
  } else {
    e.currentTarget.nextElementSibling.classList.remove('showA');
    e.currentTarget.nextElementSibling.classList.remove('showB');
    e.currentTarget.classList.remove('selected');
    e.currentTarget.querySelector('span').classList.remove('flip');
  }
}

(e)=>{if(!e.currentTarget.classList.contains('selected')){e.currentTarget.nextElementSibling.classList.add('showA');e.currentTarget.nextElementSibling.classList.add('showB');e.currentTarget.classList.add('selected');e.currentTarget.querySelector('span').classList.add('flip')}else{e.currentTarget.nextElementSibling.classList.remove('showA');e.currentTarget.nextElementSibling.classList.remove('showB');e.currentTarget.classList.remove('selected');e.currentTarget.querySelector('span').classList.remove('flip')}}

(e) => {
  if (e.key=='Enter') {
    if (!e.currentTarget.classList.contains('selected')) {
      e.currentTarget.nextElementSibling.classList.add('showA');
      e.currentTarget.nextElementSibling.classList.add('showB');
      e.currentTarget.classList.add('selected');
      e.currentTarget.querySelector('span').classList.add('flip');
    } else {
      e.currentTarget.nextElementSibling.classList.remove('showA');
      e.currentTarget.nextElementSibling.classList.remove('showB');
      e.currentTarget.classList.remove('selected');
      e.currentTarget.querySelector('span').classList.remove('flip');
    }
  }
}

(e)=>{if(e.key=='Enter'){if(!e.currentTarget.classList.contains('selected')){e.currentTarget.nextElementSibling.classList.add('showA');e.currentTarget.nextElementSibling.classList.add('showB');e.currentTarget.classList.add('selected');e.currentTarget.querySelector('span').classList.add('flip')}else{e.currentTarget.nextElementSibling.classList.remove('showA');e.currentTarget.nextElementSibling.classList.remove('showB');e.currentTarget.classList.remove('selected');e.currentTarget.querySelector('span').classList.remove('flip')}}}
