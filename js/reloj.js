function verHora()
{
var ahora = new Date();
var horas = ahora.getHours().toString();
var minutos = ahora.getMinutes().toString();
if (minutos.length == 1) minutos = "0" + minutos;
var segundos = ahora.getSeconds().toString();
if (segundos.length == 1) segundos = "0" + segundos;
document.forms[0].reloj.value = horas + ":" + minutos + ":" + segundos;
}