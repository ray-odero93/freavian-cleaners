$(document).ready(function(){
    $('#show_info1').click(function(){
        $('#overview1').toggle();
        $('#overview2').hide();
        $('#overview3').hide();
        $('#overview4').hide();
        $('#overview5').hide();
    });
    $('#show_info2').click(function(){
        $('#overview2').toggle();
        $('#overview1').hide();
        $('#overview3').hide();
        $('#overview4').hide();
        $('#overview5').hide();
    });
    $('#show_info3').click(function(){
        $('#overview3').toggle();
        $('#overview2').hide();
        $('#overview1').hide();
        $('#overview4').hide();
        $('#overview5').hide();
    });
    $('#show_info4').click(function(){
        $('#overview4').toggle();
        $('#overview2').hide();
        $('#overview3').hide();
        $('#overview1').hide();
        $('#overview5').hide();
    });
    $('#show_info5').click(function(){
        $('#overview5').toggle();
        $('#overview2').hide();
        $('#overview3').hide();
        $('#overview4').hide();
        $('#overview1').hide();
    });
});
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
