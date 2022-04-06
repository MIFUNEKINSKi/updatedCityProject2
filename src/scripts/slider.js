markerGroup.each(function () {
  this.parentNode.appendChild(this);

});

var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function () {
  SPEED = this.value
  output.innerHTML = this.value;
}