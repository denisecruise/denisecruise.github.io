$(document).ready(function(){
  // Make footer width equal to body width
  var footerHTML = '<hr class="splhr">' +
    '<tr>' +
    '<td><i class="fab fa-linkedin" aria-hidden="true"></i></td>'+
    '<td><a href="https://www.linkedin.com/in/denise-cruise-55a93621/" style="color:#777">LinkedIn</a></td>' +
    '</tr>' +
    '<tr>' +
    '<td><i class="fas fa-graduation-cap" aria-hidden="true" style="font-size:0.9em"></i></td>' +
    '<td><a href="https://scholar.google.com/citations?user=W6KJb_sAAAAJ&hl=en" style="color:#777">Google Scholar</a></td>' +
    '</tr>' +
    '</table>'+
    '<p class="details" style="color:#777">' +
    'Page layout based on Edward Robertson&apos;s <a href="http://www.responsivegridsystem.com/" style="color:#777"> responsive grid layout.</a>' +
    '</p> ';
  $('.footer').empty();
  $('.footer').append(footerHTML);
  var bodyWidth = $('body').width();
  var bodyHeight = $('body').height();
  var windowHeight = $(window).height();
  $('.footer').width(bodyWidth);
  if (bodyHeight > windowHeight){
    $('.footer').css("position", "relative");
  } else {
    $('.footer').css("position", "absolute");
  }
});

$(window).on('resize', function(){
  // Make footer width equal to body width
  var bodyWidth = $('body').width();
  var bodyHeight = $('body').height();
  var windowHeight = $(window).height();
  $('.footer').width(bodyWidth);
  if (bodyHeight > windowHeight){
    $('.footer').css("position", "relative");
  } else {
    $('.footer').css("position", "absolute");
  }
});
