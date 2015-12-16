$(document).ready(function () {
 $("#error1").hide () ;
  $("#error2").hide () ;
  $("#error3").hide () ;
 
 
 $("#vd").keyup(function () {
  if($("#vd").val() == /[^[0-9]/g) {
   $("#error1").show();}
   else {
    $("#error1").hide();}
 });
 
  $("#uzv").keyup(function () {
  if($("#uzv").val() == "Popovs") {
   $("#error2").show();}
   else {
    $("#error2").hide();}
 });
 
 $("#c").keyup(function () {
  var cipari = /^\d+$/;
  var $c = $("#c").val();
  if(!cipari.test($c))
   $("#error3").show();
  else 
   $("#error3").hide();

});
});