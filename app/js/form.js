(function () {
  var forms = document.querySelectorAll('.form-send');

  if (forms.length === 0) return;

  var formSend = function (form) {
    var xhr = new XMLHttpRequest();
    var url = 'mail/mail.php';

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onload = function () {
      console.log('done')
    }

    xhr.send();
    console.log(form);
  }

  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.currentTarget;
      formSend(form);


    });
  }

})();