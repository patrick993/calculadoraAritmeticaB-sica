let numA = document.getElementById("numA");
let numB = document.getElementById("numB");
let resultado = document.getElementById("resultado")
var html = ''

resultado.onclick = function () {
  momentoActual = new Date()
  hora = momentoActual.getHours()
  minuto = momentoActual.getMinutes()
  segundo = momentoActual.getSeconds()
  horaImprimible = hora + " : " + minuto + " : " + segundo

  var res = parseInt(numA.value) + parseInt(numB.value)
  var res1 = parseInt(numA.value) - parseInt(numB.value)
  var res2 = parseInt(numA.value) * parseInt(numB.value)
  var res3 = parseInt(numA.value) / parseInt(numB.value)

  html += '<br><div class=card>'
  html += '<div class="card-header" name="form_reloj">' + horaImprimible + '</div>'
  html += '<div class="card-body" style="width: 18rem;"><p> Suma: ' + res + '</p> <p> Resta: ' + res1 + '</p> Mult: ' + res2 + '</p> <p>Div: ' + res3 + '</p></div>'
  html += '</div>'

  if (html.length != 0) {
    $('#contRes').html(html)
  }
  
}
function valideKey(evt) {
  var code = (evt.which) ? evt.which : evt.keyCode;

  if (code == 8) {
    return true;
  } else if (code >= 48 && code <= 57) { 
    return true;
  } else { 
    return false;
  }
}





