$(document).ready(function() {

$("form").on("submit", function() {
  var gross = parseFloat($("#wish").val()) * parseFloat($("#tax").val()) / 100 + parseFloat($("#wish").val());
  var tax = parseFloat($("#wish").val()) * parseFloat($("#tax").val()) / 100;

  if (isNaN(gross)) {
    $("#gross-result").val("Insira um número.");
    $("#tax-result").val("");
  } else {
    $("#gross-result").val("R$ " + gross.toFixed(2));
    $("#tax-result").val("(R$ " + tax.toFixed(2) + " de impostos)");
  };

  return false;
});

});
