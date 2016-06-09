$(document).ready(function() {

$("#calculate").on("click", function() {
  var calc = parseFloat($("#wish").val()) * parseFloat($("#tax").val()) / 100 + parseFloat($("#wish").val());
  if (isNaN(calc)) {
    $("#result").val("Insira um número.");
  } else {
    $("#result").val("R$ " + calc.toFixed(2));
  };
});

});
