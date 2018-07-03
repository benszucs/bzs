$(document).ready(function() {

  $('#project1').click(function() {
    $('#modal-projects').load('../content/portfolio.html').hide().show();
  });

  $('#project2').click(function() {
    $('#modal-projects').load('../content/dsign.html').hide().show();
  });

  $('#project3').click(function() {
    $('#modal-projects').load('../content/conquer.html').hide().show();
  });

  $('#project4').click(function() {
    $('#modal-projects').load('../content/weather.html').hide().show();
  });

  $('#project5').click(function() {
    $('#modal-projects').load('../content/movie.html').hide().show();
  });

  $('#project6').click(function() {
    $('#modal-projects').load('../content/quiz.html').hide().show();
  });

  $('#project7').click(function() {
    $('#modal-projects').load('../content/library.html').hide().show();
  });

  $('#project8').click(function() {
    $('#modal-projects').load('../content/calculator.html').hide().show();
  });

}); //end ready
