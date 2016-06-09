$(document).ready(function() {

var calc = $("#wish").value * $("#tax").value / 100 + $("#wish").value;

$("input").on("change", function() {
  $("#result").value = calc.toFixed(2);
});

});
