function myMenu(){
    document.getElementById('menu-btn').classList.toggle('menu-btn_active');
    var el = document.getElementById('nav-list');
    var display = getComputedStyle(el).display;
    el.style.display = display === 'none' ? 'block' : 'none';
}


function Hide()
{
   var aboutNext = document.getElementById('about-next');
   var aboutBtn = document.getElementById('about-btn');
   if(aboutBtn.value == 'Читать далее')
   {
      aboutBtn.value = 'Закрыть';
      aboutNext.style.display = 'block';
       
   }
   else
   {
      aboutBtn.value = 'Читать далее';
      aboutNext.style.display = 'none';
   }
}


// Get the modal
var overlay = document.getElementsByClassName("overlay")[0];

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn")[0];

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close-popup")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  overlay.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  overlay.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
}
$(function () {
    $('form#form-tour1').on('submit', function (e) {
        e.preventDefault();//отключаем событие при нажатии кнопки
        var forma = $('#form-tour1').serialize();

        $.ajax({
            url: 'send.php',
            type: 'POST',
            data: forma,
            success: function (msg) {
                    $("#zakaz").text("Отправлено");
                    setTimeout(function () {
                    $("#zakaz").text("Отправить");
                }, 3000);
				window.location = "../index.html";
            }
        });
    });
});

$(function () {
    $('#form').on('submit', function (e) {
        e.preventDefault();//отключаем событие при нажатии кнопки
        var forma = $('#form').serialize();

        $.ajax({
            url: 'send.php',
            type: 'POST',
            data: forma,
            success: function (msg) {
                    $("#pismo").text("Отправлено");
                    setTimeout(function () {
                    $("#pismo").text("Отправить");
                }, 3000);
				window.location = "../index.html";
            }
        });
    });
});