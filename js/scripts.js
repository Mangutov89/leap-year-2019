var leapYear = function(year) {
  if(year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    console.log(result);
    $("#result").text(result);
  });
});
